'use client';

import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Scale, DollarSign, Lock, FileWarning, User } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function Risks() {
  const { t, language } = useLanguage();

  const risks = [
    {
      icon: <Scale size={24} className="text-red-500" />,
      title: t('legalRisksTitle'),
      description: t('legalRisksDesc'),
      color: 'bg-red-100 dark:bg-red-900/30',
    },
    {
      icon: <DollarSign size={24} className="text-orange-500" />,
      title: t('financialRisksTitle'),
      description: t('financialRisksDesc'),
      color: 'bg-orange-100 dark:bg-orange-900/30',
    },
    {
      icon: <Lock size={24} className="text-yellow-500" />,
      title: t('securityRisksTitle'),
      description: t('securityRisksDesc'),
      color: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      icon: <FileWarning size={24} className="text-purple-500" />,
      title: t('noGuaranteeTitle'),
      description: t('noGuaranteeDesc'),
      color: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      icon: <User size={24} className="text-blue-500" />,
      title: t('userResponsibilityTitle'),
      description: t('userResponsibilityDesc'),
      color: 'bg-blue-100 dark:bg-blue-900/30',
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
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={32} className="text-amber-500" />
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {t('risksTitle')}
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            {t('risksSubtitle')}
          </p>

          <div className="space-y-6">
            {risks.map((risk, index) => (
              <div key={index} className={`p-5 rounded-xl ${risk.color}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {risk.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border-2 border-slate-300 dark:border-slate-600">
            <p className="text-slate-800 dark:text-slate-200 text-center font-medium">
              {language === 'ru' 
                ? 'Продолжая использовать Old Gold, вы соглашаетесь с вышеуказанными условиями и рисками.'
                : 'By continuing to use Old Gold, you agree to the above terms and acknowledge these risks.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
