import Mecard from "../Mecard";
import Title from "../Title";
import './styles.css'
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {


    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transContactEN' : 'transContactFR';
    const [state, handleSubmit] = useForm('xjvqjyoq');

    return (
        <>
            <Title title={t(`${currentNamespace}:contact.title`)} />
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
                    {(state.succeeded) ? (
                        <div className="success">
                            <p>{t(`${currentNamespace}:contact.form.success`)}</p>
                        </div>
                    ) : (
                        <form className="form" onSubmit={handleSubmit} action="https://formspree.io/f/xjvqjyoq" method="POST" >
                            <div className="name">
                                <label htmlFor="name">{t(`${currentNamespace}:contact.form.name`)} :</label>
                                <input type="text" id="name" name="name" required />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className="contact-line"></div>
                            <div className="email">
                                <label for="email">{t(`${currentNamespace}:contact.form.email`)} :</label>
                                <input type="email" id="email" name="email" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className="contact-line"></div>
                            <div className="text">
                                <label for="message">{t(`${currentNamespace}:contact.form.message`)} :</label>
                                <textarea id="message" name="message" rows="1" cols="25" required></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <div className="contact-line"></div>
                            <input className="form-button" type="submit" value="Submit" disabled={state.submitting} />
                        </form>)}
                </div>
            </div>
        </>
    )
}

export default Contact;