'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mb-8">
            Last updated: January 2026
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-stone-600 dark:text-stone-300">
            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, including email addresses, 
                contact details, and transaction information necessary to facilitate 
                marketplace activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To facilitate transactions between buyers and sellers</li>
                <li>To communicate important updates and support</li>
                <li>To improve our platform and services</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                3. Data Protection
              </h2>
              <p>
                We implement industry-standard security measures to protect your personal 
                information. All data transmissions are encrypted, and we regularly audit 
                our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                4. Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We only share data with third 
                parties when necessary to complete transactions or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                Contact us at support@oldgold.market to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                6. Cookies
              </h2>
              <p>
                We use essential cookies to maintain your session and preferences. 
                No third-party tracking cookies are used on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-100 mb-3">
                7. Contact
              </h2>
              <p>
                For privacy-related inquiries, contact us at{' '}
                <a href="mailto:privacy@oldgold.market" className="text-amber-600 dark:text-amber-400 hover:underline">
                  privacy@oldgold.market
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
