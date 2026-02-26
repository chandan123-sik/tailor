import React, { useState } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    LayoutDashboard, 
    Truck, 
    History, 
    User, 
    Bell, 
    Power,
    MapPin,
    Navigation2
} from 'lucide-react';

const DeliveryLayout = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', icon: LayoutDashboard, path: '/delivery/dashboard' },
        { name: 'Tasks', icon: Truck, path: '/delivery/tasks' },
        { name: 'History', icon: History, path: '/delivery/history' },
        { name: 'Profile', icon: User, path: '/delivery/profile' },
    ];

    return (
        <div className="min-h-[100dvh] bg-[#FAFAFB] flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-700">
            {/* Top Fixed Header */}
            <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-6 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                        <Navigation2 size={20} strokeWidth={2.5} className="rotate-45" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-slate-900 text-lg tracking-tighter leading-none">SwiftLog</span>
                        <span className="text-[9px] text-indigo-500 font-bold uppercase tracking-widest mt-0.5">Logistics</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Availability Toggle */}
                    <button 
                        onClick={() => setIsOnline(!isOnline)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 ${
                            isOnline 
                            ? 'bg-emerald-50 border-emerald-100 text-emerald-600 shadow-sm' 
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                    >
                        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                            {isOnline ? 'Online' : 'Offline'}
                        </span>
                        <Power size={12} strokeWidth={3} className={isOnline ? 'text-emerald-500' : 'text-slate-300'} />
                    </button>

                    <button className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                        <Bell size={20} />
                    </button>
                </div>
            </header>

            {/* Main Dynamic Viewport */}
            <main className="flex-1 pb-24 md:pb-12 pt-6 px-4 md:px-10 max-w-lg mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Bottom Mobile Navigation */}
            <nav className="fixed bottom-6 left-6 right-6 h-20 bg-slate-900/95 backdrop-blur-xl rounded-[2.5rem] shadow-3xl flex items-center justify-around px-4 z-50 border border-white/10 md:max-w-md md:mx-auto">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="relative group flex flex-col items-center justify-center"
                        >
                            <div className={`p-3 rounded-2xl transition-all duration-300 ${
                                isActive 
                                ? 'bg-indigo-500 text-white -translate-y-4 shadow-xl shadow-indigo-500/40 scale-110' 
                                : 'text-slate-400 hover:text-slate-200'
                            }`}>
                                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            {isActive && (
                                <motion.span 
                                    layoutId="navLabel"
                                    className="absolute -bottom-1 text-[9px] font-black text-indigo-400 uppercase tracking-widest"
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
};

export default DeliveryLayout;
