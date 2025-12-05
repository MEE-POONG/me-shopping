'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, MapPin, Package, LogOut, Camera, Edit2, Plus, Clock, CheckCircle, XCircle, Save, X, Trash2, ChevronRight, CreditCard, Truck } from 'lucide-react';

// Interfaces
interface Address {
    id: number;
    name: string;
    phone: string;
    detail: string;
    subDistrict: string;
    district: string;
    province: string;
    zipCode: string;
    isDefault: boolean;
}

interface OrderItem {
    name: string;
    image: string;
    quantity: number;
    price: number;
}

interface TimelineEvent {
    status: string;
    date: string;
    description: string;
    completed: boolean;
}

interface Order {
    id: string;
    date: string;
    status: 'PENDING' | 'DELIVERED' | 'CANCELLED';
    total: number;
    items: OrderItem[];
    subtotal: number;
    shippingFee: number;
    discount: number;
    paymentMethod: string;
    shippingAddress: Address;
    timeline: TimelineEvent[];
}

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<'info' | 'address' | 'orders'>('orders'); // Default to orders for testing
    const [orderFilter, setOrderFilter] = useState<'ALL' | 'PENDING' | 'DELIVERED' | 'CANCELLED'>('ALL');

    // MOCK USER DATA
    const [user, setUser] = useState({
        name: 'สมชาย รักดี',
        email: 'somchai.rak@example.com',
        phone: '081-234-5678',
        gender: 'ชาย',
        birthday: '1990-01-01',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
    });

    // EDIT PROFILE STATE
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [editProfileForm, setEditProfileForm] = useState(user);

    // ADDRESS STATE
    const [addresses, setAddresses] = useState<Address[]>([
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
    ]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
    const [addressForm, setAddressForm] = useState<Omit<Address, 'id' | 'isDefault'>>({
        name: '',
        phone: '',
        detail: '',
        subDistrict: '',
        district: '',
        province: '',
        zipCode: ''
    });

    // MOCK ORDERS
    const orders: Order[] = [
        {
            id: 'ORD-20231201-001',
            date: '01/12/2023 10:30',
            status: 'PENDING',
            total: 1290,
            subtotal: 1180,
            shippingFee: 110,
            discount: 0,
            paymentMethod: 'โอนเงินผ่านบัญชีธนาคาร',
            items: [
                { name: 'เสื้อยืดแขนยาว', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop', quantity: 2, price: 590 }
            ],
            shippingAddress: addresses[0],
            timeline: [
                { status: 'สั่งซื้อสินค้าสำเร็จ', date: '01/12/2023 10:30', description: 'คำสั่งซื้อของคุณถูกสร้างเรียบร้อยแล้ว', completed: true },
                { status: 'ชำระเงินแล้ว', date: '01/12/2023 10:35', description: 'ยืนยันการชำระเงินแล้ว', completed: true },
                { status: 'กำลังเตรียมจัดส่ง', date: '', description: 'ทางร้านกำลังแพ็คสินค้า', completed: false },
                { status: 'จัดส่งสำเร็จ', date: '', description: 'สินค้าถึงมือผู้รับเรียบร้อย', completed: false },
            ]
        },
        {
            id: 'ORD-20231125-002',
            date: '25/11/2023 14:15',
            status: 'DELIVERED',
            total: 2500,
            subtotal: 2500,
            shippingFee: 0,
            discount: 0,
            paymentMethod: 'QR Code',
            items: [
                { name: 'กางเกงยีนส์', image: 'https://images.unsplash.com/photo-1542272617-08f08630793c?w=200&h=200&fit=crop', quantity: 1, price: 1200 },
                { name: 'รองเท้าผ้าใบ', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop', quantity: 1, price: 1300 }
            ],
            shippingAddress: addresses[0],
            timeline: [
                { status: 'สั่งซื้อสินค้าสำเร็จ', date: '25/11/2023 14:15', description: 'คำสั่งซื้อของคุณถูกสร้างเรียบร้อยแล้ว', completed: true },
                { status: 'ชำระเงินแล้ว', date: '25/11/2023 14:20', description: 'ยืนยันการชำระเงินแล้ว', completed: true },
                { status: 'กำลังเตรียมจัดส่ง', date: '25/11/2023 16:00', description: 'ทางร้านกำลังแพ็คสินค้า', completed: true },
                { status: 'จัดส่งสำเร็จ', date: '27/11/2023 11:30', description: 'สินค้าถึงมือผู้รับเรียบร้อย', completed: true },
            ]
        },
        {
            id: 'ORD-20231110-003',
            date: '10/11/2023 09:00',
            status: 'CANCELLED',
            total: 890,
            subtotal: 890,
            shippingFee: 0,
            discount: 0,
            paymentMethod: 'โอนเงินผ่านบัญชีธนาคาร',
            items: [
                { name: 'กระเป๋าสะพายข้าง', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop', quantity: 1, price: 890 }
            ],
            shippingAddress: addresses[0],
            timeline: [
                { status: 'สั่งซื้อสินค้าสำเร็จ', date: '10/11/2023 09:00', description: 'คำสั่งซื้อของคุณถูกสร้างเรียบร้อยแล้ว', completed: true },
                { status: 'ยกเลิกคำสั่งซื้อ', date: '10/11/2023 10:00', description: 'คำสั่งซื้อถูกยกเลิกเนื่องจากเกินเวลาชำระเงิน', completed: true },
            ]
        }
    ];

    // ORDER DETAIL STATE
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // --- PROFILE ACTIONS ---
    const handleEditProfileClick = () => {
        setEditProfileForm(user);
        setIsEditingProfile(true);
    };

    const handleCancelEditProfile = () => {
        setIsEditingProfile(false);
    };

    const handleSaveProfile = () => {
        setUser(editProfileForm);
        setIsEditingProfile(false);
    };

    const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditProfileForm(prev => ({ ...prev, [name]: value }));
    };

    // --- ADDRESS ACTIONS ---
    const handleAddAddressClick = () => {
        setAddressForm({
            name: user.name,
            phone: user.phone,
            detail: '',
            subDistrict: '',
            district: '',
            province: '',
            zipCode: ''
        });
        setEditingAddressId(null);
        setShowAddressForm(true);
    };

    const handleEditAddressClick = (addr: Address) => {
        setAddressForm({
            name: addr.name,
            phone: addr.phone,
            detail: addr.detail,
            subDistrict: addr.subDistrict,
            district: addr.district,
            province: addr.province,
            zipCode: addr.zipCode
        });
        setEditingAddressId(addr.id);
        setShowAddressForm(true);
    };

    const handleDeleteAddress = (id: number) => {
        if (confirm('คุณต้องการลบที่อยู่นี้ใช่หรือไม่?')) {
            setAddresses(prev => prev.filter(a => a.id !== id));
        }
    };

    const handleSetDefaultAddress = (id: number) => {
        setAddresses(prev => prev.map(a => ({
            ...a,
            isDefault: a.id === id
        })));
    };

    const handleSaveAddress = () => {
        if (editingAddressId) {
            // Update
            setAddresses(prev => prev.map(a =>
                a.id === editingAddressId
                    ? { ...a, ...addressForm }
                    : a
            ));
        } else {
            // Create
            const newId = Math.max(...addresses.map(a => a.id), 0) + 1;
            setAddresses(prev => [...prev, {
                id: newId,
                ...addressForm,
                isDefault: addresses.length === 0 // If it's the first address, make it default
            }]);
        }
        setShowAddressForm(false);
    };

    const handleAddressFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAddressForm(prev => ({ ...prev, [name]: value }));
    };

    // --- RENDER HELPERS ---
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
        <div className="min-h-screen bg-gray-50 flex flex-col relative">
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
                                {/* ... Personal Info Code ... */}
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">ข้อมูลส่วนตัว</h2>
                                    {!isEditingProfile && (
                                        <button
                                            onClick={handleEditProfileClick}
                                            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                                        >
                                            <Edit2 className="w-4 h-4 mr-1" />
                                            แก้ไขข้อมูล
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-6 max-w-2xl">
                                    {/* Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">ชื่อ-นามสกุล</div>
                                        <div className="md:col-span-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editProfileForm.name}
                                                    onChange={handleProfileInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                                />
                                            ) : (
                                                <div className="text-gray-900 font-medium">{user.name}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">อีเมล</div>
                                        <div className="md:col-span-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={editProfileForm.email}
                                                    onChange={handleProfileInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                                />
                                            ) : (
                                                <div className="text-gray-900">{user.email}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">เบอร์โทรศัพท์</div>
                                        <div className="md:col-span-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={editProfileForm.phone}
                                                    onChange={handleProfileInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                                />
                                            ) : (
                                                <div className="text-gray-900">{user.phone}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-50 pb-4">
                                        <div className="text-gray-500 font-medium">เพศ</div>
                                        <div className="md:col-span-2">
                                            {isEditingProfile ? (
                                                <select
                                                    name="gender"
                                                    value={editProfileForm.gender}
                                                    onChange={handleProfileInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                                >
                                                    <option value="ชาย">ชาย</option>
                                                    <option value="หญิง">หญิง</option>
                                                    <option value="อื่นๆ">อื่นๆ</option>
                                                </select>
                                            ) : (
                                                <div className="text-gray-900">{user.gender}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Birthday */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <div className="text-gray-500 font-medium">วันเกิด</div>
                                        <div className="md:col-span-2">
                                            {isEditingProfile ? (
                                                <input
                                                    type="date"
                                                    name="birthday"
                                                    value={editProfileForm.birthday}
                                                    onChange={handleProfileInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                                />
                                            ) : (
                                                <div className="text-gray-900">{user.birthday}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Buttons for Edit Profile */}
                                    {isEditingProfile && (
                                        <div className="flex gap-4 pt-4 mt-4 border-t border-gray-100">
                                            <button
                                                onClick={handleSaveProfile}
                                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-sm"
                                            >
                                                <Save className="w-4 h-4 mr-2" />
                                                บันทึกข้อมูล
                                            </button>
                                            <button
                                                onClick={handleCancelEditProfile}
                                                className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-gray-50 transition-colors"
                                            >
                                                <X className="w-4 h-4 mr-2" />
                                                ยกเลิก
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ADDRESS SECTION */}
                        {activeTab === 'address' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">ที่อยู่ของฉัน</h2>
                                    <button
                                        onClick={handleAddAddressClick}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors"
                                    >
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
                                            <div className="flex gap-4 items-center">
                                                <button
                                                    onClick={() => handleEditAddressClick(addr)}
                                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                                >
                                                    แก้ไข
                                                </button>
                                                {!addr.isDefault && (
                                                    <button
                                                        onClick={() => handleDeleteAddress(addr.id)}
                                                        className="text-gray-500 hover:text-red-600 text-sm font-medium"
                                                    >
                                                        ลบ
                                                    </button>
                                                )}
                                                {!addr.isDefault && (
                                                    <button
                                                        onClick={() => handleSetDefaultAddress(addr.id)}
                                                        className="text-gray-400 hover:text-blue-600 text-sm font-medium ml-auto md:ml-0"
                                                    >
                                                        ตั้งเป็นค่าเริ่มต้น
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {addresses.length === 0 && (
                                        <div className="text-center py-8 text-gray-500">
                                            คุณยังไม่มีที่อยู่จัดส่ง
                                        </div>
                                    )}
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
                                                        <button
                                                            onClick={() => setSelectedOrder(order)}
                                                            className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                                                        >
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

                {/* ADDRESS MODAL */}
                {showAddressForm && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
                            {/* ... Address Form Content ... */}
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {editingAddressId ? 'แก้ไขที่อยู่' : 'เพิ่มที่อยู่ใหม่'}
                                </h3>
                                <button
                                    onClick={() => setShowAddressForm(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={addressForm.name}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                            placeholder="ชื่อผู้รับ"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={addressForm.phone}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                            placeholder="0xx-xxx-xxxx"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">ที่อยู่</label>
                                    <textarea
                                        name="detail"
                                        value={addressForm.detail}
                                        onChange={handleAddressFormChange}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                        placeholder="บ้านเลขที่, หมู่, ซอย, ถนน"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">แขวง/ตำบล</label>
                                        <input
                                            type="text"
                                            name="subDistrict"
                                            value={addressForm.subDistrict}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">เขต/อำเภอ</label>
                                        <input
                                            type="text"
                                            name="district"
                                            value={addressForm.district}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">จังหวัด</label>
                                        <input
                                            type="text"
                                            name="province"
                                            value={addressForm.province}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">รหัสไปรษณีย์</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={addressForm.zipCode}
                                            onChange={handleAddressFormChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl flex justify-end gap-3">
                                <button
                                    onClick={() => setShowAddressForm(false)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                                >
                                    ยกเลิก
                                </button>
                                <button
                                    onClick={handleSaveAddress}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
                                >
                                    บันทึก
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ORDER DETAILS MODAL */}
                {selectedOrder && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                        รายละเอียดคำสั่งซื้อ
                                        {getStatusBadge(selectedOrder.status)}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">หมายเลขคำสั่งซื้อ {selectedOrder.id}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedOrder(null)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Timeline */}
                                <div className="relative">
                                    <div className="absolute left-3.5 top-2 bottom-0 w-0.5 bg-gray-200"></div>
                                    <div className="space-y-6 relative">
                                        {selectedOrder.timeline.map((event, index) => (
                                            <div key={index} className="flex gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${event.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                                                    }`}>
                                                    {event.completed ? <CheckCircle className="w-5 h-5" /> : <div className="w-3 h-3 bg-gray-400 rounded-full" />}
                                                </div>
                                                <div className="pt-1">
                                                    <p className={`font-bold text-sm ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                                        {event.status}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mb-0.5">{event.description}</p>
                                                    {event.date && <p className="text-xs text-gray-400">{event.date}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Shipping Address */}
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            ที่อยู่จัดส่ง
                                        </h4>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p className="font-medium text-gray-900">{selectedOrder.shippingAddress.name}</p>
                                            <p>{selectedOrder.shippingAddress.phone}</p>
                                            <p className="leading-relaxed">
                                                {selectedOrder.shippingAddress.detail}, {selectedOrder.shippingAddress.subDistrict}, {selectedOrder.shippingAddress.district}, {selectedOrder.shippingAddress.province} {selectedOrder.shippingAddress.zipCode}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Payment Info */}
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm">
                                            <CreditCard className="w-4 h-4 mr-2" />
                                            วิธีชำระเงิน
                                        </h4>
                                        <div className="text-sm text-gray-600">
                                            <p>{selectedOrder.paymentMethod}</p>
                                            <p className="mt-4 font-bold text-gray-900 flex items-center mb-1">
                                                <Truck className="w-4 h-4 mr-2" />
                                                ช่องทางจัดส่ง
                                            </p>
                                            <p>Standard Delivery (Kerry Express)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3 text-sm">รายการสินค้า</h4>
                                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                                        {selectedOrder.items.map((item, index) => (
                                            <div key={index} className="flex gap-4 p-4 border-b border-gray-100 last:border-0">
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
                                </div>

                                {/* Summary */}
                                <div className="space-y-2 border-t border-gray-100 pt-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">รวมการสั่งซื้อ</span>
                                        <span className="text-gray-900">฿{selectedOrder.subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">ค่าจัดส่ง</span>
                                        <span className="text-gray-900">฿{selectedOrder.shippingFee.toLocaleString()}</span>
                                    </div>
                                    {selectedOrder.discount > 0 && (
                                        <div className="flex justify-between text-sm text-green-600">
                                            <span>ส่วนลด</span>
                                            <span>-฿{selectedOrder.discount.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                                        <span className="text-gray-900">ยอดรวมทั้งสิ้น</span>
                                        <span className="text-blue-600">฿{selectedOrder.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
