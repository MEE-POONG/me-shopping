'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Mock Data with Categories
import { allProducts } from '@/data/products';

const categories = Array.from(new Set(allProducts.map(p => p.category).filter(Boolean))) as string[];

export default function ProductsPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
    const [sortBy, setSortBy] = useState<string>('newest');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ min: '', max: '' });
    };

    const filteredProducts = useMemo(() => {
        return allProducts
            .filter(product => {
                // Category Filter
                if (selectedCategories.length > 0 && product.category && !selectedCategories.includes(product.category)) {
                    return false;
                }

                // Price Filter
                const min = priceRange.min ? parseInt(priceRange.min) : 0;
                const max = priceRange.max ? parseInt(priceRange.max) : Infinity;
                if (product.price < min || product.price > max) {
                    return false;
                }

                return true;
            })
            .sort((a, b) => {
                if (sortBy === 'price-asc') return a.price - b.price;
                if (sortBy === 'price-desc') return b.price - a.price;
                // Default to newest (using ID as proxy for now)
                return b.id - a.id;
            });
    }, [selectedCategories, priceRange, sortBy]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <div className="md:hidden mb-4">
                        <button
                            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                            className="w-full flex items-center justify-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                        >
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="font-medium text-gray-700">ตัวกรองสินค้า</span>
                        </button>
                    </div>

                    {/* Sidebar Filters */}
                    <aside className={`md:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-gray-800 flex items-center">
                                    <SlidersHorizontal className="w-5 h-5 mr-2" />
                                    ตัวกรอง
                                </h2>
                                {(selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                                    >
                                        ล้างทั้งหมด
                                    </button>
                                )}
                            </div>

                            {/* Categories */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-700 mb-3">หมวดหมู่</h3>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                                                {category}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-3">ช่วงราคา</h3>
                                <div className="flex items-center space-x-2 mb-4">
                                    <input
                                        type="number"
                                        placeholder="ต่ำสุด"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-400">-</span>
                                    <input
                                        type="number"
                                        placeholder="สูงสุด"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <p className="text-gray-600 mb-4 sm:mb-0">
                                พบสินค้า <span className="font-bold text-gray-900">{filteredProducts.length}</span> รายการ
                            </p>

                            <div className="flex items-center space-x-3">
                                <span className="text-gray-500 text-sm">เรียงตาม:</span>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                                    >
                                        <option value="newest">มาใหม่ล่าสุด</option>
                                        <option value="price-asc">ราคา: ต่ำ - สูง</option>
                                        <option value="price-desc">ราคา: สูง - ต่ำ</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
                                <div className="text-gray-400 mb-4">
                                    <Filter className="w-12 h-12 mx-auto opacity-50" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">ไม่พบสินค้าที่คุณค้นหา</h3>
                                <p className="text-gray-500">ลองปรับเปลี่ยนตัวกรองหรือคำค้นหาของคุณใหม่</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-6 text-blue-600 hover:text-blue-700 font-medium hover:underline"
                                >
                                    ล้างตัวกรองทั้งหมด
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
