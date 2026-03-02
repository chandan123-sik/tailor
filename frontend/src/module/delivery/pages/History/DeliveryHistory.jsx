import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    Calendar,
    Truck,
    Package,
    ChevronRight,
    IndianRupee,
    Clock,
    Camera,
    ShieldCheck,
    X,
    Wallet
} from 'lucide-react';

const DeliveryHistory = () => {
    const [selectedProof, setSelectedProof] = useState(null);

    const historicalTasks = [
        { id: 'TK-9901', type: 'Fabric Pickup', customer: 'Rohan Sharma', date: '21 Feb 2026', time: '11:30 AM', earnings: '₹120', paymentType: 'Platform Payout', status: 'Completed', proof: 'fabric_proof' },
        { id: 'TK-9882', type: 'Final Delivery', customer: 'Priya Verma', date: '20 Feb 2026', time: '04:15 PM', earnings: '₹150', paymentType: 'Platform Payout', status: 'Completed', proof: 'delivery_proof' },
        { id: 'EC-5521', type: 'Ready-made Delivery', customer: 'Amit Kumar', date: '19 Feb 2026', time: '02:00 PM', earnings: '₹100', paymentType: 'C.O.D. Collected', status: 'Completed', proof: 'delivery_proof' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-2">
            {/* Header */}
            <div>
                <div className="flex items-center gap-3 text-slate-600 mb-1">
                    <div className="h-px w-8 bg-slate-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Historical Logs</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                    Transit <span className="text-slate-400">Archives</span>
                </h1>
            </div>

            {/* Earnings Summary Mini Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] flex items-center justify-between overflow-hidden relative group">
                <div className="space-y-1 relative z-10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Total Admin Payouts (Feb)</p>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter">₹3,450</h3>
                </div>
                <div className="w-11 h-11 bg-slate-600 rounded-[0.8rem] flex items-center justify-center text-white relative z-10">
                    <IndianRupee size={22} strokeWidth={2.5} />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            {/* Title for list */}
            <div className="flex items-center justify-between px-2 pt-2">
                <h2 className="text-[11px] font-black text-slate-800 tracking-widest uppercase">Verified Deliveries</h2>
                <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-100 px-2 py-1 rounded-md">
                    <ShieldCheck size={12} />
                    <span className="text-[9px] font-black uppercase tracking-wider">Proof Secured</span>
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {historicalTasks.map((task, idx) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] flex flex-col group hover:border-slate-100 transition-all"
                    >
                        <div className="flex items-start gap-4 mb-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${task.type === 'Fabric Pickup' ? 'bg-slate-50 text-slate-600' : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                {task.type === 'Fabric Pickup' ? <Truck size={22} /> : <Package size={22} />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-1 gap-2">
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight truncate">#{task.id}</p>
                                    <span className={`text-[8px] font-black px-2 py-1 rounded max-w-max uppercase tracking-widest shrink-0 ${task.paymentType === 'Platform Payout' ? 'bg-slate-50 text-slate-600' : 'bg-amber-50 text-amber-600'
                                        }`}>{task.paymentType}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest truncate max-w-[120px]">To: {task.customer}</p>
                                    <span className="text-sm font-black text-slate-900">{task.earnings}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Metadata & Proof Action */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3 opacity-80">
                                <div className="flex items-center gap-1">
                                    <Calendar size={10} className="text-slate-600" />
                                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{task.date}</span>
                                </div>
                                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                <div className="flex items-center gap-1">
                                    <Clock size={10} className="text-slate-600" />
                                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{task.time}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedProof(task)}
                                className="flex items-center gap-1.5 text-[9px] font-black text-slate-600 bg-slate-50/50 hover:bg-slate-100 px-3 py-1.5 rounded-lg uppercase tracking-widest transition-colors active:scale-95"
                            >
                                <Camera size={12} />
                                View Proof
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty Footnote */}
            <p className="text-center text-[11px] font-bold text-slate-500 pt-6 pb-2">Records older than 90 days are archived externally.</p>


            {/* Photo Proof Modal */}
            <AnimatePresence>
                {selectedProof && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setSelectedProof(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] p-6 w-full max-w-sm shadow-2xl relative overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedProof(null)}
                                className="absolute top-5 right-5 w-8 h-8 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 transition-colors z-20"
                            >
                                <X size={16} />
                            </button>

                            <div className="flex items-center gap-3 mb-5 mt-1 relative z-10">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1 capitalize">Delivery Proof</h3>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Task #{selectedProof.id}</p>
                                </div>
                            </div>

                            {/* Mock Image Area */}
                            <div className="aspect-[4/3] bg-slate-100 rounded-[1.5rem] border border-slate-200 flex flex-col items-center justify-center mb-5 relative overflow-hidden group">
                                <img
                                    src={selectedProof.type === 'Fabric Pickup'
                                        ? "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop" // Fabric bundle
                                        : "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=600&auto=format&fit=crop" // Packed parcel
                                    }
                                    alt="Delivery Proof"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 animate-pulse"></div>
                                    <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">Live Capture</span>
                                </div>

                                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1.5 rounded-md text-[8px] font-black tracking-widest text-white uppercase flex flex-col items-end gap-0.5">
                                    <span>{selectedProof.date}</span>
                                    <span className="text-slate-300 opacity-80">{selectedProof.time}</span>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Customer</span>
                                    <span className="text-[11px] font-black text-slate-800 capitalize">{selectedProof.customer}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Task Type</span>
                                    <span className="text-[11px] font-black text-slate-800 capitalize">{selectedProof.type}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-200/60">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                        {selectedProof.paymentType === 'C.O.D. Collected' ? 'Cash Collected' : 'Admin Payout'}
                                    </span>
                                    <span className={`text-[12px] font-black ${selectedProof.paymentType === 'C.O.D. Collected' ? 'text-amber-600' : 'text-emerald-800'}`}>
                                        {selectedProof.earnings}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-full mix-blend-multiply -z-0"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DeliveryHistory;


