import React from 'react';
import { Shirt, Scissors, Ruler, Sparkles, Star, ChevronRight } from 'lucide-react';

const Services = () => {
    const services = [
        { name: 'Blouse Design', price: '₹599', rating: 4.7, image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&h=400&auto=format&fit=crop' },
        { name: 'Alterations', price: '₹99', rating: 4.6, image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=300&h=400&auto=format&fit=crop' },
        { name: 'Suit Stitching', price: '₹1299', rating: 4.9, image: 'https://images.unsplash.com/photo-1594932224010-75f43db98205?q=80&w=300&h=400&auto=format&fit=crop' },
        { name: 'Kurti Design', price: '₹799', rating: 4.8, image: 'https://images.unsplash.com/photo-1610030469983-98e6a693b350?q=80&w=300&h=400&auto=format&fit=crop' },
    ];

    return (
        <div className="flex flex-col gap-8 py-8 pb-32 animate-in fade-in duration-700">
            <div className="px-2">
                <div className="inline-flex items-center gap-2 bg-purple-100/50 px-3 py-1 rounded-full border border-purple-100 mb-3">
                    <Sparkles size={12} className="text-purple-600" />
                    <span className="text-[10px] font-black text-purple-700 uppercase tracking-widest">Premium Selection</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-3">Tailoring<br />Services</h2>
                <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-[280px]">Choose from our high-end stitching and precision alteration services</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
                {services.map((service, index) => (
                    <div key={service.name} className={`flex flex-col gap-4 group cursor-pointer ${index % 2 !== 0 ? 'translate-y-8' : ''}`}>
                        <div className="relative aspect-[4/5] rounded-[2.8rem] overflow-hidden shadow-xl shadow-purple-900/5 group-hover:shadow-purple-900/10 transition-all duration-500">
                            <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-slate-50">
                                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-black">{service.rating}</span>
                            </div>
                        </div>
                        <div className="px-3">
                            <h4 className="font-black text-lg text-slate-900 leading-tight mb-2 group-hover:text-purple-700 transition-colors uppercase tracking-tighter">{service.name}</h4>
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-slate-400 italic">Starts from</span>
                                <span className="text-base font-black text-slate-900">{service.price}</span>
                            </div>
                            <button className="mt-4 w-full py-2.5 bg-purple-50 text-purple-700 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Specialized Workshop Section */}
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[3.5rem] p-9 text-white flex flex-col gap-6 shadow-2xl shadow-slate-900/40 relative overflow-hidden mt-12 group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:rotate-12 transition-transform">
                        <Scissors size={24} className="text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-2">Specialized Workshop</h3>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">Connect with elite master tailors for your most complex and visionary designs</p>
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all w-fit">
                        Explore Premium
                    </button>
                </div>

                <div className="absolute -right-12 -bottom-12 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                    <Shirt size={200} />
                </div>
                <div className="absolute top-8 right-8 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>
        </div>
    );
};

export default Services;
