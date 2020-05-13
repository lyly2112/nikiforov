import React from 'react';

function ContactPage(){
    return (
        <div className="contact-page-container">
            
            {/* <NavbarServices/> */}
            <div className="contact-page__main">
                <div className="contact-form">
                    <form className="contact-form__input">
  <label className="contact-form__input-area">
    <input type="text" name="name" placeholder="Your name" />
  </label>
  <label className="contact-form__input-area">
    <input type="email" name="email" placeholder="Your email" />
  </label>
  <label className="contact-form__input-area">
    <input type="tel" name="phone" placeholder="Your phone number" />
  </label>
  <label className="contact-form__input-area">
    <input type="text" name="comments" placeholder="Type your message here" />
  </label>
</form>

                    <div className="send-button">Send</div>
                </div>

                
            <div className="contact-page_my-contacts">Seattle, WA</div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default ContactPage;