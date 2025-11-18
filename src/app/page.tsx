import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import PromoBannerGrid from '@/components/PromoBannerGrid';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { HeroSlide, PromoBanner, Product } from '@/types/product';

// Mock Data
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'ลดสูงสุด 70% ทุกหมวดหมู่',
    subtitle: 'โปรโมชั่นพิเศษสำหรับสมาชิกใหม่ วันนี้เท่านั้น!',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&h=600&fit=crop',
    buttonText: 'ช้อปเลย',
    buttonLink: '#products'
  },
  {
    id: 2,
    title: 'ส่งฟรีทั้งร้าน',
    subtitle: 'เมื่อช้อปครบ 500 บาท ไม่มีขั้นต่ำ',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&h=600&fit=crop',
    buttonText: 'เริ่มช้อป',
    buttonLink: '#products'
  },
  {
    id: 3,
    title: 'สินค้าใหม่ล่าสุด',
    subtitle: 'อัปเดตคอลเลกชั่นใหม่ทุกสัปดาห์',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1800&h=600&fit=crop',
    buttonText: 'ดูสินค้าใหม่',
    buttonLink: '#new-products'
  }
];

const promoBanners: PromoBanner[] = [
  {
    id: 1,
    title: 'คูปองส่วนลด',
    description: 'รับคูปองส่วนลดสูงสุด 500 บาท',
    image: '',
    link: '#',
    bgGradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'ส่งฟรีทั้งร้าน',
    description: 'ไม่มีขั้นต่ำ ทั่วประเทศ',
    image: '',
    link: '#',
    bgGradient: 'bg-gradient-to-br from-sky-400 to-blue-500'
  },
  {
    id: 3,
    title: 'สมาชิกใหม่',
    description: 'รับโปรพิเศษเมื่อสมัครวันนี้',
    image: '',
    link: '#',
    bgGradient: 'bg-gradient-to-br from-blue-600 to-indigo-600'
  }
];

const flashSaleProducts: Product[] = [
  {
    id: 1,
    name: 'สมาร์ทโฟน รุ่นใหม่ล่าสุด หน้าจอ 6.5 นิ้ว',
    price: 8990,
    originalPrice: 12990,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    badge: 'FLASH SALE',
    badgeColor: 'red'
  },
  {
    id: 2,
    name: 'หูฟังบลูทูธ ตัดเสียงรบกวน',
    price: 1290,
    originalPrice: 2990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    badge: 'FLASH SALE',
    badgeColor: 'red'
  },
  {
    id: 3,
    name: 'นาฬิกาสมาร์ทวอทช์ กันน้ำ',
    price: 2490,
    originalPrice: 4990,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    badge: 'FLASH SALE',
    badgeColor: 'red'
  },
  {
    id: 4,
    name: 'กล้องแอคชั่น 4K Ultra HD',
    price: 3990,
    originalPrice: 6990,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
    badge: 'FLASH SALE',
    badgeColor: 'red'
  }
];

const recommendProducts: Product[] = [
  {
    id: 5,
    name: 'แท็บเล็ต 10.1 นิ้ว ความจุ 128GB',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
    badge: 'แนะนำ',
    badgeColor: 'blue'
  },
  {
    id: 6,
    name: 'เมาส์ไร้สาย ergonomic design',
    price: 590,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop'
  },
  {
    id: 7,
    name: 'คีย์บอร์ดเกมมิ่ง RGB LED',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    badge: 'ขายดี',
    badgeColor: 'green'
  },
  {
    id: 8,
    name: 'ลำโพงบลูทูธ กันน้ำ IPX7',
    price: 890,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop'
  }
];

const newProducts: Product[] = [
  {
    id: 9,
    name: 'แว่นตา VR รุ่นใหม่ล่าสุด',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop',
    badge: 'NEW',
    badgeColor: 'yellow'
  },
  {
    id: 10,
    name: 'Power Bank 20000mAh ชาร์จเร็ว',
    price: 790,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop',
    badge: 'NEW',
    badgeColor: 'yellow'
  },
  {
    id: 11,
    name: 'กระเป๋าแล็ปท็อป กันกระแทก 15.6 นิ้ว',
    price: 690,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    badge: 'NEW',
    badgeColor: 'yellow'
  },
  {
    id: 12,
    name: 'ขาตั้งมือถือ 3 in 1 พับเก็บได้',
    price: 390,
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=500&h=500&fit=crop',
    badge: 'NEW',
    badgeColor: 'yellow'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Header />

      <main>
        {/* Hero Slider Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <HeroSlider slides={heroSlides} />
        </section>

        {/* Promo Banners Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PromoBannerGrid banners={promoBanners} />
        </section>

        {/* Products Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flash Sale Section */}
          <ProductSection
            title="Flash Sale"
            subtitle="ดีลสุดคุ้ม ลดสูงสุด 70% เวลาจำกัด!"
            products={flashSaleProducts}
            badgeText="ดีลเวลาจำกัด"
            badgeColor="bg-red-500"
            viewAllLink="#flash-sale"
          />

          {/* Recommend Section */}
          <ProductSection
            title="สินค้าแนะนำ"
            subtitle="คัดสรรสินค้าคุณภาพดีเพื่อคุณโดยเฉพาะ"
            products={recommendProducts}
            viewAllLink="#recommend"
          />

          {/* New Arrivals Section */}
          <ProductSection
            title="สินค้าใหม่ล่าสุด"
            subtitle="อัปเดตสินค้าใหม่ทุกสัปดาห์"
            products={newProducts}
            badgeText="มาใหม่"
            badgeColor="bg-yellow-500"
            viewAllLink="#new-arrivals"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
