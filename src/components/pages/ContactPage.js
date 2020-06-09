import React, { useState } from 'react';
import instagram from '../../images/instagram.svg';
import youtube from '../../images/youtube.svg';
import { ExternalLink } from 'react-external-link';
import { NotificationManager, NotificationContainer } from 'react-notifications';

function ContactPage() {

  const [contactFormName, setContactFormName] = useState("");
  const [contactFormPhone, setContactFormPhone] = useState("");
  const [contactFormEmail, setContactFormEmail] = useState("");
  const [contactFormMessage, setContactFormMessage] = useState("");

  const createNotification = (type) => {
    console.log(type)
    if (type === "success") {
      NotificationManager.success('A message was sent', 'Success!', 5000);
    } else {
      NotificationManager.error('This message has not been sended', 'Error!', 5000, () => {
        alert('callback');
      });
    }
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(contactFormName);
    // console.log(contactFormPhone);
    // console.log(contactFormEmail);
    // console.log(contactFormMessage);
    const name = contactFormName;
    const phone = contactFormPhone;
    const email = contactFormEmail;
    const message = contactFormMessage;
    const formValues = { name, phone, email, message };
    console.log('formValues => ', formValues);
    const templateId = 'template_vsKyigXY';
    sendFeedback(templateId, formValues);
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send('gmail', templateId, variables)
      .then(res => {
        createNotification('success')
        console.log('Email successfully sent!');
        console.log(res);
      })
      .catch(err => {
        createNotification('error')
        console.error('Error during sending email:', err);
      })
  }

  return (
    <div className="main-container">
      <h2 className="main-container__header">Contact me</h2>
      <div className="main-container__inner-wrap">
        <div className="main-container__column">
          <div className="contact-form">
            <form className="contact-form__form">
              <input className="contact-form__input" type="text" name="name" placeholder="Your name" onChange={e => setContactFormName(e.target.value)} />
              <input className="contact-form__input" type="email" name="email" placeholder="Your email" onChange={e => setContactFormEmail(e.target.value)} />
              <input className="contact-form__input" type="tel" name="phone" placeholder="Your phone number" onChange={e => setContactFormPhone(e.target.value)} />
              <textarea className="contact-form__message" type="message" name="comments" placeholder="Type your message here" onChange={e => setContactFormMessage(e.target.value)} />
            </form>
            <div className="send-button" onClick={() => handleSubmit()} >Send</div>
          </div>
        </div>
        <div className="main-container__column">
          <div className="contact-page_my-contacts">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.4161662446!2d-122.48214752341369!3d47.61294318323425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1590653725172!5m2!1sen!2sus"></iframe>
            <p>Seattle, WA</p>
            <p>(972) 480-2509</p>
            <div className="social-media-container">
              <ExternalLink href="https://www.instagram.com/serjnike/">
                <img className="social-media" src={instagram} alt="instagram"></img>
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/">
                <img className="social-media" src={youtube} alt="youtube"></img>
              </ExternalLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;