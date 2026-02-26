import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Heart,
    Star,
    Filter,
    Search,
    Grid,
    List,
    ChevronDown,
    TrendingUp,
    Zap,
    Tag,
    Truck,
    Shield,
    ArrowRight,
    Eye,
    Plus,
    Minus,
    X
} from 'lucide-react';

const Shop = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    const categories = [
        { id: 'all', name: 'All Products', count: 156 },
        { id: 'kurti', name: 'Kurtis', count: 45 },
        { id: 'saree', name: 'Sarees', count: 38 },
        { id: 'suit', name: 'Suits', count: 32 },
        { id: 'lehenga', name: 'Lehengas', count: 25 },
        { id: 'palazzo', name: 'Palazzos', count: 16 }
    ];

    const products = [
        {
            id: 1,
            name: 'Elegant Cotton Kurti',
            category: 'kurti',
            price: 1299,
            originalPrice: 1999,
            discount: 35,
            rating: 4.5,
            reviews: 234,
            image: 'https://images.unsplash.com/photo-1594632220059-4c5b3c5a5f1?auto=format&fit=crop&q=80&w=400',
            colors: ['Blue', 'Pink', 'White'],
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            trending: true,
            fastDelivery: true
        },
        {
            id: 2,
            name: 'Designer Silk Saree',
            category: 'saree',
            price: 4999,
            originalPrice: 7999,
            discount: 38,
            rating: 4.8,
            reviews: 189,
            image: 'https://images.unsplash.com/photo-1539109233097-b2bf2f8f333b?auto=format&fit=crop&q=80&w=400',
            colors: ['Red', 'Gold', 'Green'],
            sizes: ['Free Size'],
            inStock: true,
            trending: true,
            fastDelivery: false
        },
        {
            id: 3,
            name: 'Printed Palazzo Set',
            category: 'palazzo',
            price: 899,
            originalPrice: 1499,
            discount: 40,
            rating: 4.3,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=400',
            colors: ['Black', 'Navy', 'Maroon'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            trending: false,
            fastDelivery: true
        },
        {
            id: 4,
            name: 'Anarkali Suit',
            category: 'suit',
            price: 2499,
            originalPrice: 3999,
            discount: 38,
            rating: 4.6,
            reviews: 298,
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400',
            colors: ['Pink', 'Purple', 'Peach'],
            sizes: ['S', 'M', 'L', 'XL'],
            inStock: true,
            trending: true,
            fastDelivery: true
        },
        {
            id: 5,
            name: 'Bridal Lehenga',
            category: 'lehenga',
            price: 12999,
            originalPrice: 19999,
            discount: 35,
            rating: 4.9,
            reviews: 87,
            image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400',
            colors: ['Red', 'Maroon', 'Pink'],
            sizes: ['S', 'M', 'L'],
            inStock: true,
            trending: true,
            fastDelivery: false
        },
        {
            id: 6,
            name: 'Casual Cotton Kurti',
            category: 'kurti',
            price: 799,
            originalPrice: 1299,
            discount: 38,
            rating: 4.2,
            reviews: 412,
            image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=400',
            colors: ['Yellow', 'Green', 'Orange'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            inStock: true,
            trending: false,
            fastDelivery: true
        }
    ];

    const toggleWishlist = (productId) => {
        setWishlist(prev => 
            prev.includes(productId) 
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const ProductCard = ({ product }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group"
        >
            <div className="relative overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.discount}% OFF
                    </div>
                )}
                
                {product.trending && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} />
                        Trending
                    </div>
                )}

                <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 ${product.trending ? 'top-14' : ''} w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        wishlist.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/90 text-slate-600 hover:bg-red-500 hover:text-white'
                    }`}
                >
                    <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>

                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 bg-white text-slate-900 py-2 rounded-lg font-medium text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                    >
                        <Eye size={16} />
                        Quick View
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="text-sm font-medium text-slate-900">{product.rating}</span>
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews} reviews)</span>
                </div>

                <h3 className="font-semibold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">₹{product.originalPrice}</span>
                    )}
                </div>

                {product.fastDelivery && (
                    <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
                        <Zap size={14} />
                        Fast Delivery Available
                    </div>
                )}

                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );

    const QuickViewModal = ({ product, onClose }) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Product Details</h2>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full rounded-xl"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                            
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-1">
                                    <Star size={18} className="text-amber-500 fill-amber-500" />
                                    <span className="font-medium text-slate-900">{product.rating}</span>
                                </div>
                                <span className="text-slate-500">({product.reviews} reviews)</span>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl font-bold text-slate-900">₹{product.price}</span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-xl text-slate-500 line-through">₹{product.originalPrice}</span>
                                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                                            {product.discount}% OFF
                                        </span>
                                    </>
                                )}
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Size</label>
                                    <div className="flex gap-2">
                                        {product.sizes.map(size => (
                                            <button key={size} className="px-4 py-2 border-2 border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Color</label>
                                    <div className="flex gap-2">
                                        {product.colors.map(color => (
                                            <button key={color} className="px-4 py-2 border-2 border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium">
                                                {color}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mb-6">
                                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                                    <ShoppingBag size={20} />
                                    Add to Cart
                                </button>
                                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all">
                                    Buy Now
                                </button>
                            </div>

                            <div className="space-y-3 border-t border-slate-200 pt-6">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Truck size={20} className="text-green-600" />
                                    <span className="text-sm">Free delivery on orders above ₹999</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Shield size={20} className="text-blue-600" />
                                    <span className="text-sm">7 days easy return policy</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Tag size={20} className="text-amber-600" />
                                    <span className="text-sm">100% authentic products</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );

    const filteredProducts = products.filter(product => {
        if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
        if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
        return true;
    });

    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                        Readymade Collection
                    </h1>
                    <p className="text-lg text-slate-600">
                        Discover our curated collection of premium ethnic wear
                    </p>
                </div>

                {/* Search and Filters Bar */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all font-medium"
                            >
                                <Filter size={20} />
                                Filters
                            </button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-6 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all font-medium cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                            </select>

                            <div className="flex gap-2 border border-slate-200 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
                                >
                                    <Grid size={20} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
                                >
                                    <List size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    {/* Sidebar Categories */}
                    <div className="hidden lg:block w-64 space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all ${
                                            selectedCategory === category.id
                                                ? 'bg-blue-600 text-white'
                                                : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        <span className="font-medium">{category.name}</span>
                                        <span className="text-sm">{category.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="20000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full"
                                />
                                <div className="flex items-center justify-between text-sm text-slate-600">
                                    <span>₹0</span>
                                    <span className="font-bold text-slate-900">₹{priceRange[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-slate-600">
                                Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> products
                            </p>
                        </div>

                        <div className={`grid gap-6 ${
                            viewMode === 'grid' 
                                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                                : 'grid-cols-1'
                        }`}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            {selectedProduct && (
                <QuickViewModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </div>
    );
};

export default Shop;
