import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Scissors,
    ShoppingBag,
    UserCircle,
    Bell,
    LogOut,
    Search
} from 'lucide-react';

const TailorLayout = () => {
    const navigate = useNavigate();

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/tailor/dashboard' },
        { name: 'Orders', icon: Scissors, path: '/tailor/orders' },
        { name: 'Products', icon: ShoppingBag, path: '/tailor/shop' },
        { name: 'Profile', icon: UserCircle, path: '/tailor/profile' },
    ];

    return (
        <div className="flex flex-col h-[100dvh] bg-[#FAFBFF] overflow-hidden font-sans">
            {/* Top Header */}
            <header className="h-20 lg:h-24 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-12 z-[90] shrink-0 sticky top-0">
                {/* Brand Logo */}
                <div className="flex items-center gap-3 lg:gap-4 cursor-pointer" onClick={() => navigate('/tailor/dashboard')}>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200 shrink-0">
                        <Scissors size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-base lg:text-xl tracking-tighter leading-none">TAILORHUB</span>
                        <span className="text-[8px] lg:text-[10px] text-primary-500 font-bold uppercase tracking-[0.2em] mt-0.5">Master Class</span>
                    </div>
                </div>


                {/* Right Side Actions */}
                <div className="flex items-center gap-3 lg:gap-6">
                    <button
                        onClick={() => navigate('/tailor/notifications')}
                        className="p-2.5 bg-slate-50 text-slate-500 rounded-xl relative hover:bg-slate-100 transition-all"
                    >
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 lg:gap-4 pl-3 lg:pl-6 border-l border-slate-100">
                        <div
                            onClick={() => navigate('/tailor/profile')}
                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl border-2 border-white shadow-md overflow-hidden shrink-0 cursor-pointer active:scale-95 transition-all"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=150"
                                alt="Tailor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="hidden sm:flex p-2.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-all" title="Sign Out">
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto w-full scroll-smooth pb-16">
                <div className="p-3 md:p-5 lg:p-6 max-w-[1600px] mx-auto">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 h-16 bg-slate-900 border-t border-white/5 px-2 z-[100] flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            flex-1 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 relative h-full
                            ${isActive ? 'text-primary-400' : 'text-slate-400 hover:text-slate-200'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={22} className={isActive ? 'stroke-[2.5px] scale-110' : 'stroke-[2px]'} />
                                <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                    {item.name}
                                </span>
                                {isActive && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-400 rounded-b-full shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default TailorLayout;
