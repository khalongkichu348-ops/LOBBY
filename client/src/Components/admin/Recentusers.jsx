import { MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';

export default function RecentUsers() {
  // Mock Data
  const users = [
    { name: "Bah John", role: "Driver", status: "Pending", date: "Today, 10:23 AM" },
    { name: "Kong Mary", role: "Rider", status: "Active", date: "Yesterday" },
    { name: "Amit S.", role: "Driver", status: "Verified", date: "2 days ago" },
    { name: "Rahul D.", role: "Driver", status: "Rejected", date: "3 days ago" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-slate-900">Recent Registrations</h3>
        <button className="text-sm text-blue-600 font-bold hover:underline">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                <td className="p-4 font-bold text-slate-900">{user.name}</td>
                <td className="p-4 text-sm text-slate-500">{user.role}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.status === 'Verified' || user.status === 'Active' ? 'bg-green-100 text-green-700' :
                    user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-400">{user.date}</td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}