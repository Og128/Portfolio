import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css'

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';

    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <div className={`btn-lang ${i18n.language === 'en' ? 'en' : 'fr'}`} onClick={toggleLanguage}>
        </div>
    </>
  );
}

export default LanguageToggle;
