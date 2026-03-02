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

    const categories = ['All Items', 'Shirts', 'T-Shirts', 'Fabric', 'Accessories'];
    const [activeCategory, setActiveCategory] = useState('All Items');

    const collections = [
        // SHIRTS CATEGORY
        {
            id: 1,
            name: 'Tailored Executive Shirt',
            category: 'SHIRTS',
            price: '₹1,299',
            originalPrice: '₹2,499',
            discount: '-48%',
            rating: 4.9,
            image: '/products/shirt.png',
            tag: 'New'
        },
        {
            id: 4,
            name: 'Light Blue Formal Shirt',
            category: 'SHIRTS',
            price: '₹1,599',
            originalPrice: '₹2,299',
            discount: '-30%',
            rating: 4.9,
            image: '/products/blue_shirt.png',
            tag: 'Elite'
        },
        {
            id: 9,
            name: 'Royal Oxford White Shirt',
            category: 'SHIRTS',
            price: '₹1,899',
            originalPrice: '₹2,999',
            discount: '-36%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600',
            tag: 'Royal'
        },
        {
            id: 12,
            name: 'Striped Business Shirt',
            category: 'SHIRTS',
            price: '₹1,399',
            originalPrice: '₹2,199',
            discount: '-36%',
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1620012253295-c05c26feafad?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 19,
            name: 'Black Evening Dress Shirt',
            category: 'SHIRTS',
            price: '₹2,499',
            originalPrice: '₹3,999',
            discount: '-37%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=600',
        },

        // T-SHIRTS CATEGORY
        {
            id: 2,
            name: 'Premium Cotton T-Shirt',
            category: 'T-SHIRTS',
            price: '₹799',
            originalPrice: '₹1,299',
            discount: '-38%',
            rating: 4.7,
            image: '/products/tshirt.png',
            tag: 'Best Seller'
        },
        {
            id: 8,
            name: 'Classic Polo Pique Tee',
            category: 'T-SHIRTS',
            price: '₹1,099',
            originalPrice: '₹1,599',
            discount: '-31%',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 14,
            name: 'V-Neck Comfort Tee',
            category: 'T-SHIRTS',
            price: '₹699',
            originalPrice: '₹1,199',
            discount: '-41%',
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 20,
            name: 'Heavyweight Oversized Tee',
            category: 'T-SHIRTS',
            price: '₹999',
            originalPrice: '₹1,499',
            discount: '-33%',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600',
        },

        // FABRIC CATEGORY (Tailor's Unstitched Material)
        {
            id: 3,
            name: 'Italian Merino Wool (Suit)',
            category: 'FABRIC',
            price: '₹2,199',
            originalPrice: '₹3,500',
            discount: '-37%',
            rating: 4.8,
            image: '/products/fabric.png',
            tag: 'Premium'
        },
        {
            id: 7,
            name: 'Belgian Pure Linen (Shirting)',
            category: 'FABRIC',
            price: '₹950',
            originalPrice: '₹1,500',
            discount: '-36%',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600',
            tag: 'Natural'
        },
        {
            id: 10,
            name: 'Egyptian Giza Cotton Roll',
            category: 'FABRIC',
            price: '₹2,499',
            originalPrice: '₹3,999',
            discount: '-37%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
            tag: 'Eco-Friendly'
        },
        {
            id: 13,
            name: 'Indigo Raw Denim Canvas',
            category: 'FABRIC',
            price: '₹1,200',
            originalPrice: '₹1,800',
            discount: '-33%',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
        },
        {
            id: 16,
            name: 'Royal Banarasi Silk Swatch',
            category: 'FABRIC',
            price: '₹4,500',
            originalPrice: '₹6,900',
            discount: '-35%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1610030469915-9488bc3b7588?auto=format&fit=crop&q=80&w=600',
            tag: 'Royal'
        },
        {
            id: 17,
            name: 'English Herringbone Tweed',
            category: 'FABRIC',
            price: '₹3,200',
            originalPrice: '₹4,800',
            discount: '-33%',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1594932224824-c4e00a36e9ef?auto=format&fit=crop&q=80&w=600',
            tag: 'Heritage'
        },
        {
            id: 18,
            name: 'Luxury Cashmere Swatch',
            category: 'FABRIC',
            price: '₹5,499',
            originalPrice: '₹8,999',
            discount: '-39%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1551029566-39df5c6713d6?auto=format&fit=crop&q=80&w=600',
            tag: 'Limited'
        },

        // ACCESSORIES
        {
            id: 15,
            name: 'Silver Watchband Link',
            category: 'ACCESSORIES',
            price: '₹2,499',
            originalPrice: '₹4,500',
            discount: '-44%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600',
            tag: 'Limited'
        }
    ];

    const filteredCollections = collections.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All Items' || item.category.toLowerCase() === activeCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    const benefits = [
        { icon: Truck, title: 'PAN INDIA DELIVERY', desc: 'Across 25000+ Pincodes' },
        { icon: Wallet, title: 'COD AVAILABLE', desc: 'Pay upon delivery' },
        { icon: RotateCcw, title: 'EASY RETURNS', desc: '7 Days Replacement' },
        { icon: ShieldCheck, title: 'SECURE PAYMENTS', desc: 'Razorpay Protected' }
    ];

    return (
        <div className="space-y-4 lg:space-y-6 animate-in fade-in duration-700 pb-6 px-2 font-sans bg-[#FAFBFF]">
            {/* Header Section */}
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Tailor <span className="text-primary-600 font-black">Inventory</span>
                        </h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                            Managing {filteredCollections.length} Items
                        </p>
                    </div>
                </div>

                {/* Search & Filter Row */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 flex items-center bg-white px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm group hover:border-primary-400 hover:shadow-md transition-all duration-300">
                            <Search size={18} className="text-slate-400 group-hover:text-primary-500 mr-3" />
                            <input
                                type="text"
                                placeholder="Search your catalogue..."
                                className="bg-transparent border-none outline-none text-[13px] w-full font-medium placeholder:text-slate-300 text-slate-600"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="p-3.5 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                            <Filter size={20} />
                        </button>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-100'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            {/* Collection Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredCollections.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500 relative"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                                <span className="bg-white/95 backdrop-blur shadow-sm text-primary-600 text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                                    {item.discount}
                                </span>
                                {item.tag && (
                                    <span className="bg-slate-900 text-white text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                                        {item.tag}
                                    </span>
                                )}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <button className="w-full bg-white text-slate-900 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    Quick Edit
                                </button>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-4 space-y-2 bg-white">
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-2 py-0.5 bg-slate-50 rounded">
                                    {item.category}
                                </span>
                                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 rounded-full">
                                    <span className="text-[10px] font-black text-emerald-600">{item.rating}</span>
                                    <Star size={8} className="fill-emerald-600 text-emerald-600" />
                                </div>
                            </div>

                            <h3 className="text-xs font-bold text-slate-800 tracking-tight leading-snug line-clamp-2">
                                {item.name}
                            </h3>

                            <div className="flex items-center gap-2 pt-1">
                                <span className="text-base font-black text-slate-900">
                                    {item.price}
                                </span>
                                <span className="text-[10px] font-medium text-slate-300 line-through">
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
