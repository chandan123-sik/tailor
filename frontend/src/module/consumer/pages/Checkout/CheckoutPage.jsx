import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin,
    CreditCard,
    Truck,
    Package,
    Shield,
    AlertCircle,
    CheckCircle,
    Plus,
    X,
    Edit2,
    Save,
    ArrowRight,
    ArrowLeft,
    Phone,
    User,
    Mail,
    Calendar,
    Clock,
    FileText,
    IndianRupee,
    Zap,
    Award,
    RefreshCw,
    HelpCircle
} from 'lucide-react';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderData = location.state?.orderData || {};
    
    const [deliveryAddress, setDeliveryAddress] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        landmark: '',
        pincode: '',
        city: '',
        state: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('');
    const [savedAddresses, setSavedAddresses] = useState([
        {
            id: 1,
            name: 'John Doe',
            phone: '+91 9876543210',
            address: '123, Main Street, Sector 15',
            landmark: 'Near City Mall',
            pincode: '190001',
            city: 'Srinagar',
            state: 'Jammu & Kashmir',
            isDefault: true
        }
    ]);

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]?.id || null);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const paymentMethods = [
        {
            id: 'upi',
            name: 'UPI Payment',
            description: 'Pay using UPI apps (GPay, PhonePe, etc.)',
            icon: '💳',
            processingFee: 0,
            instant: true
        },
        {
            id: 'card',
            name: 'Credit/Debit Card',
            description: 'Visa, Mastercard, Rupay',
            icon: '💳',
            processingFee: 0,
            instant: true
        },
        {
            id: 'netbanking',
            name: 'Net Banking',
            description: 'All major banks supported',
            icon: '🏦',
            processingFee: 0,
            instant: false
        },
        {
            id: 'wallet',
            name: 'Wallet',
            description: 'Paytm, PhonePe, Amazon Pay',
            icon: '👛',
            processingFee: 0,
            instant: true
        }
    ];

    const calculateTotal = () => {
        let total = orderData.totalPrice || 0;
        
        // Add delivery charges for readymade orders
        if (orderData.category === 'readymade') {
            total += 99; // Standard delivery
        }
        
        return total;
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        const newAddress = {
            id: savedAddresses.length + 1,
            ...deliveryAddress,
            isDefault: savedAddresses.length === 0
        };
        setSavedAddresses(prev => [...prev, newAddress]);
        setSelectedAddress(newAddress.id);
        setShowAddressForm(false);
        setDeliveryAddress({
            name: '',
            phone: '',
            email: '',
            address: '',
            landmark: '',
            pincode: '',
            city: '',
            state: ''
        });
    };

    const handlePlaceOrder = () => {
        // Simulate order placement
        setOrderPlaced(true);
        setTimeout(() => {
            navigate('/consumer/dashboard');
        }, 3000);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-slate-50 py-12">
                <div className="max-w-2xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-xl p-12 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Order Placed Successfully!</h1>
                        <p className="text-lg text-slate-600 mb-8">
                            Your order has been confirmed and will be delivered soon.
                        </p>
                        <div className="bg-slate-50 rounded-xl p-6 mb-8">
                            <p className="text-sm text-slate-600 mb-2">Order ID</p>
                            <p className="text-xl font-bold text-slate-900">ST-7824</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-600">Redirecting to dashboard...</p>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 3 }}
                                    className="bg-blue-600 h-2 rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                        Checkout
                    </h1>
                    <p className="text-xl text-slate-600">
                        Complete your order details
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Delivery Address */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-slate-900">Delivery Address</h2>
                                <button
                                    onClick={() => setShowAddressForm(!showAddressForm)}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                                >
                                    <Plus size={16} />
                                    Add Address
                                </button>
                            </div>

                            {/* Saved Addresses */}
                            <div className="space-y-4 mb-6">
                                {savedAddresses.map((address) => (
                                    <motion.div
                                        key={address.id}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        onClick={() => setSelectedAddress(address.id)}
                                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                                            selectedAddress === address.id
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        {selectedAddress === address.id && (
                                            <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <CheckCircle size={16} className="text-white" />
                                            </div>
                                        )}
                                        {address.isDefault && (
                                            <div className="absolute top-3 left-3 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                                                Default
                                            </div>
                                        )}
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <User size={16} className="text-slate-400" />
                                                <span className="font-semibold text-slate-900">{address.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone size={16} className="text-slate-400" />
                                                <span className="text-sm text-slate-600">{address.phone}</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <MapPin size={16} className="text-slate-400 mt-0.5" />
                                                <span className="text-sm text-slate-600">
                                                    {address.address}, {address.landmark}, {address.city}, {address.state} - {address.pincode}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Add Address Form */}
                            {showAddressForm && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="border-2 border-dashed border-slate-300 rounded-xl p-6"
                                >
                                    <h3 className="font-semibold text-slate-900 mb-4">Add New Address</h3>
                                    <form onSubmit={handleAddressSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={deliveryAddress.name}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, name: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                required
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={deliveryAddress.phone}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, phone: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={deliveryAddress.email}
                                            onChange={(e) => setDeliveryAddress(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                        />
                                        <textarea
                                            placeholder="Street Address"
                                            value={deliveryAddress.address}
                                            onChange={(e) => setDeliveryAddress(prev => ({ ...prev, address: e.target.value }))}
                                            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none resize-none"
                                            rows={2}
                                            required
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Landmark"
                                                value={deliveryAddress.landmark}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, landmark: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Pincode"
                                                value={deliveryAddress.pincode}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, pincode: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={deliveryAddress.city}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, city: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="State"
                                                value={deliveryAddress.state}
                                                onChange={(e) => setDeliveryAddress(prev => ({ ...prev, state: e.target.value }))}
                                                className="p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex gap-3">
                                            <button
                                                type="submit"
                                                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                                            >
                                                Save Address
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowAddressForm(false)}
                                                className="flex-1 px-4 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Method</h2>
                            
                            {/* Payment Notice */}
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle size={20} className="text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Payment Policy</h4>
                                        <p className="text-blue-800 text-sm">
                                            {orderData.category === 'stitching' 
                                                ? 'Custom stitching orders require 100% advance payment. No COD available.'
                                                : 'Readymade orders support both online payment and COD (₹99 extra).'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <motion.div
                                        key={method.id}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                                            paymentMethod === method.id
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        {paymentMethod === method.id && (
                                            <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <CheckCircle size={16} className="text-white" />
                                            </div>
                                        )}
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
                                                {method.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-slate-900">{method.name}</h3>
                                                <p className="text-sm text-slate-600">{method.description}</p>
                                                {method.instant && (
                                                    <div className="flex items-center gap-2 text-green-600 mt-1">
                                                        <Zap size={14} />
                                                        <span className="text-xs font-medium">Instant Payment</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-8">
                        {/* Order Summary */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
                            
                            {/* Order Items */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        {orderData.category === 'stitching' ? (
                                            <Package size={24} className="text-blue-600" />
                                        ) : (
                                            <ShoppingBag size={24} className="text-purple-600" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-slate-900">
                                            {orderData.category === 'stitching' ? 'Custom Stitching' : 'Readymade Product'}
                                        </h3>
                                        {orderData.category === 'stitching' && (
                                            <p className="text-sm text-slate-600">
                                                {orderData.deliverySpeed} Delivery • {orderData.estimatedDays} days
                                            </p>
                                        )}
                                        <p className="text-sm text-slate-600">
                                            {orderData.fabricSource === 'platform' ? 'Platform Fabric' : 'Customer Fabric'}
                                        </p>
                                    </div>
                                    <p className="font-bold text-slate-900">₹{orderData.totalPrice}</p>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Base Price:</span>
                                    <span className="font-medium">₹{orderData.basePrice}</span>
                                </div>
                                {orderData.deliveryCharge > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Express Delivery:</span>
                                        <span className="font-medium text-amber-600">₹{orderData.deliveryCharge}</span>
                                    </div>
                                )}
                                {orderData.category === 'readymade' && (
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Delivery:</span>
                                        <span className="font-medium">₹99</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-lg font-bold text-blue-900 pt-2 border-t">
                                    <span>Total:</span>
                                    <span>₹{calculateTotal()}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={handlePlaceOrder}
                                disabled={!selectedAddress || !paymentMethod}
                                className={`w-full mt-6 px-6 py-4 rounded-xl font-medium transition-all ${
                                    selectedAddress && paymentMethod
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                            >
                                Place Order
                                <ArrowRight size={20} className="ml-2 inline" />
                            </button>

                            {/* Security Badge */}
                            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
                                <Shield size={16} />
                                <span>Secure Payment</span>
                            </div>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <h3 className="font-semibold text-amber-900 mb-3">Cancellation Policy</h3>
                            <div className="space-y-2 text-sm text-amber-800">
                                <p>• <strong>Stitching Orders:</strong> Cancellable before fabric pickup</p>
                                <p>• <strong>Readymade Orders:</strong> Cancellable before dispatch</p>
                                <p>• Refunds processed within 7-10 working days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
