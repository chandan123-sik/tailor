import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Bell, ShoppingBag, User, Shirt, Store, ClipboardList, UserCircle, Search, Maximize, MapPin, ChevronDown } from 'lucide-react';

const CustomerLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { icon: Shirt, label: 'Services', path: '/customer/services' },
        { icon: Store, label: 'Store', path: '/customer/store' },
        { icon: ClipboardList, label: 'Orders', path: '/customer/orders' },
        { icon: UserCircle, label: 'Profile', path: '/customer/profile' },
    ];

    const isCustomHeaderPage = location.pathname === '/customer/store' || location.pathname === '/customer/profile' || location.pathname === '/customer/orders';

    return (
        <div className="min-h-screen bg-white pb-24 font-sans selection:bg-purple-600 selection:text-white">
            {/* Sticky Light Purple Header - Hide on Store/Profile since they have custom ones */}
            {!isCustomHeaderPage && (
                <header className="bg-[#E9D5FF] text-slate-900 px-6 pt-3 pb-6 rounded-b-[3rem] shadow-sm sticky top-0 z-50 border-b border-purple-200/30 backdrop-blur-md">
                    {/* Greeting Row */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-purple-700/80 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Good Morning,</p>
                            <h1 className="text-xl font-black flex items-center gap-2 tracking-tighter">
                                John <span className="text-2xl animate-bounce-slow">👋</span>
                            </h1>
                        </div>
                        <div className="flex gap-2.5">
                            <button className="relative p-2 bg-white/40 backdrop-blur-md rounded-2xl hover:bg-white transition-all shadow-sm border border-white/40">
                                <Bell size={20} className="text-purple-900" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#E9D5FF] animate-pulse"></span>
                            </button>
                            <button className="p-2 bg-white/40 backdrop-blur-md rounded-2xl hover:bg-white transition-all shadow-sm border border-white/40">
                                <ShoppingBag size={20} className="text-purple-900" />
                            </button>
                            <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-white shadow-lg active:scale-95 transition-transform cursor-pointer">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Search Bar Row (Image 1 Style) */}
                    <div className="mb-4">
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-3 shadow-inner border border-white/50 group focus-within:bg-white transition-all">
                            <Search className="text-purple-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search tailored styles, fabrics..."
                                className="flex-1 bg-transparent outline-none text-slate-700 font-bold text-xs placeholder:text-slate-400"
                            />
                            <button className="bg-slate-900/5 p-1.5 rounded-lg">
                                <Maximize size={16} className="text-slate-700" />
                            </button>
                        </div>
                    </div>

                    {/* Location Row (Image 1 Style) */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-6 h-6 bg-white/50 rounded-lg flex items-center justify-center">
                                <MapPin size={12} className="text-purple-700" />
                            </div>
                            <span className="font-black text-[10px] tracking-tight text-slate-700 group-hover:text-purple-900 transition-colors uppercase">Srinagar, Kashmir - 190001</span>
                        </div>
                        <button className="text-purple-700 font-black text-[9px] uppercase tracking-widest hover:underline flex items-center gap-1">
                            Change <ChevronDown size={12} strokeWidth={3} />
                        </button>
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Premium Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-purple-100 px-8 py-5 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-50">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${isActive ? 'scale-110' : 'opacity-40 hover:opacity-70'}`}
                        >
                            <div className={`relative ${isActive ? 'text-purple-600' : 'text-slate-400'}`}>
                                <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-sm' : ''} />
                                {isActive && (
                                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                                )}
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isActive ? 'text-purple-600' : 'text-slate-400'}`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default CustomerLayout;
