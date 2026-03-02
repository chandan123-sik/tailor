import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Truck,
    Package,
    IndianRupee,
    ArrowUpRight,
    MapPin,
    Clock,
    ChevronRight,
    TrendingUp,
    CheckCircle2,
    X,
    Navigation
} from 'lucide-react';

const DeliveryDashboard = () => {
    const [showMapModal, setShowMapModal] = useState(false);
    // Mock Data for Demo
    const stats = [
        { label: 'Active Tasks', value: '02', icon: Truck, color: 'bg-emerald-800', trend: 'In Progress' },
        { label: 'Today Earnings', value: '₹1,240', icon: IndianRupee, color: 'bg-emerald-800', trend: '+12.5%' },
        { label: 'Total Pickups', value: '08', icon: Package, color: 'bg-slate-900', trend: 'Completed' },
    ];

    const currentTask = {
        id: 'TK-9921',
        type: 'Fabric Pickup',
        customer: 'Elena Gilbert',
        address: 'Mystic Manor, Lane 4, Delhi',
        status: 'On the Way',
        time: '12:30 PM - 01:00 PM',
        urgent: true
    };

    const upcomingTasks = [
        { id: 'TK-8842', type: 'Final Delivery', customer: 'Damon Salvatore', address: 'Vampire Creek, Plot 12, Delhi', time: '02:00 PM - 03:00 PM' }
    ];

    const recentActivity = [
        { id: 1, title: 'Delivered to Tailor', subtitle: 'Royal Workshop - Order #9921', time: '2 hours ago', status: 'Success' },
        { id: 2, title: 'Picked Up Fabric', subtitle: 'Anjali Sharma - Order #8812', time: '4 hours ago', status: 'Success' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-8">
            {/* Greeting Header */}
            <div>
                <div className="flex items-center gap-3 text-emerald-800 mb-1">
                    <div className="h-px w-8 bg-emerald-200"></div>
                    <span className="text-[11px] font-black tracking-[0.2em] opacity-80 uppercase">Partner Command</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tighter">
                    Ready to <span className="text-slate-400">Move</span>, <br />
                    Partner Vikram?
                </h1>
            </div>

            {/* Quick Pulse Stats */}
            <div className="grid grid-cols-1">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-4 lg:p-5 rounded-[1.25rem] border border-slate-200 min-w-[calc(50%-6px)] shadow-md flex flex-col justify-between shrink-0"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <p className="text-[11px] font-bold text-[#3B4254] tracking-wide leading-tight w-min capitalize">{stat.label}</p>
                                <span className={`text-[9px] ml-auto font-black leading-none px-2 py-1.5 rounded-md w-max capitalize ${idx === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <h3 className="text-2xl lg:text-[28px] font-black text-slate-900 tracking-tight">{stat.value}</h3>
                                <div className={`w-10 h-10 rounded-[1rem] flex items-center justify-center ${idx === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                                    <stat.icon size={20} strokeWidth={2.5} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Active Task Hero Card */}
            <div className="relative group w-[calc(100%+2rem)] -mx-4 md:w-full md:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-[1.25rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#142921] rounded-[1.25rem] overflow-hidden text-white shadow-xl mx-1 border border-white/5">
                    <div className="p-5 lg:p-6">
                        <div className="flex justify-between items-start mb-5">
                            <div className="space-y-1.5">
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                                    <div className="w-1.5 h-1.5 bg-emerald-800 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-bold tracking-wider text-[#e2e4e9] capitalize">Active Dispatch</span>
                                </div>
                                <h2 className="text-2xl font-black tracking-tight text-white mt-1 capitalize">{currentTask.type}</h2>
                            </div>
                            <div className="w-11 h-11 bg-white/5 backdrop-blur-md rounded-[0.8rem] flex items-center justify-center border border-white/10 mt-1">
                                <Truck size={22} className="text-white/80" />
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col mt-2">
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-800/30 bg-transparent z-10"></div>
                                    <div className="w-px h-full bg-emerald-800/30 border-dashed border-l border-emerald-800/40"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-800 z-10 border-2 border-emerald-800/30"></div>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 capitalize tracking-wider leading-none mb-1.5">Location</p>
                                        <p className="text-[14px] font-bold text-white leading-snug capitalize">{currentTask.address}</p>
                                    </div>
                                    <div className="pb-0 mb-3">
                                        <p className="text-[10px] font-bold text-slate-400 capitalize tracking-wider leading-none mb-1.5">Customer</p>
                                        <p className="text-[14px] font-bold text-white tracking-wide capitalize">{currentTask.customer}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-0">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-emerald-800/80" />
                                    <span className="text-[11px] font-bold tracking-wider text-slate-300 capitalize">{currentTask.time}</span>
                                </div>
                                <button
                                    onClick={() => setShowMapModal(true)}
                                    className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold text-[12px] capitalize hover:scale-105 transition-all"
                                >
                                    Open Map
                                </button>
                            </div>
                        </div>
                        {/* Background Abstract */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 opacity-10 blur-3xl -tr-slate-y-10 tr-slate-x-10"></div>
                    </div>
                </div>
            </div>

            {/* Today's upcoming Tasks */}
            <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-lg font-black text-slate-900 tracking-tight capitalize">Upcoming <span className="text-slate-400">Tasks</span></h2>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1 -mx-1">
                    {upcomingTasks.map((task) => (
                        <div key={task.id} className="min-w-[280px] flex-1 bg-white py-4 px-4 rounded-[1rem] border-2 border-slate-100 shadow-sm flex items-center justify-between group hover:border-slate-200 active:bg-slate-50/50 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-slate-50 rounded-[0.8rem] flex items-center justify-center text-slate-500 group-active:text-slate-600 group-active:bg-slate-100/50 shrink-0">
                                    <MapPin size={20} className="stroke-[2.5px]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[14px] font-black text-slate-800 tracking-tight leading-none mb-1.5 capitalize">{task.type}</p>
                                    <p className="text-[11px] text-slate-500 font-bold tracking-wide truncate max-w-[140px] capitalize">{task.address}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end shrink-0 pl-3 border-l border-slate-100">
                                <span className="text-[10px] font-bold text-slate-500 tracking-wide flex items-center gap-1 mb-1 capitalize">
                                    <Clock size={12} />
                                    {task.time.split(' - ')[0].split(' ')[0]}
                                </span>
                                <span className="text-[9px] font-bold text-slate-500 tracking-wide capitalize">{task.time.split(' - ')[0].split(' ')[1]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity Stream */}
            <div className="space-y-3 pt-3">
                <div className="flex items-center justify-between px-1 pb-1">
                    <h2 className="text-lg font-black text-slate-900 tracking-tight capitalize">Recent Activity <span className="text-slate-400">History</span></h2>
                </div>
                <div className="space-y-3">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="group bg-white p-4 rounded-[1rem] border-2 border-slate-100 hover:border-emerald-100 shadow-sm flex items-center gap-3 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-slate-50 border-2 border-slate-100 group-hover:border-emerald-100 group-hover:bg-emerald-100 rounded-full flex items-center justify-center text-slate-400 group-hover:text-emerald-800 transition-all shrink-0">
                                <CheckCircle2 size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[14px] font-black text-slate-700 tracking-tight leading-none mb-1.5 capitalize">{activity.title}</p>
                                <p className="text-[11px] text-slate-500 font-bold tracking-wide capitalize">{activity.subtitle}</p>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 tracking-wide whitespace-nowrap pt-1 capitalize">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dummy Map Modal */}
            <AnimatePresence>
                {showMapModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center bg-slate-900/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-white rounded-t-[2rem] sm:rounded-[2rem] w-full max-w-md overflow-hidden relative shadow-2xl"
                        >
                            {/* Dummy Map Background */}
                            <div className="relative h-[280px] bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                                {/* Route Line Path Mapping Simulation */}
                                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M 25,75 L 75,25" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="6,4" />
                                </svg>

                                {/* Start Marker */}
                                <div className="absolute left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-4 h-4 rounded-full bg-[#1A1F36] border-[2.5px] border-white shadow-sm"></div>
                                </div>

                                {/* End Marker */}
                                <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full absolute opacity-60"></div>
                                    <div className="w-5 h-5 rounded-full bg-emerald-600 border-[3px] border-white shadow-sm relative z-10 flex items-center justify-center overflow-hidden">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                </div>

                                {/* Floating Header Options */}
                                <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
                                    <div className="bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest leading-none mt-0.5">On the way</span>
                                    </div>
                                    <button
                                        onClick={() => setShowMapModal(false)}
                                        className="w-10 h-10 bg-white rounded-[1rem] shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Trip Info Area */}
                            <div className="p-6 pt-7 bg-white relative">
                                <div className="absolute -top-7 right-6">
                                    <button className="w-14 h-14 bg-[#1A1F36] text-white rounded-full flex items-center justify-center shadow-xl shadow-slate-900/10 hover:scale-105 active:scale-95 transition-all">
                                        <Navigation size={22} fill="currentColor" strokeWidth={1.5} className="ml-[-2px] mt-[1px]" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Destination</p>
                                        <h3 className="text-[19px] font-black text-slate-900 leading-tight tracking-tight">{currentTask.address}</h3>
                                        <p className="text-[13px] font-bold text-slate-500 mt-1">{currentTask.customer}</p>
                                    </div>

                                    <div className="flex items-center gap-8 pt-5 border-t border-slate-100 mt-5">
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Est. Arrival</p>
                                            <p className="text-xl font-black text-emerald-600 tracking-tight">5 Min</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Distance</p>
                                            <p className="text-xl font-black text-slate-900 tracking-tight">1.2 km</p>
                                        </div>
                                    </div>

                                    <button onClick={() => setShowMapModal(false)} className="w-full mt-6 py-4 bg-transparent text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-full border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all outline-none">
                                        Close Map
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default DeliveryDashboard;

