'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contacts() {
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
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            Contact Us
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mb-8">
            Get in touch with our team for any questions or support.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">
                  Email
                </h3>
                <a 
                  href="mailto:support@oldgold.market"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  support@oldgold.market
                </a>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">
                  Telegram
                </h3>
                <a 
                  href="https://t.me/oldgold_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  @oldgold_support
                </a>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  Fastest response for urgent inquiries
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">
                  Location
                </h3>
                <p className="text-stone-600 dark:text-stone-300">
                  Worldwide Digital Marketplace
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  Operating 24/7 across all time zones
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-700">
            <h2 className="font-semibold text-stone-800 dark:text-stone-100 mb-4">
              Support Hours
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500 dark:text-stone-400">Monday - Friday</p>
                <p className="text-stone-800 dark:text-stone-100 font-medium">9:00 AM - 11:00 PM UTC</p>
              </div>
              <div>
                <p className="text-stone-500 dark:text-stone-400">Weekend</p>
                <p className="text-stone-800 dark:text-stone-100 font-medium">10:00 AM - 8:00 PM UTC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
