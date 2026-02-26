import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Truck,
    Package,
    MapPin,
    Phone,
    Camera,
    Navigation,
    ChevronRight,
    Search,
    Filter,
    CheckCircle2,
    X,
    Maximize2
} from 'lucide-react';

const Tasks = () => {
    const [filter, setFilter] = useState('active');
    const [selectedTask, setSelectedTask] = useState(null);

    // Initial Mock Data
    const [tasks, setTasks] = useState([
        {
            id: 'TK-9921',
            type: 'Fabric Pickup',
            customer: 'Elena Gilbert',
            customerPhone: '+91 98765 43210',
            pickup: 'Mystic Manor, Lane 4, Delhi',
            drop: 'Royal Tailors Workshop',
            status: 'On the Way',
            items: ['2 Meters Silk Fabric', 'Measurement Slip'],
            urgent: true,
            photoProof: null
        },
        {
            id: 'TK-8842',
            type: 'Final Delivery',
            customer: 'Damon Salvatore',
            customerPhone: '+91 88765 43210',
            pickup: 'Royal Tailors Workshop',
            drop: 'Vampire Creek, Plot 12, Delhi',
            status: 'Ready',
            items: ['3-Piece Tuxedo (Packed)'],
            urgent: false,
            photoProof: null
        },
    ]);

    const statusSequence = ['On the Way', 'Reached', 'Picked Up', 'Delivered'];
    const deliverySequence = ['On the Way', 'Reached', 'Collected', 'Delivered'];

    const handleUpdateStatus = (taskId) => {
        setTasks(prev => prev.map(task => {
            if (task.id === taskId) {
                const seq = task.type === 'Fabric Pickup' ? statusSequence : deliverySequence;
                const currentIndex = seq.indexOf(task.status);

                // If special case: "Ready" state for final delivery
                if (task.status === 'Ready') return { ...task, status: 'On the Way' };

                if (currentIndex < seq.length - 1) {
                    const nextStatus = seq[currentIndex + 1];
                    // If next status is 'Picked Up' or 'Delivered', we simulate photo requirement
                    return { ...task, status: nextStatus };
                }
            }
            return task;
        }));
    };

    const getStatusIndex = (task) => {
        const seq = task.type === 'Fabric Pickup' ? statusSequence : deliverySequence;
        return seq.indexOf(task.status);
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Page Header */}
            <div>
                <div className="flex items-center gap-3 text-indigo-600 mb-1">
                    <div className="h-px w-8 bg-indigo-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Operations Center</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                    Assigned <span className="text-slate-400">Tasks</span>
                </h1>
            </div>

            {/* Filters */}
            <div className="flex bg-white p-2 rounded-3xl border border-slate-100 shadow-sm">
                {['active', 'completed'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-indigo-600'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Task List */}
            <div className="space-y-6">
                {tasks.filter(t => filter === 'active' ? t.status !== 'Delivered' : t.status === 'Delivered').map((task, idx) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:border-indigo-100 transition-all"
                    >
                        {/* Task Header */}
                        <div className="p-8 border-b border-slate-50">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-2">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${task.type === 'Fabric Pickup' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        {task.type === 'Fabric Pickup' ? <Truck size={12} /> : <Package size={12} />}
                                        {task.type}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">#{task.id}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                                    <p className="text-sm font-black text-indigo-600 italic tracking-tighter mt-1">{task.status}</p>
                                </div>
                            </div>

                            {/* Address Flow */}
                            <div className="space-y-6 relative">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full border-2 border-indigo-400 bg-white z-10"></div>
                                        <div className="w-0.5 flex-1 bg-slate-100 border-dashed border-l"></div>
                                        <div className="w-3 h-3 rounded-full bg-indigo-500 z-10"></div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Pickup Location</p>
                                            <p className="text-xs font-bold text-slate-600">{task.pickup}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Drop Location</p>
                                            <p className="text-xs font-bold text-slate-600">{task.drop}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Footer */}
                        <div className="p-6 bg-slate-50/50 flex gap-4">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all">
                                <Navigation size={16} /> Navigate
                            </button>
                            <button className="w-16 h-14 bg-white border border-slate-100 text-indigo-600 rounded-2xl flex items-center justify-center hover:bg-indigo-50 transition-all active:scale-90">
                                <Phone size={20} />
                            </button>
                            <button
                                onClick={() => handleUpdateStatus(task.id)}
                                className="flex-[1.5] flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all"
                            >
                                <CheckCircle2 size={16} />
                                {task.status === 'Ready'
                                    ? 'Start Journey'
                                    : task.status === 'On the Way'
                                        ? 'Mark Reach'
                                        : task.status === 'Reached'
                                            ? (task.type === 'Fabric Pickup' ? 'Fabric Collected' : 'Garment Collected')
                                            : 'Complete Job'}
                            </button>
                        </div>

                        {/* Photo Requirement Teaser */}
                        {(task.status === 'Reached' || task.status === 'Picked Up' || task.status === 'Collected') && (
                            <div className="px-8 pb-6 bg-slate-50/50">
                                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 border-dashed flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Camera size={18} className="text-indigo-600" />
                                        <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">Photo Proof Mandatory</span>
                                    </div>
                                    <button className="text-[9px] font-black text-indigo-600 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-indigo-100">Upload</button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}

                {tasks.filter(t => filter === 'active' ? t.status !== 'Delivered' : t.status === 'Delivered').length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-slate-200 mx-auto mb-6">
                            <Truck size={40} />
                        </div>
                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs italic">No {filter} tasks found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tasks;
