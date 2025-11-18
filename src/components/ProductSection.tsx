import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  badgeText?: string;
  badgeColor?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  viewAllLink = '#',
  badgeText,
  badgeColor = 'bg-blue-600'
}: ProductSectionProps) {
  return (
    <section className="py-8 md:py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          {badgeText && (
            <span className={`${badgeColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}>
              {badgeText}
            </span>
          )}
        </div>

        <a
          href={viewAllLink}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base group"
        >
          <span>ดูทั้งหมด</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {subtitle && (
        <p className="text-gray-600 mb-6 text-sm md:text-base">{subtitle}</p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
