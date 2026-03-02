import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Truck,
    Package,
    Navigation,
    Phone,
    Camera,
    CheckCircle2,
    Check,
    Store,
    MapPin,
    AlertCircle,
    User
} from 'lucide-react';

const Tasks = () => {
    // Initial Mock Data per user specification
    const [tasks, setTasks] = useState([
        {
            id: 'TK-9921',
            type: 'Fabric Pickup',
            customer: 'Elena Gilbert',
            customerPhone: '+91 98765 43210',
            pickup: 'Mystic Manor, Lane 4, Delhi',
            drop: 'Royal Tailors Workshop',
            status: 'Pending',
            items: ['2 Meters Silk Fabric', 'Measurement Slip'],
            urgent: true,
            photoProof: {},
            isComplete: false
        },
        {
            id: 'TK-8842',
            type: 'Final Delivery',
            customer: 'Damon Salvatore',
            customerPhone: '+91 88765 43210',
            pickup: 'Royal Tailors Workshop',
            drop: 'Vampire Creek, Plot 12, Delhi',
            status: 'Pending',
            items: ['3-Piece Tuxedo (Packed)'],
            urgent: false,
            photoProof: {},
            isComplete: false
        }
    ]);

    const [activeTaskId, setActiveTaskId] = useState(null);

    const activeTask = tasks.find(t => t.id === activeTaskId);
    const pendingTasks = tasks.filter(t => !t.isComplete && t.id !== activeTaskId);

    // Helper functions for state machines
    const handleStartTask = (taskId) => {
        if (activeTaskId) {
            alert('Finish the current Active Dispatch before starting another task.');
            return;
        }

        // When clicking Start task, active dispatch begins.
        // We do not change the status until they click the specific action button inside Active mode.
        setActiveTaskId(taskId);
    };

    const handlePhotoUpload = (taskId, stepStepKey) => {
        setTasks(prev => prev.map(t => {
            if (t.id === taskId) {
                return { ...t, photoProof: { ...t.photoProof, [stepStepKey]: true } };
            }
            return t;
        }));
    };

    const handleUpdateStatus = (taskId, newStatus, completeTask = false) => {
        setTasks(prev => prev.map(t => {
            if (t.id === taskId) {
                return { ...t, status: newStatus, isComplete: completeTask };
            }
            return t;
        }));

        if (completeTask) {
            setActiveTaskId(null); // Release lock
        }
    };

    // Renders the bottom action area for the Active Task based on its current type and status
    const renderActiveTaskActions = (task) => {
        const btnClass = "w-full rounded-xl py-2.5 font-black tracking-[0.12em] text-[10px] uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95";

        if (task.type === 'Fabric Pickup') {
            switch (task.status) {
                case 'Pending':
                    return (
                        <button onClick={() => handleUpdateStatus(task.id, 'On the Way')} className={`${btnClass} bg-[#142921] text-white hover:bg-[#1C3E33] shadow-slate-100`}>
                            <Navigation size={14} /> Mark On the Way
                        </button>
                    );
                case 'On the Way':
                    return (
                        <button onClick={() => handleUpdateStatus(task.id, 'Reached')} className={`${btnClass} bg-[#142921] text-white hover:bg-[#1C3E33] shadow-slate-100`}>
                            <MapPin size={14} /> Mark Reached Customer
                        </button>
                    );
                case 'Reached':
                    const hasFabricPhoto = task.photoProof['Collected'];
                    return (
                        <div className="space-y-2.5">
                            <div className={`p-3 rounded-xl border flex items-center justify-between transition-all ${hasFabricPhoto ? 'bg-emerald-100 border-emerald-200' : 'bg-slate-50 border-slate-100 border-dashed'}`}>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Camera size={16} className={hasFabricPhoto ? "text-emerald-800" : "text-[#142921]"} />
                                    <div>
                                        <p className={`text-[9px] font-black tracking-widest uppercase leading-tight ${hasFabricPhoto ? "text-emerald-700" : "text-slate-700"}`}>Fabric Proof</p>
                                        <p className={`text-[8px] font-bold tracking-widest uppercase ${hasFabricPhoto ? "text-emerald-800" : "text-slate-400"}`}>Mandatory</p>
                                    </div>
                                </div>
                                {hasFabricPhoto ? (
                                    <div className="bg-emerald-800 text-white p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                ) : (
                                    <button
                                        onClick={() => document.getElementById('photo-upload-input').click()}
                                        className="text-[8px] font-black tracking-widest uppercase text-[#142921] bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all"
                                    >
                                        Upload
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={() => handleUpdateStatus(task.id, 'Picked Up')}
                                disabled={!hasFabricPhoto}
                                className={`${btnClass} ${hasFabricPhoto ? 'bg-[#142921] text-white shadow-slate-100 hover:bg-[#1C3E33]' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`}
                            >
                                <Package size={14} /> Picked Up & Proceed
                            </button>
                        </div>
                    );
                case 'Picked Up':
                    return (
                        <button onClick={() => handleUpdateStatus(task.id, 'Delivered to Tailor', true)} className={`${btnClass} bg-emerald-800 text-white hover:bg-emerald-800 shadow-emerald-100`}>
                            <Store size={14} /> Mark Delivered to Tailor
                        </button>
                    );
                default:
                    return null;
            }
        } else if (task.type === 'Final Delivery') {
            switch (task.status) {
                case 'Pending':
                    const hasGarmentPhoto = task.photoProof['TailorPickup'];
                    return (
                        <div className="space-y-2.5">
                            <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl flex gap-2 text-amber-800">
                                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                <p className="text-[10px] font-medium leading-snug">Pick up stitched garment from workshop.</p>
                            </div>
                            <div className={`p-3 rounded-xl border flex items-center justify-between transition-all ${hasGarmentPhoto ? 'bg-emerald-100 border-emerald-200' : 'bg-slate-50 border-slate-100 border-dashed'}`}>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Camera size={16} className={hasGarmentPhoto ? "text-emerald-800" : "text-[#142921]"} />
                                    <div>
                                        <p className={`text-[9px] font-black tracking-widest uppercase leading-tight ${hasGarmentPhoto ? "text-emerald-700" : "text-slate-700"}`}>Garment Proof</p>
                                        <p className={`text-[8px] font-bold tracking-widest uppercase ${hasGarmentPhoto ? "text-emerald-800" : "text-slate-400"}`}>Mandatory</p>
                                    </div>
                                </div>
                                {hasGarmentPhoto ? (
                                    <div className="bg-emerald-800 text-white p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                ) : (
                                    <button
                                        onClick={() => document.getElementById('photo-upload-input').click()}
                                        className="text-[8px] font-black tracking-widest uppercase text-[#142921] bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all"
                                    >
                                        Upload
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={() => handleUpdateStatus(task.id, 'Collected from Tailor')}
                                disabled={!hasGarmentPhoto}
                                className={`${btnClass} ${hasGarmentPhoto ? 'bg-[#142921] text-white shadow-slate-100 hover:bg-[#1C3E33]' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`}
                            >
                                <Store size={14} /> Collected from Tailor
                            </button>
                        </div>
                    );
                case 'Collected from Tailor':
                    return (
                        <button onClick={() => handleUpdateStatus(task.id, 'Out for Delivery')} className={`${btnClass} bg-[#142921] text-white hover:bg-[#1C3E33] shadow-slate-100`}>
                            <Navigation size={14} /> Out for Delivery
                        </button>
                    );
                case 'Out for Delivery':
                    const hasDeliveryPhoto = task.photoProof['DeliveredProof'];
                    return (
                        <div className="space-y-2.5">
                            <div className={`p-3 rounded-xl border flex items-center justify-between transition-all ${hasDeliveryPhoto ? 'bg-emerald-100 border-emerald-200' : 'bg-slate-50 border-slate-100 border-dashed'}`}>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Camera size={16} className={hasDeliveryPhoto ? "text-emerald-800" : "text-[#142921]"} />
                                    <div>
                                        <p className={`text-[9px] font-black tracking-widest uppercase leading-tight ${hasDeliveryPhoto ? "text-emerald-700" : "text-slate-700"}`}>Delivery Proof</p>
                                        <p className={`text-[8px] font-bold tracking-widest uppercase ${hasDeliveryPhoto ? "text-emerald-800" : "text-slate-400"}`}>Mandatory</p>
                                    </div>
                                </div>
                                {hasDeliveryPhoto ? (
                                    <div className="bg-emerald-800 text-white p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                ) : (
                                    <button
                                        onClick={() => document.getElementById('photo-upload-input').click()}
                                        className="text-[8px] font-black tracking-widest uppercase text-[#142921] bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all"
                                    >
                                        Upload
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={() => handleUpdateStatus(task.id, 'Delivered', true)}
                                disabled={!hasDeliveryPhoto}
                                className={`${btnClass} ${hasDeliveryPhoto ? 'bg-emerald-800 text-white shadow-emerald-100 hover:bg-emerald-800' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`}
                            >
                                <CheckCircle2 size={14} /> Mark Delivered
                            </button>
                        </div>
                    );
                default:
                    return null;
            }
        }
    };

    return (
        <div className="space-y-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div>
                <div className="flex items-center gap-3 text-[#142921] mb-1">
                    <div className="h-px w-8 bg-slate-200"></div>
                    <span className="text-[11px] opacity-80 font-black uppercase tracking-[0.2em]">Operations Center</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight capitalize">
                    {activeTask ? 'Active Dispatch' : 'Assigned Tasks'}
                </h1>
            </div>

            <AnimatePresence mode="popLayout">
                {/* ACTIVE TASK VIEW */}
                {activeTask && (
                    <motion.div
                        key="active-task-view"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-[1.5rem] border border-slate-100 shadow-md overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-[100px] -z-0"></div>
                        <div className="p-5 relative z-10 space-y-4">

                            {/* Header Info */}
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${activeTask.type === 'Fabric Pickup' ? 'bg-slate-50 text-[#142921]' : 'bg-emerald-100 text-emerald-800'}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
                                        {activeTask.type}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 tracking-tight capitalize">Task #{activeTask.id}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] font-bold text-slate-400 capitalize tracking-wider leading-none">Status</p>
                                    <p className="text-[13px] font-black text-[#142921] tracking-tight mt-1 capitalize leading-none">{activeTask.status}</p>
                                </div>
                            </div>

                            {/* Address details */}
                            <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-100">
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-slate-100 text-[#142921] flex items-center justify-center shrink-0">
                                        <MapPin size={14} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 capitalize tracking-wider leading-none mb-1">Pickup From</p>
                                        <p className="text-[13px] font-bold text-slate-700 leading-tight capitalize">{activeTask.pickup}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-slate-200 text-[#142921] flex items-center justify-center shrink-0">
                                        <Store size={12} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 capitalize tracking-wider leading-none mb-1">Drop To</p>
                                        <p className="text-[13px] font-bold text-slate-700 leading-tight capitalize">{activeTask.drop}</p>
                                    </div>
                                </div>
                                {activeTask.customer && (
                                    <div className="flex gap-2.5 items-center pt-2.5 border-t border-slate-200/60 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                            <User size={13} className="text-slate-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-1.5 mb-0.5">
                                                <p className="text-[12px] font-black text-slate-800 capitalize leading-none">{activeTask.customer}</p>
                                                <span className="text-[7px] font-black bg-slate-100 text-[#142921] px-1 py-0.5 rounded uppercase tracking-tighter">Customer</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-400 tracking-wide leading-none">{activeTask.customerPhone}</p>
                                        </div>
                                        <button className="w-8 h-8 bg-slate-50 text-[#142921] rounded-lg flex items-center justify-center hover:bg-slate-100 active:scale-90 transition-all shadow-sm">
                                            <Phone size={13} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Execution Area */}
                            <div className="pt-0">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-px w-6 bg-slate-200"></div>
                                    <span className="text-[9px] font-bold text-slate-400 capitalize tracking-wider">Execute Action</span>
                                    <div className="h-px flex-1 bg-slate-200"></div>
                                </div>
                                {renderActiveTaskActions(activeTask)}
                            </div>

                        </div>
                    </motion.div>
                )}

                <input
                    type="file"
                    id="photo-upload-input"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0] && activeTask) {
                            // Precise logic to find which step needs photo
                            let stepKey = '';
                            if (activeTask.type === 'Fabric Pickup') {
                                if (activeTask.status === 'Reached') stepKey = 'Collected';
                            } else if (activeTask.type === 'Final Delivery') {
                                if (activeTask.status === 'Pending') stepKey = 'TailorPickup';
                                if (activeTask.status === 'Out for Delivery') stepKey = 'DeliveredProof';
                            }

                            if (stepKey) {
                                handlePhotoUpload(activeTask.id, stepKey);
                                // Reset to allow same file selection again
                                e.target.value = '';
                            }
                        }
                    }}
                />

                {/* PENDING TASKS LIST VIEW */}
                {!activeTask && (
                    <motion.div
                        key="pending-tasks-view"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="space-y-4"
                    >
                        {pendingTasks.map((task) => (
                            <div key={task.id} className="bg-white p-5 rounded-[1.5rem] border-2 border-slate-100 shadow-sm transition-all hover:border-slate-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <p className="text-[14px] font-black text-slate-800 tracking-tight capitalize">{task.type}</p>
                                        <p className="text-[10px] font-bold text-slate-500 capitalize tracking-wide">{task.customer}</p>
                                    </div>
                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${task.urgent ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-500'}`}>
                                        {task.urgent ? 'Urgent' : 'Standard'}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-5 pl-1">
                                    <div className="flex gap-3">
                                        <div className="flex flex-col items-center mt-1">
                                            <div className="w-2 h-2 rounded-full border border-slate-400 bg-white"></div>
                                            <div className="w-px h-6 bg-slate-200 my-1"></div>
                                            <div className="w-2 h-2 rounded-full bg-emerald-800"></div>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <p className="text-[12px] font-bold text-[#142921] leading-tight capitalize truncate max-w-[200px]">{task.pickup}</p>
                                            <p className="text-[12px] font-bold text-[#142921] leading-tight capitalize truncate max-w-[200px]">{task.drop}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleStartTask(task.id)}
                                    className="w-full bg-slate-900 text-white rounded-xl py-3.5 font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#142921] active:scale-95 transition-all shadow-md"
                                >
                                    Start Task <Navigation size={14} />
                                </button>
                            </div>
                        ))}

                        {pendingTasks.length === 0 && (
                            <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <p className="text-slate-500 font-bold capitalize tracking-wide text-[14px]">No pending tasks assigned.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Tasks;

