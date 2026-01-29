'use client';

import { Product } from '@/lib/mockData';
import { Heart, Star, Shield, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onSave?: () => void;
  isSaved?: boolean;
}

export default function ProductCard({ product, onSave, isSaved = false }: ProductCardProps) {
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    setSaved(!saved);
    onSave?.();
  };

  // Simulated badges based on product properties
  const isVerified = product.rating >= 4.5;
  const isPopular = product.rating >= 4.3;
  const isNewArrival = product.id > 10;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isVerified && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
              <Shield size={12} />
              Verified
            </span>
          )}
          {isNewArrival && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
              <Clock size={12} />
              New
            </span>
          )}
          {isPopular && !isNewArrival && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
              <TrendingUp size={12} />
              Popular
            </span>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="absolute top-3 right-3 p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label={saved ? 'Unsave item' : 'Save item'}
        >
          <Heart
            size={18}
            className={saved ? 'fill-red-500 text-red-500' : 'text-gray-500 dark:text-gray-400'}
          />
        </button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2.5 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
            Quick Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Rating Row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400">(128)</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">
              Free shipping
            </span>
          </div>
          <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
