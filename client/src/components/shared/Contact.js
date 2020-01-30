import React from 'react'
import '../../css/About.css';
import Button from '@material-ui/core/Button';
import Bars from '../../images/bars.svg';


const Contact =()=>(
  <div className= 'Everything'>
    <div className= 'Gradient'>
      <div className="contact-heading">
        <img className='contact-bars' alt='Bars' src={Bars} />
        <h1 className="about-heading1">Contact</h1>
      </div>

      <h2 className="about-heading2">Location</h2>
      <p className="about-paragraph1">
        370 S 300 E Church & State
        <br></br>
        <br></br>
        Salt Lake City,
        UT 84111
      </p>
      <h2 className="about-heading3">Email</h2>
      <p className="about-paragraph2">contact@devpointstudios.com</p>
      <h2 className="about-heading4">Social</h2>

      <div className="about-anchor1">
        <a href ='https://www.facebook.com/DevPointLabs/?ref=br_rs'>
          <img  src={require('../../images/Subtract.svg')} alt='Subtract'/>
        </a>
      </div>

      <div className="about-anchor2">
        <a href ='https://twitter.com/devpointlabs?lang=en'>
          <img  src={require('../../images/twitter2.svg')} alt='Twitter'/>
        </a>
      </div>

      <div className="about-anchor3">
        <a href ='https://www.instagram.com/devpointlabs/?hl=en'>
          <img src={require('../../images/instagram.svg')} alt='Instagram'/>
        </a>
      </div>

      <br />

      <div>
        <Button className="contact-btn" href='https://www.devpointstudios.com/contact' target="_blank">
          Contact Form
        </Button>
      </div>
    </div>
  </div>
)

export default Contact;
