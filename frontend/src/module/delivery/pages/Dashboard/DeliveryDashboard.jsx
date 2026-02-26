import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    Package,
    IndianRupee,
    ArrowUpRight,
    MapPin,
    Clock,
    ChevronRight,
    TrendingUp,
    CheckCircle2
} from 'lucide-react';

const DeliveryDashboard = () => {
    // Mock Data for Demo
    const stats = [
        { label: 'Active Task', value: '01', icon: Truck, color: 'bg-indigo-600', trend: 'In Progress' },
        { label: 'Today Earnings', value: '₹1,240', icon: IndianRupee, color: 'bg-emerald-600', trend: '+12.5%' },
        { label: 'Total Pickups', value: '08', icon: Package, color: 'bg-slate-900', trend: 'Completed' },
    ];

    const currentTask = {
        id: 'DL-4482',
        type: 'Fabric Pickup',
        customer: 'Siddharth Singh',
        address: 'Sector 42, Golf Course Road, Gurugram',
        status: 'On the Way',
        time: '12:30 PM - 01:00 PM',
        urgent: true
    };

    const recentActivity = [
        { id: 1, title: 'Delivered to Tailor', subtitle: 'Royal Workshop - Order #9921', time: '2 hours ago', status: 'Success' },
        { id: 2, title: 'Picked Up Fabric', subtitle: 'Anjali Sharma - Order #8812', time: '4 hours ago', status: 'Success' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Greeting Header */}
            <div>
                <div className="flex items-center gap-3 text-indigo-600 mb-1">
                    <div className="h-px w-8 bg-indigo-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Partner Command</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tighter">
                    Ready to <span className="italic text-slate-400">Move</span>, <br />
                    Partner Vikram?
                </h1>
            </div>

            {/* Quick Pulse Stats */}
            <div className="grid grid-cols-1 gap-4">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm min-w-[200px] flex-1 shrink-0"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                    <stat.icon size={22} />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                                    {stat.trend}
                                </span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter">{stat.value}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Active Task Hero Card */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-primary-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-[2.5rem] p-8 overflow-hidden text-white shadow-2xl">
                    <div className="flex justify-between items-start mb-10">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></div>
                                <span className="text-[9px] font-black uppercase tracking-widest">Active Dispatch</span>
                            </div>
                            <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">{currentTask.type}</h2>
                        </div>
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                            <Truck size={28} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full border-2 border-indigo-400 bg-slate-900 z-10"></div>
                                <div className="w-0.5 h-full bg-indigo-400/30 border-dashed border-l"></div>
                                <div className="w-4 h-4 rounded-full bg-indigo-400 z-10"></div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Location</p>
                                    <p className="text-sm font-bold text-white line-clamp-1">{currentTask.address}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Customer</p>
                                    <p className="text-sm font-bold text-white uppercase italic">{currentTask.customer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-indigo-400" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{currentTask.time}</span>
                            </div>
                            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                                Open Map
                            </button>
                        </div>
                    </div>

                    {/* Background Abstract */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 opacity-20 blur-3xl -tr-slate-y-10 tr-slate-x-10"></div>
                </div>
            </div>

            {/* Performance Mini Chart / Analytics Snapshot */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Velocity Analytics</h4>
                            <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter mt-1">Efficiency Index</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-indigo-600 tracking-tighter italic">98.4%</span>
                    </div>
                </div>
                <div className="flex items-end gap-2 h-20">
                    {[40, 60, 45, 90, 65, 80, 55, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-slate-50 rounded-t-xl relative overflow-hidden group/bar cursor-pointer h-full">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                className="absolute bottom-0 w-full bg-indigo-200 group-hover/bar:bg-indigo-500 transition-all duration-300 rounded-t-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity Stream */}
            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Logistics <span className="text-slate-400">Stream</span></h2>
                    <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">View All</button>
                </div>
                <div className="space-y-4">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-indigo-100 transition-all">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                                <CheckCircle2 size={22} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{activity.title}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{activity.subtitle}</p>
                            </div>
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboard;
