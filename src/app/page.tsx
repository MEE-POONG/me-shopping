import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import PromoBannerGrid from '@/components/PromoBannerGrid';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { HeroSlide, PromoBanner, Product } from '@/types/product';

// Mock Data
import { allProducts } from '@/data/products';

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

const flashSaleProducts = allProducts.filter(p => p.badge === 'FLASH SALE');
const recommendProducts = allProducts.filter(p => p.badge === 'แนะนำ' || (!p.badge && p.price < 1000)).slice(0, 4);
const newProducts = allProducts.filter(p => p.badge === 'NEW');

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
