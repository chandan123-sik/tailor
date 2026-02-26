import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Edit,
    Save,
    X,
    Camera,
    Shield,
    Bell,
    CreditCard,
    Package,
    Heart,
    Star,
    Award,
    TrendingUp,
    Settings,
    LogOut,
    ChevronRight
} from 'lucide-react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 98765 43210',
        gender: 'Male',
        dob: '1990-05-15',
        address: {
            street: '123, MG Road',
            city: 'Srinagar',
            state: 'Jammu & Kashmir',
            pincode: '190001'
        }
    });

    const stats = [
        { icon: Package, label: 'Total Orders', value: '24', color: 'blue' },
        { icon: Heart, label: 'Wishlist Items', value: '12', color: 'red' },
        { icon: Star, label: 'Reviews Given', value: '18', color: 'amber' },
        { icon: Award, label: 'Loyalty Points', value: '2,450', color: 'purple' }
    ];

    const recentOrders = [
        { id: 'ST-7821', type: 'Stitching', item: 'Kurti', date: '2024-02-20', status: 'In Progress', amount: 1299 },
        { id: 'EC-1452', type: 'Readymade', item: 'Linen Kurti', date: '2024-02-15', status: 'Delivered', amount: 2499 },
        { id: 'ST-7822', type: 'Stitching', item: 'Suit', date: '2024-02-18', status: 'Ready', amount: 3999 }
    ];

    const savedAddresses = [
        {
            id: 1,
            type: 'Home',
            name: 'John Doe',
            phone: '+91 98765 43210',
            address: '123, MG Road, Srinagar, Jammu & Kashmir - 190001',
            isDefault: true
        },
        {
            id: 2,
            type: 'Work',
            name: 'John Doe',
            phone: '+91 98765 43210',
            address: '456, Lal Chowk, Srinagar, Jammu & Kashmir - 190011',
            isDefault: false
        }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Save logic here
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border-4 border-white/30">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff85?auto=format&fit=crop&q=80&w=150"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-0 right-0 w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50 transition-all shadow-lg">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
                            <p className="text-white/80 mb-4">{profileData.email}</p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <Award size={18} />
                                    <span className="font-medium">Premium Member</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <TrendingUp size={18} />
                                    <span className="font-medium">Member since 2023</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center gap-2"
                        >
                            {isEditing ? <X size={18} /> : <Edit size={18} />}
                            {isEditing ? 'Cancel' : 'Edit Profile'}
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl border border-slate-200 p-6 text-center"
                        >
                            <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                <stat.icon size={24} className={`text-${stat.color}-600`} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                            <p className="text-sm text-slate-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl border border-slate-200 mb-8">
                    <div className="flex overflow-x-auto">
                        {['profile', 'orders', 'addresses', 'settings'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 font-medium capitalize transition-all border-b-2 ${
                                    activeTab === tab
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                    {activeTab === 'profile' && (
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Personal Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <User size={18} className="text-slate-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                                    className="flex-1 bg-transparent border-none outline-none"
                                                />
                                            ) : (
                                                <span className="text-slate-900">{profileData.name}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <Mail size={18} className="text-slate-400" />
                                            <span className="text-slate-900">{profileData.email}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <Phone size={18} className="text-slate-400" />
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    value={profileData.phone}
                                                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                                                    className="flex-1 bg-transparent border-none outline-none"
                                                />
                                            ) : (
                                                <span className="text-slate-900">{profileData.phone}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <User size={18} className="text-slate-400" />
                                            {isEditing ? (
                                                <select
                                                    value={profileData.gender}
                                                    onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                                                    className="flex-1 bg-transparent border-none outline-none"
                                                >
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            ) : (
                                                <span className="text-slate-900">{profileData.gender}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <Calendar size={18} className="text-slate-400" />
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    value={profileData.dob}
                                                    onChange={(e) => setProfileData({...profileData, dob: e.target.value})}
                                                    className="flex-1 bg-transparent border-none outline-none"
                                                />
                                            ) : (
                                                <span className="text-slate-900">{profileData.dob}</span>
                                            )}
                                        </div>
                                    </div>

                                    {isEditing && (
                                        <button
                                            onClick={handleSave}
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Save size={18} />
                                            Save Changes
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Address</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Street Address</label>
                                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg">
                                            <MapPin size={18} className="text-slate-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={profileData.address.street}
                                                    onChange={(e) => setProfileData({
                                                        ...profileData,
                                                        address: {...profileData.address, street: e.target.value}
                                                    })}
                                                    className="flex-1 bg-transparent border-none outline-none"
                                                />
                                            ) : (
                                                <span className="text-slate-900">{profileData.address.street}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                                            <input
                                                type="text"
                                                value={profileData.address.city}
                                                disabled={!isEditing}
                                                onChange={(e) => setProfileData({
                                                    ...profileData,
                                                    address: {...profileData.address, city: e.target.value}
                                                })}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-lg border-none outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                                            <input
                                                type="text"
                                                value={profileData.address.state}
                                                disabled={!isEditing}
                                                onChange={(e) => setProfileData({
                                                    ...profileData,
                                                    address: {...profileData.address, state: e.target.value}
                                                })}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-lg border-none outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Pincode</label>
                                        <input
                                            type="text"
                                            value={profileData.address.pincode}
                                            disabled={!isEditing}
                                            onChange={(e) => setProfileData({
                                                ...profileData,
                                                address: {...profileData.address, pincode: e.target.value}
                                            })}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-lg border-none outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'orders' && (
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Orders</h3>
                            <div className="space-y-4">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <Package size={24} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">#{order.id}</p>
                                                <p className="text-sm text-slate-600">{order.item} • {order.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900">₹{order.amount}</p>
                                            <p className="text-sm text-blue-600">{order.status}</p>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'addresses' && (
                        <div className="space-y-6">
                            {savedAddresses.map((address) => (
                                <div key={address.id} className="bg-white rounded-xl border border-slate-200 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <MapPin size={20} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-slate-900">{address.type}</h4>
                                                    {address.isDefault && (
                                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                            Default
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-slate-600">{address.name}</p>
                                            </div>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            Edit
                                        </button>
                                    </div>
                                    <p className="text-slate-700 mb-2">{address.address}</p>
                                    <p className="text-slate-600 text-sm">Phone: {address.phone}</p>
                                </div>
                            ))}
                            <button className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
                                + Add New Address
                            </button>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl border border-slate-200 p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Account Settings</h3>
                                <div className="space-y-4">
                                    <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                        <div className="flex items-center gap-3">
                                            <Shield size={20} className="text-slate-600" />
                                            <span className="font-medium text-slate-900">Change Password</span>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                        <div className="flex items-center gap-3">
                                            <Bell size={20} className="text-slate-600" />
                                            <span className="font-medium text-slate-900">Notification Preferences</span>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                                        <div className="flex items-center gap-3">
                                            <CreditCard size={20} className="text-slate-600" />
                                            <span className="font-medium text-slate-900">Payment Methods</span>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-all text-red-600">
                                        <div className="flex items-center gap-3">
                                            <LogOut size={20} />
                                            <span className="font-medium">Logout</span>
                                        </div>
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
