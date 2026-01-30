'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Send } from 'lucide-react';

export default function BecomeSeller() {
  const [formData, setFormData] = useState({
    accountType: '',
    accountAge: '',
    kycLevel: '',
    price: '',
    email: '',
    telegram: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-900 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Application Submitted!
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mb-6">
            We'll review your application and contact you within 24-48 hours.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-stone-800 dark:bg-stone-100 text-white dark:text-stone-800 px-6 py-3 rounded-lg font-semibold hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-12 px-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            Become a Seller
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mb-8">
            Fill out this quick form to start selling your accounts.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Account Type
              </label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              >
                <option value="">Select type...</option>
                <option value="online-bank">Online Bank (Revolut, Wise, etc.)</option>
                <option value="crypto-exchange">Crypto Exchange (Binance, Bybit, etc.)</option>
                <option value="money-transfer">Money Transfer (Western Union, etc.)</option>
              </select>
            </div>

            {/* Account Age */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Account Age
              </label>
              <select
                name="accountAge"
                value={formData.accountAge}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              >
                <option value="">Select age...</option>
                <option value="0-6">0-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="1-2">1-2 years</option>
                <option value="2+">2+ years</option>
              </select>
            </div>

            {/* KYC Level */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                KYC Verification Level
              </label>
              <select
                name="kycLevel"
                value={formData.kycLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              >
                <option value="">Select KYC level...</option>
                <option value="none">No KYC</option>
                <option value="basic">Basic (Email + Phone)</option>
                <option value="intermediate">Intermediate (ID Verified)</option>
                <option value="full">Full KYC (All documents)</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Asking Price (USD)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="1"
                placeholder="e.g. 150"
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Contact - Email */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Contact - Telegram */}
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Telegram (optional)
              </label>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@username"
                className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <Send size={18} />
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
