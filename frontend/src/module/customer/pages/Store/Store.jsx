import React from 'react';
import { Search, Heart, ShoppingBag, MapPin, ChevronDown, Filter, Star, Truck, RotateCcw, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';

const Store = () => {
    const categories = [
        { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=150&h=150&auto=format&fit=crop' },
        { name: 'Suits', image: 'https://images.unsplash.com/photo-1594932224010-75f43db98205?q=80&w=150&h=150&auto=format&fit=crop' },
        { name: 'Dresses', image: 'https://images.unsplash.com/photo-1590736704728-f472d5839bd2?q=80&w=150&h=150&auto=format&fit=crop' },
        { name: 'Ethnic', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=150&h=150&auto=format&fit=crop' },
        { name: 'Fabrics', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=150&h=150&auto=format&fit=crop' },
    ];

    const products = [
        {
            name: 'Embroidered Anarkali Kurti',
            category: 'KURTIS',
            price: '1499',
            oldPrice: '2999',
            discount: '-50%',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=600&auto=format&fit=crop'
        },
        {
            name: 'Cotton Printed Suit',
            category: 'SUITS',
            price: '2199',
            oldPrice: '3500',
            discount: '-37%',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1610030469983-98e6a693b350?q=80&w=400&h=600&auto=format&fit=crop'
        },
        {
            name: 'Floral Design Dress',
            category: 'DRESSES',
            price: '1899',
            oldPrice: '2499',
            discount: '-24%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1549439602-43bbcb45f5a2?q=80&w=400&h=600&auto=format&fit=crop'
        },
        {
            name: 'Designer Silk Saree',
            category: 'ETHNIC',
            price: '3299',
            oldPrice: '4999',
            discount: '-34%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1610030469668-93530c17b58f?q=80&w=400&h=600&auto=format&fit=crop'
        },
        {
            name: 'Printed Cotton Kurti',
            category: 'KURTIS',
            price: '899',
            oldPrice: '1599',
            discount: '-44%',
            rating: 4.1,
            image: 'https://images.unsplash.com/photo-1600048485230-0fc352467d16?q=80&w=400&h=600&auto=format&fit=crop'
        },
        {
            name: 'Ethnic Jhumkas Set',
            category: 'JEWELRY',
            price: '299',
            oldPrice: '499',
            discount: '-40%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&h=600&auto=format&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Full Width Purple Sticky Header (Image 5 style) */}
            <header className="bg-[#E9D5FF] text-slate-900 pt-3 pb-5 px-6 rounded-b-[2.5rem] sticky top-0 z-50 shadow-md border-b border-purple-200/50 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl font-black tracking-tight italic uppercase">STITCHING</h1>
                    <div className="flex gap-4">
                        <button className="p-1 hover:scale-110 duration-300"><Search size={22} strokeWidth={2.5} /></button>
                        <button className="p-1 hover:scale-110 duration-300"><Heart size={22} strokeWidth={2.5} /></button>
                        <button className="p-1 hover:scale-110 duration-300"><ShoppingBag size={22} strokeWidth={2.5} /></button>
                    </div>
                </div>

                <div className="flex justify-between items-center px-0.5">
                    <div className="flex items-center gap-2 text-slate-700">
                        <MapPin size={12} className="text-purple-700" />
                        <span className="text-[10px] font-black tracking-tight uppercase">Srinagar, Kashmir - 190001</span>
                    </div>
                    <button className="flex items-center gap-1 text-[10px] font-black uppercase text-purple-700 tracking-widest border-b border-dashed border-purple-400">
                        CHANGE <ChevronDown size={14} strokeWidth={3} />
                    </button>
                </div>
            </header>

            {/* Main Content Area (Fixed Cutoff by removing negative margin) */}
            <div className="px-5 pt-4 flex flex-col gap-4 pb-10">

                {/* 2. Professional Category slider (Image 5) */}
                <div className="flex gap-6 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-1">
                    {categories.map((cat) => (
                        <div key={cat.name} className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm transition-all group-hover:shadow-md group-hover:ring-4 group-hover:ring-purple-50">
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter group-hover:text-purple-600 transition-colors uppercase">{cat.name}</span>
                        </div>
                    ))}
                </div>

                {/* 3. Search & Filter Bar */}
                <div className="flex gap-2.5">
                    <div className="flex-1 bg-slate-50 rounded-[1.2rem] px-4 py-3.5 flex items-center gap-3 border border-slate-100 focus-within:bg-white focus-within:border-purple-200 transition-all shadow-inner">
                        <Search className="text-slate-300" size={17} />
                        <input type="text" placeholder="Search within store..." className="bg-transparent outline-none flex-1 text-[11px] font-bold text-slate-700" />
                    </div>
                    <button className="bg-slate-50 p-3.5 rounded-[1.2rem] border border-slate-100 shadow-sm text-slate-600 hover:bg-white hover:border-purple-200 duration-300">
                        <Filter size={18} strokeWidth={2.5} />
                    </button>
                </div>

                {/* 4. Explore Collection Title */}
                <div className="relative">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Explore Collection</h2>
                    <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-[0.2em] ml-0.5">Premium Handcrafted Pieces</p>
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-600 rounded-full"></div>
                </div>

                {/* 5. Product Grid (6 cards, Sharp Radius as per Image 4/5) */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-7">
                    {products.map((product) => (
                        <div key={product.name} className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/60">
                            <div className="relative aspect-[3/4.2] overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />

                                <div className="absolute top-2.5 left-2.5 bg-rose-500 text-white text-[8px] font-black px-2.5 py-1 rounded-lg shadow-lg">
                                    {product.discount} OFF
                                </div>

                                <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-1.5 py-1 rounded-lg flex items-center gap-0.5 shadow-md text-[8px] font-black text-emerald-600">
                                    {product.rating} <Star size={8} className="fill-emerald-500 text-emerald-500" />
                                </div>
                            </div>

                            <div className="p-3.5 flex flex-col gap-1">
                                <span className="text-[8px] font-black text-purple-400 tracking-[0.25em] transition-colors group-hover:text-purple-600">
                                    {product.category}
                                </span>
                                <h4 className="text-[13px] font-black text-slate-800 leading-tight uppercase tracking-tighter truncate italic group-hover:text-purple-900 transition-colors">
                                    {product.name}
                                </h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-sm font-black text-slate-900 tracking-tight">₹{product.price}</span>
                                    <span className="text-[9px] font-bold text-slate-300 line-through opacity-70 italic">₹{product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 6. Compact Feature Grid (Reduced Spacing - Image 3 fix) */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                        { icon: Truck, title: 'PAN INDIA DELIVERY', desc: 'Secure & Fast Ship' },
                        { icon: Banknote, title: 'COD AVAILABLE', desc: 'Pay At Doorstep' },
                        { icon: RotateCcw, title: 'EASY RETURNS', desc: '7 Day Policy' },
                        { icon: ShieldCheck, title: 'SECURE PAYMENTS', desc: 'Trusted Pay-Net' }
                    ].map((feat) => (
                        <div key={feat.title} className="flex flex-col items-center p-5 bg-white rounded-xl border border-slate-100 text-center gap-2.5 hover:shadow-lg transition-all active:scale-95 group">
                            <div className="bg-slate-50 p-2.5 rounded-xl group-hover:bg-purple-50 group-hover:scale-110 transition-all">
                                <feat.icon size={20} className="text-slate-700 group-hover:text-purple-600" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-900 leading-none mb-1 uppercase tracking-tighter">{feat.title}</h4>
                                <p className="text-[8px] font-bold text-slate-400 leading-tight uppercase opacity-80">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Store;
