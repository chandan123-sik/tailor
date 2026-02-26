import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Ruler,
    Upload,
    Save,
    AlertTriangle,
    CheckCircle,
    User,
    ArrowRight,
    ArrowLeft,
    FileText,
    Package,
    Camera,
    Download
} from 'lucide-react';

const MeasurementSystem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderData = location.state?.orderData || {};
    
    const [measurementMethod, setMeasurementMethod] = useState('');
    const [measurements, setMeasurements] = useState({
        chest: '',
        waist: '',
        hips: '',
        shoulder: '',
        sleeve: '',
        length: '',
        neck: '',
        armhole: ''
    });
    const [saveProfile, setSaveProfile] = useState(false);
    const [profileName, setProfileName] = useState('');

    const measurementFields = [
        { key: 'chest', label: 'Chest', unit: 'inches', description: 'Around the fullest part' },
        { key: 'waist', label: 'Waist', unit: 'inches', description: 'Around the natural waistline' },
        { key: 'hips', label: 'Hips', unit: 'inches', description: 'Around the fullest part' },
        { key: 'shoulder', label: 'Shoulder', unit: 'inches', description: 'From shoulder tip to shoulder tip' },
        { key: 'sleeve', label: 'Sleeve Length', unit: 'inches', description: 'From shoulder to wrist' },
        { key: 'length', label: 'Outfit Length', unit: 'inches', description: 'From shoulder to desired length' },
        { key: 'neck', label: 'Neck', unit: 'inches', description: 'Around the neck base' },
        { key: 'armhole', label: 'Armhole', unit: 'inches', description: 'Around the armhole' }
    ];

    const handleMeasurementChange = (key, value) => {
        setMeasurements(prev => ({ ...prev, [key]: value }));
    };

    const validateMeasurements = () => {
        if (measurementMethod === 'digital') {
            return Object.values(measurements).every(val => val && val > 0);
        }
        return true;
    };

    const proceedToCheckout = () => {
        const finalOrderData = {
            ...orderData,
            measurements: measurementMethod === 'digital' ? measurements : 'physical',
            measurementMethod,
            savedProfile: saveProfile ? profileName : null
        };
        navigate('/consumer/checkout', { state: { orderData: finalOrderData } });
    };

    const renderDigitalForm = () => (
        <div className="space-y-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-blue-600 mt-1" />
                    <div>
                        <h4 className="font-black text-blue-900 mb-2">Measurement Accuracy</h4>
                        <p className="text-blue-800 text-sm">
                            Please ensure all measurements are accurate. The platform is not responsible for issues arising from incorrect measurements provided by the customer.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {measurementFields.map((field) => (
                    <div key={field.key} className="space-y-2">
                        <label className="flex items-center justify-between">
                            <span className="font-black text-slate-900">{field.label}</span>
                            <span className="text-sm text-slate-500">{field.unit}</span>
                        </label>
                        <input
                            type="number"
                            value={measurements[field.key]}
                            onChange={(e) => handleMeasurementChange(field.key, e.target.value)}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary-400 focus:outline-none transition-all"
                            step="0.5"
                            min="0"
                        />
                        <p className="text-xs text-slate-500">{field.description}</p>
                    </div>
                ))}
            </div>

            {/* Save Profile Option */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                    <input
                        type="checkbox"
                        id="saveProfile"
                        checked={saveProfile}
                        onChange={(e) => setSaveProfile(e.target.checked)}
                        className="w-5 h-5 accent-primary-600 rounded-lg mt-1"
                    />
                    <div className="flex-1">
                        <label htmlFor="saveProfile" className="font-black text-primary-900 cursor-pointer">
                            Save Measurement Profile
                        </label>
                        <p className="text-sm text-primary-700 mt-1">
                            Save these measurements for future orders to save time
                        </p>
                        {saveProfile && (
                            <input
                                type="text"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                                placeholder="Profile name (e.g., 'My Regular Fit')"
                                className="mt-3 w-full p-3 bg-white border-2 border-primary-200 rounded-xl focus:border-primary-400 focus:outline-none"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPhysicalMeasurement = () => (
        <div className="space-y-8">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                    <Package size={20} className="text-amber-600 mt-1" />
                    <div>
                        <h4 className="font-black text-amber-900 mb-2">Physical Measurement Process</h4>
                        <p className="text-amber-800 text-sm">
                            Our delivery partner will visit your location to take professional measurements. 
                            Please ensure someone is available at the given address.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 space-y-6">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto">
                        <Ruler size={40} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Professional Measurement Service</h3>
                    <p className="text-slate-600">
                        Our expert will take precise measurements for the perfect fit
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-black text-slate-900">What to Expect:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-emerald-500 mt-1" />
                                <span className="text-sm text-slate-700">Professional measurement expert visit</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-emerald-500 mt-1" />
                                <span className="text-sm text-slate-700">15-20 minute measurement process</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-emerald-500 mt-1" />
                                <span className="text-sm text-slate-700">Digital measurement record saved</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-emerald-500 mt-1" />
                                <span className="text-sm text-slate-700">Fit consultation included</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-black text-slate-900">Measurement Fee:</h4>
                        <div className="bg-slate-50 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">Professional Measurement:</span>
                                <span className="font-black text-primary-600">₹199</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-2">
                                (Refundable on order confirmation)
                            </div>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                            <p className="text-sm text-blue-800">
                                <strong>Note:</strong> Measurement fee will be refunded once your order is confirmed and payment is processed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h4 className="font-black text-slate-900 mb-4">Attach Measurement Slip (Optional)</h4>
                    <p className="text-sm text-slate-600 mb-4">
                        If you have a perfectly fitted garment, you can attach it with the fabric for reference
                    </p>
                    
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-primary-400 transition-all">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="slip-upload"
                        />
                        <label htmlFor="slip-upload" className="cursor-pointer">
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                                    <Camera size={32} className="text-slate-400" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-900">Upload Reference Photo</p>
                                    <p className="text-sm text-slate-600">Photo of your perfect-fit garment</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                        Measurement Details
                    </h1>
                    <p className="text-xl text-slate-600">
                        Choose how you want to provide your measurements
                    </p>
                </div>

                {/* Method Selection */}
                {!measurementMethod && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid md:grid-cols-2 gap-8 mb-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setMeasurementMethod('digital')}
                            className="bg-white rounded-2xl border-2 border-slate-200 p-8 cursor-pointer hover:border-primary-400 hover:shadow-xl transition-all"
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                                    <User size={32} className="text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Digital Form</h3>
                                    <p className="text-slate-600 mb-4">
                                        Enter your measurements manually using our detailed form
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-emerald-600">
                                            <CheckCircle size={16} />
                                            <span className="text-sm font-black">Instant & Free</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-600">
                                            <CheckCircle size={16} />
                                            <span className="text-sm font-black">Save profile for future</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-amber-600">
                                            <AlertTriangle size={16} />
                                            <span className="text-sm font-black">You are responsible for accuracy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setMeasurementMethod('physical')}
                            className="bg-white rounded-2xl border-2 border-slate-200 p-8 cursor-pointer hover:border-primary-400 hover:shadow-xl transition-all"
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                                    <Ruler size={32} className="text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Physical Measurement</h3>
                                    <p className="text-slate-600 mb-4">
                                        Our expert will visit and take professional measurements
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-emerald-600">
                                            <CheckCircle size={16} />
                                            <span className="text-sm font-black">Professional accuracy</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-600">
                                            <CheckCircle size={16} />
                                            <span className="text-sm font-black">Fit consultation included</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-amber-600">
                                            <IndianRupee size={16} />
                                            <span className="text-sm font-black">₹199 (Refundable)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* Measurement Form */}
                {measurementMethod && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => setMeasurementMethod('')}
                            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-black transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Method Selection
                        </button>

                        {/* Form Content */}
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            {measurementMethod === 'digital' ? renderDigitalForm() : renderPhysicalMeasurement()}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <button
                                onClick={() => navigate('/consumer/stitching')}
                                className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-black transition-all"
                            >
                                <ArrowLeft size={20} />
                                Back to Selection
                            </button>

                            <button
                                onClick={proceedToCheckout}
                                disabled={!validateMeasurements()}
                                className={`flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-500 transition-all ${
                                    !validateMeasurements() ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                Proceed to Checkout
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default MeasurementSystem;
