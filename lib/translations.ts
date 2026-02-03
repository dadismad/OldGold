'use client';

export type Language = 'en' | 'ru';

export const translations = {
  en: {
    // Header
    tagline: 'Accounts with receding hairline.',
    
    // Main page
    buyAccount: 'Buy Account',
    tap: 'Tap',
    explore: 'Explore',
    verified: 'Verified',
    trusted: 'Trusted',
    ready: 'Ready',
    platforms: 'Platforms',
    priceRange: 'Price Range',
    accountsAvailable: 'Accounts Available',
    verifiedAccounts: 'Verified Accounts',
    transferAccounts: 'Transfer Accounts',
    
    // Categories
    onlineBanks: 'Online Banks',
    digitalBanking: 'Digital Banking',
    cryptoExchanges: 'Crypto Exchanges',
    cexAccounts: 'CEX Accounts',
    moneyTransfer: 'Money Transfer',
    fxServices: 'FX Services',
    
    // Certifications
    verifiedSellers: 'Verified Sellers',
    instantDelivery: 'Instant Delivery',
    fullAccess: 'Full Access',
    kycVerified: 'KYC Verified',
    tradingReady: 'Trading Ready',
    withdrawalEnabled: 'Withdrawal Enabled',
    activeAccounts: 'Active Accounts',
    multiCurrency: 'Multi-Currency',
    highLimits: 'High Limits',
    
    // Menu
    signUp: 'Sign Up',
    login: 'Login',
    becomeSeller: 'Become a Seller',
    about: 'About',
    howItWorks: 'How It Works',
    risks: 'Risks & Disclaimer',
    contacts: 'Contacts',
    privacy: 'Privacy',
    terms: 'Terms',
    
    // Footer
    copyright: '© 2024 OldGold',
    
    // Pages
    backToHome: 'Back to Home',
    
    // How It Works page
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Simple steps to buy or sell accounts on Old Gold',
    step1Title: '1. Browse Categories',
    step1Desc: 'Explore our three main categories: Online Banks, Crypto Exchanges, and Money Transfer services. Each category shows available platforms and price ranges.',
    step2Title: '2. Select Account',
    step2Desc: 'Click on a category to see detailed information about available accounts, including verification level, account age, and pricing.',
    step3Title: '3. Contact Seller',
    step3Desc: 'Once you find a suitable account, contact the seller through our secure messaging system or Telegram for faster communication.',
    step4Title: '4. Secure Payment',
    step4Desc: 'Use our escrow system for safe transactions. Payment is held until you confirm the account transfer is complete.',
    step5Title: '5. Account Transfer',
    step5Desc: 'Receive full account credentials and verify everything works. Confirm receipt to release payment to the seller.',
    
    // Risks page
    risksTitle: 'Risks & Disclaimer',
    risksSubtitle: 'Important information about using our platform',
    legalRisksTitle: 'Legal Considerations',
    legalRisksDesc: 'Trading financial accounts may violate terms of service of third-party platforms. Users are solely responsible for ensuring compliance with applicable laws in their jurisdiction.',
    financialRisksTitle: 'Financial Risks',
    financialRisksDesc: 'Account purchases carry inherent risks including potential account suspension, loss of funds, or inability to complete verification. Only invest what you can afford to lose.',
    securityRisksTitle: 'Security Risks',
    securityRisksDesc: 'While we verify sellers, we cannot guarantee the security of all accounts. Always change passwords and enable 2FA immediately after receiving an account.',
    noGuaranteeTitle: 'No Guarantees',
    noGuaranteeDesc: 'Old Gold is a marketplace connecting buyers and sellers. We do not guarantee account longevity, functionality, or compliance with third-party terms.',
    userResponsibilityTitle: 'User Responsibility',
    userResponsibilityDesc: 'By using this platform, you acknowledge that you understand these risks and accept full responsibility for your actions.',
  },
  ru: {
    // Header
    tagline: 'Аккаунты с залысинами.',
    
    // Main page
    buyAccount: 'Купить аккаунт',
    tap: 'Нажать',
    explore: 'Открыть',
    verified: 'Проверено',
    trusted: 'Надёжно',
    ready: 'Готово',
    platforms: 'Платформы',
    priceRange: 'Диапазон цен',
    accountsAvailable: 'Доступно аккаунтов',
    verifiedAccounts: 'Проверенных аккаунтов',
    transferAccounts: 'Аккаунтов для переводов',
    
    // Categories
    onlineBanks: 'Онлайн банки',
    digitalBanking: 'Цифровой банкинг',
    cryptoExchanges: 'Криптобиржи',
    cexAccounts: 'CEX аккаунты',
    moneyTransfer: 'Денежные переводы',
    fxServices: 'FX услуги',
    
    // Certifications
    verifiedSellers: 'Проверенные продавцы',
    instantDelivery: 'Мгновенная доставка',
    fullAccess: 'Полный доступ',
    kycVerified: 'KYC пройден',
    tradingReady: 'Готов к торговле',
    withdrawalEnabled: 'Вывод включён',
    activeAccounts: 'Активные аккаунты',
    multiCurrency: 'Мультивалютный',
    highLimits: 'Высокие лимиты',
    
    // Menu
    signUp: 'Регистрация',
    login: 'Вход',
    becomeSeller: 'Стать продавцом',
    about: 'О нас',
    howItWorks: 'Как это работает',
    risks: 'Риски и отказ от ответственности',
    contacts: 'Контакты',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    
    // Footer
    copyright: '© 2024 OldGold',
    
    // Pages
    backToHome: 'На главную',
    
    // How It Works page
    howItWorksTitle: 'Как это работает',
    howItWorksSubtitle: 'Простые шаги для покупки или продажи аккаунтов на Old Gold',
    step1Title: '1. Выберите категорию',
    step1Desc: 'Изучите три основные категории: Онлайн банки, Криптобиржи и Денежные переводы. В каждой категории показаны доступные платформы и диапазон цен.',
    step2Title: '2. Выберите аккаунт',
    step2Desc: 'Нажмите на категорию, чтобы увидеть подробную информацию о доступных аккаунтах, включая уровень верификации, возраст и цену.',
    step3Title: '3. Свяжитесь с продавцом',
    step3Desc: 'Найдя подходящий аккаунт, свяжитесь с продавцом через нашу безопасную систему сообщений или Telegram для быстрой связи.',
    step4Title: '4. Безопасная оплата',
    step4Desc: 'Используйте нашу систему эскроу для безопасных транзакций. Оплата удерживается до подтверждения передачи аккаунта.',
    step5Title: '5. Передача аккаунта',
    step5Desc: 'Получите полные данные аккаунта и проверьте работоспособность. Подтвердите получение для перевода оплаты продавцу.',
    
    // Risks page
    risksTitle: 'Риски и отказ от ответственности',
    risksSubtitle: 'Важная информация об использовании нашей платформы',
    legalRisksTitle: 'Юридические аспекты',
    legalRisksDesc: 'Торговля финансовыми аккаунтами может нарушать условия использования сторонних платформ. Пользователи несут полную ответственность за соблюдение законов своей юрисдикции.',
    financialRisksTitle: 'Финансовые риски',
    financialRisksDesc: 'Покупка аккаунтов несёт риски, включая возможную блокировку, потерю средств или невозможность прохождения верификации. Инвестируйте только то, что готовы потерять.',
    securityRisksTitle: 'Риски безопасности',
    securityRisksDesc: 'Несмотря на проверку продавцов, мы не можем гарантировать безопасность всех аккаунтов. Всегда меняйте пароли и включайте 2FA сразу после получения аккаунта.',
    noGuaranteeTitle: 'Отсутствие гарантий',
    noGuaranteeDesc: 'Old Gold — это маркетплейс, соединяющий покупателей и продавцов. Мы не гарантируем долговечность, функциональность или соответствие условиям сторонних платформ.',
    userResponsibilityTitle: 'Ответственность пользователя',
    userResponsibilityDesc: 'Используя эту платформу, вы подтверждаете понимание этих рисков и принимаете полную ответственность за свои действия.',
  },
};

export const getTranslation = (lang: Language, key: keyof typeof translations.en): string => {
  return translations[lang][key] || translations.en[key];
};
