'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';

import Link from 'next/link';

import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const badgeColors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500'
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to detail page
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-2 left-2 ${badgeColors[product.badgeColor || 'blue']} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-gray-800 font-medium text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem] hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold text-lg md:text-xl">
              ฿{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ฿{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 group/btn"
        >
          <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          <span className="text-sm md:text-base">เพิ่มลงตะกร้า</span>
        </button>
      </div>
    </div>
  );
}
