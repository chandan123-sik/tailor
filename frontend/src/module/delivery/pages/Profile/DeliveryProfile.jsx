import React from 'react';
import { motion } from 'framer-motion';
import {
    User,
    CreditCard,
    ShieldCheck,
    Settings,
    LogOut,
    ChevronRight,
    Wallet,
    Bell,
    FileText,
    Star,
    Award
} from 'lucide-react';

const DeliveryProfile = () => {
    const sections = [
        { id: 'personal', label: 'Identity & Credentials', icon: User, value: 'Vikram Sethi' },
        { id: 'bank', label: 'Financial Settlement', icon: CreditCard, value: 'HDFC **** 9921' },
        { id: 'docs', label: 'Verified Dossier', icon: FileText, value: 'Aadhaar, DL Verified' },
        { id: 'notif', label: 'Alert Preferences', icon: Bell, value: 'Push Enabled' },
        { id: 'security', label: 'System Access', icon: ShieldCheck, value: 'Standard Security' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Profile Hero */}
            <div className="text-center space-y-4">
                <div className="relative inline-block group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 to-primary-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="w-28 h-28 rounded-[2.2rem] border-4 border-white shadow-2xl overflow-hidden relative z-10 mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
                            alt="Partner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-xl border-4 border-[#FAFAFB] shadow-lg z-20">
                        <Award size={18} />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Vikram <span className="text-slate-400">Sethi</span></h1>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
                            <Star size={10} fill="currentColor" className="text-amber-500" />
                            <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest leading-none">Elite Partner</span>
                        </div>
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">v4.0.2</span>
                    </div>
                </div>
            </div>

            {/* Wallet Quickview */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                        <Wallet size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Withdrawable Funds</p>
                        <p className="text-xs font-black text-white italic mt-1">Updated Just now</p>
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <h2 className="text-5xl font-black tracking-tighter italic">₹4,850</h2>
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                        Withdraw
                    </button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
            </div>

            {/* Settings Options */}
            <div className="space-y-4">
                {sections.map((section, idx) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer group hover:border-indigo-100 transition-all"
                    >
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                            <section.icon size={22} />
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{section.label}</p>
                            <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter leading-none">{section.value}</p>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </motion.div>
                ))}
            </div>

            {/* Logout Action */}
            <div className="pt-4 pb-12">
                <button className="w-full bg-rose-50 text-rose-500 py-6 rounded-3xl font-black text-xs uppercase tracking-widest border border-rose-100 hover:bg-rose-500 hover:text-white transition-all shadow-sm active:scale-95 flex items-center justify-center gap-3 group">
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Terminate Session
                </button>
                <p className="text-center mt-6 text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Digital Asset of RoyalTailor v1.2</p>
            </div>
        </div>
    );
};

export default DeliveryProfile;
