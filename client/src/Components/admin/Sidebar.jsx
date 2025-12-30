import { LayoutDashboard, Users, Car, Settings, LogOut, FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Added props: isOpen, onClose
export default function Sidebar({ isOpen, onClose }) {
  const menu = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <Users size={20} />, label: "Riders" },
    { icon: <Car size={20} />, label: "Drivers" },
    { icon: <FileText size={20} />, label: "Trips" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Overlay (Darkens background when menu is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}

      {/* The Sidebar Itself */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex md:flex-col
      `}>
        
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-8 border-b border-slate-800">
          <span className="text-2xl font-black tracking-tighter">
            LOBBY<span className="text-blue-500">.</span>
          </span>
          {/* Close Button (Mobile Only) */}
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {menu.map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium ${
                item.active 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition">
            <LogOut size={20} />
            Exit Admin
          </Link>
        </div>
      </aside>
    </>
  );
}