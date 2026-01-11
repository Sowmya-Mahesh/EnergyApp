import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();

  // State to track language
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'is');

  // Update i18n and localStorage whenever lang changes
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  }, [lang, i18n]);

  // Toggle function
  const changeLanguage = () => {
    setLang(lang === 'en' ? 'is' : 'en');
  };
  return (
    <header className="header">
      <span className='header-title'>{t('header.welcome')}</span>
      <button className='language-btn' onClick={changeLanguage}>
        {lang === 'en' ? 'IS' : 'EN'}
      </button>

    </header>
  );
};

export default Header;
