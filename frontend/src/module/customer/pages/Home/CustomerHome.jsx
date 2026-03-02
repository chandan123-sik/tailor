import React, { useState, useEffect } from 'react';
import { Search, Maximize, MapPin, ChevronDown, ArrowRight, Star, Truck, ShieldCheck, Zap, ChevronRight, Gift, Box, ClipboardList, Eye, Landmark, CreditCard, Shield } from 'lucide-react';

const CustomerHome = () => {
    const [currentBanner, setCurrentBanner] = useState(0);

    const banners = [
        {
            title: "REFER & EARN",
            subtitle: "Invite friends and get ₹200 credits for your next stitch",
            buttonText: "Invite Now",
            icon: "🎁",
            color: "from-purple-100 to-purple-200",
            textColor: "text-purple-900",
            buttonColor: "bg-purple-600 text-white"
        },
        {
            title: "EXPRESS DELIVERY",
            subtitle: "Get your outfit stitched and delivered in 24 hours",
            buttonText: "Book Now",
            icon: "⚡",
            color: "from-blue-100 to-blue-200",
            textColor: "text-blue-900",
            buttonColor: "bg-blue-600 text-white"
        },
        {
            title: "NEW SEASON",
            subtitle: "Explore 500+ new designer fabrics for this summer",
            buttonText: "View All",
            icon: "👗",
            color: "from-emerald-100 to-emerald-200",
            textColor: "text-emerald-900",
            buttonColor: "bg-emerald-600 text-white"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const categories = [
        { icon: Box, label: 'STORE', color: 'bg-rose-50', iconColor: 'text-rose-500' },
        { icon: ClipboardList, label: 'MY ORDERS', color: 'bg-blue-50', iconColor: 'text-blue-500' },
        { icon: Eye, label: 'REFERENCE', color: 'bg-purple-50', iconColor: 'text-purple-500' },
        { icon: Gift, label: 'REFER & EARN', color: 'bg-orange-50', iconColor: 'text-orange-500' },
    ];

    const tailors = [
        {
            name: 'Masterji Ahmed',
            rating: 4.9,
            distance: '1.2 km',
            image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=200&h=200&auto=format&fit=crop"
        },
        {
            name: 'Fashion Hub',
            rating: 4.8,
            distance: '2.5 km',
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
        },
        {
            name: 'Priya Creations',
            rating: 4.7,
            distance: '0.8 km',
            image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&h=200&auto=format&fit=crop"
        }
    ];

    const popularServices = [
        { name: 'Kurti Stitching', price: '₹499', rating: 4.8, image: 'https://cdn.pixabay.com/photo/2017/08/15/00/08/sewing-2642453_960_720.jpg' },
        { name: 'Salwar Kameez', price: '₹899', rating: 4.9, image: 'https://cdn.pixabay.com/photo/2015/09/22/14/34/needlework-951800_960_720.jpg' },
        { name: 'Bridal Gown', price: '₹2499', rating: 4.9, image: 'https://cdn.pixabay.com/photo/2016/09/01/18/17/sewing-machine-1637086_960_720.jpg' },
        { name: 'Designer Suit', price: '₹1899', rating: 4.7, image: 'https://cdn.pixabay.com/photo/2017/01/13/11/48/sewing-1976939_960_720.jpg' },
    ];

    return (
        <div className="flex flex-col gap-5 pb-10 px-4 pt-10">

            {/* 1. Banners (Light Theme & 3 Banners) */}
            <div className="relative h-44 w-full overflow-hidden rounded-xl shadow-sm border border-slate-100 group">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out bg-gradient-to-br ${banner.color} p-6 flex flex-col justify-center ${index === currentBanner ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                            }`}
                    >
                        <div className="relative z-10 max-w-[75%]">
                            <h2 className={`text-2xl font-black mb-1 ${banner.textColor} uppercase italic tracking-tighter`}>
                                {banner.title}
                            </h2>
                            <p className={`${banner.textColor} opacity-70 text-[10px] font-bold mb-4 leading-tight`}>
                                {banner.subtitle}
                            </p>
                            <button className={`${banner.buttonColor} px-4 py-2 rounded-lg font-black text-[9px] uppercase tracking-widest shadow-md active:scale-95 transition-all`}>
                                {banner.buttonText}
                            </button>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-1000">{banner.icon}</div>
                    </div>
                ))}

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {banners.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentBanner ? 'w-4 bg-slate-900' : 'w-1 bg-slate-400/30'}`}></div>
                    ))}
                </div>
            </div>

            {/* 2. Categories (Reduced Spacing) */}
            <div className="grid grid-cols-4 gap-3 px-1 -mt-1">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                        <div className={`${cat.color} w-full aspect-square rounded-xl flex items-center justify-center shadow-sm border border-white`}>
                            <cat.icon size={22} className={`${cat.iconColor}`} />
                        </div>
                        <span className="text-[8px] font-black text-slate-500 uppercase">{cat.label}</span>
                    </div>
                ))}
            </div>

            {/* 3. Top Rated (Image 2 style) */}
            <div>
                <div className="flex justify-between items-center mb-3 px-1">
                    <h3 className="text-lg font-black text-slate-900 uppercase italic">Top Rated</h3>
                    <button className="text-[9px] font-black text-purple-600 uppercase">View All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
                    {tailors.map((tailor) => (
                        <div key={tailor.name} className="flex-shrink-0 w-36 bg-white p-2 rounded-xl border border-slate-100 shadow-sm transition-all group">
                            <div className="relative aspect-square rounded-lg overflow-hidden mb-2 shadow-sm">
                                <img src={tailor.image} alt={tailor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-1.5 right-1.5 bg-white/95 px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow text-[8px] font-black">
                                    <Star size={8} className="fill-yellow-400 text-yellow-400" /> {tailor.rating}
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="font-black text-[11px] text-slate-800 uppercase truncate">{tailor.name}</h4>
                                <div className="flex items-center justify-center gap-1 text-[8px] font-bold text-purple-600 bg-purple-50/50 py-1 rounded-md mt-1">
                                    <MapPin size={8} strokeWidth={3} /> {tailor.distance}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Active Order (Tighter Radius/Space) */}
            <div className="bg-white rounded-xl p-5 border border-purple-50 shadow-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-purple-600 uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></span> IN MOTION
                    </span>
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-[8px] font-black shadow-lg shadow-purple-100 flex items-center gap-1.5">
                        <Truck size={10} /> TRACKING
                    </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic leading-none">Kurti Stitching</h3>
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-purple-50 rounded-full overflow-hidden">
                        <div className="w-[65%] h-full bg-purple-600"></div>
                    </div>
                    <span className="text-[10px] font-black">65%</span>
                </div>
            </div>

            {/* 5. Popular Services (Now 4 Cards) */}
            <div>
                <div className="flex justify-between items-center mb-4 px-1">
                    <div>
                        <h3 className="text-lg font-black text-slate-900 uppercase italic">Popular Services</h3>
                        <p className="text-slate-400 text-[8px] font-bold">Custom fitted for you</p>
                    </div>
                    <button className="text-slate-400 text-[9px] font-black uppercase flex items-center gap-1">
                        VIEW ALL <ArrowRight size={12} />
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {popularServices.map((service, index) => (
                        <div key={index} className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm group">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
                                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute top-2 right-2 bg-white/95 px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow text-[8px] font-black">
                                    <Star size={8} className="fill-yellow-400 text-yellow-400" /> {service.rating}
                                </div>
                            </div>
                            <div className="px-1 text-center">
                                <h4 className="font-black text-[12px] text-slate-800 uppercase italic tracking-tighter">{service.name}</h4>
                                <div className="flex items-center justify-center gap-1 mt-1">
                                    <span className="text-[8px] font-bold text-slate-400">STARTS AT</span>
                                    <span className="text-[11px] font-black text-slate-900">{service.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 6. Features Highlights (Image 1 style - Tight) */}
            <div className="bg-white rounded-xl p-4 border border-slate-50 shadow shadow-purple-900/5">
                <div className="grid grid-cols-3 gap-1">
                    {[
                        { icon: Shield, label: 'VERIFIED' },
                        { icon: Truck, label: 'FREE PICKUP' },
                        { icon: Zap, label: 'FAST DELIVERY' }
                    ].map((feature) => (
                        <div key={feature.label} className="flex flex-col items-center gap-2">
                            <div className="bg-purple-50 p-2.5 rounded-lg">
                                <feature.icon size={16} className="text-purple-600" />
                            </div>
                            <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest leading-none text-center">
                                {feature.label.split(' ').length > 1 ? (
                                    <> {feature.label.split(' ')[0]}<br />{feature.label.split(' ')[1]} </>
                                ) : feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomerHome;
