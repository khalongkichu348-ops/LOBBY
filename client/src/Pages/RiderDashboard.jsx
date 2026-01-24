import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Clock, LogOut, History } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RiderDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate('/auth'); return; }

    const fetchHistory = async () => {
      try {
        // Fetch using the user's ID
        const res = await fetch(`${API_BASE_URL}/rider/history?riderId=${user.id || user._id}`);
        const data = await res.json();
        if (data.success) {
          setHistory(data.history);
        }
      } catch (err) {
        console.error("Failed to load history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user, navigate]);

  const handleLogout = () => { logout(); navigate('/'); };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              {user.fullName.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{user.fullName}</h1>
              <p className="text-slate-500 text-sm">Rider Account • {user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition flex items-center gap-2 text-sm font-bold">
            <LogOut size={20}/> Logout
          </button>
        </div>

        {/* Recent Contacts Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 min-h-100">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
              <History size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Recently Contacted Drivers</h2>
          </div>

          {loading ? (
            <div className="text-center py-10 text-slate-400">Loading history...</div>
          ) : history.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 mb-4">You haven't contacted any drivers yet.</p>
              <button onClick={() => navigate('/search')} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition">
                Find a Ride
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {history.map((driver) => (
                <div key={driver._id} className="p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition bg-slate-50 hover:bg-white group">
                  <div className="flex items-center gap-4">
                    {/* Driver Pic */}
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      {driver.profilePic ? (
                        <img src={driver.profilePic} alt="" className="w-full h-full object-cover"/>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-slate-500">{driver.fullName[0]}</div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{driver.fullName}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{driver.vehicle}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={10}/> {new Date(driver.lastCalled).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <a href={`tel:${driver.phone}`} className="p-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-200 hover:scale-105 transition">
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}