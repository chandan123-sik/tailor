import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Calendar,
    Truck,
    Package,
    ChevronRight,
    IndianRupee,
    Clock
} from 'lucide-react';

const DeliveryHistory = () => {
    const historicalTasks = [
        { id: 'TK-9901', type: 'Fabric Pickup', customer: 'Rohan Sharma', date: '21 Feb 2026', time: '11:30 AM', earnings: '₹120', status: 'Completed' },
        { id: 'TK-9882', type: 'Final Delivery', customer: 'Priya Verma', date: '20 Feb 2026', time: '04:15 PM', earnings: '₹150', status: 'Completed' },
        { id: 'TK-9870', type: 'Fabric Pickup', customer: 'Anisha Singh', date: '20 Feb 2026', time: '09:00 AM', earnings: '₹120', status: 'Completed' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <div className="flex items-center gap-3 text-indigo-600 mb-1">
                    <div className="h-px w-8 bg-indigo-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Historical Logs</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                    Transit <span className="text-slate-400">Archives</span>
                </h1>
            </div>

            {/* Earnings Summary Mini Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between overflow-hidden relative group">
                <div className="space-y-1 relative z-10">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Earnings (Feb)</p>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">₹3,450</h3>
                </div>
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 relative z-10">
                    <IndianRupee size={28} />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl -tr-slate-y-10 tr-slate-x-10 group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {historicalTasks.map((task, idx) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-indigo-100 transition-all cursor-pointer"
                    >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${task.type === 'Fabric Pickup' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'
                            }`}>
                            {task.type === 'Fabric Pickup' ? <Truck size={22} /> : <Package size={22} />}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-black text-slate-900 uppercase tracking-tight italic">#{task.id}</p>
                                <span className="text-sm font-black text-slate-900 italic">{task.earnings}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">To: {task.customer}</p>
                            <div className="flex items-center gap-3 mt-3 opacity-60">
                                <div className="flex items-center gap-1">
                                    <Calendar size={10} className="text-slate-400" />
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{task.date}</span>
                                </div>
                                <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                <div className="flex items-center gap-1">
                                    <Clock size={10} className="text-slate-400" />
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{task.time}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty Footnote */}
            <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] py-10">Records older than 90 days are archived externally</p>
        </div>
    );
};

export default DeliveryHistory;
