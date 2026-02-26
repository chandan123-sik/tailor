import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Scissors,
    ShoppingBag,
    User,
    LogOut,
    Menu,
    X,
    Search,
    CheckCircle,
    ChevronRight,
    Bell,
    MapPin,
    Heart,
    Settings,
    HelpCircle,
    Package,
    CreditCard,
    FileText
} from 'lucide-react';

const ConsumerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userLocation, setUserLocation] = useState('190001');
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
        setShowUserMenu(false);
    }, [location.pathname]);

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/consumer/dashboard', badge: null },
        { name: 'Custom Stitching', icon: Scissors, path: '/consumer/stitching', badge: 'New' },
        { name: 'Readymade', icon: ShoppingBag, path: '/consumer/shop', badge: 'Sale' },
        { name: 'My Orders', icon: Package, path: '/consumer/orders', badge: null },
        { name: 'Profile', icon: User, path: '/consumer/profile', badge: null },
    ];

    const notifications = [
        { id: 1, title: 'Order ST-7821 Ready', message: 'Your custom kurti is ready for delivery', time: '2 hours ago', read: false },
        { id: 2, title: 'Payment Successful', message: 'Your payment of ₹1,299 has been processed', time: '5 hours ago', read: true },
        { id: 3, title: 'New Collection', message: 'Check out our latest readymade collection', time: '1 day ago', read: true }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed lg:relative z-[110] h-full bg-white border-r border-slate-200 transition-all duration-300 ease-in-out 
                ${isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0 lg:w-20'}
                `}
            >
                <div className="flex flex-col h-full">
                    {/* Brand Logo */}
                    <div className="h-16 flex items-center px-4 lg:px-6 border-b border-slate-200 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                                <Scissors size={18} className="text-white" />
                            </div>
                            <div className={`hidden lg:block ${!isSidebarOpen ? 'xl:hidden' : ''}`}>
                                <span className="font-bold text-slate-900 text-lg">TailorHub</span>
                                <span className="text-xs text-slate-500 block">Premium</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `
                                    flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
                                    ${isActive
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-600 hover:bg-slate-100'}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon size={20} className="shrink-0" />
                                        <span className={`font-medium text-sm ${!isSidebarOpen ? 'lg:hidden xl:block' : ''}`}>
                                            {item.name}
                                        </span>
                                        {item.badge && (
                                            <span className={`absolute -top-1 -right-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                                                item.badge === 'New' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                            }`}>
                                                {item.badge}
                                            </span>
                                        )}
                                        {isActive && (
                                            <motion.div 
                                                layoutId="activeNav" 
                                                className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" 
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom Section */}
                    <div className="p-3 border-t border-slate-200 space-y-2">
                        <NavLink
                            to="/consumer/help"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
                        >
                            <HelpCircle size={18} />
                            <span className={`font-medium text-sm ${!isSidebarOpen ? 'lg:hidden xl:block' : ''}`}>Help</span>
                        </NavLink>
                        
                        <NavLink
                            to="/consumer/settings"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-all"
                        >
                            <Settings size={18} />
                            <span className={`font-medium text-sm ${!isSidebarOpen ? 'lg:hidden xl:block' : ''}`}>Settings</span>
                        </NavLink>

                        <button className="flex items-center gap-3 px-3 py-2.5 w-full text-red-500 hover:bg-red-50 rounded-lg transition-all text-left">
                            <LogOut size={18} />
                            <span className={`font-medium text-sm ${!isSidebarOpen ? 'lg:hidden xl:block' : ''}`}>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:ml-20 xl:ml-72 min-h-screen">
                {/* Fixed Top Header */}
                <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
                    <div className="flex items-center justify-between px-4 lg:px-6 h-16">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
                            >
                                <Menu size={20} />
                            </button>

                            {/* Search Bar */}
                            <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-4 py-2 w-64 lg:w-96">
                                <Search size={18} className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search for products, services..."
                                    className="bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-500 w-full font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Location Selector */}
                            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all cursor-pointer">
                                <MapPin size={16} className="text-slate-600" />
                                <span className="text-sm font-medium text-slate-700">{userLocation}</span>
                            </div>

                            {/* Notifications */}
                            <div className="relative">
                                <button 
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all relative"
                                >
                                    <Bell size={20} />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                                </button>

                                {/* Notifications Dropdown */}
                                <AnimatePresence>
                                    {showNotifications && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 z-50"
                                        >
                                            <div className="p-4 border-b border-slate-200">
                                                <h3 className="font-semibold text-slate-900">Notifications</h3>
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.map((notification) => (
                                                    <div
                                                        key={notification.id}
                                                        className={`p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-all ${
                                                            !notification.read ? 'bg-blue-50' : ''
                                                        }`}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                                                                notification.read ? 'bg-slate-300' : 'bg-blue-500'
                                                            }`}></div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className={`font-medium text-sm text-slate-900 ${
                                                                    !notification.read ? 'font-semibold' : ''
                                                                }`}>
                                                                    {notification.title}
                                                                </h4>
                                                                <p className="text-xs text-slate-600 mt-1">{notification.message}</p>
                                                                <p className="text-xs text-slate-400 mt-2">{notification.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-3 border-t border-slate-200">
                                                <button className="w-full text-center text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                                    View All Notifications
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* User Profile */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-lg transition-all"
                                >
                                    <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4f85?auto=format&fit=crop&q=80&w=150"
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-medium text-slate-900">John Doe</p>
                                        <p className="text-xs text-slate-500">Premium Member</p>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-400" />
                                </button>

                                {/* User Dropdown */}
                                <AnimatePresence>
                                    {showUserMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 z-50"
                                        >
                                            <div className="p-2">
                                                <NavLink
                                                    to="/consumer/profile"
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                                                >
                                                    <User size={18} />
                                                    <span className="text-sm font-medium">My Profile</span>
                                                </NavLink>
                                                
                                                <NavLink
                                                    to="/consumer/orders"
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                                                >
                                                    <Package size={18} />
                                                    <span className="text-sm font-medium">My Orders</span>
                                                </NavLink>

                                                <NavLink
                                                    to="/consumer/wishlist"
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                                                >
                                                    <Heart size={18} />
                                                    <span className="text-sm font-medium">Wishlist</span>
                                                </NavLink>

                                                <NavLink
                                                    to="/consumer/payments"
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                                                >
                                                    <CreditCard size={18} />
                                                    <span className="text-sm font-medium">Payment Methods</span>
                                                </NavLink>

                                                <div className="border-t border-slate-200 my-2"></div>
                                                
                                                <NavLink
                                                    to="/consumer/settings"
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
                                                >
                                                    <Settings size={18} />
                                                    <span className="text-sm font-medium">Settings</span>
                                                </NavLink>

                                                <button className="flex items-center gap-3 px-3 py-2 w-full text-red-500 hover:bg-red-50 rounded-lg transition-all text-left">
                                                    <LogOut size={18} />
                                                    <span className="text-sm font-medium">Sign Out</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="min-h-[calc(100vh-4rem)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ConsumerLayout;
