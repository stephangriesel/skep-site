import React, { Component } from 'react';
import '../css/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="center-wrapper">
                <header className="contact-contact">
                    <h1>Contact</h1>
                </header>
                <form name="contact" action="POST" data-netlify="true">
                    <p>
                        <input type="text" name="name" placeholder="Please enter your name" />
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Your Email Address"/>
                    </p>
                    <p>
                        <input type="tel" name="number" placeholder="Contact Number"/>
                    </p>
                    <p>
                        <select name="role[]" multiple>
                            <option value="leader">Feedback</option>
                            <option value="follower">Shop Enquiry</option>
                        </select>
                    </p>
                    <p>
                        <textarea name="message" placeholder="Your Message"></textarea>
                    </p>
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Contact;
