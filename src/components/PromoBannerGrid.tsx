import React from 'react';
import { Gift, Truck, Star } from 'lucide-react';
import { PromoBanner } from '@/types/product';

interface PromoBannerGridProps {
  banners: PromoBanner[];
}

export default function PromoBannerGrid({ banners }: PromoBannerGridProps) {
  const icons = {
    gift: Gift,
    truck: Truck,
    star: Star
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {banners.map((banner, index) => {
        const Icon = index === 0 ? Gift : index === 1 ? Truck : Star;

        return (
          <a
            key={banner.id}
            href={banner.link}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className={`${banner.bgGradient} p-6 h-[150px] md:h-[180px] flex flex-col justify-between relative overflow-hidden`}>
              {/* Background Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Icon className="w-32 h-32 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {banner.title}
                  </h3>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  {banner.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="relative z-10 flex justify-end">
                <div className="bg-white/20 group-hover:bg-white/30 transition-colors p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
