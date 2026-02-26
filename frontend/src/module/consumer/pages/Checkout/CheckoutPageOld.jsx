import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Truck,
    MapPin,
    Phone,
    User,
    AlertCircle,
    CheckCircle,
    IndianRupee,
    Shield,
    Clock,
    ArrowLeft,
    ArrowRight,
    ShoppingBag,
    Scissors
} from 'lucide-react';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderData = location.state?.orderData || {};
    
    const [deliveryAddress, setDeliveryAddress] = useState({
        name: '',
        phone: '',
        address: '',
        landmark: '',
        pincode: '',
        city: '',
        state: ''
    });

    const [paymentMethod, setPaymentMethod] = useState('');
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState('');

    // Business logic checks
    const hasStitchingOrder = orderData.category && orderData.totalPrice > 0;
    const totalAmount = orderData.totalPrice || 0;
    const minimumOrderValue = 999;
    const meetsMinimumOrder = totalAmount >= minimumOrderValue;

    const handleAddressChange = (field, value) => {
        setDeliveryAddress(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        if (!deliveryAddress.name || !deliveryAddress.phone || !deliveryAddress.address || !deliveryAddress.pincode) {
            return false;
        }
        if (hasStitchingOrder && !paymentMethod) {
            return false;
        }
        return true;
    };

    const generateOrderId = () => {
        const prefix = hasStitchingOrder ? 'ST' : 'EC';
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `${prefix}-${random}`;
    };

    const placeOrder = async () => {
        if (!validateForm()) return;

        setProcessingOrder(true);
        
        // Simulate order processing
        setTimeout(() => {
            const newOrderId = generateOrderId();
            setOrderId(newOrderId);
            setOrderPlaced(true);
            setProcessingOrder(false);
        }, 2000);
    };

    const goToDashboard = () => {
        navigate('/consumer/dashboard');
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-slate-50 py-12 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-6 text-center"
                >
                    <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-emerald-600" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 mb-4">Order Placed!</h1>
                    <p className="text-slate-600 mb-6">
                        Your order has been successfully placed. Order ID: <span className="font-black text-primary-600">{orderId}</span>
                    </p>
                    
                    <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-left">
                        <h3 className="font-black text-slate-900 mb-3">Order Details:</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-600">Order ID:</span>
                                <span className="font-black">{orderId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600">Total Amount:</span>
                                <span className="font-black text-primary-600">₹{totalAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600">Estimated Delivery:</span>
                                <span className="font-black">{orderData.estimatedDays ? `${orderData.estimatedDays} days` : '5-7 days'}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={goToDashboard}
                        className="w-full bg-primary-600 text-white py-4 rounded-2xl font-black hover:bg-primary-500 transition-all"
                    >
                        Track My Order
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-black mb-4"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                        Checkout
                    </h1>
                    <p className="text-xl text-slate-600">
                        Review your order and complete payment
                    </p>
                </div>

                {/* Minimum Order Warning */}
                {hasStitchingOrder && !meetsMinimumOrder && (
                    <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 mb-8">
                        <div className="flex items-start gap-3">
                            <AlertCircle size={20} className="text-rose-600 mt-1" />
                            <div>
                                <h3 className="font-black text-rose-900 mb-2">Minimum Order Value</h3>
                                <p className="text-rose-800">
                                    Stitching orders require a minimum order value of ₹{minimumOrderValue}. 
                                    Your current total is ₹{totalAmount}. Please add more items to continue.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Delivery Address */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-6">
                            <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <MapPin size={24} className="text-primary-600" />
                                Delivery Address
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={deliveryAddress.name}
                                        onChange={(e) => handleAddressChange('name', e.target.value)}
                                        placeholder="Enter your full name"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={deliveryAddress.phone}
                                        onChange={(e) => handleAddressChange('phone', e.target.value)}
                                        placeholder="10-digit mobile number"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                    />
                                </div>
                                
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-black text-slate-700 mb-2">Street Address</label>
                                    <textarea
                                        value={deliveryAddress.address}
                                        onChange={(e) => handleAddressChange('address', e.target.value)}
                                        placeholder="House/Flat No., Street, Area"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all resize-none"
                                        rows={3}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">Landmark</label>
                                    <input
                                        type="text"
                                        value={deliveryAddress.landmark}
                                        onChange={(e) => handleAddressChange('landmark', e.target.value)}
                                        placeholder="Nearby landmark (optional)"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">Pincode</label>
                                    <input
                                        type="text"
                                        value={deliveryAddress.pincode}
                                        onChange={(e) => handleAddressChange('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                                        placeholder="6-digit pincode"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                        maxLength={6}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        value={deliveryAddress.city}
                                        onChange={(e) => handleAddressChange('city', e.target.value)}
                                        placeholder="City name"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-black text-slate-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        value={deliveryAddress.state}
                                        onChange={(e) => handleAddressChange('state', e.target.value)}
                                        placeholder="State name"
                                        className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method - Only for Stitching Orders */}
                        {hasStitchingOrder && (
                            <div className="bg-white rounded-2xl border border-slate-200 p-6">
                                <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <CreditCard size={24} className="text-primary-600" />
                                    Payment Method
                                </h2>
                                
                                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle size={20} className="text-blue-600 mt-1" />
                                        <div>
                                            <h4 className="font-black text-blue-900 mb-1">Online Payment Only</h4>
                                            <p className="text-blue-800 text-sm">
                                                Custom stitching orders require online payment. Cash on delivery is not available for stitching services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={paymentMethod === 'upi'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-primary-600"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">UPI Payment</h4>
                                            <p className="text-sm text-slate-600">Pay via Google Pay, PhonePe, Paytm</p>
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-primary-600"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">Credit/Debit Card</h4>
                                            <p className="text-sm text-slate-600">Visa, Mastercard, RuPay</p>
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="netbanking"
                                            checked={paymentMethod === 'netbanking'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-primary-600"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">Net Banking</h4>
                                            <p className="text-sm text-slate-600">All major banks supported</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* For Readymade Orders - Show COD Option */}
                        {!hasStitchingOrder && (
                            <div className="bg-white rounded-2xl border border-slate-200 p-6">
                                <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <CreditCard size={24} className="text-primary-600" />
                                    Payment Method
                                </h2>
                                
                                <div className="space-y-3">
                                    <label className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-primary-600"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">Cash on Delivery</h4>
                                            <p className="text-sm text-slate-600">Pay when you receive your order</p>
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={paymentMethod === 'upi'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-primary-600"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">UPI Payment</h4>
                                            <p className="text-sm text-slate-600">Pay via Google Pay, PhonePe, Paytm</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-6">
                            <h2 className="text-xl font-black text-slate-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                {hasStitchingOrder ? (
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <Scissors size={20} className="text-primary-600" />
                                            <div className="flex-1">
                                                <h4 className="font-black text-slate-900 capitalize">{orderData.category}</h4>
                                                <p className="text-sm text-slate-600">
                                                    {orderData.deliverySpeed} Delivery • {orderData.estimatedDays} days
                                                </p>
                                                <p className="text-sm text-slate-600">
                                                    Fabric: {orderData.fabricSource === 'platform' ? 'Platform Fabric' : 'Customer Fabric'}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {orderData.designFiles && orderData.designFiles.length > 0 && (
                                            <p className="text-sm text-slate-600">
                                                Design Files: {orderData.designFiles.length} attached
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex items-start gap-3">
                                        <ShoppingBag size={20} className="text-primary-600" />
                                        <div className="flex-1">
                                            <h4 className="font-black text-slate-900">Readymade Products</h4>
                                            <p className="text-sm text-slate-600">Multiple items in cart</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="border-t pt-4 space-y-3">
                                {hasStitchingOrder && (
                                    <>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">Base Price:</span>
                                            <span className="font-black">₹{orderData.basePrice}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600">Express Delivery:</span>
                                            <span className="font-black text-amber-600">₹{orderData.deliveryCharge}</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Delivery Fee:</span>
                                    <span className="font-black text-emerald-600">FREE</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between text-lg font-black">
                                    <span className="text-primary-900">Total:</span>
                                    <span className="text-primary-600">₹{totalAmount}</span>
                                </div>
                            </div>

                            {/* Cancellation Policy */}
                            {hasStitchingOrder && (
                                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 mt-6">
                                    <div className="flex items-start gap-2">
                                        <Clock size={16} className="text-amber-600 mt-1" />
                                        <div>
                                            <h4 className="font-black text-amber-900 text-sm mb-1">Cancellation Policy</h4>
                                            <p className="text-amber-800 text-xs">
                                                Order can be cancelled only before fabric pickup. Post-pickup cancellations are not allowed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Place Order Button */}
                            <button
                                onClick={placeOrder}
                                disabled={!validateForm() || (hasStitchingOrder && !meetsMinimumOrder) || processingOrder}
                                className={`w-full py-4 rounded-2xl font-black transition-all mt-6 ${
                                    validateForm() && (!hasStitchingOrder || meetsMinimumOrder) && !processingOrder
                                        ? 'bg-primary-600 text-white hover:bg-primary-500'
                                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                            >
                                {processingOrder ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Processing...
                                    </span>
                                ) : (
                                    `Place Order • ₹${totalAmount}`
                                )}
                            </button>

                            {/* Security Badge */}
                            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                                <Shield size={14} />
                                <span>Secure Payment • 100% Safe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
