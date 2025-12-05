'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, Minus, Plus, Truck, ShieldCheck } from 'lucide-react';

export default function ProductDetailPage() {
    const params = useParams();
    const id = Number(params.id);
    const product = allProducts.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบสินค้า</h1>
                        <Link href="/products" className="text-blue-600 hover:underline">
                            กลับไปหน้าสินค้าทั้งหมด
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Breadcrumb */}
                <nav className="flex text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-blue-600">หน้าแรก</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href="/products" className="hover:text-blue-600">สินค้าทั้งหมด</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-gray-900 font-medium truncate">{product.name}</span>
                </nav>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Left Column: Image */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.badge && (
                                    <div className={`absolute top-4 left-4 ${product.badgeColor === 'red' ? 'bg-red-500' :
                                        product.badgeColor === 'blue' ? 'bg-blue-500' :
                                            product.badgeColor === 'green' ? 'bg-green-500' :
                                                'bg-yellow-500'
                                        } text-white text-sm font-bold px-3 py-1 rounded-full`}>
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Product Info */}
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center text-yellow-400">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="ml-1 font-bold text-gray-900">{product.rating || 4.5}</span>
                                </div>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">{product.reviews || 0} รีวิว</span>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">ขายแล้ว 1.2k ชิ้น</span>
                            </div>

                            {/* Price */}
                            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                <div className="flex items-end space-x-3">
                                    <span className="text-3xl font-bold text-blue-600">
                                        ฿{product.price.toLocaleString()}
                                    </span>
                                    {product.originalPrice && (
                                        <>
                                            <span className="text-gray-400 line-through text-lg mb-1">
                                                ฿{product.originalPrice.toLocaleString()}
                                            </span>
                                            <span className="text-red-500 font-bold text-sm mb-2 bg-red-100 px-2 py-0.5 rounded">
                                                -{discountPercentage}%
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-2">รายละเอียดสินค้า</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description || 'ไม่มีรายละเอียดสินค้า'}
                                </p>
                            </div>

                            {/* Quantity & Actions */}
                            <div className="mt-auto space-y-6">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700 font-medium">จำนวน:</span>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-2 hover:bg-gray-100 transition-colors"
                                        >
                                            <Minus className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-2 hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                    <span className="text-sm text-gray-500">มีสินค้า 50 ชิ้น</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => addToCart(product, quantity)}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-all transform active:scale-95 flex items-center justify-center space-x-2"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>เพิ่มลงตะกร้า</span>
                                    </button>
                                    <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                                        ซื้อเลย
                                    </button>
                                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">
                                        <Heart className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Service Info */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                                <div className="flex items-start space-x-3">
                                    <Truck className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">จัดส่งฟรี</h4>
                                        <p className="text-sm text-gray-500">เมื่อช้อปครบ 500 บาท</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">รับประกันของแท้</h4>
                                        <p className="text-sm text-gray-500">คืนเงิน 100% หากพบของปลอม</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">สินค้าที่เกี่ยวข้อง</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
