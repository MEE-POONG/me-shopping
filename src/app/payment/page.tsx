'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, CreditCard, QrCode, Copy, CheckCircle, Upload, MapPin, Tag } from 'lucide-react';

export default function PaymentPage() {
    const { cartTotal, cartItems } = useCart();
    const [activeTab, setActiveTab] = useState<'bank' | 'qr'>('bank');
    const [copied, setCopied] = useState(false);

    // Address State
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        subDistrict: '',
        district: '',
        province: '',
        zipCode: ''
    });

    // Discount State
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    // Shipping calculation
    const shippingCost = cartItems.length > 0 ? (cartTotal > 500 ? 0 : 50) : 0;
    const finalTotal = Math.max(0, cartTotal + shippingCost - discount);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setShippingInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleApplyCoupon = () => {
        if (!couponCode) return;

        if (couponCode.toUpperCase() === 'WELCOME100') {
            setDiscount(100);
            setCouponMessage({ type: 'success', text: 'ใช้คูปองส่วนลด ฿100 สำเร็จ!' });
        } else {
            setDiscount(0);
            setCouponMessage({ type: 'error', text: 'รหัสคูปองไม่ถูกต้อง หรือหมดอายุ' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Breadcrumb / Back */}
                <div className="mb-6">
                    <Link href="/cart" className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        กลับไปตะกร้าสินค้า
                    </Link>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">ชำระเงิน</h1>
                    <p className="text-gray-500">ระบุที่อยู่จัดส่งและเลือกช่องทางการชำระเงิน</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* LEFT COLUMN: Shipping Address Section */}
                    <div className="w-full lg:w-3/5 flex-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center text-gray-900 font-bold text-lg">
                                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                                    ที่อยู่ในการจัดส่ง
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={shippingInfo.fullName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="กรอกชื่อ-นามสกุลผู้รับ"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                value={shippingInfo.phoneNumber}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="0xx-xxx-xxxx"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">ที่อยู่</label>
                                        <textarea
                                            name="address"
                                            value={shippingInfo.address}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                            placeholder="บ้านเลขที่, หมู่, ซอย, ถนน"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">แขวง/ตำบล</label>
                                            <input
                                                type="text"
                                                name="subDistrict"
                                                value={shippingInfo.subDistrict}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="แขวง/ตำบล"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">เขต/อำเภอ</label>
                                            <input
                                                type="text"
                                                name="district"
                                                value={shippingInfo.district}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="เขต/อำเภอ"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">จังหวัด</label>
                                            <input
                                                type="text"
                                                name="province"
                                                value={shippingInfo.province}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="จังหวัด"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">รหัสไปรษณีย์</label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={shippingInfo.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors"
                                                placeholder="รหัสไปรษณีย์"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Payment Section */}
                    <div className="w-full lg:w-2/5">

                        {/* Discount Code Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center text-gray-900 font-bold text-base">
                                    <Tag className="w-4 h-4 mr-2 text-blue-600" />
                                    โค้ดส่วนลด
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="กรอกโค้ดส่วนลด"
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-colors uppercase"
                                    />
                                    <button
                                        onClick={handleApplyCoupon}
                                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        ใช้โค้ด
                                    </button>
                                </div>
                                {couponMessage && (
                                    <p className={`text-xs mt-2 ${couponMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                        {couponMessage.text}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center text-gray-900 font-bold text-lg">
                                    <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                                    ช่องทางการชำระเงิน
                                </div>
                            </div>

                            <div className="flex flex-col">
                                {/* Tabs */}
                                <div className="p-4 border-b border-gray-100 bg-white">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setActiveTab('bank')}
                                            className={`flex-1 flex items-center justify-center p-3 rounded-xl transition-all duration-200 text-sm md:text-base ${activeTab === 'bank'
                                                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                                                    : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                                                }`}
                                        >
                                            <CreditCard className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                            <span>โอนเงิน</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('qr')}
                                            className={`flex-1 flex items-center justify-center p-3 rounded-xl transition-all duration-200 text-sm md:text-base ${activeTab === 'qr'
                                                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                                                    : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                                                }`}
                                        >
                                            <QrCode className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                            <span>QR Code</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6">
                                    <div className="max-w-md mx-auto">
                                        <div className="text-center mb-8">
                                            <p className="text-gray-500 mb-1">ยอดชำระทั้งหมด</p>
                                            <div className="text-4xl font-bold text-blue-600">฿{finalTotal.toLocaleString()}</div>
                                            {(discount > 0 || shippingCost > 0) && (
                                                <div className="mt-2 text-sm text-gray-500 flex flex-col items-center gap-1">
                                                    <div className="flex justify-between w-full max-w-[200px]">
                                                        <span>ค่าสินค้า:</span>
                                                        <span>฿{cartTotal.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex justify-between w-full max-w-[200px]">
                                                        <span>ค่าจัดส่ง:</span>
                                                        <span>{shippingCost === 0 ? 'ฟรี' : `฿${shippingCost}`}</span>
                                                    </div>
                                                    {discount > 0 && (
                                                        <div className="flex justify-between w-full max-w-[200px] text-green-600 font-medium">
                                                            <span>ส่วนลด:</span>
                                                            <span>-฿{discount.toLocaleString()}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {activeTab === 'bank' && (
                                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                <div className="border border-gray-200 rounded-xl p-4 mb-6 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl-lg">
                                                        แนะนำ
                                                    </div>
                                                    <div className="flex items-center mb-4">
                                                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm mr-3">
                                                            K
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-900 text-sm">ธนาคารกสิกรไทย</h3>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <div>
                                                            <p className="text-xs text-gray-500 mb-0.5">ชื่อบัญชี</p>
                                                            <p className="font-medium text-gray-900 text-sm">บจก. มี ช้อปปิ้ง จำกัด</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-500 mb-0.5">เลขที่บัญชี</p>
                                                            <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                                                                <span className="font-mono text-base font-bold text-gray-900 tracking-wider">012-3-45678-9</span>
                                                                <button
                                                                    onClick={() => handleCopy('012-3-45678-9')}
                                                                    className="text-gray-400 hover:text-blue-600 transition-colors tooltip"
                                                                    title="คัดลอก"
                                                                >
                                                                    {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'qr' && (
                                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                                                <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 inline-block shadow-sm">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                                        alt="Payment QR Code"
                                                        className="w-40 h-40 object-contain mix-blend-multiply"
                                                    />
                                                    <p className="text-xs text-gray-500 mt-2">สแกนเพื่อชำระเงิน</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Upload Slip */}
                                        <div className="border-t border-gray-100 pt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">แนบสลิป</label>
                                            <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                                                <div className="space-y-1 text-center">
                                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                                        <Upload className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                                                    </div>
                                                    <div className="flex text-xs text-gray-600 justify-center">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                            <span>อัพโหลด</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            ยืนยัน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
