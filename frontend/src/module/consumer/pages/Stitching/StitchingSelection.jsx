import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Scissors,
    Upload,
    Calendar,
    CreditCard,
    AlertCircle,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Plus,
    X,
    Camera,
    FileText,
    IndianRupee,
    Clock,
    Shirt,
    User,
    UserCircle,
    Sparkles,
    Package,
    Zap
} from 'lucide-react';

const StitchingSelection = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    
    // Form data
    const [orderData, setOrderData] = useState({
        category: '',
        deliverySpeed: 'normal',
        fabricSource: 'platform',
        designFiles: [],
        specialInstructions: '',
        basePrice: 0,
        deliveryCharge: 0,
        totalPrice: 0,
        estimatedDays: 15
    });

    const serviceCategories = [
        { id: 'kurti', name: 'Kurti', basePrice: 899, icon: 'shirt', description: 'Traditional & contemporary styles' },
        { id: 'suit', name: 'Suit', basePrice: 2499, icon: 'user-tie', description: 'Business & formal wear' },
        { id: 'blouse', name: 'Blouse', basePrice: 1299, icon: 'shirt', description: 'Custom fitted blouses' },
        { id: 'sherwani', name: 'Sherwani', basePrice: 4999, icon: 'user-tie', description: 'Traditional ethnic wear' },
        { id: 'lehenga', name: 'Lehenga', basePrice: 5999, icon: 'shirt', description: 'Bridal & festive wear' },
        { id: 'trousers', name: 'Trousers', basePrice: 799, icon: 'user', description: 'Casual & formal pants' },
        { id: 'shirt', name: 'Shirt', basePrice: 999, icon: 'shirt', description: 'Custom fitted shirts' },
        { id: 'dress', name: 'Dress', basePrice: 1999, icon: 'shirt', description: 'Occasion & party wear' }
    ];

    const deliveryOptions = [
        { 
            id: 'normal', 
            name: 'Standard', 
            days: 15, 
            priceMultiplier: 1, 
            description: 'Quality craftsmanship with standard timeline',
            badge: 'Popular',
            color: 'bg-slate-600'
        },
        { 
            id: 'express', 
            name: 'Express', 
            days: 10, 
            priceMultiplier: 1.3, 
            description: 'Priority service for urgent needs',
            badge: 'Fast',
            color: 'bg-blue-600'
        },
        { 
            id: 'premium', 
            name: 'Premium', 
            days: 7, 
            priceMultiplier: 1.6, 
            description: 'Express delivery with VIP service',
            badge: 'Fastest',
            color: 'bg-purple-600'
        }
    ];

    // Calculate pricing when category or delivery changes
    const calculatePricing = (category, deliverySpeed) => {
        const categoryData = serviceCategories.find(c => c.id === category);
        const deliveryData = deliveryOptions.find(d => d.id === deliverySpeed);
        
        if (categoryData && deliveryData) {
            const basePrice = categoryData.basePrice;
            const deliveryCharge = Math.round(basePrice * (deliveryData.priceMultiplier - 1));
            const totalPrice = basePrice + deliveryCharge;
            
            setOrderData(prev => ({
                ...prev,
                basePrice,
                deliveryCharge,
                totalPrice,
                estimatedDays: deliveryData.days
            }));
        }
    };

    const handleCategorySelect = (category) => {
        setOrderData(prev => ({ ...prev, category }));
        calculatePricing(category, orderData.deliverySpeed);
    };

    const handleDeliveryChange = (deliverySpeed) => {
        setOrderData(prev => ({ ...prev, deliverySpeed }));
        calculatePricing(orderData.category, deliverySpeed);
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        setOrderData(prev => ({
            ...prev,
            designFiles: [...prev.designFiles, ...files]
        }));
    };

    const removeFile = (index) => {
        setOrderData(prev => ({
            ...prev,
            designFiles: prev.designFiles.filter((_, i) => i !== index)
        }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const proceedToMeasurements = () => {
        navigate('/consumer/measurements', { state: { orderData } });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Select Service Category
                            </h2>
                            <p className="text-lg text-slate-600">Choose what you want to get stitched</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                            {serviceCategories.map((category) => (
                                <motion.div
                                    key={category.id}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleCategorySelect(category.id)}
                                    className={`relative bg-gradient-to-br rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.category === category.id
                                            ? 'from-blue-50 to-blue-100 border-blue-500 shadow-xl shadow-blue-200/50'
                                            : 'from-white to-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-lg'
                                    }`}
                                >
                                    {orderData.category === category.id && (
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                                        >
                                            <CheckCircle size={18} className="text-white" />
                                        </motion.div>
                                    )}
                                    
                                    <div className="text-center space-y-4">
                                        <motion.div 
                                            whileHover={{ rotate: 5 }}
                                            className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg ${
                                                orderData.category === category.id 
                                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                                                    : 'bg-gradient-to-br from-slate-100 to-slate-200'
                                            }`}
                                        >
                                            {category.icon === 'shirt' && <Shirt size={36} className={orderData.category === category.id ? 'text-white' : 'text-slate-600'} />}
                                            {category.icon === 'user' && <User size={36} className={orderData.category === category.id ? 'text-white' : 'text-slate-600'} />}
                                            {category.icon === 'user-tie' && <UserCircle size={36} className={orderData.category === category.id ? 'text-white' : 'text-slate-600'} />}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">{category.name}</h3>
                                            <p className="text-sm text-slate-600 mb-3">{category.description}</p>
                                            <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg shadow-md">
                                                <IndianRupee size={18} />
                                                {category.basePrice}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Choose Delivery Speed
                            </h2>
                            <p className="text-lg text-slate-600">Select when you need your outfit</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {deliveryOptions.map((option) => (
                                <motion.div
                                    key={option.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleDeliveryChange(option.id)}
                                    className={`relative bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.deliverySpeed === option.id
                                            ? 'border-blue-500 shadow-lg'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                                    }`}
                                >
                                    {orderData.deliverySpeed === option.id && (
                                        <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <CheckCircle size={16} className="text-white" />
                                        </div>
                                    )}
                                    {option.badge && (
                                        <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-medium">
                                            {option.badge}
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center text-white`}>
                                            <Clock size={24} />
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{option.name}</h3>
                                            <p className="text-3xl font-bold text-blue-600 mt-2">{option.days} Days</p>
                                            <p className="text-sm text-slate-600">{option.description}</p>
                                        </div>

                                        {option.id !== 'normal' && (
                                            <div className="flex items-center gap-2 text-amber-600">
                                                <Zap size={16} />
                                                <span className="text-sm font-medium">
                                                    +{Math.round((option.priceMultiplier - 1) * 100)}% Fast Delivery
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pricing Preview */}
                        {orderData.category && (
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                <h4 className="font-semibold text-blue-900 mb-4">Price Breakdown</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Base Price:</span>
                                        <span className="font-semibold">₹{orderData.basePrice}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Express Charge:</span>
                                        <span className="font-semibold text-amber-600">₹{orderData.deliveryCharge}</span>
                                    </div>
                                    <div className="border-t pt-3 flex justify-between">
                                        <span className="font-bold text-blue-900">Total:</span>
                                        <span className="text-xl font-bold text-blue-600">₹{orderData.totalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Fabric & Design
                            </h2>
                            <p className="text-lg text-slate-600">Choose fabric source and upload design references</p>
                        </div>

                        {/* Fabric Source */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900">Fabric Source</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setOrderData(prev => ({ ...prev, fabricSource: 'platform' }))}
                                    className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.fabricSource === 'platform'
                                            ? 'border-blue-500 shadow-lg bg-blue-50'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <Package size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">Platform Fabric</h4>
                                            <p className="text-sm text-slate-600">Premium quality fabric from our collection</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setOrderData(prev => ({ ...prev, fabricSource: 'customer' }))}
                                    className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.fabricSource === 'customer'
                                            ? 'border-blue-500 shadow-lg bg-blue-50'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                            <Upload size={24} className="text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">My Fabric</h4>
                                            <p className="text-sm text-slate-600">I'll provide my own fabric</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Design Upload */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900">Design References</h3>
                            
                            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 transition-all">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                    id="design-upload"
                                />
                                <label htmlFor="design-upload" className="cursor-pointer">
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto">
                                            <Camera size={32} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">Upload Design Photos</p>
                                            <p className="text-sm text-slate-600">Drag & drop or click to browse</p>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {/* Uploaded Files */}
                            {orderData.designFiles.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {orderData.designFiles.map((file, index) => (
                                        <div key={index} className="relative group">
                                            <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeFile(index)}
                                                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Special Instructions */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-slate-900">Special Instructions</h3>
                            <textarea
                                value={orderData.specialInstructions}
                                onChange={(e) => setOrderData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                                placeholder="Tell us about any specific requirements, design modifications, or special requests..."
                                className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none transition-all resize-none"
                                rows={4}
                            />
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Order Summary
                            </h2>
                            <p className="text-lg text-slate-600">Review your order details</p>
                        </div>

                        <div className="bg-white rounded-xl border-2 border-slate-200 p-8 space-y-6">
                            {/* Order Details */}
                            <div className="space-y-4">
                                {orderData.category && (
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <Scissors size={24} className="text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-slate-900">
                                                    {serviceCategories.find(c => c.id === orderData.category)?.name}
                                                </h4>
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
                                )}
                            </div>

                            {/* Price Breakdown */}
                            <div className="border-t pt-6 space-y-4">
                                {orderData.basePrice > 0 && (
                                    <>
                                        <div className="flex justify-between">
                                            <span className="text-slate-700">Base Price:</span>
                                            <span className="font-semibold">₹{orderData.basePrice}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-700">Express Delivery:</span>
                                            <span className="font-semibold text-amber-600">₹{orderData.deliveryCharge}</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between text-lg font-bold">
                                    <span className="text-blue-900">Total Amount:</span>
                                    <span className="text-blue-600">₹{orderData.totalPrice}</span>
                                </div>
                            </div>

                            {/* Important Notice */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle size={20} className="text-amber-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-amber-900 mb-2">Important Notice</h4>
                                        <p className="text-amber-800">
                                            Custom stitching orders require <strong>online payment only</strong>. 
                                            Cash on delivery is not available for stitching services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        <Sparkles size={16} />
                        Custom Stitching Service
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Create Your Perfect Outfit
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Professional tailoring with premium quality fabrics and expert craftsmanship
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6 relative">
                        {/* Progress Line */}
                        <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 -z-10" />
                        <div 
                            className="absolute top-5 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 -z-10 transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                        />
                        
                        {[
                            { num: 1, label: 'Category', icon: Scissors },
                            { num: 2, label: 'Delivery', icon: Clock },
                            { num: 3, label: 'Design', icon: Sparkles },
                            { num: 4, label: 'Review', icon: CheckCircle }
                        ].map((step) => (
                            <div key={step.num} className="flex flex-col items-center gap-3 bg-slate-50 relative">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all shadow-lg ${
                                        currentStep >= step.num
                                            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                                            : 'bg-white text-slate-400 border-2 border-slate-200'
                                    }`}
                                >
                                    {currentStep > step.num ? (
                                        <CheckCircle size={20} />
                                    ) : (
                                        <step.icon size={20} />
                                    )}
                                </motion.div>
                                <span className={`text-sm font-semibold hidden sm:block ${
                                    currentStep >= step.num ? 'text-blue-600' : 'text-slate-500'
                                }`}>
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10 mb-8"
                >
                    {renderStep()}
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-between items-center gap-4">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                            currentStep === 1
                                ? 'text-slate-300 cursor-not-allowed'
                                : 'text-slate-700 bg-white hover:bg-slate-100 border-2 border-slate-200 shadow-sm'
                        }`}
                    >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Back</span>
                    </button>

                    {currentStep < 4 ? (
                        <button
                            onClick={nextStep}
                            disabled={currentStep === 1 && !orderData.category}
                            className={`flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl ${
                                currentStep === 1 && !orderData.category ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            <span>Continue</span>
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={proceedToMeasurements}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            <span>Proceed to Measurements</span>
                            <ArrowRight size={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StitchingSelection;