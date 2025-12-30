import { Users, Car, TrendingUp, DollarSign } from 'lucide-react';

export default function StatsGrid() {
  const stats = [
    { label: "Total Revenue", value: "₹45,200", change: "+12%", icon: <DollarSign />, color: "bg-green-100 text-green-600" },
    { label: "Active Drivers", value: "124", change: "+5", icon: <Car />, color: "bg-blue-100 text-blue-600" },
    { label: "Total Riders", value: "2,800", change: "+18%", icon: <Users />, color: "bg-purple-100 text-purple-600" },
    { label: "Completed Trips", value: "854", change: "+8%", icon: <TrendingUp />, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
              {stat.icon}
            </div>
            <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
          <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}