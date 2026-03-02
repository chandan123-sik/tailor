import React from 'react';
import { Search, Filter, ChevronRight, Package, MapPin, Ruler, Headphones, UserPlus, LogOut, Camera, Calendar, ArrowRight, ShoppingBag } from 'lucide-react';

const Orders = () => {
    const orders = [
        {
            id: 'ORD-9821-2024',
            item: 'LINEN SHIRT...',
            price: '₹1250',
            status: 'DELIVERED',
            date: '12 OCT 2024',
            type: 'STANDARD',
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=300&h=300&auto=format&fit=crop'
        },
        {
            id: 'ORD-9932-2024',
            item: 'TROUSER...',
            price: '₹350',
            status: 'IN PROGRESS',
            date: '20 FEB 2026',
            type: 'EXPRESS',
            image: 'https://images.unsplash.com/photo-1594932224010-75f43db98205?q=80&w=300&h=300&auto=format&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* 1. Light Purple Header (Matching Store style) */}
            <header className="bg-[#E9D5FF] text-slate-900 pt-10 pb-8 px-6 rounded-b-[2rem] shadow-md border-b border-purple-200/40">
                <div className="flex justify-between items-center mb-1">
                    <h1 className="text-3xl font-black tracking-tighter uppercase italic">My Orders</h1>
                    <ShoppingBag className="text-purple-700 opacity-30" size={24} />
                </div>
                <p className="text-purple-800/60 text-[10px] font-bold uppercase tracking-widest">Track and manage your requests</p>
            </header>

            {/* 2. Search & Filter Area (Below Header) */}
            <div className="px-6 pt-6">
                <div className="flex gap-2.5 mb-6">
                    <div className="flex-1 bg-white rounded-xl px-4 py-2 flex items-center gap-3 border border-slate-100 shadow-sm">
                        <Search className="text-slate-300" size={16} />
                        <input type="text" placeholder="Search orders..." className="bg-transparent outline-none flex-1 text-xs font-bold text-slate-700 placeholder:text-slate-300" />
                    </div>
                    <button className="bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm text-slate-600 flex items-center gap-2 active:scale-95 transition-all">
                        <Filter size={16} strokeWidth={2.5} className="text-slate-400" />
                        <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">All Status</span>
                    </button>
                </div>

                {/* 3. Order List */}
                <div className="flex flex-col gap-4 pb-24">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl p-4 border border-slate-200/50 shadow-sm group active:scale-[0.99] transition-all hover:bg-slate-50/30">
                            <div className="flex gap-4">
                                {/* Thumbnail */}
                                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-inner flex-shrink-0 border border-slate-50">
                                    <img src={order.image} alt={order.item} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>

                                {/* Info side */}
                                <div className="flex-1 flex flex-col justify-between py-0.5">
                                    <div className="flex justify-between items-start">
                                        <div className={`px-2.5 py-0.5 rounded text-[8px] font-black tracking-widest ${order.status === 'DELIVERED' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {order.status}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[8px] font-black text-slate-300 tracking-tighter leading-none">{order.id}</p>
                                            <p className="text-base font-black text-slate-900 mt-1 italic leading-none">₹{order.price.replace('₹', '')}</p>
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAID</p>
                                        </div>
                                    </div>

                                    <h4 className="font-black text-[14px] text-slate-800 uppercase italic tracking-tighter leading-tight">{order.item}</h4>

                                    <div className="flex items-center justify-between">
                                        <div className="bg-slate-50 px-3 py-1.5 rounded-lg flex flex-col items-center border border-slate-100">
                                            <span className="text-xs font-black text-slate-800 leading-none">{order.date.split(' ')[0]}</span>
                                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">
                                                {order.date.split(' ').slice(1).join(' ')}
                                            </span>
                                        </div>
                                        <div className="bg-white border border-slate-100 h-9 px-4 rounded-xl flex items-center gap-2 shadow-sm">
                                            <Package size={14} className="text-slate-300" />
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{order.type}</span>
                                        </div>
                                        <button className="text-slate-200 group-hover:text-purple-600 group-hover:translate-x-1 transition-all">
                                            <ChevronRight size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
