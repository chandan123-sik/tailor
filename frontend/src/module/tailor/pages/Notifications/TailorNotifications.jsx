import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

const TailorNotifications = () => {
    const notifications = [
        {
            id: 1,
            title: 'New Order Received',
            message: 'You have a new stitching request for an Executive 3-Piece Suit.',
            time: '2 minutes ago',
            type: 'order',
            unread: true
        },
        {
            id: 2,
            title: 'Payment Confirmed',
            message: 'Payment for order #SH-7612 has been processed successfully.',
            time: '2 hours ago',
            type: 'payment',
            unread: false
        },
        {
            id: 3,
            title: 'Measurement Updated',
            message: 'Customer S. Kumar updated their measurements for order #ST-9921.',
            time: '5 hours ago',
            type: 'update',
            unread: false
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'order': return <Bell className="text-blue-500" size={20} />;
            case 'payment': return <CheckCircle className="text-emerald-500" size={20} />;
            case 'update': return <Clock className="text-amber-500" size={20} />;
            default: return <AlertCircle className="text-slate-500" size={20} />;
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Notifications
                    </h1>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium mt-3">Stay updated with your latest workshop activities.</p>
                </div>
                <button className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline">
                    Mark all as read
                </button>
            </div>

            <div className="grid gap-4">
                {notifications.map((notif, idx) => (
                    <motion.div
                        key={notif.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white p-5 lg:p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4 group cursor-pointer hover:border-primary-100 transition-all ${notif.unread ? 'ring-2 ring-primary-50 ring-offset-0' : ''}`}
                    >
                        <div className={`p-3 rounded-2xl bg-slate-50 shrink-0 group-hover:bg-white transition-colors shadow-inner`}>
                            {getIcon(notif.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-4">
                                <h3 className={`text-sm lg:text-base font-bold text-slate-900 uppercase tracking-tight leading-none`}>
                                    {notif.title}
                                </h3>
                                <span className="text-[10px] text-slate-400 font-bold uppercase shrink-0">{notif.time}</span>
                            </div>
                            <p className="text-slate-500 text-xs lg:text-sm mt-2 leading-relaxed">
                                {notif.message}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            {notif.unread && <div className="w-2 h-2 bg-primary-500 rounded-full" />}
                            <ChevronRight size={18} className="text-slate-300 group-hover:text-primary-600 transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TailorNotifications;
