import React from 'react'

const Contact = () => {
  return (
    <div>
         <div class="contact-section">
            <h1>Get in Touch</h1>
            <div class="map-forms row">
                <div class="google-maps col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.08645922207!2d80.19917227729223!3d12.97915490910224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735558708729!5m2!1sen!2sin"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="contact-form col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                    <form action="mailto: mgowthamm58@gmail.com" method="post">
                        <div class="input-group">
                            <input type="text" class="input" required/>
                            <label class="name">Your Name</label>
                        </div>
                        <div class="input-group">
                            <input type="email" class="input" required/>
                            <label class="name">Email Address</label>
                        </div>
                        <div class="input-group">
                            <input type="text" class="input"/>
                            <label class="name">Subject</label>
                        </div>
                        <div class="input-group">
                            <textarea name="Message" class="input"></textarea>
                            <label class="name">Message</label>
                        </div>
                        <div class="contact-btn">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

