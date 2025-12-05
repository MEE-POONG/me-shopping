import { Product } from '@/types/product';

export const allProducts: Product[] = [
    {
        id: 1,
        name: 'สมาร์ทโฟน รุ่นใหม่ล่าสุด หน้าจอ 6.5 นิ้ว',
        price: 8990,
        originalPrice: 12990,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        badge: 'FLASH SALE',
        badgeColor: 'red',
        category: 'Electronics',
        rating: 4.8,
        reviews: 124,
        description: 'สมาร์ทโฟนดีไซน์หรู มาพร้อมหน้าจอ AMOLED ขนาด 6.5 นิ้ว ความละเอียด Full HD+ กล้องหลัง 3 ตัว ความละเอียดสูงสุด 64MP แบตเตอรี่อึด 5000mAh รองรับชาร์จไว'
    },
    {
        id: 2,
        name: 'หูฟังบลูทูธ ตัดเสียงรบกวน',
        price: 1290,
        originalPrice: 2990,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        badge: 'FLASH SALE',
        badgeColor: 'red',
        category: 'Accessories',
        rating: 4.5,
        reviews: 89,
        description: 'หูฟังไร้สายแบบ Over-ear พร้อมระบบตัดเสียงรบกวน Active Noise Cancelling ให้คุณดื่มด่ำกับเสียงเพลงได้อย่างเต็มที่ เชื่อมต่อเสถียรด้วย Bluetooth 5.0'
    },
    {
        id: 3,
        name: 'นาฬิกาสมาร์ทวอทช์ กันน้ำ',
        price: 2490,
        originalPrice: 4990,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        badge: 'FLASH SALE',
        badgeColor: 'red',
        category: 'Electronics',
        rating: 4.6,
        reviews: 56,
        description: 'Smartwatch ดีไซน์สปอร์ต กันน้ำระดับ IP68 วัดอัตราการเต้นของหัวใจ ออกซิเจนในเลือด และโหมดออกกำลังกายกว่า 20 โหมด แบตเตอรี่ใช้งานได้นาน 7 วัน'
    },
    {
        id: 4,
        name: 'กล้องแอคชั่น 4K Ultra HD',
        price: 3990,
        originalPrice: 6990,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
        badge: 'FLASH SALE',
        badgeColor: 'red',
        category: 'Cameras',
        rating: 4.7,
        reviews: 42,
        description: 'กล้อง Action Camera บันทึกวิดีโอความละเอียด 4K 60fps กันน้ำลึก 30 เมตรโดยไม่ต้องใส่เคส พร้อมระบบกันสั่น EIS ให้ภาพนิ่งและลื่นไหล'
    },
    {
        id: 5,
        name: 'แท็บเล็ต 10.1 นิ้ว ความจุ 128GB',
        price: 7990,
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
        badge: 'แนะนำ',
        badgeColor: 'blue',
        category: 'Electronics',
        rating: 4.4,
        reviews: 35,
        description: 'แท็บเล็ตหน้าจอใหญ่ 10.1 นิ้ว เหมาะสำหรับดูหนัง ฟังเพลง และทำงานเอกสาร มาพร้อมปากกา Stylus เขียนลื่น ตอบโจทย์ทุกการใช้งาน'
    },
    {
        id: 6,
        name: 'เมาส์ไร้สาย ergonomic design',
        price: 590,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        category: 'Accessories',
        rating: 4.3,
        reviews: 210,
        description: 'เมาส์ไร้สายออกแบบตามหลักสรีรศาสตร์ ช่วยลดอาการปวดข้อมือเมื่อใช้งานเป็นเวลานาน เชื่อมต่อได้ทั้ง Bluetooth และ USB Receiver'
    },
    {
        id: 7,
        name: 'คีย์บอร์ดเกมมิ่ง RGB LED',
        price: 1490,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
        badge: 'ขายดี',
        badgeColor: 'green',
        category: 'Accessories',
        rating: 4.9,
        reviews: 340,
        description: 'Mechanical Keyboard ปุ่ม Blue Switch เสียงกดสะใจ ไฟ RGB ปรับได้ 18 โหมด รองรับการกดพร้อมกันได้ทุกปุ่ม (N-Key Rollover)'
    },
    {
        id: 8,
        name: 'ลำโพงบลูทูธ กันน้ำ IPX7',
        price: 890,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        category: 'Audio',
        rating: 4.5,
        reviews: 78,
        description: 'ลำโพงพกพาเสียงดี เบสหนัก กันน้ำระดับ IPX7 พกพาไปปาร์ตี้ริมสระได้สบาย แบตเตอรี่ใช้งานต่อเนื่อง 12 ชั่วโมง'
    },
    {
        id: 9,
        name: 'แว่นตา VR รุ่นใหม่ล่าสุด',
        price: 5990,
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop',
        badge: 'NEW',
        badgeColor: 'yellow',
        category: 'Gaming',
        rating: 4.2,
        reviews: 15,
        description: 'เปิดประสบการณ์โลกเสมือนจริงด้วยแว่น VR ความละเอียดสูง มุมมองกว้าง 110 องศา รองรับเกมและแอปพลิเคชันมากมาย'
    },
    {
        id: 10,
        name: 'Power Bank 20000mAh ชาร์จเร็ว',
        price: 790,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop',
        badge: 'NEW',
        badgeColor: 'yellow',
        category: 'Accessories',
        rating: 4.7,
        reviews: 450,
        description: 'แบตเตอรี่สำรองความจุ 20000mAh รองรับเทคโนโลยีชาร์จเร็ว PD และ QC 3.0 ชาร์จพร้อมกันได้ 3 อุปกรณ์ มีหน้าจอ LED บอกสถานะแบตเตอรี่'
    },
    {
        id: 11,
        name: 'กระเป๋าแล็ปท็อป กันกระแทก 15.6 นิ้ว',
        price: 690,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        badge: 'NEW',
        badgeColor: 'yellow',
        category: 'Bags',
        rating: 4.6,
        reviews: 67,
        description: 'กระเป๋าใส่โน้ตบุ๊คบุฟองน้ำกันกระแทกอย่างดี กันน้ำสาด มีช่องเก็บของเยอะ ดีไซน์เรียบหรู ใช้ได้ทั้งผู้ชายและผู้หญิง'
    },
    {
        id: 12,
        name: 'ขาตั้งมือถือ 3 in 1 พับเก็บได้',
        price: 390,
        image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=500&h=500&fit=crop',
        badge: 'NEW',
        badgeColor: 'yellow',
        category: 'Accessories',
        rating: 4.4,
        reviews: 92,
        description: 'ขาตั้งมือถืออเนกประสงค์ เป็นได้ทั้งไม้เซลฟี่และขาตั้งกล้อง มีรีโมทบลูทูธในตัว พับเก็บได้ พกพาสะดวก'
    },
    {
        id: 13,
        name: 'รองเท้าวิ่งผู้ชาย',
        price: 2590,
        originalPrice: 3500,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        category: 'Fashion',
        rating: 4.5,
        reviews: 28,
        description: 'รองเท้าวิ่งน้ำหนักเบา ระบายอากาศได้ดี พื้นรองเท้านุ่ม รองรับแรงกระแทก ช่วยลดอาการบาดเจ็บขณะวิ่ง'
    },
    {
        id: 14,
        name: 'กระเป๋าเป้เดินทาง',
        price: 1290,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        category: 'Bags',
        rating: 4.3,
        reviews: 44,
        description: 'กระเป๋าเป้สะพายหลังจุของได้เยอะ มีช่องใส่โน้ตบุ๊ค วัสดุกันน้ำ แข็งแรงทนทาน เหมาะสำหรับเดินทาง 2-3 วัน'
    },
    {
        id: 15,
        name: 'หมวกแก๊ปแฟชั่น',
        price: 350,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop',
        category: 'Fashion',
        rating: 4.2,
        reviews: 112,
        description: 'หมวกแก๊ปผ้าฝ้าย 100% ระบายอากาศดี ปรับขนาดได้ ดีไซน์มินิมอล แมทช์ได้กับทุกชุด'
    }
];
