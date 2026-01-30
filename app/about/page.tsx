'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            About <span className="text-amber-500">Old</span> Gold
          </h1>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-stone-600 dark:text-stone-300">
            <p className="text-lg">
              Old Gold is a marketplace connecting buyers and sellers of aged digital accounts. 
              We specialize in verified, ready-to-use accounts across online banking, cryptocurrency 
              exchanges, and money transfer platforms.
            </p>

            <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mt-8 mb-4">
              Why Choose Us?
            </h2>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Verified Sellers:</strong> Every seller goes through our vetting process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Secure Transactions:</strong> Escrow protection on all purchases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Quality Accounts:</strong> Aged accounts with established history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>24/7 Support:</strong> Our team is always here to help</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mt-8 mb-4">
              Our Mission
            </h2>
            
            <p>
              We bridge the gap between account holders looking to sell and users who need 
              established accounts for their business or personal use. Our platform ensures 
              safe, transparent transactions for everyone involved.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl mt-8">
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>Disclaimer:</strong> Old Gold is a marketplace platform. Users are 
                responsible for ensuring their activities comply with applicable laws and 
                terms of service of third-party platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
