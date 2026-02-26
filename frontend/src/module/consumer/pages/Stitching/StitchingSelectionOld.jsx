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
    UserTie
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
        { id: 'kurti', name: 'Kurti', basePrice: 899, icon: 'shirt' },
        { id: 'suit', name: 'Suit', basePrice: 2499, icon: 'user-tie' },
        { id: 'blouse', name: 'Blouse', basePrice: 1299, icon: 'shirt' },
        { id: 'sherwani', name: 'Sherwani', basePrice: 4999, icon: 'user-tie' },
        { id: 'lehenga', name: 'Lehenga', basePrice: 5999, icon: 'shirt' },
        { id: 'trousers', name: 'Trousers', basePrice: 799, icon: 'user' },
        { id: 'shirt', name: 'Shirt', basePrice: 999, icon: 'shirt' },
        { id: 'dress', name: 'Dress', basePrice: 1999, icon: 'shirt' }
    ];

    const deliveryOptions = [
        { 
            id: 'normal', 
            name: 'Normal', 
            days: 15, 
            priceMultiplier: 1, 
            description: 'Standard delivery with quality assurance',
            color: 'bg-blue-500'
        },
        { 
            id: 'express', 
            name: 'Express', 
            days: 10, 
            priceMultiplier: 1.3, 
            description: 'Fast-track delivery for urgent needs',
            color: 'bg-amber-500'
        },
        { 
            id: 'premium', 
            name: 'Premium', 
            days: 7, 
            priceMultiplier: 1.6, 
            description: 'Express delivery with priority service',
            color: 'bg-purple-500'
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

    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const proceedToMeasurements = () => {
        navigate('/consumer/measurements', { state: { orderData } });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Select Service Category
                            </h2>
                            <p className="text-slate-600">Choose what you want to get stitched</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {serviceCategories.map((category) => (
                                <motion.div
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleCategorySelect(category.id)}
                                    className={`relative bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.category === category.id
                                            ? 'border-slate-900 shadow-lg bg-slate-50'
                                            : 'border-slate-200 hover:border-slate-400'
                                    }`}
                                >
                                    {orderData.category === category.id && (
                                        <div className="absolute top-2 right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                                            <CheckCircle size={16} className="text-white" />
                                        </div>
                                    )}
                                    
                                    <div className="text-center space-y-3">
                                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto">
                                            {category.icon === 'shirt' && <Shirt size={24} className="text-slate-700" />}
                                            {category.icon === 'user' && <User size={24} className="text-slate-700" />}
                                            {category.icon === 'user-tie' && <UserTie size={24} className="text-slate-700" />}
                                        </div>
                                        <h3 className="font-semibold text-slate-900">{category.name}</h3>
                                        <p className="text-sm font-medium text-slate-700">₹{category.basePrice}</p>
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
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">
                                Choose Delivery Speed
                            </h2>
                            <p className="text-slate-600">Select when you need your outfit</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {deliveryOptions.map((option) => (
                                <motion.div
                                    key={option.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleDeliveryChange(option.id)}
                                    className={`relative bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.deliverySpeed === option.id
                                            ? 'border-primary-500 shadow-xl'
                                            : 'border-slate-200 hover:border-primary-300'
                                    }`}
                                >
                                    {orderData.deliverySpeed === option.id && (
                                        <div className="absolute top-2 right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                                            <CheckCircle size={16} className="text-white" />
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center text-white`}>
                                            <Clock size={24} />
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900">{option.name}</h3>
                                            <p className="text-3xl font-black text-primary-600 mt-2">{option.days} Days</p>
                                        </div>

                                        <p className="text-sm text-slate-600">{option.description}</p>

                                        {option.id !== 'normal' && (
                                            <div className="flex items-center gap-2 text-amber-600">
                                                <Sparkles size={16} />
                                                <span className="text-sm font-black">
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
                            <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-6">
                                <h4 className="font-black text-primary-900 mb-4">Price Breakdown</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Base Price:</span>
                                        <span className="font-black">₹{orderData.basePrice}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-700">Express Charge:</span>
                                        <span className="font-black text-amber-600">₹{orderData.deliveryCharge}</span>
                                    </div>
                                    <div className="border-t pt-2 flex justify-between">
                                        <span className="font-black text-primary-900">Total:</span>
                                        <span className="text-xl font-black text-primary-600">₹{orderData.totalPrice}</span>
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
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">
                                Fabric & Design
                            </h2>
                            <p className="text-slate-600">Choose fabric source and upload design references</p>
                        </div>

                        {/* Fabric Source */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-black text-slate-900">Fabric Source</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setOrderData(prev => ({ ...prev, fabricSource: 'platform' }))}
                                    className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.fabricSource === 'platform'
                                            ? 'border-primary-500 shadow-xl bg-primary-50'
                                            : 'border-slate-200 hover:border-primary-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                            <Scissors size={24} className="text-primary-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900">Platform Fabric</h4>
                                            <p className="text-sm text-slate-600">Premium quality fabric from our collection</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setOrderData(prev => ({ ...prev, fabricSource: 'customer' }))}
                                    className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                                        orderData.fabricSource === 'customer'
                                            ? 'border-primary-500 shadow-xl bg-primary-50'
                                            : 'border-slate-200 hover:border-primary-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                            <Upload size={24} className="text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900">My Fabric</h4>
                                            <p className="text-sm text-slate-600">I'll provide my own fabric</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Design Upload */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-black text-slate-900">Design References (Optional)</h3>
                            
                            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-primary-400 transition-all">
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
                                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                                            <Camera size={32} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900">Upload Design Photos</p>
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
                                                className="absolute top-2 right-2 w-6 h-6 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
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
                            <h3 className="text-lg font-black text-slate-900">Special Instructions</h3>
                            <textarea
                                value={orderData.specialInstructions}
                                onChange={(e) => setOrderData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                                placeholder="Tell us about any specific requirements, design modifications, or special requests..."
                                className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-primary-400 focus:outline-none transition-all resize-none"
                                rows={4}
                            />
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter">
                                Order Summary
                            </h2>
                            <p className="text-slate-600">Review your order details</p>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 space-y-6">
                            {/* Order Details */}
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Service Category:</span>
                                    <span className="font-black text-slate-900">
                                        {serviceCategories.find(c => c.id === orderData.category)?.name}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Delivery Speed:</span>
                                    <span className="font-black text-slate-900 capitalize">
                                        {orderData.deliverySpeed} ({orderData.estimatedDays} days)
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-600">Fabric Source:</span>
                                    <span className="font-black text-slate-900 capitalize">
                                        {orderData.fabricSource === 'platform' ? 'Platform Fabric' : 'Customer Fabric'}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-slate-600">Design Files:</span>
                                    <span className="font-black text-slate-900">
                                        {orderData.designFiles.length} file(s)
                                    </span>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="border-t pt-6 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-slate-700">Base Price:</span>
                                    <span className="font-black">₹{orderData.basePrice}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-700">Express Delivery:</span>
                                    <span className="font-black text-amber-600">₹{orderData.deliveryCharge}</span>
                                </div>
                                <div className="flex justify-between text-lg font-black">
                                    <span className="text-primary-900">Total Amount:</span>
                                    <span className="text-primary-600">₹{orderData.totalPrice}</span>
                                </div>
                            </div>

                            {/* Important Notice */}
                            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle size={20} className="text-amber-600 mt-1" />
                                    <div>
                                        <h4 className="font-black text-amber-900 mb-1">Important Notice</h4>
                                        <p className="text-amber-800 text-sm">
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
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all ${
                                    currentStep >= step
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-200 text-slate-500'
                                }`}>
                                    {currentStep > step ? '✓' : step}
                                </div>
                                {step < 4 && (
                                    <div className={`w-full h-1 mx-2 transition-all ${
                                        currentStep > step ? 'bg-slate-900' : 'bg-slate-200'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs font-black text-slate-600">
                        <span>Category</span>
                        <span>Delivery</span>
                        <span>Design</span>
                        <span>Review</span>
                    </div>
                </div>

                {/* Step Content */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl shadow-xl p-8"
                >
                    {renderStep()}
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
                            currentStep === 1
                                ? 'text-slate-300 cursor-not-allowed'
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    {currentStep < 4 ? (
                        <button
                            onClick={nextStep}
                            disabled={currentStep === 1 && !orderData.category}
                            className={`flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black hover:bg-primary-500 transition-all ${
                                currentStep === 1 && !orderData.category ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            Continue
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={proceedToMeasurements}
                            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-primary-500 transition-all"
                        >
                            Proceed to Measurements
                            <ArrowRight size={20} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StitchingSelection;
