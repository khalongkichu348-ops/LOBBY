import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import X for close button
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
            LOBBY<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link to="/search" className="hover:text-black transition">Find a Ride</Link>
            <Link to="/contact" className="hover:text-black transition">Support</Link>
            <Link to="/drive" className="hover:text-black transition">For Drivers</Link>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/auth" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition">
              Log In
            </Link>
            <Link to="/search" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-black transition shadow-lg shadow-gray-200">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col space-y-6 text-lg font-medium text-slate-900">
            <Link to="/search" onClick={() => setIsMenuOpen(false)} className="border-b border-slate-100 pb-4">Find a Ride</Link>
            <Link to="/drive" onClick={() => setIsMenuOpen(false)} className="border-b border-slate-100 pb-4">For Drivers</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="border-b border-slate-100 pb-4">Support</Link>
            <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="border-b border-slate-100 pb-4 text-blue-600">Log In / Sign Up</Link>
            
            <Link to="/search" onClick={() => setIsMenuOpen(false)} className="bg-slate-900 text-white py-4 rounded-xl text-center font-bold shadow-xl">
              Book a Ride Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}