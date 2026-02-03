'use client';

import Link from 'next/link';
import { ArrowLeft, ShoppingCart, MessageCircle, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function HowItWorks() {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: <ShoppingCart size={28} className="text-amber-500" />,
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      icon: <ArrowRight size={28} className="text-amber-500" />,
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      icon: <MessageCircle size={28} className="text-amber-500" />,
      title: t('step3Title'),
      description: t('step3Desc'),
    },
    {
      icon: <Shield size={28} className="text-amber-500" />,
      title: t('step4Title'),
      description: t('step4Desc'),
    },
    {
      icon: <CheckCircle size={28} className="text-amber-500" />,
      title: t('step5Title'),
      description: t('step5Desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          {t('backToHome')}
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {t('howItWorksTitle')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            {t('howItWorksSubtitle')}
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
            <p className="text-amber-800 dark:text-amber-200 text-sm">
              <strong>{language === 'ru' ? 'Совет:' : 'Pro Tip:'}</strong>{' '}
              {language === 'ru' 
                ? 'Всегда проверяйте рейтинг продавца и читайте отзывы перед покупкой. Используйте Telegram для более быстрой связи.'
                : 'Always check seller ratings and read reviews before purchasing. Use Telegram for faster communication with sellers.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
