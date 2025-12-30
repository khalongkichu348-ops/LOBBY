import { useState } from 'react';
import Sidebar from '../Components/admin/Sidebar';
import Statsgrid from '../Components/admin/Statsgrid';
import Recentusers from '../Components/admin/Recentusers';
import Adminlog from '../Components/admin/Adminlog'; // <--- Import the login
import { Bell, Search, Menu } from 'lucide-react';

export default function AdminPage() {
  // 1. Authentication State
  // Default is false (Locked). Change to true to simulate "Remember Me"
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // 2. Gatekeeper Logic
  // If not authenticated, ONLY render the login page.
  if (!isAuthenticated) {
    return <Adminlog onLogin={() => setIsAuthenticated(true)} />;
  }

  // 3. The Dashboard (Only visible if isAuthenticated === true)
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 md:ml-0 p-4 md:p-8 w-full">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            
            {/* MOBILE TOGGLE BUTTON (New) */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 bg-white rounded-lg border border-slate-200 text-slate-600"
            >
              <Menu size={24} />
            </button>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-500 text-sm hidden sm:block">Welcome back, Admin.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             {/* ... (Keep your existing Header code) ... */}
             <div className="hidden md:flex items-center bg-white px-4 py-2.5 rounded-xl border border-slate-200">
              <Search size={18} className="text-slate-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm font-medium" />
            </div>
            <button className="relative p-2.5 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
             <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
              A
            </div>
          </div>
        </header>

        <Statsgrid />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Recentusers />
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl h-fit">
             {/* ... (Keep your existing Sidebar code) ... */}
             <h3 className="font-bold text-lg mb-4">Pending Approvals</h3>
             <p className="text-slate-400 text-sm mb-6">3 Drivers are waiting for verification.</p>
             <div className="space-y-4">
               {/* ... Mock Items ... */}
                <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <span className="font-bold text-sm">Bah Rapbor</span>
                  </div>
                  <button className="text-blue-400 text-xs font-bold hover:text-blue-300">Review</button>
                </div>
             </div>
             <button className="w-full mt-6 bg-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition">
              View All Requests
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}