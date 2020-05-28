import React from 'react';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';
import { ExternalLink } from 'react-external-link';
import ReactContactForm from 'react-mail-form';



function ContactPage(){
    return (
          <div className="main-container">
            <h2 className="main-container__header">Contact me</h2>
            <div className="main-container__inner-wrap">
              <div className="main-container__column">
                <div className="contact-form">
                  <form className="contact-form__form">
                    <input className="contact-form__input" type="text" name="name" placeholder="Your name" />
                    <input className="contact-form__input" type="email" name="email" placeholder="Your email" />
                    <input className="contact-form__input" type="tel" name="phone" placeholder="Your phone number" />
                    <textarea className="contact-form__message" rows="6" type="message" name="comments" placeholder="Type your message here" />
                  </form>
                  <div className="send-button">Send</div>
                </div>
              </div>
              <div className="main-container__column">
                <div className="contact-page_my-contacts">
                  <p>
                  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.4161662446!2d-122.48214752341369!3d47.61294318323425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1590653725172!5m2!1sen!2sus"></iframe>
                  </p>
                  <p>Seattle, WA</p>
                  <p>(972) 480-2509</p>
                  <p>

    <ExternalLink href="https://www.instagram.com/serjnike/">
<img div className="social-media" src={instagram} alt="instagram"></img>
    </ExternalLink>
<ExternalLink href="https://www.youtube.com/">
<img div className="social-media" src={youtube} alt="youtube"></img>
</ExternalLink>
                    
</p>
              </div>
            </div>
          </div>
          </div>
    )
}

export default ContactPage;

