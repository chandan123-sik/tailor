import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Camera,
    Shield,
    CreditCard,
    Briefcase,
    Settings,
    MapPin,
    Star,
    Award,
    ChevronRight,
    Clock,
    Plus,
    CheckCircle,
    LayoutDashboard,
    Zap,
    Edit2,
    Trash2,
    Map,
    Save,
    X,
    Building2,
    ChevronDown
} from 'lucide-react';

const TailorProfile = () => {
    const [activeTab, setActiveTab] = useState('about');

    // States for Profile Management
    const [schedule, setSchedule] = useState([
        { day: 'Mon - Fri', hours: '09AM - 08PM', isOpen: true },
        { day: 'Saturday', hours: '10AM - 04PM', isOpen: true },
        { day: 'Sunday', hours: 'Closed', isOpen: false }
    ]);
    const [isEditingSchedule, setIsEditingSchedule] = useState(false);

    const [portfolio, setPortfolio] = useState([
        { id: 1, title: 'Bespoke Suit', image: 'https://images.unsplash.com/photo-1594932224824-c4e00a36e9ef?auto=format&fit=crop&q=80&w=400' },
        { id: 2, title: 'Classic Tuxedo', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=400' },
        { id: 3, title: 'Linen Collection', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400' },
        { id: 4, title: 'Formal Trousers', image: 'https://images.unsplash.com/photo-1624222247344-550fbadfd08d?auto=format&fit=crop&q=80&w=400' }
    ]);

    const [serviceAreas, setServiceAreas] = useState(['South Mumbai', 'Bandra West', 'Juhu Hub', 'Andheri East']);
    const [isEditingServiceAreas, setIsEditingServiceAreas] = useState(false);
    const [newArea, setNewArea] = useState('');

    const [bankDetails, setBankDetails] = useState({
        accountHolder: 'M. IQBAL ANSARI',
        bankName: 'HDFC BANK LTD',
        accountNumber: 'XXXX XXXX 8821',
        ifscCode: 'HDFC0001242'
    });
    const [isEditingBank, setIsEditingBank] = useState(false);

    const tabs = [
        { id: 'about', label: 'Identity', icon: User },
        { id: 'portfolio', label: 'Gallery', icon: Briefcase },
        { id: 'availability', label: 'Availability', icon: Clock },
        { id: 'payout', label: 'Settlement', icon: CreditCard },
    ];

    return (
        <div className="space-y-5 animate-in fade-in duration-700 pb-10 font-sans max-w-6xl mx-auto px-1">
            {/* Reduced Height Hero Section */}
            <div className="relative h-44 sm:h-52 md:h-60 rounded-2xl overflow-hidden group shadow-md border border-slate-100">
                <img
                    src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover brightness-[0.5] group-hover:scale-105 transition-transform duration-1000"
                    alt="Workshop"
                />

                <div className="absolute inset-0 flex items-center p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        {/* Compact Avatar */}
                        <div className="relative group/avatar cursor-pointer shrink-0">
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden relative backdrop-blur-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=300"
                                    alt="M. Iqbal"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                                    <Camera size={18} className="text-white" />
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-lg border-2 border-white flex items-center justify-center text-white shadow-lg">
                                <Shield size={10} />
                            </div>
                        </div>

                        {/* Identity Info */}
                        <div className="text-center md:text-left space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                                    Master <span className="text-primary-400">Iqbal</span>
                                </h1>
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-black rounded-md border border-emerald-500/30 uppercase tracking-widest">
                                        Elite Status
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-slate-300">
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={12} className="text-primary-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Mumbai Hub</span>
                                </div>
                                <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                                    <Star size={12} className="text-amber-400 fill-amber-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">4.9 (1.2k Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compact Tabs */}
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 sticky top-0 z-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${activeTab === tab.id
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <tab.icon size={14} />
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="pt-2"
                >
                    {activeTab === 'about' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Bio & Skills */}
                            <div className="md:col-span-2 space-y-5">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2 border-l-4 border-primary-600 pl-3">
                                        <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Master Identity</h2>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
                                        Specializing in the art of precision tailoring since 2012. Our expertise focuses on bespoke silhouettes and textile integrity for the discerning gentleman.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                                        <div>
                                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Core Specialty</p>
                                            <p className="text-[11px] font-black text-slate-800 uppercase mt-1">Gents Formalwear</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                                            <p className="text-[11px] font-black text-slate-800 uppercase mt-1">12+ Seasons</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2 border-l-4 border-slate-800 pl-3">
                                        <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Workshop Skills</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Bespoke Suits', 'Pattern Cutting', 'Hand Stitching', 'Fabric Analysis', 'Formal Trousers', 'Textile Design'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-md uppercase border border-slate-200 tracking-tight">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Service Areas Management */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 border-l-4 border-primary-600 pl-3">
                                            <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Service Coverage Area</h2>
                                        </div>
                                        <button
                                            onClick={() => setIsEditingServiceAreas(!isEditingServiceAreas)}
                                            className="text-[10px] font-black uppercase text-primary-600 hover:text-primary-700 flex items-center gap-1.5"
                                        >
                                            {isEditingServiceAreas ? <X size={12} /> : <Edit2 size={12} />}
                                            {isEditingServiceAreas ? 'Cancel' : 'Manage'}
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {serviceAreas.map((area, index) => (
                                            <div key={index} className="px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3 group/area">
                                                <MapPin size={10} className="text-primary-500" />
                                                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                                {isEditingServiceAreas && (
                                                    <button
                                                        onClick={() => setServiceAreas(serviceAreas.filter((_, i) => i !== index))}
                                                        className="text-slate-300 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 size={10} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        {isEditingServiceAreas && (
                                            <div className="flex items-center gap-2 w-full mt-2">
                                                <input
                                                    type="text"
                                                    placeholder="Add new area..."
                                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-[10px] font-bold uppercase outline-none focus:border-primary-400"
                                                    value={newArea}
                                                    onChange={(e) => setNewArea(e.target.value)}
                                                />
                                                <button
                                                    onClick={() => {
                                                        if (newArea.trim()) {
                                                            setServiceAreas([...serviceAreas, newArea.trim()]);
                                                            setNewArea('');
                                                        }
                                                    }}
                                                    className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 shadow-md shadow-primary-100"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Verification Sidebar */}
                            <div className="space-y-5">
                                <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                                    <div className="relative z-10 space-y-4">
                                        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black tracking-tight uppercase">Master Verified</h3>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Identity & Workshop Audited</p>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase">
                                                <CheckCircle size={14} /> Legally Dispatched
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                    <h4 className="text-[9px] font-black text-slate-800 uppercase tracking-widest mb-2">Credentials</h4>
                                    {['Aadhaar Identity', 'Premise Audit', 'GST Certificate'].map(item => (
                                        <div key={item} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="text-[9px] font-bold text-slate-600 uppercase">{item}</span>
                                            <CheckCircle size={12} className="text-emerald-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'portfolio' && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {portfolio.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -5 }}
                                    className="aspect-[3/4] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group cursor-pointer relative"
                                >
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        alt={item.title}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                                        <p className="text-[8px] font-black text-white uppercase tracking-widest">{item.title}</p>
                                    </div>
                                    <button
                                        onClick={() => setPortfolio(portfolio.filter(p => p.id !== item.id))}
                                        className="absolute top-2 right-2 p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all"
                                    >
                                        <Trash2 size={10} />
                                    </button>
                                </motion.div>
                            ))}
                            <div
                                onClick={() => {
                                    const title = prompt('Project Title:');
                                    if (title) {
                                        setPortfolio([...portfolio, {
                                            id: Date.now(),
                                            title,
                                            image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=400'
                                        }]);
                                    }
                                }}
                                className="aspect-[3/4] bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-300 hover:bg-primary-50 hover:border-primary-100 transition-all cursor-pointer group"
                            >
                                <Plus size={24} className="group-hover:scale-110 transition-transform text-slate-400" />
                                <span className="text-[9px] font-black uppercase mt-2 tracking-widest">Update Sample</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'availability' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 border-l-4 border-primary-600 pl-3">
                                        <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Profile Availability</h2>
                                    </div>
                                    <button
                                        onClick={() => setIsEditingSchedule(!isEditingSchedule)}
                                        className="text-[10px] font-black uppercase text-primary-600 hover:text-primary-700 flex items-center gap-1.5"
                                    >
                                        {isEditingSchedule ? <Save size={12} className="text-emerald-500" /> : <Edit2 size={12} />}
                                        {isEditingSchedule ? 'Confirm' : 'Update Schedule'}
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {schedule.map((dayObj, i) => (
                                        <div key={i} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${!dayObj.isOpen ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-100 hover:border-primary-100 shadow-sm'}`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${dayObj.isOpen ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`} />
                                                <span className="text-[10px] font-black uppercase tracking-tight">{dayObj.day}</span>
                                            </div>
                                            {isEditingSchedule ? (
                                                <input
                                                    className="bg-slate-50 border-none outline-none text-[10px] font-black text-right text-primary-600 focus:ring-0 w-32"
                                                    value={dayObj.hours}
                                                    onChange={(e) => {
                                                        const newSchedule = [...schedule];
                                                        newSchedule[i].hours = e.target.value;
                                                        setSchedule(newSchedule);
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-[10px] font-bold uppercase text-slate-500">{dayObj.hours}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                                <div className="flex items-center gap-2 border-l-4 border-slate-800 pl-3">
                                    <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Lead Times</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Standard Suit</p>
                                        <p className="text-xl font-black text-slate-800 tracking-tighter mt-1">7-10 Days</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Alterations</p>
                                        <p className="text-xl font-black text-slate-800 tracking-tighter mt-1">1-2 Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'payout' && (
                        <div className="max-w-2xl mx-auto space-y-5">
                            <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
                                <div className="relative z-10 text-center space-y-4">
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Current Balance</p>
                                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter">₹42,100</h3>
                                    <div className="flex justify-center gap-3 pt-4">
                                        <button className="px-6 py-3 bg-primary-600 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary-500/20 active:scale-95 transition-all">
                                            Transfer to Bank
                                        </button>
                                        <button className="px-6 py-3 bg-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
                                            Statement
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 w-48 h-48 bg-primary-600/20 rounded-full blur-[80px]" />
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-2 border-l-4 border-slate-900 pl-3">
                                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Withdrawal Bank Details</h4>
                                    </div>
                                    <button
                                        onClick={() => setIsEditingBank(!isEditingBank)}
                                        className="text-primary-600 hover:text-primary-700 transition-colors"
                                    >
                                        {isEditingBank ? <CheckCircle size={16} className="text-emerald-500" /> : <Edit2 size={14} />}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                                    <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:border-primary-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Building2 size={10} /> Bank Name
                                        </p>
                                        {isEditingBank ? (
                                            <input
                                                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-black uppercase text-primary-600"
                                                value={bankDetails.bankName}
                                                onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                                            />
                                        ) : (
                                            <p className="text-[11px] font-black text-slate-800 uppercase">{bankDetails.bankName}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:border-primary-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <User size={10} /> Beneficiary Name
                                        </p>
                                        {isEditingBank ? (
                                            <input
                                                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-black uppercase text-primary-600"
                                                value={bankDetails.accountHolder}
                                                onChange={(e) => setBankDetails({ ...bankDetails, accountHolder: e.target.value })}
                                            />
                                        ) : (
                                            <p className="text-[11px] font-black text-slate-800 uppercase">{bankDetails.accountHolder}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:border-primary-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <CreditCard size={10} /> Account Number
                                        </p>
                                        {isEditingBank ? (
                                            <input
                                                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-black uppercase text-primary-600"
                                                value={bankDetails.accountNumber.replace(/XXXX XXXX /, '')}
                                                onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: `XXXX XXXX ${e.target.value}` })}
                                            />
                                        ) : (
                                            <p className="text-[11px] font-black text-slate-800 uppercase">{bankDetails.accountNumber}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:border-primary-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Shield size={10} /> IFSC Code
                                        </p>
                                        {isEditingBank ? (
                                            <input
                                                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-black uppercase text-primary-600"
                                                value={bankDetails.ifscCode}
                                                onChange={(e) => setBankDetails({ ...bankDetails, ifscCode: e.target.value })}
                                            />
                                        ) : (
                                            <p className="text-[11px] font-black text-slate-800 uppercase">{bankDetails.ifscCode}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Recent Payment Activity</h4>
                                    <Zap size={14} className="text-primary-600" />
                                </div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center justify-between p-3.5 bg-slate-100/50 rounded-xl border border-slate-50 group hover:border-primary-100 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-primary-600 transition-colors">
                                                    <CreditCard size={14} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight">OrderId #ST-882{i}</p>
                                                    <p className="text-[8px] text-slate-400 font-bold uppercase mt-0.5">25 Feb • Successfully Cleared</p>
                                                </div>
                                            </div>
                                            <p className="text-[12px] font-black text-slate-900">+₹{1200 * i}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TailorProfile;
