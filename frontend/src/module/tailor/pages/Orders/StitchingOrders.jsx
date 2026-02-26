import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Scissors,
    Layers,
    Shirt,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Clock,
    Camera,
    MessageSquare,
    Check,
    X,
    Filter,
    ClipboardList,
    TrendingUp,
    Zap
} from 'lucide-react';

const stitchingSteps = [
    { id: 'cutting', label: 'Cutting', icon: Scissors },
    { id: 'stitching', label: 'Stitching', icon: Layers },
    { id: 'hemming', label: 'Hemming', icon: Shirt },
    { id: 'ironing', label: 'Ironing', icon: Zap },
    { id: 'ready', label: 'Ready', icon: CheckCircle2 },
];

const mockOrders = [
    {
        id: 'ORD-1024',
        customer: 'Amit Patel',
        type: 'Bespoke Suit',
        fabric: 'Midnight Blue Cashmere',
        deadline: 'Tomorrow, 4PM',
        price: '₹2,850',
        status: 'stitching',
        measurements: { chest: '42"', waist: '36"', shoulder: '18"', sleeve: '25"', length: '30"' },
        isNew: true,
        designNotes: 'Slim fit cut, peak lapels, double vents on jacket.'
    },
    {
        id: 'ORD-0998',
        customer: 'Sara Jones',
        type: 'Salwar Suits',
        fabric: 'Pure Banarasi Silk',
        deadline: '28 Feb, 2026',
        price: '₹1,500',
        status: 'cutting',
        measurements: { bust: '36"', waist: '30"', hip: '38"', length: '42"', sleeve: '16"' },
        isNew: false,
        designNotes: 'V-neck design with heavy embroidery on borders.'
    }
];

const StitchingOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [activeTab, setActiveTab] = useState('active');
    const [pendingOrders, setPendingOrders] = useState([
        { id: 'REQ-5521', customer: 'Rahul Verma', type: 'Formal Shirt', deadline: '05 Mar', price: '₹950' },
        { id: 'REQ-5510', customer: 'Priya Sharma', type: 'Ladies Salwar', deadline: '02 Mar', price: '₹650' }
    ]);

    return (
        <div className="space-y-4 animate-in fade-in duration-700 pb-10 font-sans max-w-7xl mx-auto px-1">
            {/* 1. Header & Navigation (Tightened) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
                <div className="border-l-4 border-primary-600 pl-3">
                    <h1 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Workshop <span className="text-primary-600">Reel</span>
                    </h1>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">Real-time production management</p>
                </div>

                <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'active' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Active Queue
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'completed' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Dispatched
                    </button>
                </div>
            </div>

            {/* 2. Compact Pending Requests (Horizontal) */}
            <AnimatePresence>
                {pendingOrders.length > 0 && activeTab === 'active' && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Incoming Requests</h2>
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{pendingOrders.length} New</span>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                            {pendingOrders.map(order => (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="min-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm space-y-3 shrink-0"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                                                <Scissors size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black text-primary-600 uppercase">#{order.id}</p>
                                                <h4 className="text-[11px] font-black text-slate-800 uppercase line-clamp-1">{order.type}</h4>
                                            </div>
                                        </div>
                                        <p className="text-[11px] font-black text-slate-900">{order.price}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-black text-[9px] uppercase tracking-widest shadow-md shadow-primary-500/10 active:scale-95 transition-all">Accept</button>
                                        <button className="px-3 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all">X</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* 3. Main Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Orders List Container */}
                <div className={`lg:col-span-12 ${selectedOrder ? 'xl:col-span-7' : 'xl:col-span-12'} space-y-3 transition-all duration-500`}>
                    {mockOrders.map((order) => (
                        <motion.div
                            key={order.id}
                            onClick={() => setSelectedOrder(order)}
                            whileTap={{ scale: 0.99 }}
                            className={`bg-white p-4 lg:p-5 rounded-xl border transition-all duration-500 cursor-pointer shadow-sm relative overflow-hidden group ${selectedOrder?.id === order.id ? 'border-primary-500 ring-4 ring-primary-50/50 bg-primary-50/5' : 'border-slate-200 hover:border-primary-300'
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0 border border-slate-100 group-hover:bg-primary-50 transition-colors">
                                        <Shirt size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] font-black text-primary-600 uppercase tracking-widest">#{order.id}</span>
                                            {order.isNew && (
                                                <span className="bg-rose-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest animate-pulse">Priority</span>
                                            )}
                                        </div>
                                        <h3 className="text-sm lg:text-base font-black text-slate-800 uppercase tracking-tight">{order.type}</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client: <span className="text-slate-900">{order.customer}</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full sm:w-auto sm:block text-right">
                                    <p className="text-lg lg:text-xl font-black text-slate-900 tracking-tighter">{order.price}</p>
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-rose-50 text-rose-600 rounded-md mt-1 border border-rose-100 justify-end">
                                        <Clock size={10} />
                                        <span className="text-[8px] font-bold uppercase">{order.deadline}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Slim Step Indicator */}
                            <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar pb-1">
                                {stitchingSteps.map((step, idx) => {
                                    const stepIdx = stitchingSteps.findIndex(s => s.id === order.status);
                                    const isCompleted = idx < stepIdx;
                                    const isActive = idx === stepIdx;
                                    return (
                                        <div key={step.id} className="flex flex-col items-center gap-2 flex-1 min-w-[60px]">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all border-2 border-white shadow-sm ${isCompleted ? 'bg-emerald-500 text-white' : isActive ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-400'
                                                }`}>
                                                <step.icon size={12} />
                                            </div>
                                            <span className={`text-[7px] font-black uppercase tracking-widest leading-none ${isActive ? 'text-primary-600' : 'text-slate-400'}`}>
                                                {step.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full-Screen Depth Detail Dossier */}
                <AnimatePresence>
                    {selectedOrder && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="xl:col-span-5 h-fit"
                        >
                            <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden sticky top-4 mb-10">
                                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-3.5 bg-primary-600 rounded-full"></div>
                                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Operation Dossier</h4>
                                    </div>
                                    <button onClick={() => setSelectedOrder(null)} className="p-1 text-slate-400 hover:text-rose-500 transition-colors">
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="p-5 space-y-6">
                                    {/* Measurements Grid */}
                                    <div className="space-y-3">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Anatomy Details</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {Object.entries(selectedOrder.measurements).map(([key, val]) => (
                                                <div key={key} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                                    <p className="text-[7px] text-slate-400 font-bold uppercase tracking-tight">{key}</p>
                                                    <p className="text-sm font-black text-slate-900 uppercase mt-0.5">{val}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Design Notes */}
                                    <div className="p-4 bg-primary-50/30 rounded-xl border border-primary-100 space-y-3">
                                        <div>
                                            <p className="text-[9px] font-black text-primary-600 uppercase tracking-widest">Textile Integrity</p>
                                            <p className="text-[11px] font-black text-slate-800 uppercase mt-0.5">{selectedOrder.fabric}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-primary-600 uppercase tracking-widest">Directives</p>
                                            <p className="text-[11px] text-slate-600 font-bold leading-relaxed mt-1 italic">{selectedOrder.designNotes}</p>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl text-slate-500 hover:text-primary-600 transition-all gap-1.5 border border-slate-100 text-[9px] font-black uppercase">
                                            <Camera size={18} /> Proof
                                        </button>
                                        <button className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl text-slate-500 hover:text-blue-600 transition-all gap-1.5 border border-slate-100 text-[9px] font-black uppercase">
                                            <MessageSquare size={18} /> Chat
                                        </button>
                                    </div>

                                    <button className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                        <CheckCircle2 size={16} /> Complete Step
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StitchingOrders;
