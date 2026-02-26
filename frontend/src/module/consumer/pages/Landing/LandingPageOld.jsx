import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin,
    Scissors,
    ShoppingBag,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Star,
    Truck,
    Shield,
    Package,
    Users,
    TrendingUp
} from 'lucide-react';

const kashmirPincodes = ['190001', '190002', '190003', '190004', '190005', '190006', '190007', '190008', '190009', '190010', '190011', '190012', '190013', '190014', '190015', '190016', '190017', '190018', '190019', '190020'];

const LandingPage = () => {
    const [pincode, setPincode] = useState('');
    const [locationChecked, setLocationChecked] = useState(false);
    const [isKashmir, setIsKashmir] = useState(false);
    const navigate = useNavigate();

    const checkLocation = () => {
        if (pincode.length === 6) {
            const inKashmir = kashmirPincodes.includes(pincode);
            setIsKashmir(inKashmir);
            setLocationChecked(true);
        }
    };

    const handleServiceSelect = (service) => {
        if (service === 'stitching' && isKashmir) {
            navigate('/consumer/stitching');
        } else if (service === 'readymade') {
            navigate('/consumer/shop');
        }
    };

    const resetLocation = () => {
        setPincode('');
        setLocationChecked(false);
        setIsKashmir(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 to-slate-700/5"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
                    <div className="text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-800 rounded-full text-sm font-medium"
                        >
                            <Shield size={16} />
                            Premium Tailoring Services
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none"
                        >
                            PERFECT FIT<br />
                            <span className="text-slate-700">GUARANTEED</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            Custom stitching by master tailors in Kashmir & Premium readymade collection across India
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Location Checker */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 lg:p-12"
                >
                    <div className="text-center space-y-8">
                        <div className="flex items-center justify-center w-20 h-20 bg-slate-100 rounded-2xl mx-auto">
                            <MapPin size={40} className="text-slate-700" />
                        </div>

                        {!locationChecked ? (
                            <div className="space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                    Enter Your Location
                                </h2>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    Tell us your pincode to check available services in your area
                                </p>

                                <div className="max-w-md mx-auto space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                            placeholder="Enter 6-digit Pincode"
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-lg font-semibold text-slate-900 placeholder-slate-500 focus:border-slate-400 focus:outline-none transition-all text-center"
                                            maxLength={6}
                                        />
                                        {pincode.length === 6 && (
                                            <button
                                                onClick={checkLocation}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all"
                                            >
                                                <ArrowRight size={20} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {['190001 (Srinagar)', '110001 (Delhi)', '400001 (Mumbai)', '560001 (Bangalore)'].map((code) => (
                                        <button
                                            key={code}
                                            onClick={() => {
                                                setPincode(code.split(' ')[0]);
                                                setTimeout(checkLocation, 100);
                                            }}
                                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all"
                                        >
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isKashmir ? 'bg-success-100' : 'bg-warning-100'}`}>
                                            {isKashmir ? (
                                                <CheckCircle size={24} className="text-success-600" />
                                            ) : (
                                                <AlertCircle size={24} className="text-warning-600" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {isKashmir ? 'All Services Available!' : 'Limited Services'}
                                            </h3>
                                            <p className="text-slate-600">
                                                Delivering to pincode: <span className="font-semibold text-slate-900">{pincode}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Options */}
                                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    {/* Custom Stitching Card */}
                                    <motion.div
                                        whileHover={!isKashmir ? {} : { scale: 1.02 }}
                                        className={`relative rounded-xl border-2 p-8 transition-all ${
                                            isKashmir
                                                ? 'bg-white border-slate-300 hover:shadow-md hover:border-slate-400 cursor-pointer'
                                                : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                                        }`}
                                        onClick={() => isKashmir && handleServiceSelect('stitching')}
                                    >
                                        {!isKashmir && (
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-warning-100 text-warning-800 rounded-full text-xs font-medium">
                                                Unavailable
                                            </div>
                                        )}

                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${isKashmir ? 'bg-slate-100' : 'bg-slate-200'}`}>
                                                <Scissors size={32} className={isKashmir ? 'text-slate-700' : 'text-slate-400'} />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Custom Stitching</h3>
                                            <p className="text-slate-600 text-sm">
                                                {isKashmir
                                                    ? 'Get perfectly tailored clothes by master craftsmen'
                                                    : 'Currently available only in Kashmir region'}
                                            </p>
                                            {isKashmir && (
                                                <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                                    <span>Available Now</span>
                                                    <ArrowRight size={16} />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Readymade Store Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white border-2 border-slate-300 rounded-xl p-8 hover:shadow-md hover:border-slate-400 cursor-pointer transition-all"
                                        onClick={() => handleServiceSelect('readymade')}
                                    >
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                                                <ShoppingBag size={32} className="text-slate-700" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Readymade Store</h3>
                                            <p className="text-slate-600 text-sm">
                                                Premium collection delivered across India
                                            </p>
                                            <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                                                <span>Shop Now</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {!isKashmir && (
                                    <div className="bg-warning-50 border-2 border-warning-200 rounded-xl p-6 max-w-2xl mx-auto">
                                        <div className="flex items-start gap-4">
                                            <AlertCircle size={20} className="text-warning-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-warning-900 mb-2">Custom Stitching - Kashmir Only</h4>
                                                <p className="text-warning-800 text-sm">
                                                    Our custom stitching service is currently available only in Kashmir Valley. 
                                                    However, you can shop from our premium readymade collection that delivers across all of India.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={resetLocation}
                                    className="text-slate-500 hover:text-slate-700 font-medium text-sm underline transition-colors"
                                >
                                    Change Location
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                            Why Choose TailorHub?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Experience the perfect blend of traditional craftsmanship and modern convenience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Quality Guaranteed',
                                description: 'Master tailors with 10+ years experience ensure perfect fit every time'
                            },
                            {
                                icon: Truck,
                                title: 'Pan India Delivery',
                                description: 'Fast and reliable delivery across all states with real-time tracking'
                            },
                            {
                                icon: Star,
                                title: '4.9/5 Rating',
                                description: 'Trusted by 50,000+ happy customers with exceptional service'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-xl p-8 text-center space-y-4 border border-slate-200 hover:shadow-md transition-all"
                            >
                                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto">
                                    <feature.icon size={32} className="text-slate-700" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
