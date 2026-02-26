import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    ShoppingBag,
    Star,
    Trash2,
    Share2,
    Eye,
    TrendingUp,
    Zap,
    X
} from 'lucide-react';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'Elegant Cotton Kurti',
            category: 'Kurti',
            price: 1299,
            originalPrice: 1999,
            discount: 35,
            rating: 4.5,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1594632220059-4c5b3c5a5f1?auto=format&fit=crop&q=80&w=400',
            inStock: true,
            addedDate: '2024-02-20'
        },
        {
            id: 2,
            name: 'Designer Silk Saree',
            category: 'Saree',
            price: 4999,
            originalPrice: 7999,
            discount: 38,
            rating: 4.8,
            reviews: 189,
            image: 'https://images.unsplash.com/photo-1539109233097-b2bf2f8f333b?auto=format&fit=crop&q=80&w=400',
            inStock: true,
            addedDate: '2024-02-18'
        },
        {
            id: 3,
            name: 'Anarkali Suit',
            category: 'Suit',
            price: 2499,
            originalPrice: 3999,
            discount: 38,
            rating: 4.6,
            reviews: 298,
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400',
            inStock: false,
            addedDate: '2024-02-15'
        },
        {
            id: 4,
            name: 'Bridal Lehenga',
            category: 'Lehenga',
            price: 12999,
            originalPrice: 19999,
            discount: 35,
            rating: 4.9,
            reviews: 87,
            image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400',
            inStock: true,
            addedDate: '2024-02-10'
        }
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const moveToCart = (id) => {
        // Add to cart logic
        console.log('Moving to cart:', id);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                            My Wishlist
                        </h1>
                        <p className="text-lg text-slate-600">
                            {wishlistItems.length} items saved for later
                        </p>
                    </div>
                    {wishlistItems.length > 0 && (
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center gap-2">
                            <ShoppingBag size={20} />
                            Add All to Cart
                        </button>
                    )}
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center">
                        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart size={48} className="text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Wishlist is Empty</h2>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">
                            Save your favorite items here and shop them later
                        </p>
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all">
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group"
                            >
                                <div className="relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {item.discount > 0 && (
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            {item.discount}% OFF
                                        </div>
                                    )}

                                    {!item.inStock && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold">
                                                Out of Stock
                                            </span>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex items-center gap-1">
                                            <Star size={14} className="text-amber-500 fill-amber-500" />
                                            <span className="text-sm font-medium text-slate-900">{item.rating}</span>
                                        </div>
                                        <span className="text-xs text-slate-500">({item.reviews})</span>
                                    </div>

                                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{item.name}</h3>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xl font-bold text-slate-900">₹{item.price}</span>
                                        {item.originalPrice && (
                                            <span className="text-sm text-slate-500 line-through">₹{item.originalPrice}</span>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        {item.inStock ? (
                                            <button
                                                onClick={() => moveToCart(item.id)}
                                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                            >
                                                <ShoppingBag size={16} />
                                                Add to Cart
                                            </button>
                                        ) : (
                                            <button
                                                disabled
                                                className="flex-1 bg-slate-200 text-slate-500 py-2 rounded-lg font-medium cursor-not-allowed"
                                            >
                                                Out of Stock
                                            </button>
                                        )}
                                        <button className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all">
                                            <Share2 size={16} className="text-slate-600" />
                                        </button>
                                    </div>

                                    <p className="text-xs text-slate-500 mt-3">
                                        Added on {new Date(item.addedDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Recommendations */}
                {wishlistItems.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">You May Also Like</h2>
                        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                            <TrendingUp size={48} className="text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-600">
                                Personalized recommendations based on your wishlist coming soon
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
