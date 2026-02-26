import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Bell,
    Lock,
    Globe,
    Moon,
    Sun,
    Shield,
    Eye,
    EyeOff,
    Mail,
    Smartphone,
    MapPin,
    CreditCard,
    Package,
    User,
    LogOut,
    Trash2,
    Check,
    AlertCircle
} from 'lucide-react';

const Settings = () => {
    const [activeSection, setActiveSection] = useState('notifications');
    const [darkMode, setDarkMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        promotions: true,
        newsletter: false,
        sms: true,
        email: true,
        push: true
    });

    const [privacy, setPrivacy] = useState({
        profileVisibility: 'public',
        showEmail: false,
        showPhone: false,
        dataSharing: true
    });

    const sections = [
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Lock },
        { id: 'privacy', name: 'Privacy', icon: Shield },
        { id: 'preferences', name: 'Preferences', icon: Globe },
        { id: 'account', name: 'Account', icon: User }
    ];

    const ToggleSwitch = ({ enabled, onChange }) => (
        <button
            onClick={() => onChange(!enabled)}
            className={`relative w-12 h-6 rounded-full transition-all ${
                enabled ? 'bg-blue-600' : 'bg-slate-300'
            }`}
        >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                enabled ? 'left-7' : 'left-1'
            }`} />
        </button>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                        Settings
                    </h1>
                    <p className="text-lg text-slate-600">
                        Manage your account preferences and settings
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-8">
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                            activeSection === section.id
                                                ? 'bg-blue-600 text-white'
                                                : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        <section.icon size={20} />
                                        <span className="font-medium">{section.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Notifications */}
                        {activeSection === 'notifications' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h2>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Package size={20} className="text-slate-600" />
                                                <div>
                                                    <p className="font-medium text-slate-900">Order Updates</p>
                                                    <p className="text-sm text-slate-600">Get notified about your order status</p>
                                                </div>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.orderUpdates}
                                                onChange={(val) => setNotifications({...notifications, orderUpdates: val})}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Bell size={20} className="text-slate-600" />
                                                <div>
                                                    <p className="font-medium text-slate-900">Promotions & Offers</p>
                                                    <p className="text-sm text-slate-600">Receive special deals and discounts</p>
                                                </div>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.promotions}
                                                onChange={(val) => setNotifications({...notifications, promotions: val})}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Mail size={20} className="text-slate-600" />
                                                <div>
                                                    <p className="font-medium text-slate-900">Newsletter</p>
                                                    <p className="text-sm text-slate-600">Weekly updates and fashion tips</p>
                                                </div>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.newsletter}
                                                onChange={(val) => setNotifications({...notifications, newsletter: val})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">Notification Channels</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Smartphone size={20} className="text-slate-600" />
                                                <span className="font-medium text-slate-900">Push Notifications</span>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.push}
                                                onChange={(val) => setNotifications({...notifications, push: val})}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Mail size={20} className="text-slate-600" />
                                                <span className="font-medium text-slate-900">Email</span>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.email}
                                                onChange={(val) => setNotifications({...notifications, email: val})}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Smartphone size={20} className="text-slate-600" />
                                                <span className="font-medium text-slate-900">SMS</span>
                                            </div>
                                            <ToggleSwitch
                                                enabled={notifications.sms}
                                                onChange={(val) => setNotifications({...notifications, sms: val})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Security */}
                        {activeSection === 'security' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">Change Password</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none pr-12"
                                                />
                                                <button
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                                            <input
                                                type="password"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            />
                                        </div>
                                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                                            Update Password
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">Two-Factor Authentication</h3>
                                    <p className="text-slate-600 mb-4">
                                        Add an extra layer of security to your account
                                    </p>
                                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all">
                                        Enable 2FA
                                    </button>
                                </div>

                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h3 className="font-bold text-slate-900 mb-4">Active Sessions</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                            <div>
                                                <p className="font-medium text-slate-900">Windows • Chrome</p>
                                                <p className="text-sm text-slate-600">Srinagar, India • Active now</p>
                                            </div>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                Current
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Privacy */}
                        {activeSection === 'privacy' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">Privacy Settings</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-3">Profile Visibility</label>
                                            <select
                                                value={privacy.profileVisibility}
                                                onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none"
                                            >
                                                <option value="public">Public</option>
                                                <option value="private">Private</option>
                                                <option value="friends">Friends Only</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-slate-900">Show Email Address</p>
                                                <p className="text-sm text-slate-600">Let others see your email</p>
                                            </div>
                                            <ToggleSwitch
                                                enabled={privacy.showEmail}
                                                onChange={(val) => setPrivacy({...privacy, showEmail: val})}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-slate-900">Show Phone Number</p>
                                                <p className="text-sm text-slate-600">Let others see your phone</p>
                                            </div>
                                            <ToggleSwitch
                                                enabled={privacy.showPhone}
                                                onChange={(val) => setPrivacy({...privacy, showPhone: val})}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-slate-900">Data Sharing</p>
                                                <p className="text-sm text-slate-600">Share data for better recommendations</p>
                                            </div>
                                            <ToggleSwitch
                                                enabled={privacy.dataSharing}
                                                onChange={(val) => setPrivacy({...privacy, dataSharing: val})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <Shield size={24} className="text-blue-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">Your Data is Safe</h3>
                                            <p className="text-sm text-slate-700">
                                                We use industry-standard encryption to protect your personal information. 
                                                Read our Privacy Policy to learn more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Preferences */}
                        {activeSection === 'preferences' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">Display Preferences</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {darkMode ? <Moon size={20} className="text-slate-600" /> : <Sun size={20} className="text-slate-600" />}
                                                <div>
                                                    <p className="font-medium text-slate-900">Dark Mode</p>
                                                    <p className="text-sm text-slate-600">Switch to dark theme</p>
                                                </div>
                                            </div>
                                            <ToggleSwitch
                                                enabled={darkMode}
                                                onChange={setDarkMode}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-3">Language</label>
                                            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none">
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Urdu</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-3">Currency</label>
                                            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-400 focus:outline-none">
                                                <option>INR (₹)</option>
                                                <option>USD ($)</option>
                                                <option>EUR (€)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Account */}
                        {activeSection === 'account' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">Account Management</h2>
                                    <div className="space-y-4">
                                        <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                            <div className="flex items-center gap-3">
                                                <Package size={20} className="text-slate-600" />
                                                <span className="font-medium text-slate-900">Download My Data</span>
                                            </div>
                                            <span className="text-blue-600 text-sm font-medium">Export</span>
                                        </button>

                                        <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                            <div className="flex items-center gap-3">
                                                <LogOut size={20} className="text-slate-600" />
                                                <span className="font-medium text-slate-900">Logout from All Devices</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <div className="flex items-start gap-3 mb-4">
                                        <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">Danger Zone</h3>
                                            <p className="text-sm text-slate-700 mb-4">
                                                Once you delete your account, there is no going back. Please be certain.
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all">
                                        <Trash2 size={18} />
                                        Delete Account
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
