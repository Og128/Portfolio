import Mecard from "../Mecard";
import Title from "../Title";
import './styles.css'
import { useTranslation } from "react-i18next";

function Contact() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transContactEN' : 'transContactFR';
        
    return (
        <>
            <Title />
            <div className="contact-container">
                <div className="info">
                    <Mecard 
                    title={t(`${currentNamespace}:contact.cards.card1.title`)}
                    text={t(`${currentNamespace}:contact.cards.card1.text`)} />
                     <Mecard 
                    title={t(`${currentNamespace}:contact.cards.card2.title`)}
                    text={t(`${currentNamespace}:contact.cards.card2.text`)} />
                </div>
                <div className="contact-form">
                    <p className="contact-text"> {t(`${currentNamespace}:contact.text`)}</p>
                    <form className="form" action="mailto:shosets@gmail.com" method="post">
                        <div className="name">
                            <label for="name">{t(`${currentNamespace}:contact.form.name`)}</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="contact-line"></div>
                        <div className="email">
                            <label for="email">{t(`${currentNamespace}:contact.form.email`)}</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="contact-line"></div>
                        <div className="text">
                            <label for="message">{t(`${currentNamespace}:contact.form.message`)}</label>
                            <textarea id="message" name="message" rows="1" cols="50" required></textarea>
                        </div>
                        <div className="contact-line"></div>
                        <input className="form-button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;