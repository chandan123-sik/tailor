import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Scissors,
    Clock,
    CheckCircle2,
    IndianRupee,
    TrendingUp,
    Star,
    ChevronRight,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    Wallet,
    MessageCircle,
    ChevronLeft,
    Zap,
    Sparkles
} from 'lucide-react';

const Dashboard = () => {
    const [reportPeriod, setReportPeriod] = useState('weekly');
    const [activeOrderCategory, setActiveOrderCategory] = useState('new');
    const [showAllPayments, setShowAllPayments] = useState(false);
    const [activeReviewIndex, setActiveReviewIndex] = useState(0);
    const scrollRef = useRef(null);

    const orderGroups = {
        new: [
            { id: 'ORD-9021', type: 'Formal Shirt', customer: 'Suresh Kumar', status: 'Pending Approval', price: '₹850', date: 'Just now' },
            { id: 'ORD-8992', type: 'Executive Suit', customer: 'Rahul Sharma', status: 'New Request', price: '₹4,500', date: '2 hours ago' },
        ],
        'in-progress': [
            { id: 'ORD-8821', type: 'Bespoke Suit', customer: 'Amit Patel', status: 'Stitching', price: '₹2,850', date: '2 days ago' },
            { id: 'ORD-8776', type: 'Cotton Kurti', customer: 'Priya Verma', status: 'Cutting', price: '₹1,200', date: '1 day ago' },
        ],
        completed: [
            { id: 'ORD-8612', type: 'Formal Trousers', customer: 'Anisha Roy', status: 'Ready for Pickup', price: '₹900', date: '3 hours ago' },
            { id: 'ORD-8554', type: 'Linen Shirt', customer: 'Vikram Singh', status: 'Delivered', price: '₹750', date: 'Yesterday' },
        ]
    };

    const earningsData = {
        daily: {
            total: '₹2,450', growth: '+5.2%', history: [
                { date: '25 Feb', amount: '₹1,200', status: 'Uncleared' },
                { date: '24 Feb', amount: '₹1,250', status: 'Cleared' },
            ]
        },
        weekly: {
            total: '₹18,240', growth: '+12.5%', history: [
                { date: 'Week 8', amount: '₹18,240', status: 'In Process' },
                { date: 'Week 7', amount: '₹14,500', status: 'Cleared' },
            ]
        },
        monthly: {
            total: '₹72,840', growth: '+18.1%', history: [
                { date: 'February', amount: '₹72,840', status: 'In Process' },
                { date: 'January', amount: '₹65,200', status: 'Cleared' },
            ]
        }
    };

    const reviews = [
        { id: 182, rating: 5, text: "The craftsmanship is absolute perfection. Best master tailor in the hub. Highly recommended for formal wear.", client: "Client #182", time: "2d ago" },
        { id: 282, rating: 5, text: "Amazing fit and timely delivery. The attention to detail in the stitching is top notch.", client: "Client #282", time: "4d ago" },
        { id: 382, rating: 4, text: "Very professional service. The suit fits perfectly. Will definitely visit again.", client: "Client #382", time: "1w ago" },
    ];

    const currentHistory = earningsData[reportPeriod].history;
    const itemsToShow = showAllPayments ? currentHistory : currentHistory.slice(0, 2);

    const handleScroll = () => {
        if (scrollRef.current) {
            const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
            setActiveReviewIndex(index);
        }
    };

    return (
        <div className="space-y-4 animate-in fade-in duration-700 max-w-7xl mx-auto pb-8 font-sans px-1">
            {/* 1. Restored Attractive Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-primary-50 text-primary-600 text-[9px] font-black rounded-full flex items-center gap-1 uppercase tracking-widest border border-primary-100">
                            <Sparkles size={10} /> Live Working
                        </div>
                    </div>
                    <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter flex items-center gap-2">
                        Welcome back, <span className="text-primary-600">Master Iqbal</span>
                    </h1>
                    <p className="text-slate-500 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider">
                        Your workshop is performing <span className="text-emerald-500 underline decoration-2 underline-offset-2">15% better</span> than last week.
                    </p>
                </div>
            </div>

            {/* 2. RECENT ASSIGNMENTS (Tightened) */}
            <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 border-l-4 border-primary-600 pl-2">
                    <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">Operational Workflow</h2>
                </div>

                <div className="w-full bg-slate-50 p-0.5 rounded-lg border border-slate-200 flex">
                    {['new', 'in-progress', 'completed'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveOrderCategory(cat)}
                            className={`flex-1 py-1.5 rounded-md text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${activeOrderCategory === cat
                                ? 'bg-white text-slate-900 shadow-sm border border-slate-200 border-b-2 border-b-primary-500'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <AnimatePresence mode="wait">
                        {orderGroups[activeOrderCategory].slice(0, 3).map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-primary-400 transition-all relative"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all">
                                        <Scissors size={12} />
                                    </div>
                                    <span className="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-0.5 rounded tracking-widest">#{order.id}</span>
                                </div>
                                <div className="space-y-0 mb-3">
                                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-tight leading-tight group-hover:text-primary-700 transition-colors">{order.type}</h4>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{order.customer}</p>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                                    <p className="text-[11px] font-black text-slate-900 tracking-tighter">{order.price}</p>
                                    <div className="p-1 rounded-full bg-slate-50 text-slate-300 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all">
                                        <ChevronRight size={12} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* 3. ORDER REPORTS (Tightened) */}
            <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border-l-4 border-slate-900 pl-2">
                        <h2 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">Workshop Analytics</h2>
                    </div>
                    <div className="flex bg-white p-0.5 rounded-lg shadow-sm border border-slate-200 shrink-0">
                        {['daily', 'weekly', 'monthly'].map((period) => (
                            <button
                                key={period}
                                onClick={() => setReportPeriod(period)}
                                className={`px-3 py-1.5 rounded-md text-[8px] font-black uppercase tracking-wider transition-all ${reportPeriod === period ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400'
                                    }`}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {[
                        { label: 'Net Revenue', value: earningsData[reportPeriod].total, growth: earningsData[reportPeriod].growth, icon: IndianRupee, color: 'emerald', showBadge: false },
                        { label: 'Active Orders', value: orderGroups['in-progress'].length, growth: 'Running', icon: Scissors, color: 'blue', showBadge: true },
                        { label: 'Artisan Score', value: '4.9/5.0', growth: 'Elite', icon: Star, color: 'amber', showBadge: false },
                        { label: 'Efficiency', value: '94%', growth: '+2.4%', icon: Zap, color: 'indigo', showBadge: false }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-400 transition-all group">
                            <div className="flex justify-between items-start">
                                <div className={`p-1 rounded-md bg-${stat.color}-50 text-${stat.color}-500 shrink-0 group-hover:scale-105 transition-transform`}>
                                    <stat.icon size={14} />
                                </div>
                                {stat.showBadge && (
                                    <span className="text-[7px] font-black text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded uppercase tracking-widest">
                                        {stat.growth}
                                    </span>
                                )}
                            </div>
                            <div className="mt-2.5">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.1em] leading-none mb-0.5">{stat.label}</p>
                                <h3 className="text-sm font-black text-slate-800 tracking-tighter truncate">{stat.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Secondary Row: Payments & Feedback (Compact) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Earnings History */}
                <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between px-0.5">
                        <h2 className="text-[9px] font-black text-slate-800 uppercase tracking-[0.15em]">Earnings History</h2>
                        <button
                            onClick={() => setShowAllPayments(!showAllPayments)}
                            className="text-[8px] font-black text-primary-600 uppercase tracking-widest hover:underline"
                        >
                            {showAllPayments ? 'Collapse' : 'View All'}
                        </button>
                    </div>
                    <div className="space-y-1">
                        {itemsToShow.map((log, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-slate-50/50 rounded-md border border-slate-100 group transition-all hover:bg-white hover:border-primary-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-slate-300 shadow-sm group-hover:text-primary-600 transition-colors shrink-0">
                                        <Calendar size={12} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-700 leading-none uppercase tracking-tight">{log.date}</p>
                                        <p className={`text-[7px] font-black uppercase tracking-[0.05em] mt-1 ${log.status === 'Cleared' ? 'text-emerald-600' : 'text-amber-600'}`}>{log.status}</p>
                                    </div>
                                </div>
                                <p className="text-[10px] font-black text-slate-800 tracking-tighter">{log.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="lg:col-span-2 bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm space-y-3 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2 px-0.5">
                        <h2 className="text-[9px] font-black text-slate-800 uppercase tracking-[0.15em]">Customer Testimonials</h2>
                        <MessageCircle size={14} className="text-primary-600 opacity-60" />
                    </div>

                    <div className="relative pt-0.5">
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-1"
                        >
                            {reviews.map((review) => (
                                <div key={review.id} className="min-w-full snap-center bg-slate-50/50 p-3.5 rounded-lg border border-slate-200 transition-all flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} size={9} className={`${s <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-slate-600 leading-relaxed font-bold italic tracking-tight">
                                            "{review.text}"
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between pt-2.5 border-t border-slate-200/50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-[8px] font-black text-primary-700 uppercase shrink-0 border border-white">
                                                {review.client.charAt(review.client.length - 1)}
                                            </div>
                                            <span className="text-[8px] text-slate-500 font-black uppercase tracking-wider">{review.client}</span>
                                        </div>
                                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{review.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-1.5 mt-2">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        scrollRef.current.scrollTo({
                                            left: i * (scrollRef.current?.offsetWidth || 0),
                                            behavior: 'smooth'
                                        });
                                        setActiveReviewIndex(i);
                                    }}
                                    className={`h-0.5 rounded-full transition-all duration-300 ${activeReviewIndex === i ? 'bg-primary-600 w-5' : 'bg-slate-200 w-1'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
