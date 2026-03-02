import React from 'react';
import { ChevronRight, Package, MapPin, Ruler, Headphones, UserPlus, LogOut, Camera } from 'lucide-react';

const Profile = () => {
    const accountItems = [
        { icon: Package, label: 'My Orders', sub: 'Track, Return, Feedback', color: 'bg-emerald-50', iconColor: 'text-emerald-500' },
        { icon: MapPin, label: 'Saved Addresses', sub: 'Manage Pickup & Delivery locations', color: 'bg-emerald-50', iconColor: 'text-emerald-500' },
        { icon: Ruler, label: 'My Measurements', sub: 'Saved Body Profiles', color: 'bg-orange-50', iconColor: 'text-orange-500' },
    ];

    const supportItems = [
        { icon: Headphones, label: 'Help & Support', sub: 'FAQs, Contact Us', color: 'bg-blue-50', iconColor: 'text-blue-500' },
        { icon: UserPlus, label: 'Refer & Earn', sub: 'Invite friends, get discounts', color: 'bg-rose-50', iconColor: 'text-rose-500' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Light Purple Header (Matching Store style, No overflow-hidden so avatar shows) */}
            <div className="relative bg-[#E9D5FF] h-32 rounded-b-[2.5rem] flex flex-col items-center justify-end pb-0 shadow-sm border-b border-purple-200/50">
                {/* Profile Picture Pod (Perfect Circle with White Border, Brought to front) */}
                <div className="relative z-20 translate-y-12 group">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-slate-900 text-white p-2 rounded-full border-2 border-white shadow-lg z-30 active:scale-90 transition-all">
                        <Camera size={12} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* 2. User Info Block (Centered - Spacing adjusted for overlap) */}
            <div className="pt-14 text-center px-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic mb-0.5">JOHN DOE</h2>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3.5 py-1 rounded-full border border-emerald-100">
                    <span className="text-[8px] font-black tracking-widest uppercase">TRUSTED CUSTOMER</span>
                </div>
            </div>

            {/* 3. Stats Row (Densified) */}
            <div className="grid grid-cols-3 gap-3 px-6 mt-6">
                {[
                    { label: 'ORDERS', value: '12' },
                    { label: 'PENDING', value: '3' },
                    { label: 'SAVED', value: '₹2.4k' }
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col gap-0.5 active:scale-95 transition-all">
                        <span className="text-[18px] font-black text-slate-900 tracking-tight italic leading-none">{stat.value}</span>
                        <span className="text-[7.5px] font-black text-slate-300 tracking-widest uppercase">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* 4. Action Lists */}
            <div className="px-6 mt-7 pb-10">
                <div className="mb-6">
                    <h3 className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-3 ml-1 uppercase opacity-80">ACCOUNT SETTINGS</h3>
                    <div className="flex flex-col gap-2.5">
                        {accountItems.map((item) => (
                            <button key={item.label} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.99] transition-all hover:bg-slate-50/50">
                                <div className="flex items-center gap-3.5">
                                    <div className={`${item.color} p-2.5 rounded-lg`}>
                                        <item.icon size={18} className={item.iconColor} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-black text-sm text-slate-800 tracking-tight uppercase italic leading-none mb-0.5">{item.label}</h4>
                                        <p className="text-[9px] font-bold text-slate-400 tracking-tight italic opacity-70">{item.sub}</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-slate-200 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-3 ml-1 uppercase opacity-80">SUPPORT CENTER</h3>
                    <div className="flex flex-col gap-2.5">
                        {supportItems.map((item) => (
                            <button key={item.label} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.99] transition-all hover:bg-slate-50/50">
                                <div className="flex items-center gap-3.5">
                                    <div className={`${item.color} p-2.5 rounded-lg`}>
                                        <item.icon size={18} className={item.iconColor} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-black text-sm text-slate-800 tracking-tight uppercase italic leading-none mb-0.5">{item.label}</h4>
                                        <p className="text-[9px] font-bold text-slate-400 tracking-tight italic opacity-70">{item.sub}</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-slate-200 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                            </button>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-white p-4 rounded-xl border border-rose-100 flex items-center justify-between group active:scale-[0.99] transition-all hover:bg-rose-50/30">
                    <div className="flex items-center gap-3.5">
                        <div className="bg-rose-50 p-2.5 rounded-lg">
                            <LogOut size={18} className="text-rose-500" />
                        </div>
                        <h4 className="font-black text-sm text-rose-500 tracking-tight uppercase italic">Logout Account</h4>
                    </div>
                </button>

                <p className="text-center text-[9px] font-bold text-slate-300 mt-8 uppercase tracking-[0.2em] italic">
                    Version 1.0.0 • Handcrafted with <span className="text-rose-400">❤️</span> In India
                </p>
            </div>
        </div>
    );
};

export default Profile;
