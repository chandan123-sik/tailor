import React, { useState, useEffect } from 'react';
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
    Zap,
    AlertCircle,
    Truck,
    Wallet,
    BellRing,
    Ban,
    ArrowRightCircle,
    Image as ImageIcon
} from 'lucide-react';

const stitchingSteps = [
    { id: 'fabric', label: 'Fabric Rx', icon: Truck },
    { id: 'cutting', label: 'Cutting', icon: Scissors },
    { id: 'stitching', label: 'Stitching', icon: Layers },
    { id: 'hemming', label: 'Hemming', icon: Shirt },
    { id: 'ironing', label: 'Ironing', icon: Zap },
    { id: 'ready', label: 'Ready', icon: CheckCircle2 },
];

const StitchingOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [activeTab, setActiveTab] = useState('active');
    const [showSiren, setShowSiren] = useState(true);
    const [showPenaltyWarning, setShowPenaltyWarning] = useState(false);

    const [pendingRequests, setPendingRequests] = useState([
        {
            id: 'REQ-5582',
            customer: 'Rahul Verma',
            type: 'Formal Shirt',
            deadline: '05 Mar',
            price: '₹950',
            tailorPayout: '₹760',
            fabric: 'Cotton Poplin',
            measurements: { neck: '16"', chest: '40"', waist: '34"', sleeve: '24"' }
        },
        {
            id: 'REQ-5510',
            customer: 'Priya Sharma',
            type: 'Ladies Salwar',
            deadline: '02 Mar',
            price: '₹1,250',
            tailorPayout: '₹1,000',
            fabric: 'Chanderi Silk',
            measurements: { bust: '36"', waist: '30"', hip: '38"', length: '40"' }
        },
        {
            id: 'REQ-5590',
            customer: 'Karan Singh',
            type: 'Casual Trouser',
            deadline: '08 Mar',
            price: '₹1,100',
            tailorPayout: '₹880',
            fabric: 'Stretch Twill',
            measurements: { waist: '34"', length: '42"', hip: '40"', rise: '11"' }
        }
    ]);

    const [activeOrders, setActiveOrders] = useState([
        {
            id: 'ORD-1024',
            customer: 'Amit Patel',
            type: 'Executive Suit',
            fabric: 'Midnight Blue Cashmere',
            deadline: 'Tomorrow, 4PM',
            price: '₹3,550',
            tailorPayout: '₹2,840',
            status: 'stitching',
            measurements: { chest: '42"', waist: '36"', shoulder: '18"', sleeve: '25"', length: '30"' },
            designNotes: 'Slim fit cut, peak lapels, double vents on jacket.',
            proofUploaded: false
        }
    ]);

    const [dispatchedOrders, setDispatchedOrders] = useState([
        {
            id: 'ORD-0985',
            customer: 'Sameer Khan',
            type: 'Silk Sherwani',
            fabric: 'Banarasi Silk',
            price: '₹5,200',
            tailorPayout: '₹4,160',
            dispatchDate: '26 Feb',
            status: 'completed'
        }
    ]);

    // Siren Alert Simulation
    useEffect(() => {
        if (pendingRequests.length > 0) {
            const timer = setInterval(() => {
                // Visual siren effect toggle logic can go here if needed
            }, 500);
            return () => clearInterval(timer);
        }
    }, [pendingRequests]);

    const handleAccept = (order) => {
        const newOrder = { ...order, status: 'fabric', id: order.id.replace('REQ-', 'ORD-') };
        setActiveOrders([newOrder, ...activeOrders]);
        setPendingRequests(pendingRequests.filter(r => r.id !== order.id));
        setShowSiren(false);
    };

    const handleReject = () => {
        setShowPenaltyWarning(true);
    };

    const updateStatus = (orderId) => {
        setActiveOrders(prev => prev.map(order => {
            if (order.id === orderId) {
                const currentIdx = stitchingSteps.findIndex(s => s.id === order.status);
                if (currentIdx < stitchingSteps.length - 1) {
                    return { ...order, status: stitchingSteps[currentIdx + 1].id };
                }
            }
            return order;
        }));
    };

    const handleProofUpload = (orderId) => {
        setActiveOrders(prev => prev.map(order =>
            order.id === orderId ? { ...order, proofUploaded: true } : order
        ));
        alert("Work Proof Uploaded Successfully! Admin and Customer notified.");
    };

    return (
        <div className="space-y-4 animate-in fade-in duration-700 pb-10 font-sans max-w-7xl mx-auto px-1 relative">

            {/* Penalty Warning Modal */}
            <AnimatePresence>
                {showPenaltyWarning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl space-y-6 text-center"
                        >
                            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500 border-4 border-rose-100">
                                <Ban size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Warning: High Penalty</h3>
                                <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-wider px-4">
                                    Rejecting an order after browsing details results in a <span className="text-rose-600">₹200 Penalty</span> and potential ban for 24 hours.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => setShowPenaltyWarning(false)}
                                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
                                >
                                    Go Back to Order
                                </button>
                                <button
                                    onClick={() => {
                                        setPendingRequests(prev => prev.slice(1));
                                        setShowPenaltyWarning(false);
                                    }}
                                    className="w-full py-4 text-rose-500 font-black text-[10px] uppercase tracking-widest hover:bg-rose-50 rounded-2xl transition-all"
                                >
                                    Confirm Rejection (Penalty)
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 1. Header & Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 px-1">
                <div className="border-l-4 border-slate-900 pl-3">
                    <h1 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Workshop <span className="text-primary-600 underline decoration-4 underline-offset-4 decoration-primary-600/20">Operations</span>
                    </h1>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        System Online • Real-time Monitoring
                    </p>
                </div>

                <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-200 min-w-[320px]">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'active' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        <Clock size={12} />
                        Active Pipeline
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === 'completed' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        <CheckCircle2 size={12} />
                        Dispatched
                    </button>
                </div>
            </div>

            {/* 2. Siren Notification Banner */}
            <AnimatePresence>
                {pendingRequests.length > 0 && activeTab === 'active' && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-rose-600 p-4 rounded-2xl shadow-xl shadow-rose-200 flex items-center justify-between group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white animate-bounce">
                                <BellRing size={24} />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-black uppercase tracking-tight leading-none">New Incoming Order!</h3>
                                <p className="text-rose-100 text-[9px] font-bold uppercase tracking-[0.2em] mt-1.5">Emergency Siren Alert Active</p>
                            </div>
                        </div>
                        <button className="bg-white text-rose-600 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all relative z-10">
                            Review Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {pendingRequests.length > 0 && activeTab === 'active' && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-2 pt-2">
                            <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em] flex items-center gap-2">
                                <AlertCircle size={14} className="text-rose-500" />
                                Pending Decisions
                            </h2>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-6 px-1 no-scrollbar scroll-smooth">
                            {pendingRequests.map(order => (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="min-w-[280px] bg-white border border-slate-100 rounded-3xl p-5 shadow-lg shadow-slate-200/30 space-y-3 shrink-0 hover:border-primary-400 transition-all cursor-pointer group"
                                    onClick={() => setSelectedOrder({ ...order, isPending: true })}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-600 border border-slate-100 group-hover:bg-primary-50 transition-colors shadow-sm">
                                                <Shirt size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest leading-none">#{order.id}</p>
                                                <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-tight leading-none mt-1">{order.type}</h4>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-black text-slate-900 tracking-tighter leading-none">{order.price}</p>
                                            <div className="flex flex-col items-end">
                                                <span className="text-[10px] font-black text-emerald-600 tracking-tight">{order.tailorPayout}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2.5 bg-slate-50/80 rounded-xl flex items-center justify-center gap-2 border border-slate-100/50">
                                            <Clock size={10} className="text-slate-400" />
                                            <span className="text-[8px] font-black uppercase text-slate-500 tracking-wide">{order.deadline}</span>
                                        </div>
                                        <div className="p-2.5 bg-slate-50/80 rounded-xl flex items-center justify-center gap-2 border border-slate-100/50">
                                            <Layers size={10} className="text-slate-400" />
                                            <span className="text-[8px] font-black uppercase text-slate-500 tracking-tighter truncate max-w-[70px]">{order.fabric}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-1">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleAccept(order); }}
                                            className="flex-[4] bg-slate-900 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-md active:scale-95 transition-all text-center"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleReject(); }}
                                            className="flex-1 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 rounded-xl flex items-center justify-center transition-all border border-slate-100"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* 3. Production Queue & History */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                    <TrendingUp size={16} className="text-emerald-500" />
                    <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">
                        {activeTab === 'active' ? 'Live Production Queue' : 'Dispatch History'}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeTab === 'active' ? (
                        activeOrders.map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={() => setSelectedOrder(order)}
                                className={`bg-white p-5 rounded-[2rem] border transition-all duration-300 cursor-pointer shadow-sm relative group overflow-hidden ${selectedOrder?.id === order.id ? 'border-primary-500 ring-4 ring-primary-50/50' : 'border-slate-100 hover:border-primary-200'}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 border border-slate-100 group-hover:bg-primary-50 transition-all">
                                            <Scissors size={24} />
                                        </div>
                                        <div className="space-y-0.5">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] font-black text-primary-600 uppercase tracking-widest">#{order.id}</span>
                                                <span className="bg-emerald-50 text-emerald-600 text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-widest border border-emerald-100 italic">Processing</span>
                                            </div>
                                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none pt-0.5">{order.type}</h3>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest pt-1">Client: <span className="text-slate-900 font-extrabold">{order.customer}</span></p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-slate-900 tracking-tighter leading-none">{order.tailorPayout}</p>
                                        <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Earnt</span>
                                    </div>
                                </div>

                                {/* Step Progress Bar */}
                                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
                                    {stitchingSteps.map((step, idx) => {
                                        const stepIdx = stitchingSteps.findIndex(s => s.id === order.status);
                                        const isCompleted = idx < stepIdx;
                                        const isActive = idx === stepIdx;
                                        return (
                                            <div key={step.id} className="flex flex-col items-center gap-2 flex-1 min-w-[40px]">
                                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all border-2 border-white shadow-sm relative ${isCompleted ? 'bg-emerald-500 text-white' : isActive ? 'bg-slate-900 text-white outline outline-[3px] outline-slate-100' : 'bg-slate-100 text-slate-400'}`}>
                                                    <step.icon size={12} />
                                                </div>
                                                <span className={`text-[7px] font-black uppercase tracking-tight leading-none ${isActive ? 'text-slate-900' : 'text-slate-400 opacity-60'}`}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        dispatchedOrders.map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm relative group"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                                            <CheckCircle2 size={22} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase">#{order.id}</p>
                                            <h4 className="text-sm font-black text-slate-900 uppercase">{order.type}</h4>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-base font-black text-emerald-600 leading-none">{order.tailorPayout}</p>
                                        <p className="text-[8px] font-black text-slate-400 uppercase">Settled</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                                    <div className="flex items-center gap-2">
                                        <Truck size={14} className="text-slate-400" />
                                        <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Handed to Courier</span>
                                    </div>
                                    <span className="text-[9px] font-black uppercase text-emerald-500 tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">{order.dispatchDate}</span>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Detail Overlay / Panel */}
            <AnimatePresence>
                {selectedOrder && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-[150] border-l border-slate-200 overflow-y-auto"
                    >
                        <div className="p-6 space-y-8 pb-20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Order <span className="text-primary-600">Dossier</span></h2>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Full Specifications & Directives</p>
                                </div>
                                <button onClick={() => setSelectedOrder(null)} className="p-3 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Measurements Section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                                        <ClipboardList size={16} />
                                    </div>
                                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Exact Measurements</h4>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {Object.entries(selectedOrder.measurements).map(([key, val]) => (
                                        <div key={key} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary-100 transition-all">
                                            <p className="text-[8px] text-slate-400 font-black uppercase tracking-tight">{key}</p>
                                            <p className="text-lg font-black text-slate-900 mt-1">{val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Design & Fabric */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-primary-50/20 rounded-2xl border border-primary-100 space-y-2">
                                    <p className="text-[9px] font-black text-primary-600 uppercase tracking-widest flex items-center gap-2">
                                        <Layers size={12} /> Fabric Selection
                                    </p>
                                    <p className="text-sm font-black text-slate-800 uppercase leading-snug">{selectedOrder.fabric}</p>
                                </div>
                                <div className="p-5 bg-emerald-50/20 rounded-2xl border border-emerald-100 space-y-2">
                                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                                        <Wallet size={12} /> Final Payout
                                    </p>
                                    <p className="text-base font-black text-slate-900 uppercase leading-none">{selectedOrder.tailorPayout}</p>
                                    <p className="text-[8px] font-bold text-emerald-600/60 uppercase">Post-Completion Credit</p>
                                </div>
                            </div>

                            {/* Status Specific Actions */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                                        <ImageIcon size={16} />
                                    </div>
                                    <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Quality Verification</h4>
                                </div>

                                {!selectedOrder.isPending && (
                                    <div className="space-y-4">
                                        <div
                                            onClick={() => handleProofUpload(selectedOrder.id)}
                                            className="border-2 border-dashed border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center gap-3 text-slate-300 hover:border-primary-400 hover:bg-primary-50/10 transition-all cursor-pointer group"
                                        >
                                            <Camera size={32} className="group-hover:scale-110 transition-transform text-slate-400" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Upload Work Progress</p>
                                        </div>

                                        {selectedOrder.status === 'ready' ? (
                                            <div className="p-5 bg-emerald-500 rounded-2xl text-white text-center space-y-3">
                                                <h4 className="text-sm font-black uppercase tracking-tight">System Ready</h4>
                                                <p className="text-[9px] font-bold uppercase opacity-80 leading-relaxed">Quality Approved • Notify Delivery Partner now</p>
                                                <button className="w-full bg-white text-emerald-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                                                    Dispatch to Courier
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => { updateStatus(selectedOrder.id); setSelectedOrder(null); }}
                                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                                            >
                                                Move to Next Stage: <ArrowRightCircle size={18} />
                                            </button>
                                        )}
                                    </div>
                                )}

                                {selectedOrder.isPending && (
                                    <div className="flex flex-col gap-3">
                                        <button
                                            onClick={() => handleAccept(selectedOrder)}
                                            className="w-full bg-primary-600 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-primary-700 transition-all"
                                        >
                                            Accept Order
                                        </button>
                                        <button
                                            onClick={handleReject}
                                            className="w-full py-5 text-rose-500 font-black text-[11px] uppercase tracking-widest hover:bg-rose-50 rounded-2xl transition-all"
                                        >
                                            Reject Order
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Instructions</p>
                                <p className="text-[11px] text-slate-600 font-bold leading-relaxed italic line-clamp-4">
                                    "Ensure all seams are double-stitched for durability. The client has requested a specific thread-matching for the lapel detail. Check fabric alignment before cutting."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StitchingOrders;
