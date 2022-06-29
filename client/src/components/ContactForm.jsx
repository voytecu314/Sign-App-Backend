import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="http://localhost:5000/contact-form" method='post'> 
            <h3>Full Name</h3>
                <input type="text" name='FullName' />
            <h3>Email</h3>
                <input type="email" name='email'/>
            <h3>Type a message</h3>
                <input type="text" name='message'/>
            <br />
            <br />
                <input type="submit" />

        </form>
    </div>
  )
}

export default ContactForm