import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Package,
    Scissors,
    Truck,
    CheckCircle,
    Star,
    AlertCircle,
    Clock,
    MapPin,
    Phone,
    MessageCircle,
    RefreshCw,
    Eye,
    Download,
    Calendar
} from 'lucide-react';

const ConsumerDashboard = () => {
    const [activeTab, setActiveTab] = useState('stitching');

    // Mock data for demonstration
    const stitchingOrders = [
        {
            id: 'ST-7821',
            category: 'Kurti',
            deliverySpeed: 'Express',
            status: 'cutting',
            statusText: 'Cutting',
            orderDate: '2024-02-20',
            estimatedDelivery: '2024-03-02',
            price: 1299,
            paymentStatus: 'paid',
            canCancel: false,
            timeline: [
                { status: 'placed', completed: true, date: 'Feb 20', label: 'Order Placed' },
                { status: 'pickup', completed: true, date: 'Feb 21', label: 'Fabric Picked' },
                { status: 'tailor', completed: true, date: 'Feb 22', label: 'With Tailor' },
                { status: 'cutting', completed: false, date: 'Feb 24', label: 'Cutting' },
                { status: 'stitching', completed: false, date: 'Feb 26', label: 'Stitching' },
                { status: 'ironing', completed: false, date: 'Feb 28', label: 'Ironing' },
                { status: 'ready', completed: false, date: 'Mar 01', label: 'Ready' },
                { status: 'delivery', completed: false, date: 'Mar 02', label: 'Out for Delivery' },
                { status: 'delivered', completed: false, date: 'Mar 02', label: 'Delivered' }
            ]
        },
        {
            id: 'ST-7822',
            category: 'Suit',
            deliverySpeed: 'Premium',
            status: 'ready',
            statusText: 'Ready for Delivery',
            orderDate: '2024-02-18',
            estimatedDelivery: '2024-02-25',
            price: 3999,
            paymentStatus: 'paid',
            canCancel: false,
            timeline: [
                { status: 'placed', completed: true, date: 'Feb 18', label: 'Order Placed' },
                { status: 'pickup', completed: true, date: 'Feb 19', label: 'Fabric Picked' },
                { status: 'tailor', completed: true, date: 'Feb 20', label: 'With Tailor' },
                { status: 'cutting', completed: true, date: 'Feb 21', label: 'Cutting' },
                { status: 'stitching', completed: true, date: 'Feb 23', label: 'Stitching' },
                { status: 'ironing', completed: true, date: 'Feb 24', label: 'Ironing' },
                { status: 'ready', completed: true, date: 'Feb 25', label: 'Ready' },
                { status: 'delivery', completed: false, date: 'Feb 25', label: 'Out for Delivery' },
                { status: 'delivered', completed: false, date: 'Feb 25', label: 'Delivered' }
            ]
        },
        {
            id: 'ST-7823',
            category: 'Blouse',
            deliverySpeed: 'Normal',
            status: 'placed',
            statusText: 'Order Placed',
            orderDate: '2024-02-24',
            estimatedDelivery: '2024-03-11',
            price: 1499,
            paymentStatus: 'pending',
            canCancel: true,
            timeline: [
                { status: 'placed', completed: true, date: 'Feb 24', label: 'Order Placed' },
                { status: 'pickup', completed: false, date: 'Feb 25', label: 'Fabric Picked' },
                { status: 'tailor', completed: false, date: 'Feb 26', label: 'With Tailor' },
                { status: 'cutting', completed: false, date: 'Feb 28', label: 'Cutting' },
                { status: 'stitching', completed: false, date: 'Mar 03', label: 'Stitching' },
                { status: 'ironing', completed: false, date: 'Mar 08', label: 'Ironing' },
                { status: 'ready', completed: false, date: 'Mar 10', label: 'Ready' },
                { status: 'delivery', completed: false, date: 'Mar 11', label: 'Out for Delivery' },
                { status: 'delivered', completed: false, date: 'Mar 11', label: 'Delivered' }
            ]
        }
    ];

    const ecommerceOrders = [
        {
            id: 'EC-1452',
            items: ['Linen Kurti (Large)', 'Cotton Palazzo'],
            status: 'delivered',
            statusText: 'Delivered',
            orderDate: '2024-02-15',
            deliveredDate: '2024-02-18',
            price: 2499,
            paymentStatus: 'paid',
            canReturn: true,
            returnDaysLeft: 7
        },
        {
            id: 'EC-1453',
            items: ['Silk Saree', 'Matching Blouse'],
            status: 'shipped',
            statusText: 'Shipped',
            orderDate: '2024-02-22',
            estimatedDelivery: '2024-02-26',
            price: 4999,
            paymentStatus: 'paid',
            trackingId: 'TRK123456789'
        }
    ];

    const getStatusColor = (status) => {
        const colors = {
            placed: 'bg-blue-100 text-blue-800',
            pickup: 'bg-amber-100 text-amber-800',
            tailor: 'bg-purple-100 text-purple-800',
            cutting: 'bg-orange-100 text-orange-800',
            stitching: 'bg-indigo-100 text-indigo-800',
            ironing: 'bg-pink-100 text-pink-800',
            ready: 'bg-emerald-100 text-emerald-800',
            delivery: 'bg-cyan-100 text-cyan-800',
            delivered: 'bg-green-100 text-green-800',
            shipped: 'bg-blue-100 text-blue-800'
        };
        return colors[status] || 'bg-slate-100 text-slate-800';
    };

    const TimelineTracker = ({ timeline, currentStatus }) => (
        <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-4">
                {timeline.map((step, index) => (
                    <div key={step.status} className="relative flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                            step.completed 
                                ? 'bg-emerald-500 text-white' 
                                : currentStatus === step.status 
                                    ? 'bg-primary-500 text-white animate-pulse'
                                    : 'bg-slate-300 text-slate-600'
                        }`}>
                            {step.completed ? (
                                <CheckCircle size={16} />
                            ) : (
                                <span className="text-xs font-black">{index + 1}</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className={`font-black ${step.completed ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {step.label}
                                </h4>
                                <span className="text-xs text-slate-500">{step.date}</span>
                            </div>
                            {currentStatus === step.status && (
                                <p className="text-sm text-primary-600 font-black mt-1">In Progress</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const OrderCard = ({ order, type }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:shadow-lg transition-all"
        >
            {/* Order Header */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-black text-slate-900">#{order.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-black ${getStatusColor(order.status)}`}>
                            {order.statusText}
                        </span>
                    </div>
                    {type === 'stitching' ? (
                        <div className="space-y-1">
                            <p className="text-sm font-black text-slate-700">{order.category}</p>
                            <p className="text-xs text-slate-500">
                                {order.deliverySpeed} Delivery • Est. {order.estimatedDelivery}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {order.items.map((item, idx) => (
                                <p key={idx} className="text-sm font-black text-slate-700">{item}</p>
                            ))}
                            {order.trackingId && (
                                <p className="text-xs text-slate-500">Tracking: {order.trackingId}</p>
                            )}
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <p className="text-xl font-black text-primary-600">₹{order.price}</p>
                    <p className="text-xs text-slate-500">
                        {order.paymentStatus === 'paid' ? 'Paid' : 'Payment Pending'}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-4 border-t">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-black hover:bg-slate-200 transition-all">
                    <Eye size={14} />
                    View Details
                </button>
                
                {type === 'stitching' && order.status === 'ready' && (
                    <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-xl text-sm font-black hover:bg-primary-200 transition-all">
                            <Truck size={14} />
                            Track Delivery
                        </button>
                    </>
                )}

                {type === 'stitching' && order.status === 'delivered' && (
                    <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-sm font-black hover:bg-amber-200 transition-all">
                            <Star size={14} />
                            Rate & Review
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-black hover:bg-blue-200 transition-all">
                            <RefreshCw size={14} />
                            Free Alteration
                        </button>
                    </>
                )}

                {type === 'ecommerce' && order.canReturn && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-xl text-sm font-black hover:bg-rose-200 transition-all">
                        <RefreshCw size={14} />
                        Return ({order.returnDaysLeft} days left)
                    </button>
                )}

                {order.canCancel && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-xl text-sm font-black hover:bg-rose-200 transition-all">
                        <AlertCircle size={14} />
                        Cancel Order
                    </button>
                )}

                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-black hover:bg-slate-200 transition-all">
                    <MessageCircle size={14} />
                    Support
                </button>
            </div>

            {/* Timeline for Stitching Orders */}
            {type === 'stitching' && (
                <div className="mt-6 pt-6 border-t">
                    <h4 className="font-black text-slate-900 mb-4">Order Timeline</h4>
                    <TimelineTracker timeline={order.timeline} currentStatus={order.status} />
                </div>
            )}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                        My Orders
                    </h1>
                    <p className="text-xl text-slate-600">
                        Track your orders and manage your account
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex bg-white rounded-2xl border border-slate-200 p-1 mb-8 w-fit">
                    <button
                        onClick={() => setActiveTab('stitching')}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black transition-all ${
                            activeTab === 'stitching'
                                ? 'bg-primary-600 text-white'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Scissors size={20} />
                        Stitching Orders
                    </button>
                    <button
                        onClick={() => setActiveTab('ecommerce')}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black transition-all ${
                            activeTab === 'ecommerce'
                                ? 'bg-primary-600 text-white'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <Package size={20} />
                        E-commerce Purchases
                    </button>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {activeTab === 'stitching' ? (
                        <>
                            {stitchingOrders.length > 0 ? (
                                stitchingOrders.map((order) => (
                                    <OrderCard key={order.id} order={order} type="stitching" />
                                ))
                            ) : (
                                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                                    <Scissors size={48} className="text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-black text-slate-900 mb-2">No Stitching Orders</h3>
                                    <p className="text-slate-600 mb-6">
                                        You haven't placed any custom stitching orders yet
                                    </p>
                                    <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-500 transition-all">
                                        Place First Order
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {ecommerceOrders.length > 0 ? (
                                ecommerceOrders.map((order) => (
                                    <OrderCard key={order.id} order={order} type="ecommerce" />
                                ))
                            ) : (
                                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                                    <Package size={48} className="text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-black text-slate-900 mb-2">No E-commerce Orders</h3>
                                    <p className="text-slate-600 mb-6">
                                        You haven't purchased any readymade products yet
                                    </p>
                                    <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-500 transition-all">
                                        Shop Now
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Scissors size={24} className="text-blue-600" />
                        </div>
                        <p className="text-2xl font-black text-slate-900">{stitchingOrders.length}</p>
                        <p className="text-sm text-slate-600">Stitching Orders</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Package size={24} className="text-green-600" />
                        </div>
                        <p className="text-2xl font-black text-slate-900">{ecommerceOrders.length}</p>
                        <p className="text-sm text-slate-600">Ready Made Orders</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Truck size={24} className="text-amber-600" />
                        </div>
                        <p className="text-2xl font-black text-slate-900">2</p>
                        <p className="text-sm text-slate-600">In Transit</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <CheckCircle size={24} className="text-emerald-600" />
                        </div>
                        <p className="text-2xl font-black text-slate-900">1</p>
                        <p className="text-sm text-slate-600">Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerDashboard;
