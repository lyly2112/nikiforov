import React from 'react';

function ContactPage(){
    return (
        <div className="contact-page-container">
            
            {/* <NavbarServices/> */}
            <div className="contact-page__main">
                <div className="contact-form">
                    <div className="contact-form__name">
                    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
                    </div>
                    <div className="contact-form__email">Your email</div>
                    <div className="contact-form__phone">Your phone</div>
                    <div className="contact-form__message">Type your message here</div>
                    <div className="contact-button">Send</div>
                </div>
            <div className="contact-page_my-contacts">Seattle, WA</div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default ContactPage;