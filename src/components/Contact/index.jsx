import Mecard from "../Mecard";
import Title from "../Title";
import './styles.css'

function Contact() {
    return (
        <>
            <Title />
            <div className="contact-container">
                <div className="info">
                    <Mecard />
                    <Mecard />
                </div>
                <div className="contact-form">
                    <p className="contact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, neque. Harum ratione voluptatum atque pariatur suscipit repellendus explicabo. Dolore, repudiandae quos ducimus repellendus quae eaque odio vitae itaque placeat nobis.</p>
                    <form className="form" action="mailto:shosets@gmail.com" method="post">

                        <div className="name">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="contact-line"></div>
                        <div className="email">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="contact-line"></div>
                        <div className="text">
                            <label for="message">Message:</label>
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