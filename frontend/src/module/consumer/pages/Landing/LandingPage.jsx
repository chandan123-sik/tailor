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
    TrendingUp,
    ChevronRight,
    Sparkles,
    Award,
    
    Phone
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
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
            {/* Professional Header */}
            <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                                <Scissors size={20} className="text-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-900">TailorHub</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
                            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</a>
                            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
                        </nav>
                        <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                                >
                                    <Sparkles size={16} />
                                    <span>Premium Tailoring Services</span>
                                </motion.div>
                                
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-bold leading-tight"
                                >
                                    Perfect Fit,
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        Guaranteed
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg text-slate-300 leading-relaxed"
                                >
                                    Custom stitching by master tailors in Kashmir & Premium readymade collection across India
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-4"
                                >
                                    <button className="flex items-center justify-center px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all">
                                        <MapPin size={18} className="mr-2" />
                                        Check Location
                                    </button>
                                    <button className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all">
                                        View Portfolio
                                        <ChevronRight size={18} className="ml-2" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd228d4?auto=format&fit=crop&q=80&w=600"
                                    alt="Professional Tailoring"
                                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Service Checker */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-6 mb-12"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Check Service Availability
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Enter your pincode to discover available tailoring services in your area
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
                    >
                        {!locationChecked ? (
                            <div className="space-y-8">
                                <div className="max-w-md mx-auto space-y-4">
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input
                                            type="text"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                            placeholder="Enter 6-digit Pincode"
                                            className="w-full pl-12 pr-32 py-4 bg-white border-2 border-slate-300 rounded-xl text-lg font-semibold text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-all"
                                            maxLength={6}
                                        />
                                        {pincode.length === 6 && (
                                            <button
                                                onClick={checkLocation}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                                            >
                                                Check
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {['190001', '110001', '400001', '560001'].map((code) => (
                                        <button
                                            key={code}
                                            onClick={() => {
                                                setPincode(code);
                                                setTimeout(checkLocation, 100);
                                            }}
                                            className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all"
                                        >
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div className="text-center space-y-4">
                                    <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${
                                        isKashmir ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                                    }`}>
                                        {isKashmir ? (
                                            <CheckCircle size={24} />
                                        ) : (
                                            <AlertCircle size={24} />
                                        )}
                                        <span className="font-semibold">
                                            {isKashmir ? 'All Services Available' : 'Limited Services'}
                                        </span>
                                    </div>
                                    <p className="text-lg text-slate-600">
                                        Delivering to pincode: <span className="font-bold text-slate-900">{pincode}</span>
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    {/* Custom Stitching Card */}
                                    <motion.div
                                        whileHover={!isKashmir ? {} : { scale: 1.02 }}
                                        className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                                            isKashmir
                                                ? 'border-blue-500 shadow-lg hover:shadow-xl cursor-pointer'
                                                : 'border-slate-200 opacity-60 cursor-not-allowed'
                                        }`}
                                        onClick={() => isKashmir && handleServiceSelect('stitching')}
                                    >
                                        {!isKashmir && (
                                            <div className="absolute -top-3 -right-3 px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                                                Unavailable
                                            </div>
                                        )}

                                        <div className="text-center space-y-6">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                                                isKashmir ? 'bg-blue-100' : 'bg-slate-100'
                                            }`}>
                                                <Scissors size={32} className={isKashmir ? 'text-blue-600' : 'text-slate-400'} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Custom Stitching</h3>
                                                <p className="text-slate-600 mb-4">
                                                    {isKashmir
                                                        ? 'Perfect tailored clothes by master craftsmen'
                                                        : 'Available only in Kashmir region'}
                                                </p>
                                                {isKashmir && (
                                                    <div className="inline-flex items-center space-x-2 text-blue-600 font-medium">
                                                        <span>Available Now</span>
                                                        <ArrowRight size={18} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Readymade Store Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-lg hover:shadow-xl cursor-pointer transition-all"
                                        onClick={() => handleServiceSelect('readymade')}
                                    >
                                        <div className="text-center space-y-6">
                                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                                                <ShoppingBag size={32} className="text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Readymade Store</h3>
                                                <p className="text-slate-600 mb-4">
                                                    Premium collection delivered across India
                                                </p>
                                                <div className="inline-flex items-center space-x-2 text-purple-600 font-medium">
                                                    <span>Shop Now</span>
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {!isKashmir && (
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-2xl mx-auto mt-8">
                                        <div className="flex items-start space-x-3">
                                            <AlertCircle size={20} className="text-amber-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-amber-900 mb-2">Service Availability Notice</h4>
                                                <p className="text-amber-800">
                                                    Custom stitching is currently available only in Kashmir Valley. 
                                                    However, our premium readymade collection delivers across all of India with the same quality guarantee.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="text-center pt-6">
                                    <button
                                        onClick={resetLocation}
                                        className="text-slate-500 hover:text-slate-700 font-medium underline transition-colors"
                                    >
                                        Check Different Location
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6 mb-16"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Why Choose TailorHub?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Experience the perfect blend of traditional craftsmanship and modern convenience
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Quality Guaranteed',
                                description: 'Master tailors with 10+ years experience ensure perfect fit every time',
                                stat: '10+ Years'
                            },
                            {
                                icon: Truck,
                                title: 'Pan India Delivery',
                                description: 'Fast and reliable delivery across all states with real-time tracking',
                                stat: '2-3 Days'
                            },
                            {
                                icon: Star,
                                title: '4.9/5 Rating',
                                description: 'Trusted by 50,000+ happy customers with exceptional service',
                                stat: '50K+ Reviews'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center space-y-6 border border-slate-200 hover:shadow-lg transition-all"
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <feature.icon size={32} className="text-slate-700" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                                        {feature.stat}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, label: 'Happy Customers', value: '50,000+' },
                            { icon: Scissors, label: 'Expert Tailors', value: '500+' },
                            { icon: Package, label: 'Orders Delivered', value: '100,000+' },
                            { icon: Award, label: 'Satisfaction Rate', value: '98%' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center space-y-3"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto">
                                    <stat.icon size={24} className="text-white" />
                                </div>
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-slate-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold"
                    >
                        Ready to Experience Perfect Fit?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl opacity-90"
                    >
                        Join thousands of satisfied customers who trust TailorHub for their clothing needs
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all"
                    >
                        Get Started Today
                        <ArrowRight size={20} className="ml-2 inline" />
                    </motion.button>
                </div>
            </section>

            {/* Professional Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">TailorHub</h3>
                            <p className="text-slate-400">
                                Premium tailoring services combining traditional craftsmanship with modern convenience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">Custom Stitching</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Readymade Collection</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Alterations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                                    <Truck size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                                    <Phone size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                                    <MapPin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 TailorHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
