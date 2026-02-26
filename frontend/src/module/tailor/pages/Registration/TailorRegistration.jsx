import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, FileText, Briefcase, CreditCard, Clock,
    ChevronRight, ChevronLeft, CheckCircle, Upload,
    ShieldCheck, Scissors, Check, MapPin, Mail, Phone,
    Plus, X, Image as ImageIcon
} from 'lucide-react';

const steps = [
    { id: 1, title: 'Identity', icon: User, desc: 'Workshop info' },
    { id: 2, title: 'KYC Docs', icon: FileText, desc: 'Verification' },
    { id: 3, title: 'Portfolio', icon: Briefcase, desc: 'Work samples' },
    { id: 4, title: 'Finance', icon: CreditCard, desc: 'Bank details' },
    { id: 5, title: 'Service', icon: Scissors, desc: 'Expertise' },
    { id: 6, title: 'Timing', icon: Clock, desc: 'Schedule' },
];

const TailorRegistration = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', address: '', serviceArea: '',
        bankName: '', accountNumber: '', ifscCode: '',
        schedule: {
            monday: { active: true, start: '09:00', end: '18:00' },
            tuesday: { active: true, start: '09:00', end: '18:00' },
            wednesday: { active: true, start: '09:00', end: '18:00' },
            thursday: { active: true, start: '09:00', end: '18:00' },
            friday: { active: true, start: '09:00', end: '18:00' },
            saturday: { active: true, start: '10:00', end: '16:00' },
            sunday: { active: false, start: '09:00', end: '18:00' },
        }
    });

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Identity<br /><span className="text-primary-600">Dossier</span></h2>
                            <p className="text-slate-500 text-xs lg:text-sm font-medium">Please provide your legal workshop and contact information.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <InputField label="Brand Name" name="name" value={formData.name} onChange={handleInputChange} placeholder="E.G. ROYAL TAILORS" icon={Briefcase} />
                            <InputField label="Active Phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 90000 00000" icon={Phone} />
                            <InputField label="Email Address" name="email" value={formData.email} onChange={handleInputChange} placeholder="MASTER@HUB.COM" type="email" icon={Mail} />
                            <InputField label="Service Hub" name="serviceArea" value={formData.serviceArea} onChange={handleInputChange} placeholder="MUMBAI CENTRAL" icon={MapPin} />
                            <div className="md:col-span-2 space-y-4">
                                <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest px-4">Full Legal Address</p>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full p-6 bg-slate-50 border-none rounded-[2rem] ring-1 ring-slate-100 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-bold text-slate-800 min-h-[140px] text-sm"
                                    placeholder="STREET, LANDMARK, SHOP NUMBER..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">KYC<br /><span className="text-primary-600">Verification</span></h2>
                            <p className="text-slate-500 text-xs lg:text-sm font-medium">Upload digital high-fidelity copies of your verification documents.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            <FileUpload label="AADHAAR CARD" id="aadhar" />
                            <FileUpload label="PAN CARD" id="pan" />
                            <FileUpload label="TRADE LICENSE" id="shopLicense" />
                            <FileUpload label="POLICE CLEARANCE" id="policeVerification" />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Workshop<br /><span className="text-primary-600">Portfolio</span></h2>
                            <p className="text-slate-500 text-xs lg:text-sm font-medium">Upload photos of your finest stitching work (Min 3 photos).</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            <div className="aspect-[4/5] bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-300 hover:bg-primary-50 hover:border-primary-100 transition-all cursor-pointer group">
                                <Plus size={32} className="group-hover:scale-110 transition-transform" />
                                <span className="text-[9px] font-black uppercase mt-3 tracking-widest opacity-60">Upload Photo</span>
                            </div>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-[4/5] bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-slate-200">
                                    <ImageIcon size={32} />
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-primary-50 rounded-[2rem] border border-primary-100 border-dashed">
                            <p className="text-[10px] text-primary-800 font-bold uppercase tracking-widest leading-relaxed text-center">
                                High-quality photos of your best creations increase client trust and booking rates by up to 80%.
                            </p>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Payout<br /><span className="text-primary-600">Settlement</span></h2>
                        </div>
                        <div className="bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col gap-12">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-8 lg:w-14 lg:h-10 bg-white/10 rounded-lg backdrop-blur-md border border-white/10" />
                                    <ShieldCheck size={32} className="text-primary-500" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Registration ID</p>
                                    <p className="text-xl lg:text-2xl font-black text-white tracking-widest font-mono uppercase">MASTER-HUB-PENDING</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 w-48 h-48 bg-primary-600/10 rounded-full blur-[60px]" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            <InputField label="Bank Identity" name="bankName" value={formData.bankName} onChange={handleInputChange} placeholder="HDFC BANK" icon={Briefcase} />
                            <InputField label="IFSC Code" name="ifscCode" value={formData.ifscCode} onChange={handleInputChange} placeholder="HDFC0001234" icon={CheckCircle} />
                            <div className="sm:col-span-2">
                                <InputField label="Validated Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="0123 4567 8901 2233" icon={CreditCard} />
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Service<br /><span className="text-primary-600">Expertise</span></h2>
                            <p className="text-slate-500 text-xs lg:text-sm font-medium">Select the categories you're an absolute master in.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                'Gents Bespoke', 'Bridal Wear', 'Sherwani', 'Ethnic Suits',
                                'Formal Trousers', 'Embroidery', 'Lehanga Set', 'Repairs'
                            ].map(service => (
                                <div key={service} className="group cursor-pointer">
                                    <div className="bg-white p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center gap-4 hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm lg:shadow-none">
                                        <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-white/10 text-primary-600 group-hover:text-white transition-colors">
                                            <Scissors size={20} />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest leading-none">{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-8 lg:space-y-12 pb-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">Workshop<br /><span className="text-primary-600">Timing</span></h2>
                        </div>
                        <div className="space-y-3">
                            {Object.keys(formData.schedule).map(day => (
                                <div key={day} className="bg-white p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-primary-100 transition-all">
                                    <div className="flex items-center gap-4">
                                        <input type="checkbox" checked={formData.schedule[day].active} className="w-6 h-6 accent-primary-600 rounded-lg cursor-pointer" onChange={() => { }} />
                                        <span className="capitalize font-black text-slate-800 text-sm tracking-widest uppercase">{day}</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <input type="time" defaultValue={formData.schedule[day].start} className="flex-1 sm:flex-none p-3 lg:p-4 bg-slate-50 rounded-xl text-[10px] font-black text-slate-700 outline-none border border-slate-100" />
                                        <span className="font-black text-slate-300">—</span>
                                        <input type="time" defaultValue={formData.schedule[day].end} className="flex-1 sm:flex-none p-3 lg:p-4 bg-slate-50 rounded-xl text-[10px] font-black text-slate-700 outline-none border border-slate-100" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-primary-50 rounded-[2.5rem] border border-primary-100 flex gap-6 items-center">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-primary-600">
                                <CheckCircle size={24} />
                            </div>
                            <p className="text-primary-800 text-[10px] font-bold leading-relaxed uppercase">
                                By finalizing this dossier, you acknowledge that all workshop information is legally accurate.
                            </p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFBFF] py-12 lg:py-24 px-4 sm:px-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">

                {/* Vertical Progress Bar - Horizontal Scroller for Mobile */}
                <div className="lg:w-80 shrink-0 space-y-8 lg:space-y-12 h-fit lg:sticky lg:top-24">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-8">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary-100">
                            <Scissors size={26} className="lg:w-8 lg:h-8" />
                        </div>
                        <h1 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none shrink-0">MASTER<br className="hidden lg:block" /><span className="text-primary-600">MANIFESTO</span></h1>
                    </div>

                    <div className="flex lg:flex-col gap-5 lg:gap-8 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 relative border-b lg:border-b-0 border-slate-100 lg:border-l lg:border-slate-100 lg:pl-6">
                        {steps.map(step => (
                            <div
                                key={step.id}
                                onClick={() => setCurrentStep(step.id)}
                                className={`relative group shrink-0 cursor-pointer transition-all duration-500 ${currentStep === step.id ? 'opacity-100 scale-105 lg:scale-100' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="hidden lg:flex w-8 h-8 rounded-xl bg-white shadow-sm border border-slate-100 items-center justify-center text-slate-400 group-hover:text-primary-600">
                                        {currentStep > step.id ? <Check size={16} className="text-emerald-500" /> : <step.icon size={16} />}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className={`text-[9px] lg:text-[10px] font-black uppercase tracking-widest ${currentStep === step.id ? 'text-primary-600' : 'text-slate-400'}`}>
                                            STEP {step.id}
                                        </h4>
                                        <p className={`text-[10px] lg:text-[11px] font-black uppercase ${currentStep === step.id ? 'text-slate-900 shadow-primary-500' : 'text-slate-400'}`}>
                                            {step.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Surface */}
                <div className="flex-1 bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-xl border border-slate-100 p-8 lg:p-16 relative overflow-hidden flex flex-col justify-between min-h-[600px] lg:min-h-[850px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="flex-1"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 pt-10 border-t border-slate-50 relative z-10 bg-white">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${currentStep === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50'}`}
                        >
                            <ChevronLeft size={18} /> BACKTRACK
                        </button>

                        {currentStep < steps.length ? (
                            <button
                                onClick={nextStep}
                                className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-3"
                            >
                                CONTINUE <ChevronRight size={18} />
                            </button>
                        ) : (
                            <button
                                onClick={onComplete}
                                className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-emerald-500 active:scale-95 transition-all flex items-center justify-center gap-3"
                            >
                                SUBMIT DOSSIER <Check size={18} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, type = "text", icon: Icon, ...props }) => (
    <div className="space-y-3">
        <div className="flex items-center gap-3 px-4">
            {Icon && <Icon size={14} className="text-primary-500" />}
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
        </div>
        <input
            type={type}
            className="w-full p-5 lg:p-6 bg-slate-50 border-none rounded-[1.5rem] lg:rounded-[2rem] ring-1 ring-slate-100 focus:ring-4 focus:ring-primary-100 outline-none transition-all font-black text-slate-800 uppercase tracking-tighter text-sm md:text-base placeholder:opacity-40"
            {...props}
        />
    </div>
);

const FileUpload = ({ label, id }) => (
    <div className="p-8 bg-slate-50 border-2 border-dashed border-slate-100 rounded-[2.5rem] hover:border-primary-400 hover:bg-white transition-all group cursor-pointer text-center flex flex-col items-center justify-center gap-4 min-h-[180px]">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all text-slate-300 group-hover:text-primary-600">
            <Upload size={22} />
        </div>
        <div>
            <span className="block font-black text-slate-800 uppercase tracking-tighter text-xs lg:text-sm">{label}</span>
            <span className="text-[8px] text-slate-400 font-bold mt-2 uppercase tracking-widest block font-sans">UP TO 5MB MAX</span>
        </div>
        <input type="file" id={id} className="hidden" />
    </div>
);

export default TailorRegistration;
