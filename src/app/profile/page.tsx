'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, MapPin, Package, LogOut, Camera, Edit2, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<'info' | 'address' | 'orders'>('info');
    const [orderFilter, setOrderFilter] = useState<'ALL' | 'PENDING' | 'DELIVERED' | 'CANCELLED'>('ALL');

    // Mock Data
    const user = {
        name: 'สมชาย รักดี',
        email: 'somchai.rak@example.com',
        phone: '081-234-5678',
        gender: 'ชาย',
        birthday: '1990-01-01',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
    };

    const addresses = [
        {
            id: 1,
            name: 'สมชาย รักดี',
            phone: '081-234-5678',
            detail: '123/4 หมู่ 5 ถนนสุขุมวิท',
            subDistrict: 'บางนาเหนือ',
            district: 'เขตบางนา',
            province: 'กรุงเทพมหานคร',
            zipCode: '10260',
            isDefault: true
        }
    ];

    const orders = [
        {
            id: 'ORD-20231201-001',
            date: '01/12/2023 10:30',
            status: 'PENDING',
            total: 1290,
            items: [
                { name: 'เสื้อยืดแขนยาว', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop', quantity: 2, price: 590 }
            ]
        },
        {
            id: 'ORD-20231125-002',
            date: '25/11/2023 14:15',
            status: 'DELIVERED',
            total: 2500,
            items: [
                { name: 'กางเกงยีนส์', image: 'https://images.unsplash.com/photo-1542272617-08f08630793c?w=200&h=200&fit=crop', quantity: 1, price: 1200 },
                { name: 'รองเท้าผ้าใบ', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop', quantity: 1, price: 1300 }
            ]
        },
        {
            id: 'ORD-20231110-003',
            date: '10/11/2023 09:00',
            status: 'CANCELLED',
            total: 890,
            items: [
                { name: 'กระเป๋าสะพายข้าง', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop', quantity: 1, price: 890 }
            ]
        }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'PENDING':
                return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center"><Clock className="w-3 h-3 mr-1" /> ที่ต้องได้รับ</span>;
            case 'DELIVERED':
                return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> สำเร็จ</span>;
            case 'CANCELLED':
                return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center"><XCircle className="w-3 h-3 mr-1" /> ยกเลิก</span>;
            default:
                return null;
        }
    };

    const filteredOrders = orderFilter === 'ALL' ? orders : orders.filter(o => o.status === orderFilter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                            <div className="p-6 text-center border-b border-gray-100">
                                <div className="relative w-24 h-24 mx-auto mb-4">
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                    <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                            </div>
                            <nav className="p-2">
                                <button
                                    onClick={() => setActiveTab('info')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 transition-colors ${activeTab === 'info' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <User className="w-5 h-5 mr-3" />
                                    บัญชีของฉัน
                                </button>
                                <button
                                    onClick={() => setActiveTab('address')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 transition-colors ${activeTab === 'address' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <MapPin className="w-5 h-5 mr-3" />
                                    ที่อยู่
                                </button>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 transition-colors ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <Package className="w-5 h-5 mr-3" />
                                    รายการคำสั่งซื้อ
                                </button>
                            </nav>
                        </div>
                        <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
                            <LogOut className="w-5 h-5 mr-2" />
                            ออกจากระบบ
                        </button>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">

                        {/* PERSONAL INFO SECTION */}
                        {activeTab === 'info' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">ข้อมูลส่วนตัว</h2>
                                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                                        <Edit2 className="w-4 h-4 mr-1" />
                                        แก้ไขข้อมูล
                                    </button>
                                </div>

                                <div className="space-y-6 max-w-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">ชื่อ-นามสกุล</div>
                                        <div className="md:col-span-2 text-gray-900 font-medium">{user.name}</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">อีเมล</div>
                                        <div className="md:col-span-2 text-gray-900">{user.email}</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">เบอร์โทรศัพท์</div>
                                        <div className="md:col-span-2 text-gray-900">{user.phone}</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">เพศ</div>
                                        <div className="md:col-span-2 text-gray-900">{user.gender}</div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <div className="text-gray-500 font-medium">วันเกิด</div>
                                        <div className="md:col-span-2 text-gray-900">{user.birthday}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ADDRESS SECTION */}
                        {activeTab === 'address' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">ที่อยู่ของฉัน</h2>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors">
                                        <Plus className="w-4 h-4 mr-2" />
                                        เพิ่มที่อยู่ใหม่
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {addresses.map((addr) => (
                                        <div key={addr.id} className="border border-gray-200 rounded-xl p-6 relative hover:border-blue-200 transition-colors">
                                            {addr.isDefault && (
                                                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded font-medium">
                                                    ค่าเริ่มต้น
                                                </span>
                                            )}
                                            <div className="flex flex-col md:flex-row gap-4 md:items-start mb-2">
                                                <span className="font-bold text-gray-900 border-r border-gray-200 pr-4 mr-4 md:inline-block block">{addr.name}</span>
                                                <span className="text-gray-500">{addr.phone}</span>
                                            </div>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {addr.detail}, {addr.subDistrict}, {addr.district}, {addr.province} {addr.zipCode}
                                            </p>
                                            <div className="flex gap-4">
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">แก้ไข</button>
                                                {!addr.isDefault && <button className="text-gray-500 hover:text-red-600 text-sm font-medium">ลบ</button>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ORDERS SECTION */}
                        {activeTab === 'orders' && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                {/* Filter Tabs */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="flex overflow-x-auto">
                                        {[
                                            { id: 'ALL', label: 'ทั้งหมด' },
                                            { id: 'PENDING', label: 'ที่ต้องได้รับ' },
                                            { id: 'DELIVERED', label: 'สำเร็จ' },
                                            { id: 'CANCELLED', label: 'ยกเลิก' }
                                        ].map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setOrderFilter(tab.id as any)}
                                                className={`flex-1 py-4 px-6 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${orderFilter === tab.id
                                                        ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Order List */}
                                <div className="space-y-4">
                                    {filteredOrders.length === 0 ? (
                                        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                                            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                            <p className="text-gray-500">ไม่พบรายการคำสั่งซื้อ</p>
                                        </div>
                                    ) : (
                                        filteredOrders.map((order) => (
                                            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                                <div className="p-4 border-b border-gray-100 bg-gray-50/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                                    <div className="text-sm">
                                                        <span className="text-gray-500 mr-2">หมายเลขคำสั่งซื้อ</span>
                                                        <span className="font-medium text-gray-900">{order.id}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xs text-gray-400">{order.date}</span>
                                                        {getStatusBadge(order.status)}
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    {order.items.map((item, index) => (
                                                        <div key={index} className="flex gap-4 py-2">
                                                            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h4>
                                                                <p className="text-gray-500 text-sm">x{item.quantity}</p>
                                                            </div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                ฿{item.price.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/30 gap-4">
                                                    <div className="text-gray-900">
                                                        ยอดรวมสุทธิ: <span className="text-xl font-bold text-blue-600 ml-2">฿{order.total.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex gap-3 w-full sm:w-auto">
                                                        <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                                            ดูรายละเอียด
                                                        </button>
                                                        {order.status === 'DELIVERED' && (
                                                            <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                                                                ซื้ออีกครั้ง
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
