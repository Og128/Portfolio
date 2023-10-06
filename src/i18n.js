import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'
import resumeFR from './locales/fr/resume.json'
import textFR from './locales/fr/text.json'
import projetFR from './locales/fr/projet.json'
import projetEN from './locales/en/projet.json'
import resumeEN from './locales/en/resume.json'
import textEN from './locales/en/text.json'
import contactEN from './locales/en/contact.json'
import contactFR from './locales/fr/contact.json'


const initI18n = (initialLanguage) => {
    const resources = {
        en: {
            transResumEN: resumeEN,
            transTextEN: textEN,
            transProjetEN: projetEN,
            transContactEN: contactEN
        },
        fr: {
            transResumFR: resumeFR,
            transTextFR: textFR,
            transProjetFR: projetFR,
            transContactFR: contactFR
        }
    }


    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            resources,
            ns: ['transResumFR', 'transResumEN', 'transTextFR', 'transTextEN', 'transProjetFR', 'transProjetEN', 'transContactEN', 'transContactFR'],
            lng: initialLanguage,
            fallbackLng: "fr",
            debug: true,
            interpolation: {
                escapeValue: false
            }
        });
    // return i18n;
}
export {initI18n};

export default i18n;