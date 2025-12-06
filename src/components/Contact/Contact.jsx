import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a7f7bcac-c81a-4577-be43-971f10f9f258");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently open to internships, full time opportunities, and collaborative software projects. Feel free to reach out !</p>
          <div className='contact-details'>
            <div className='contact-detail'>
            <img src={mail_icon} alt=''/> <p>enaswin17@gmail.com</p>
            </div>
             <div className='contact-detail'>
              <img src={call_icon} alt=''/> <p>+91 8590108110</p>
            </div>
             <div className='contact-detail'>
              <img src={location_icon} alt=''/> <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Name</label>
        <input type='text' placeholder='your name' name='name'/>
        <label htmlFor="">Email</label>
        <input type='email' placeholder='your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name='message' rows="5" placeholder='Your message here'></textarea>
        <button type="submit" className='contact-submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
