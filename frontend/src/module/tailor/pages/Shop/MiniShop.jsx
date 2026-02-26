import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    Star,
    Truck,
    Wallet,
    RotateCcw,
    ShieldCheck,
    ChevronRight,
    ShoppingBag
} from 'lucide-react';

const MiniShop = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const collections = [
        {
            id: 1,
            name: 'Embroidered Anarkali Kurti',
            category: 'KURTIS',
            price: '₹1,450',
            originalPrice: '₹2,900',
            discount: '-50%',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 2,
            name: 'Cotton Printed Suit Set',
            category: 'SUITS',
            price: '₹2,499',
            originalPrice: '₹3,999',
            discount: '-37%',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1610030469668-935102a9e52c?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 3,
            name: 'Floral Maxi Dress',
            category: 'DRESSES',
            price: '₹1,899',
            originalPrice: '₹2,499',
            discount: '-24%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 4,
            name: 'Designer Silk Saree',
            category: 'SAREES',
            price: '₹4,599',
            originalPrice: '₹6,999',
            discount: '-34%',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1610030470298-3ca321045260?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 5,
            name: 'Printed Cotton Kurti',
            category: 'KURTIS',
            price: '₹899',
            originalPrice: '₹1,599',
            discount: '-41%',
            rating: 4.1,
            image: 'https://images.unsplash.com/photo-1619191163420-4a7c0f99b92e?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 6,
            name: 'Ethnic Jhumkas',
            category: 'JEWELRY',
            price: '₹299',
            originalPrice: '₹499',
            discount: '-40%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1630019852942-f892027be9ec?auto=format&fit=crop&q=80&w=600',
        }
    ];

    const benefits = [
        { icon: Truck, title: 'PAN INDIA DELIVERY', desc: 'Across 25000+ Pincodes' },
        { icon: Wallet, title: 'COD AVAILABLE', desc: 'Pay upon delivery' },
        { icon: RotateCcw, title: 'EASY RETURNS', desc: '7 Days Replacement' },
        { icon: ShieldCheck, title: 'SECURE PAYMENTS', desc: 'Razorpay Protected' }
    ];

    return (
        <div className="space-y-3 lg:space-y-4 animate-in fade-in duration-700 pb-4 px-1 font-sans">
            {/* Header Section - Tightened */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">
                        Explore <span className="text-primary-600">Collection</span>
                    </h1>
                </div>

                {/* Search Bar - Tightened */}
                <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm group hover:border-primary-400 transition-all">
                        <Search size={16} className="text-slate-400 group-hover:text-primary-500 mr-2.5" />
                        <input
                            type="text"
                            placeholder="Search within store..."
                            className="bg-transparent border-none outline-none text-[11px] w-full font-medium placeholder:text-slate-300 text-slate-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Collection Grid - Shorter Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {collections.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
                    >
                        {/* Image Container - Square Aspect Ratio for shorter height */}
                        <div className="relative aspect-square overflow-hidden bg-slate-50 border-b border-slate-100">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2">
                                <span className="bg-amber-400 text-slate-900 text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wide">
                                    {item.discount}
                                </span>
                            </div>
                        </div>

                        {/* Product Details - Compact & Tight */}
                        <div className="p-2.5 space-y-1 bg-white">
                            <div className="flex items-center justify-between">
                                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest">
                                    {item.category}
                                </span>
                                <div className="flex items-center gap-0.5">
                                    <span className="text-[10px] font-bold text-emerald-600">{item.rating}</span>
                                    <Star size={8} className="fill-emerald-600 text-emerald-600" />
                                </div>
                            </div>
                            <h3 className="text-[11px] font-semibold text-slate-800 tracking-tight leading-tight line-clamp-1 truncate">
                                {item.name}
                            </h3>
                            <div className="flex items-baseline gap-1.5 pt-0.5">
                                <span className="text-sm font-bold text-slate-900">
                                    {item.price}
                                </span>
                                <span className="text-[9px] font-medium text-slate-200 line-through">
                                    {item.originalPrice}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Benefits Section - Compact Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 py-4 border-t border-slate-100 mt-4">
                {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 bg-slate-50/50 rounded-lg border border-slate-100">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                            <benefit.icon size={18} />
                        </div>
                        <div className="space-y-0.5">
                            <h4 className="text-[9px] font-bold text-slate-900 uppercase tracking-wider leading-none">
                                {benefit.title}
                            </h4>
                            <p className="text-[8px] text-slate-400 font-medium tracking-tight">
                                {benefit.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniShop;
