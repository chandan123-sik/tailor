import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageCircle, Phone, Mail, ChevronDown, Clock, CheckCircle } from 'lucide-react';

const Help = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqs = [
        { id: 1, question: 'How can I track my order?', answer: 'You can track your order by going to "My Orders" section in your dashboard.' },
        { id: 2, question: 'How long does delivery take?', answer: 'Standard delivery takes 7-10 business days. Express delivery is 3-5 days.' },
        { id: 3, question: 'How do I provide measurements?', 
    Video,
    FileText,
    Clock,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const Help = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Topics', icon: Book },
        { id: 'orders', name: 'Orders & Tracking', icon: FileText },
        { id: 'payments', name                 Our support team is here to assist you 24/7
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all">
                        Contact Support Team
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Help;
</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Need Help */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Still need help?</h2>
                    <p className="text-white/80 mb-6">
                   {expandedFaq === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}        <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 flex-shrink-0 transition-transform ${
                                            expandedFaq === faq.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                            key={faq.id}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all"
                                >
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                <category.icon size={18} />
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFaqs.map((faq) => (
                            <div
                  {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                                    activeCategory === category.id
                                        ? 'bg-blue-600 text-white'
                                                     {option.action}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    
                    {/* Category Filter */}
                    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                                               <option.icon size={24} className={`text-${option.color}-600`} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{option.title}</h3>
                                <p className="text-slate-600 mb-4">{option.description}</p>
                                <button className={`w-full bg-${option.color}-600 text-white py-2 rounded-lg font-medium hover:bg-${option.color}-700 transition-all`}>
                                          key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all"
                            >
                                <div className={`w-12 h-12 bg-${option.color}-100 rounded-xl flex items-center justify-center mb-4`}>
   ate-900 mb-1">98%</p>
                        <p className="text-sm text-slate-600">Customer Satisfaction</p>
                    </div>
                </div>

                {/* Contact Options */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Support</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactOptions.map((option, index) => (
                            <motion.div
         n</p>
                        <p className="text-sm text-slate-600">Average Response Time</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <CheckCircle size={24} className="text-purple-600" />
                        </div>
                        <p className="text-2xl font-bold text-sl             <p className="text-sm text-slate-600">Support Available</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <MessageCircle size={24} className="text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900 mb-1">&lt; 5 mik Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Clock size={24} className="text-green-600" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900 mb-1">24/7</p>
                     <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for help articles..."
                            className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-lg"
                        />
                    </div>
                </div>

                {/* Quicxt-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        How can we help you?
                    </h1>
                    <p className="text-lg text-slate-600 mb-8">
                        Search our knowledge base or contact support
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
              s.filter(faq => faq.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle size={40} className="text-blue-600" />
                    </div>
                    <h1 className="te          icon: Phone,
            title: 'Phone Support',
            description: '+91 1800-123-4567',
            action: 'Call Now',
            color: 'green',
            available: true
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'support@tailorhub.com',
            action: 'Send Email',
            color: 'purple',
            available: true
        }
    ];

    const filteredFaqs = activeCategory === 'all' 
        ? faqs 
        : faqgory: 'account',
            question: 'Can I have multiple delivery addresses?',
            answer: 'Yes! You can add multiple addresses in your profile. You can set one as default and choose different addresses during checkout.'
        }
    ];

    const contactOptions = [
        {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Chat with our support team',
            action: 'Start Chat',
            color: 'blue',
            available: true
        },
        {
  e processed within 5-7 business days after we receive the returned item. The amount will be credited to your original payment method.'
        },
        {
            id: 9,
            category: 'account',
            question: 'How do I change my password?',
            answer: 'Go to Settings > Security > Change Password. Enter your current password and set a new one. We recommend using a strong password with a mix of letters, numbers, and symbols.'
        },
        {
            id: 10,
            cateencryption to store your payment information securely.'
        },
        {
            id: 7,
            category: 'returns',
            question: 'What is your return policy?',
            answer: 'For readymade items, you can return within 7 days of delivery. Custom stitched items can be altered for free once. Items must be unused and in original condition.'
        },
        {
            id: 8,
            category: 'returns',
            question: 'How long does refund take?',
            answer: 'Refunds ar'
        },
        {
            id: 5,
            category: 'payments',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit/debit cards, UPI, net banking, and popular digital wallets. All payments are secured with 256-bit SSL encryption.'
        },
        {
            id: 6,
            category: 'payments',
            question: 'Is it safe to save my card details?',
            answer: 'Yes, absolutely! We use industry-standard PCI DSS compliant        answer: 'After selecting your garment type, you\'ll be guided through our interactive measurement system. You can either enter measurements manually or use our video guide for accurate measurements.'
        },
        {
            id: 4,
            category: 'stitching',
            question: 'Can I request alterations after delivery?',
            answer: 'Yes! We offer one free alteration within 7 days of delivery for all custom stitched items. Simply contact our support team to schedule an alteration.l see real-time updates on your order status.'
        },
        {
            id: 2,
            category: 'orders',
            question: 'How long does delivery take?',
            answer: 'Standard delivery takes 7-10 business days. Express delivery is available for 3-5 business days. Premium delivery ensures delivery within 2-3 business days.'
        },
        {
            id: 3,
            category: 'stitching',
            question: 'How do I provide my measurements for custom stitching?',
     : 'Payments', icon: FileText },
        { id: 'stitching', name: 'Custom Stitching', icon: FileText },
        { id: 'returns', name: 'Returns & Refunds', icon: FileText },
        { id: 'account', name: 'Account', icon: FileText }
    ];

    const faqs = [
        {
            id: 1,
            category: 'orders',
            question: 'How can I track my order?',
            answer: 'You can track your order by going to "My Orders" section in your dashboard. Click on the order you want to track and you\'l