import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Plus,
    Trash2,
    Check,
    Shield,
    Lock,
    Calendar,
    DollarSign,
    Wallet,
    Smartphone,
    Building,
    ChevronRight,
    Star
} from 'lucide-react';

const Payments = () => {
    const [showAddCard, setShowAddCard] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            type: 'card',
            cardType: 'Visa',
            last4: '4242',
            expiryMonth: '12',
            expiryYear: '2025',
            holderName: 'John Doe',
            isDefault: true
        },
        {
            id: 2,
            type: 'card',
            cardType: 'Mastercard',
            last4: '8888',
            expiryMonth: '06',
            expiryYear: '2026',
            holderName: 'John Doe',
            isDefault: false
        },
        {
            id: 3,
            type: 'upi',
            upiId: 'john@paytm',
            isDefault: false
        }
    ]);

    const transactions = [
        { id: 'TXN001', date: '2024-02-20', amount: 1299, status: 'Success', method: 'Visa •••• 4242', orderId: 'ST-7821' },
        { id: 'TXN002', date: '2024-02-18', amount: 3999, status: 'Success', method: 'UPI', orderId: 'ST-7822' },
        { id: 'TXN003', date: '2024-02-15', amount: 2499, status: 'Success', method: 'Mastercard •••• 8888', orderId: 'EC-1452' },
        { id: 'TXN004', date: '2024-02-10', amount: 1499, status: 'Failed', method: 'Visa •••• 4242', orderId: 'ST-7823' }
    ];

    const getCardIcon = (type) => {
        return <CreditCard size={24} />;
    };

    const setDefaultPayment = (id) => {
        setPaymentMethods(paymentMethods.map(method => ({
            ...method,
            isDefault: method.id === id
        })));
    };

    const removePaymentMethod = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                        Payment Methods
                    </h1>
                    <p className="text-lg text-slate-600">
                        Manage your payment options and view transaction history
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Payment Methods */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Saved Payment Methods</h2>
                                <button
                                    onClick={() => setShowAddCard(!showAddCard)}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                                >
                                    <Plus size={18} />
                                    Add New
                                </button>
                            </div>

                            {/* Add Card Form */}
                            {showAddCard && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mb-6 p-6 bg-slate-50 rounded-xl"
                                >
                                    <h3 className="font-bold text-slate-900 mb-4">Add New Card</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                                            <input
                                                type="text"
                                                placeholder="1234 5678 9012 3456"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Cardholder Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
                                                <input
                                                    type="text"
                                                    placeholder="123"
                                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                                                Save Card
                                            </button>
                                            <button
                                                onClick={() => setShowAddCard(false)}
                                                className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Saved Cards */}
                            <div className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.id}
                                        className={`p-6 rounded-xl border-2 transition-all ${
                                            method.isDefault
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                                    method.type === 'card' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                                                }`}>
                                                    {method.type === 'card' ? <CreditCard size={24} /> : <Smartphone size={24} />}
                                                </div>
                                                <div>
                                                    {method.type === 'card' ? (
                                                        <>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h3 className="font-bold text-slate-900">{method.cardType}</h3>
                                                                {method.isDefault && (
                                                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                                        Default
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-slate-600 mb-1">•••• •••• •••• {method.last4}</p>
                                                            <p className="text-sm text-slate-500">
                                                                Expires {method.expiryMonth}/{method.expiryYear}
                                                            </p>
                                                            <p className="text-sm text-slate-500">{method.holderName}</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h3 className="font-bold text-slate-900">UPI</h3>
                                                                {method.isDefault && (
                                                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                                        Default
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-slate-600">{method.upiId}</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                {!method.isDefault && (
                                                    <button
                                                        onClick={() => setDefaultPayment(method.id)}
                                                        className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 transition-all font-medium"
                                                    >
                                                        Set Default
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => removePaymentMethod(method.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Transaction History */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Transaction History</h2>
                            <div className="space-y-4">
                                {transactions.map((txn) => (
                                    <div key={txn.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                                txn.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                            }`}>
                                                {txn.status === 'Success' ? <Check size={20} /> : <span className="text-xl">×</span>}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">Order #{txn.orderId}</p>
                                                <p className="text-sm text-slate-600">{txn.method} • {txn.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900">₹{txn.amount}</p>
                                            <p className={`text-sm ${txn.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                                                {txn.status}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Security Info */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                            <p className="text-white/80 text-sm mb-4">
                                Your payment information is encrypted and secure
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <Lock size={16} />
                                    <span>256-bit SSL encryption</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Shield size={16} />
                                    <span>PCI DSS compliant</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Payment Summary</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600">Total Spent</span>
                                    <span className="font-bold text-slate-900">₹9,197</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600">Transactions</span>
                                    <span className="font-bold text-slate-900">{transactions.length}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600">Success Rate</span>
                                    <span className="font-bold text-green-600">75%</span>
                                </div>
                            </div>
                        </div>

                        {/* Offers */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Star size={20} className="text-amber-600" />
                                <h3 className="font-bold text-slate-900">Payment Offers</h3>
                            </div>
                            <p className="text-sm text-slate-700 mb-4">
                                Get 10% cashback on your next purchase using UPI
                            </p>
                            <button className="w-full bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 transition-all text-sm">
                                View All Offers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
