import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div id='contact-container'>
        <div id="form-section">
            <div id="contact-header">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <form>
                <div id="form-first-row">
                    <div id="firstname">
                        <label>First name</label>
                        <input type="text" id='first_name' placeholder='Enter your first name' />
                    </div>
                    <div id="lastname">
                        <label>Last name</label>
                        <input type="text" id='last_name' placeholder='Enter your last name' />
                    </div>
                </div>

                <div id="email">
                    <label>Email</label>
                    <input type="email" id='email' placeholder='yourname@email.com' />
                </div>

                <div id="message">
                    <label>Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                </div>

                <div id="checkbox">
                    <input type="checkbox" name="" id="" />
                    <p>You agree to providing your data to Ismail who may contact you.</p>
                </div>

                <button>Send message</button>
            </form>
        </div>

        <div id='contact-footer'>
            <Footer />
        </div>
    </div>
  )
}

export default Contact