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
    Download,
    Shield,
    Clock,
    Users,
    Award,
    Zap
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
    const [savedProfiles, setSavedProfiles] = useState([
        { id: 1, name: 'My Regular Fit', date: '2024-01-15' },
        { id: 2, name: 'Office Wear', date: '2024-01-10' },
        { id: 3, name: 'Party Wear', date: '2023-12-20' }
    ]);

    const measurementFields = [
        { key: 'chest', label: 'Chest', unit: 'inches', description: 'Around fullest part', icon: '📏' },
        { key: 'waist', label: 'Waist', unit: 'inches', description: 'Around natural waistline', icon: '📏' },
        { key: 'hips', label: 'Hips', unit: 'inches', description: 'Around fullest part', icon: '📏' },
        { key: 'shoulder', label: 'Shoulder', unit: 'inches', description: 'From shoulder tip to shoulder tip', icon: '📏' },
        { key: 'sleeve', label: 'Sleeve Length', unit: 'inches', description: 'From shoulder to wrist', icon: '📏' },
        { key: 'length', label: 'Outfit Length', unit: 'inches', description: 'From shoulder to desired length', icon: '📏' },
        { key: 'neck', label: 'Neck', unit: 'inches', description: 'Around neck base', icon: '📏' },
        { key: 'armhole', label: 'Armhole', unit: 'inches', description: 'Around armhole', icon: '📏' }
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

    const saveMeasurementProfile = () => {
        if (profileName && saveProfile) {
            const newProfile = {
                id: savedProfiles.length + 1,
                name: profileName,
                date: new Date().toISOString().split('T')[0],
                measurements: { ...measurements }
            };
            setSavedProfiles(prev => [...prev, newProfile]);
            setProfileName('');
            setSaveProfile(false);
        }
    };

    const loadProfile = (profile) => {
        setMeasurements(profile.measurements);
        setSaveProfile(false);
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
            {/* Accuracy Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-600 mt-1" />
                    <div>
                        <h4 className="font-semibold text-amber-900 mb-2">Measurement Accuracy</h4>
                        <p className="text-amber-800">
                            Please ensure all measurements are accurate. The platform is not responsible for issues arising from incorrect measurements provided by the customer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Saved Profiles */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Saved Profiles</h3>
                    <button
                        onClick={() => setSaveProfile(!saveProfile)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                    >
                        <Save size={16} />
                        {saveProfile ? 'Cancel' : 'Save Current'}
                    </button>
                </div>

                {saveProfile && (
                    <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                        <input
                            type="text"
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            placeholder="Profile name (e.g., 'My Regular Fit')"
                            className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                        />
                        <button
                            onClick={saveMeasurementProfile}
                            disabled={!profileName}
                            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Save Profile
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {savedProfiles.map((profile) => (
                        <motion.div
                            key={profile.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => loadProfile(profile)}
                            className="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-blue-400 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-slate-900">{profile.name}</h4>
                                <span className="text-xs text-slate-500">{profile.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Users size={14} />
                                <span>Click to load</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Measurement Form */}
            <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Enter Your Measurements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {measurementFields.map((field) => (
                        <div key={field.key} className="space-y-2">
                            <label className="flex items-center justify-between">
                                <span className="font-medium text-slate-900">{field.label}</span>
                                <span className="text-sm text-slate-500">{field.unit}</span>
                            </label>
                            <input
                                type="number"
                                value={measurements[field.key]}
                                onChange={(e) => handleMeasurementChange(field.key, e.target.value)}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none transition-all"
                                step="0.5"
                                min="0"
                            />
                            <p className="text-xs text-slate-500">{field.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderPhysicalMeasurement = () => (
        <div className="space-y-8">
            {/* Service Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                    <Package size={20} className="text-blue-600 mt-1" />
                    <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Professional Measurement Service</h4>
                        <p className="text-blue-800">
                            Our delivery partner will visit your location to take professional measurements. 
                            Please ensure someone is available at the given address.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Service Details */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900">What to Expect</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-slate-900">Professional Visit</h4>
                                <p className="text-sm text-slate-600">Expert measurement at your doorstep</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Clock size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-slate-900">15-20 Minutes</h4>
                                <p className="text-sm text-slate-600">Complete measurement process</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Award size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-slate-900">Digital Record</h4>
                                <p className="text-sm text-slate-600">Measurements saved for future orders</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900">Service Fee</h3>
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">Professional Measurement:</span>
                                <span className="font-semibold text-blue-600">₹199</span>
                            </div>
                            <div className="text-xs text-slate-500">
                                (Refundable on order confirmation)
                            </div>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                    Limited Time Offer: Free measurement on orders above ₹2999
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Measurement Slip Option */}
            <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Reference Option</h3>
                <p className="text-slate-600 mb-6">
                    If you have a perfectly fitted garment, you can attach it with fabric for reference
                </p>
                
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 transition-all">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="slip-upload"
                    />
                    <label htmlFor="slip-upload" className="cursor-pointer">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto">
                                <Camera size={32} className="text-slate-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Upload Reference Photo</p>
                                <p className="text-sm text-slate-600">Photo of your perfect-fit garment</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
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
                            className="bg-white rounded-xl border-2 border-slate-200 p-8 cursor-pointer hover:border-blue-400 hover:shadow-lg transition-all"
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                                    <User size={32} className="text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Digital Form</h3>
                                    <p className="text-slate-600 mb-4">
                                        Enter your measurements manually using our detailed form
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-green-600">
                                            <CheckCircle size={16} />
                                            <span className="text-sm font-medium">Instant & Free</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <Save size={16} />
                                            <span className="text-sm font-medium">Save profile for future</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setMeasurementMethod('physical')}
                            className="bg-white rounded-xl border-2 border-slate-200 p-8 cursor-pointer hover:border-blue-400 hover:shadow-lg transition-all"
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Ruler size={32} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Professional Measurement</h3>
                                    <p className="text-slate-600 mb-4">
                                        Our expert will visit and take professional measurements
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <Shield size={16} />
                                            <span className="text-sm font-medium">Professional accuracy</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <Award size={16} />
                                            <span className="text-sm font-medium">Fit consultation included</span>
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
                            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
                        >
                            <ArrowLeft size={20} />
                            Back to Method Selection
                        </button>

                        {/* Form Content */}
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
                            {measurementMethod === 'digital' ? renderDigitalForm() : renderPhysicalMeasurement()}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={() => navigate('/consumer/stitching')}
                                className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-all"
                            >
                                <ArrowLeft size={20} />
                                Back to Selection
                            </button>

                            <button
                                onClick={proceedToCheckout}
                                disabled={!validateMeasurements()}
                                className={`flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all ${
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
