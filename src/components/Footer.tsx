import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">ShopEasy</h3>
            <p className="text-gray-600 text-sm mb-4">
              ช้อปปิ้งออนไลน์ง่ายๆ สะดวก รวดเร็ว ส่งฟรีทั่วประเทศ
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">บริการลูกค้า</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ศูนย์ช่วยเหลือ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  วิธีการสั่งซื้อ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  การจัดส่งและคืนสินค้า
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  เกี่ยวกับ ShopEasy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ร่วมงานกับเรา
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  เงื่อนไขการใช้งาน
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">การชำระเงิน</h4>
            <p className="text-gray-600 text-sm mb-3">
              รองรับการชำระเงินหลากหลายช่องทาง
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border border-gray-200 rounded p-2 text-center text-xs text-gray-600">
                VISA
              </div>
              <div className="bg-white border border-gray-200 rounded p-2 text-center text-xs text-gray-600">
                Master
              </div>
              <div className="bg-white border border-gray-200 rounded p-2 text-center text-xs text-gray-600">
                PayPal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 ShopEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
