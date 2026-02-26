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
    Calendar,
    User,
    TrendingUp,
    Award,
    Filter,
    Search,
    Bell,
    Settings,
    HelpCircle,
    ArrowRight,
    ArrowLeft,
    Heart,
    Share2,
    Zap
} from 'lucide-react';

const ConsumerDashboard = () => {
    const [activeTab, setActiveTab] = useState('stitching');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

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
            progress: 35,
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
            progress: 85,
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
            progress: 10,
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
            returnDaysLeft: 7,
            image: 'https://images.unsplash.com/photo-1594632220059-4c5b3c5a5f1?auto=format&fit=crop&q=80&w=300'
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
            trackingId: 'TRK123456789',
            image: 'https://images.unsplash.com/photo-1539109233097-b2bf2f8f333b?auto=format&fit=crop&q=80&w=300'
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

    const TimelineTracker = ({ timeline, currentStatus, progress }) => (
        <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
                {timeline.map((step, index) => (
                    <div key={step.status} className="relative flex items-center gap-4">
                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            step.completed 
                                ? 'bg-emerald-500 text-white' 
                                : currentStatus === step.status 
                                    ? 'bg-blue-500 text-white animate-pulse' 
                                    : 'bg-slate-300 text-slate-600'
                        }`}>
                            {step.completed ? (
                                <CheckCircle size={16} />
                            ) : (
                                <span className="text-xs font-bold">{index + 1}</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className={`font-medium ${
                                    step.completed ? 'text-slate-900' : 'text-slate-500'
                                }`}>
                                    {step.label}
                                </h4>
                                <span className="text-xs text-slate-500">{step.date}</span>
                            </div>
                            {currentStatus === step.status && (
                                <div className="flex items-center gap-2 text-blue-600">
                                    <Zap size={14} />
                                    <span className="text-sm font-medium">In Progress</span>
                                </div>
                            )}
                        </div>
                        {index < timeline.length - 1 && (
                            <div className={`absolute left-9 top-5 w-full h-0.5 transition-all ${
                                step.completed ? 'bg-emerald-500' : 'bg-slate-200'
                            }`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const OrderCard = ({ order, type }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all"
        >
            {/* Order Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        type === 'stitching' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                    }`}>
                        {type === 'stitching' ? <Scissors size={24} /> : <Package size={24} />}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-bold text-slate-900">#{order.id}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.statusText}
                            </span>
                        </div>
                        {type === 'stitching' ? (
                            <div className="space-y-1">
                                <p className="font-medium text-slate-900">{order.category}</p>
                                <p className="text-sm text-slate-600">
                                    {order.deliverySpeed} Delivery • Est. {order.estimatedDelivery}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                {order.items.map((item, idx) => (
                                    <p key={idx} className="text-sm font-medium text-slate-900">{item}</p>
                                ))}
                                {order.trackingId && (
                                    <p className="text-xs text-slate-600">Tracking: {order.trackingId}</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xl font-bold text-slate-900">₹{order.price}</p>
                    <p className="text-xs text-slate-500">
                        {order.paymentStatus === 'paid' ? 'Paid' : 'Payment Pending'}
                    </p>
                </div>
            </div>

            {/* Progress Bar for Stitching */}
            {type === 'stitching' && (
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Order Progress</span>
                        <span className="text-sm font-medium text-blue-600">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${order.progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all">
                    <Eye size={16} />
                    View Details
                </button>
                
                {type === 'stitching' && order.status === 'ready' && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-all">
                        <Truck size={16} />
                        Track Delivery
                    </button>
                )}

                {type === 'stitching' && order.status === 'delivered' && (
                    <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-all">
                            <Star size={16} />
                            Rate & Review
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-all">
                            <RefreshCw size={16} />
                            Free Alteration
                        </button>
                    </>
                )}

                {type === 'ecommerce' && order.canReturn && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg text-sm font-medium hover:bg-rose-200 transition-all">
                        <RefreshCw size={16} />
                        Return ({order.returnDaysLeft} days)
                    </button>
                )}

                {order.canCancel && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg text-sm font-medium hover:bg-rose-200 transition-all">
                        <AlertCircle size={16} />
                        Cancel Order
                    </button>
                )}

                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all">
                    <MessageCircle size={16} />
                    Support
                </button>
            </div>

            {/* Timeline for Stitching */}
            {type === 'stitching' && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4">Order Timeline</h4>
                    <TimelineTracker timeline={order.timeline} currentStatus={order.status} progress={order.progress} />
                </div>
            )}
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                            My Orders
                        </h1>
                        <p className="text-lg text-slate-600 mt-2">
                            Track your orders and manage your account
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search orders..."
                                className="pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                            />
                        </div>

                        {/* Filters */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all"
                        >
                            <Filter size={18} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl border border-slate-200 p-1 mb-8">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('stitching')}
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                                activeTab === 'stitching'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                            <Scissors size={20} />
                            Stitching Orders
                        </button>
                        <button
                            onClick={() => setActiveTab('ecommerce')}
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                                activeTab === 'ecommerce'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-slate-600 hover:bg-slate-100'
                            }`}
                        >
                            <Package size={20} />
                            E-commerce Purchases
                        </button>
                    </div>
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
                                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                                    <Scissors size={48} className="text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">No Stitching Orders</h3>
                                    <p className="text-slate-600 mb-6">
                                        You haven't placed any custom stitching orders yet
                                    </p>
                                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all">
                                        Place First Order
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {ecommerceOrders.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {ecommerceOrders.map((order) => (
                                        <OrderCard key={order.id} order={order} type="ecommerce" />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                                    <Package size={48} className="text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">No E-commerce Orders</h3>
                                    <p className="text-slate-600 mb-6">
                                        You haven't purchased any readymade products yet
                                    </p>
                                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all">
                                        Shop Now
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center space-y-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                            <Scissors size={24} className="text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">{stitchingOrders.length}</p>
                        <p className="text-sm text-slate-600">Stitching Orders</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center space-y-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                            <Package size={24} className="text-purple-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">{ecommerceOrders.length}</p>
                        <p className="text-sm text-slate-600">Ready Made Orders</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center space-y-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto">
                            <Truck size={24} className="text-amber-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">2</p>
                        <p className="text-sm text-slate-600">In Transit</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center space-y-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                            <CheckCircle size={24} className="text-green-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">1</p>
                        <p className="text-sm text-slate-600">Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerDashboard;
