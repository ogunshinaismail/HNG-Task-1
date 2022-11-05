import React, { useState } from 'react'
import Footer from '../components/Footer'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [emlError, setemlError] = useState(null);
    const [checked, setChecked] = useState(false);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    
    const handleChange = event => {
        if (!isValidEmail(event.target.value) || event.target.value === "") {
            setemlError('Email is invalid');
        } else {
            setemlError(null);
        }

        setEmail(event.target.value)
    };

    const empty = event => {
        if(message === "") {
            setError('Please enter a message')
        } else {
            setError(null);
        }

        setMessage(event.target.value)
    }

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
                    <input 
                        type="email" 
                        id='email' 
                        placeholder='yourname@email.com'
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    {emlError && <p style={{color: 'red', marginTop: '5px'}}>{emlError}</p>}
                </div>

                <div id="message">
                    <label>Message</label>
                    <textarea 
                        id="message" 
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        name='message'
                        value={message}
                        onChange={empty}
                        required
                        className={error ? "texterr" : ""}
                    ></textarea>
                    {error && <p style={{color: 'red', marginTop: '5px'}}>{error}</p>}
                </div>

                <div id="checkbox">
                    <input 
                        type="checkbox" 
                        name="" 
                        id=""
                        checked={checked}
                        onChange={e => setChecked(e.target.checked)}
                    />
                    <p>You agree to providing your data to Ismail who may contact you.</p>
                </div>

                <button disabled={!checked}>Send message</button>
            </form>
        </div>

        <div id='contact-footer'>
            <Footer />
        </div>
    </div>
  )
}

export default Contact