import React from 'react';
import SimpleMap from './SimpleMap';

function ContactPage(){
    return (
          <div className="main-container">
            <h2 className="main-container__header">Contact me</h2>
            <div className="main-container__inner-wrap">
              <div className="main-container__column">
                <div className="contact-form">
                  <form className="contact-form__form">
                    {/* <label for="contact-form__name" className="contact-form__input-area">Name</label> */}
                    <input className="contact-form__input" type="text" name="name" placeholder="Your name" />
                    {/* <label for="contact-form__email" className="contact-form__input-area">Email</label> */}
                    <input className="contact-form__input" type="email" name="email" placeholder="Your email" />
                    {/* <label for="contact-form__phone" className="contact-form__input-area">Phone</label> */}
                    <input className="contact-form__input" type="tel" name="phone" placeholder="Your phone number" />
                    {/* <label for="contact-form__message" className="contact-form__input-area">Message</label> */}
                    <textarea className="contact-form__message" rows="6" type="message" name="comments" placeholder="Type your message here" />
                  </form>
                  <div className="send-button">Send</div>
                </div>
              </div>
              <div className="main-container__column">
                <div className="contact-page_my-contacts">
                  <p>Seattle, WA</p>
                  <p>(972) 480-2509</p>
                  <p>hoopaloo88@gmail.com</p>
                  <SimpleMap />
              </div>
            </div>
          </div>
          </div>
    )
}

export default ContactPage;

