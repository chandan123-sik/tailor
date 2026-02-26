import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    Home,
    Scissors,
    ShoppingBag,
    User,
    LogOut,
    Menu,
    X,
    Search,
    MapPin,
    Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsumerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userLocation, setUserLocation] = useState('190001'); // Default Srinagar
    const navigate = useNavigate();
    const location = useLocation();

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    const navItems = [
        { name: 'Home', icon: Home, path: '/consumer' },
        { name: 'Custom Stitching', icon: Scissors, path: '/consumer/stitching' },
        { name: 'Ready Made', icon: ShoppingBag, path: '/consumer/shop' },
        { name: 'My Orders', icon: ShoppingBag, path: '/consumer/dashboard' },
        { name: 'Profile', icon: User, path: '/consumer/profile' },
    ];

    return (
        <div className="flex h-[100dvh] bg-[#FAFBFF] overflow-hidden font-sans">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed lg:relative z-[110] h-full bg-white border-r border-slate-100 transition-all duration-500 ease-elastic 
                ${isSidebarOpen ? 'translate-x-0 w-[280px]' : '-translate-x-full lg:translate-x-0 lg:w-24 xl:w-72'}
                `}
            >
                <div className="flex flex-col h-full relative">
                    {/* Brand Logo */}
                    <div className="h-20 lg:h-24 flex items-center px-6 lg:px-8 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200">
                                <Scissors size={22} className="lg:w-6 lg:h-6" />
                            </div>
                            <div className={`flex flex-col ${!isSidebarOpen && 'lg:hidden xl:flex'}`}>
                                <span className="font-black text-slate-800 text-lg lg:text-xl tracking-tighter leading-none italic">TAILORHUB</span>
                                <span className="text-[9px] text-primary-500 font-black uppercase tracking-[0.2em] mt-1">Consumer</span>
                            </div>
                        </div>
                    </div>

                    {/* Location Display */}
                    <div className="px-4 pb-4 border-b border-slate-50">
                        <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                            <MapPin size={16} className="text-primary-600" />
                            <div className={`flex-1 ${!isSidebarOpen && 'lg:hidden xl:block'}`}>
                                <p className="text-[9px] font-black text-primary-800 uppercase tracking-widest">Delivering to</p>
                                <p className="text-xs font-black text-primary-600">{userLocation}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-hide">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `
                                    flex items-center gap-4 py-3.5 px-5 rounded-2xl transition-all duration-300 group relative
                                    ${isActive
                                        ? 'bg-slate-900 text-white shadow-xl'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className={`font-black text-[11px] uppercase tracking-widest italic ${!isSidebarOpen && 'lg:hidden xl:block'}`}>
                                            {item.name}
                                        </span>
                                        {isActive && (
                                            <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-primary-500 rounded-r-full" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom Logout */}
                    <div className="p-4 border-t border-slate-50">
                        <button className="flex items-center gap-4 py-4 px-5 w-full text-rose-500 hover:bg-rose-50 rounded-2xl transition-all group">
                            <LogOut size={20} className="shrink-0 transition-transform group-hover:-translate-x-1" />
                            <span className={`font-black text-[11px] uppercase tracking-widest italic ${!isSidebarOpen && 'lg:hidden xl:block'}`}>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
                {/* Fixed Top Header */}
                <header className="h-20 lg:h-24 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-6 lg:px-12 z-[90] shrink-0">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2.5 bg-slate-50 text-slate-500 rounded-xl lg:hidden active:scale-90 transition-transform"
                        >
                            <Menu size={20} />
                        </button>

                        {/* Search - Hidden on tiny screens */}
                        <div className="hidden sm:flex items-center bg-slate-100/50 rounded-2xl px-5 py-3 w-40 md:w-64 xl:w-80 border border-slate-100">
                            <Search size={16} className="text-slate-400 shrink-0" />
                            <input
                                type="text"
                                placeholder="Search for designs..."
                                className="bg-transparent border-none outline-none text-[10px] ml-3 w-full placeholder-slate-400 font-black uppercase tracking-widest"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                        {/* Location Selector */}
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-100 transition-all">
                            <MapPin size={14} className="text-slate-500" />
                            <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">{userLocation}</span>
                        </div>

                        {/* Notifications */}
                        <button className="p-3 bg-slate-50 text-slate-500 rounded-xl relative hover:bg-slate-100 transition-all">
                            <Bell size={20} />
                            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
                        </button>

                        {/* Profile Brief */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="hidden md:block text-right">
                                <p className="text-[11px] font-black text-slate-900 group-hover:text-primary-600 transition-colors italic uppercase leading-none">Customer</p>
                                <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest mt-1">Premium</p>
                            </div>
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl border-2 border-white shadow-lg overflow-hidden shrink-0 group-active:scale-95 transition-all bg-primary-100 flex items-center justify-center">
                                <User size={20} className="text-primary-600" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Viewport */}
                <main className="flex-1 overflow-y-auto w-full scroll-smooth">
                    <div className="p-5 md:p-8 lg:p-12 max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ConsumerLayout;
