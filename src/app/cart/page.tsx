'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    const shippingCost = cartItems.length > 0 ? (cartTotal > 500 ? 0 : 50) : 0;
    const finalTotal = cartTotal + shippingCost;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
                        <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="w-10 h-10 text-blue-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">ตะกร้าสินค้าว่างเปล่า</h1>
                        <p className="text-gray-500 mb-8">คุณยังไม่มีสินค้าในตะกร้า เลือกซื้อสินค้าที่คุณถูกใจได้เลย</p>
                        <Link
                            href="/products"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            เลือกซื้อสินค้า
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <ShoppingBag className="w-6 h-6 mr-3" />
                    ตะกร้าสินค้า ({cartItems.length} รายการ)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-6 space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                                        {/* Image */}
                                        <Link href={`/products/${item.id}`} className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </Link>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <Link href={`/products/${item.id}`} className="text-base font-medium text-gray-900 hover:text-blue-600 line-clamp-2 mb-1">
                                                {item.name}
                                            </Link>
                                            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                                            <div className="text-blue-600 font-bold">฿{item.price.toLocaleString()}</div>
                                        </div>

                                        {/* Quantity & Remove */}
                                        <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors text-gray-600"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 text-center font-medium text-gray-900">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-100 transition-colors text-gray-600"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                title="ลบสินค้า"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 p-4 flex justify-between items-center">
                                <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                                    <ArrowLeft className="w-4 h-4 mr-1" />
                                    เลือกซื้อสินค้าต่อ
                                </Link>
                                <button
                                    onClick={clearCart}
                                    className="text-gray-500 hover:text-red-600 text-sm font-medium transition-colors"
                                >
                                    ล้างตะกร้าสินค้า
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">สรุปคำสั่งซื้อ</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>ยอดรวมสินค้า</span>
                                    <span>฿{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>ค่าจัดส่ง</span>
                                    <span>{shippingCost === 0 ? 'ฟรี' : `฿${shippingCost}`}</span>
                                </div>
                                {shippingCost > 0 && (
                                    <div className="text-xs text-orange-500 bg-orange-50 p-2 rounded">
                                        ซื้อครบ 500 บาท จัดส่งฟรี (ขาดอีก ฿{(500 - cartTotal).toLocaleString()})
                                    </div>
                                )}
                                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                                    <span className="font-bold text-gray-900 text-lg">ยอดรวมสุทธิ</span>
                                    <span className="font-bold text-blue-600 text-xl">฿{finalTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <Link
                                href="/payment"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-all transform active:scale-95 mb-3"
                            >
                                ดำเนินการชำระเงิน
                            </Link>

                            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                                <ShieldCheckIcon className="w-4 h-4" />
                                <span>ชำระเงินปลอดภัย 100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function ShieldCheckIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
