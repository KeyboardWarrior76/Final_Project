import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../../css/About.css';
import Button from '@material-ui/core/Button';
import { keys } from '@material-ui/core/styles/createBreakpoints';

import { green, purple, white } from '@material-ui/core/colors';


const About =()=>(
<div>

  <div style2={{paddingleft:'10px'}}>

    <div style={{padding:'10px'}}>
      <div style3={{padding:'10px'}}>

        <div style={{padding:'0px'}}>
      <svg width="250" height="200" viewBox="0 0 214 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.7976 98.816C73.1496 98.816 73.4616 98.952 73.7336 99.224L76.2776 101.984C74.8696 103.728 73.1336 105.064 71.0696 105.992C69.0216 106.92 66.5576 107.384 63.6776 107.384C61.1016 107.384 58.7816 106.944 56.7176 106.064C54.6696 105.184 52.9176 103.96 51.4616 102.392C50.0056 100.824 48.8856 98.952 48.1016 96.776C47.3336 94.6 46.9496 92.224 46.9496 89.648C46.9496 87.04 47.3656 84.656 48.1976 82.496C49.0296 80.32 50.1976 78.448 51.7016 76.88C53.2216 75.312 55.0296 74.096 57.1256 73.232C59.2216 72.352 61.5416 71.912 64.0856 71.912C66.6136 71.912 68.8536 72.328 70.8056 73.16C72.7736 73.992 74.4456 75.08 75.8216 76.424L73.6616 79.424C73.5336 79.616 73.3656 79.784 73.1576 79.928C72.9656 80.072 72.6936 80.144 72.3416 80.144C72.1016 80.144 71.8536 80.08 71.5976 79.952C71.3416 79.808 71.0616 79.64 70.7576 79.448C70.4536 79.24 70.1016 79.016 69.7016 78.776C69.3016 78.536 68.8376 78.32 68.3096 78.128C67.7816 77.92 67.1656 77.752 66.4616 77.624C65.7736 77.48 64.9736 77.408 64.0616 77.408C62.5096 77.408 61.0856 77.688 59.7896 78.248C58.5096 78.792 57.4056 79.592 56.4776 80.648C55.5496 81.688 54.8296 82.968 54.3176 84.488C53.8056 85.992 53.5496 87.712 53.5496 89.648C53.5496 91.6 53.8216 93.336 54.3656 94.856C54.9256 96.376 55.6776 97.656 56.6216 98.696C57.5656 99.736 58.6776 100.536 59.9576 101.096C61.2376 101.64 62.6136 101.912 64.0856 101.912C64.9656 101.912 65.7576 101.864 66.4616 101.768C67.1816 101.672 67.8376 101.52 68.4296 101.312C69.0376 101.104 69.6056 100.84 70.1336 100.52C70.6776 100.184 71.2136 99.776 71.7416 99.296C71.9016 99.152 72.0696 99.04 72.2456 98.96C72.4216 98.864 72.6056 98.816 72.7976 98.816ZM90.1443 81.992C91.9683 81.992 93.6243 82.288 95.1123 82.88C96.6163 83.472 97.8963 84.312 98.9523 85.4C100.024 86.488 100.848 87.816 101.424 89.384C102 90.952 102.288 92.704 102.288 94.64C102.288 96.592 102 98.352 101.424 99.92C100.848 101.488 100.024 102.824 98.9523 103.928C97.8963 105.032 96.6163 105.88 95.1123 106.472C93.6243 107.064 91.9683 107.36 90.1443 107.36C88.3043 107.36 86.6323 107.064 85.1283 106.472C83.6243 105.88 82.3363 105.032 81.2643 103.928C80.2083 102.824 79.3843 101.488 78.7923 99.92C78.2163 98.352 77.9283 96.592 77.9283 94.64C77.9283 92.704 78.2163 90.952 78.7923 89.384C79.3843 87.816 80.2083 86.488 81.2643 85.4C82.3363 84.312 83.6243 83.472 85.1283 82.88C86.6323 82.288 88.3043 81.992 90.1443 81.992ZM90.1443 102.8C92.1923 102.8 93.7043 102.112 94.6803 100.736C95.6723 99.36 96.1683 97.344 96.1683 94.688C96.1683 92.032 95.6723 90.008 94.6803 88.616C93.7043 87.224 92.1923 86.528 90.1443 86.528C88.0643 86.528 86.5203 87.232 85.5123 88.64C84.5203 90.032 84.0243 92.048 84.0243 94.688C84.0243 97.328 84.5203 99.344 85.5123 100.736C86.5203 102.112 88.0643 102.8 90.1443 102.8ZM112.355 85.4C112.851 84.904 113.371 84.448 113.915 84.032C114.475 83.6 115.059 83.24 115.667 82.952C116.291 82.648 116.955 82.416 117.659 82.256C118.363 82.08 119.131 81.992 119.963 81.992C121.307 81.992 122.499 82.224 123.539 82.688C124.579 83.136 125.443 83.776 126.131 84.608C126.835 85.424 127.363 86.408 127.715 87.56C128.083 88.696 128.267 89.952 128.267 91.328V107H122.339V91.328C122.339 89.824 121.995 88.664 121.307 87.848C120.619 87.016 119.571 86.6 118.163 86.6C117.139 86.6 116.179 86.832 115.283 87.296C114.387 87.76 113.539 88.392 112.739 89.192V107H106.811V82.376H110.435C111.203 82.376 111.707 82.736 111.947 83.456L112.355 85.4ZM141.784 107.384C139.64 107.384 137.992 106.784 136.84 105.584C135.704 104.368 135.136 102.696 135.136 100.568V86.816H132.616C132.296 86.816 132.024 86.712 131.8 86.504C131.576 86.296 131.464 85.984 131.464 85.568V83.216L135.424 82.568L136.672 75.848C136.752 75.528 136.904 75.28 137.128 75.104C137.352 74.928 137.64 74.84 137.992 74.84H141.064V82.592H147.64V86.816H141.064V100.16C141.064 100.928 141.248 101.528 141.616 101.96C142 102.392 142.52 102.608 143.176 102.608C143.544 102.608 143.848 102.568 144.088 102.488C144.344 102.392 144.56 102.296 144.736 102.2C144.928 102.104 145.096 102.016 145.24 101.936C145.384 101.84 145.528 101.792 145.672 101.792C145.848 101.792 145.992 101.84 146.104 101.936C146.216 102.016 146.336 102.144 146.464 102.32L148.24 105.2C147.376 105.92 146.384 106.464 145.264 106.832C144.144 107.2 142.984 107.384 141.784 107.384ZM164.444 96.488C162.732 96.568 161.292 96.72 160.124 96.944C158.956 97.152 158.02 97.424 157.316 97.76C156.612 98.096 156.108 98.488 155.804 98.936C155.5 99.384 155.348 99.872 155.348 100.4C155.348 101.44 155.652 102.184 156.26 102.632C156.884 103.08 157.692 103.304 158.684 103.304C159.9 103.304 160.948 103.088 161.828 102.656C162.724 102.208 163.596 101.536 164.444 100.64V96.488ZM150.86 85.808C153.692 83.216 157.1 81.92 161.084 81.92C162.524 81.92 163.812 82.16 164.948 82.64C166.084 83.104 167.044 83.76 167.828 84.608C168.612 85.44 169.204 86.44 169.604 87.608C170.02 88.776 170.228 90.056 170.228 91.448V107H167.54C166.98 107 166.548 106.92 166.244 106.76C165.94 106.584 165.7 106.24 165.524 105.728L164.996 103.952C164.372 104.512 163.764 105.008 163.172 105.44C162.58 105.856 161.964 106.208 161.324 106.496C160.684 106.784 159.996 107 159.26 107.144C158.54 107.304 157.74 107.384 156.86 107.384C155.82 107.384 154.86 107.248 153.98 106.976C153.1 106.688 152.34 106.264 151.7 105.704C151.06 105.144 150.564 104.448 150.212 103.616C149.86 102.784 149.684 101.816 149.684 100.712C149.684 100.088 149.788 99.472 149.996 98.864C150.204 98.24 150.54 97.648 151.004 97.088C151.484 96.528 152.1 96 152.852 95.504C153.604 95.008 154.524 94.576 155.612 94.208C156.716 93.84 157.996 93.544 159.452 93.32C160.908 93.08 162.572 92.936 164.444 92.888V91.448C164.444 89.8 164.092 88.584 163.388 87.8C162.684 87 161.668 86.6 160.34 86.6C159.38 86.6 158.58 86.712 157.94 86.936C157.316 87.16 156.764 87.416 156.284 87.704C155.804 87.976 155.364 88.224 154.964 88.448C154.58 88.672 154.148 88.784 153.668 88.784C153.252 88.784 152.9 88.68 152.612 88.472C152.324 88.248 152.092 87.992 151.916 87.704L150.86 85.808ZM193.451 87.584C193.275 87.808 193.099 87.984 192.923 88.112C192.763 88.24 192.523 88.304 192.203 88.304C191.899 88.304 191.603 88.216 191.315 88.04C191.027 87.848 190.683 87.64 190.283 87.416C189.883 87.176 189.403 86.968 188.843 86.792C188.299 86.6 187.619 86.504 186.803 86.504C185.763 86.504 184.851 86.696 184.067 87.08C183.283 87.448 182.627 87.984 182.099 88.688C181.587 89.392 181.203 90.248 180.947 91.256C180.691 92.248 180.563 93.376 180.563 94.64C180.563 95.952 180.699 97.12 180.971 98.144C181.259 99.168 181.667 100.032 182.195 100.736C182.723 101.424 183.363 101.952 184.115 102.32C184.867 102.672 185.715 102.848 186.659 102.848C187.603 102.848 188.363 102.736 188.939 102.512C189.531 102.272 190.027 102.016 190.427 101.744C190.827 101.456 191.171 101.2 191.459 100.976C191.763 100.736 192.099 100.616 192.467 100.616C192.947 100.616 193.307 100.8 193.547 101.168L195.251 103.328C194.595 104.096 193.883 104.744 193.115 105.272C192.347 105.784 191.547 106.2 190.715 106.52C189.899 106.824 189.051 107.04 188.171 107.168C187.307 107.296 186.443 107.36 185.579 107.36C184.059 107.36 182.627 107.08 181.283 106.52C179.939 105.944 178.763 105.112 177.755 104.024C176.747 102.936 175.947 101.608 175.355 100.04C174.779 98.456 174.491 96.656 174.491 94.64C174.491 92.832 174.747 91.16 175.259 89.624C175.787 88.072 176.555 86.736 177.563 85.616C178.571 84.48 179.819 83.592 181.307 82.952C182.795 82.312 184.507 81.992 186.443 81.992C188.283 81.992 189.891 82.288 191.267 82.88C192.659 83.472 193.907 84.32 195.011 85.424L193.451 87.584ZM207.175 107.384C205.031 107.384 203.383 106.784 202.231 105.584C201.095 104.368 200.527 102.696 200.527 100.568V86.816H198.007C197.687 86.816 197.415 86.712 197.191 86.504C196.967 86.296 196.855 85.984 196.855 85.568V83.216L200.815 82.568L202.063 75.848C202.143 75.528 202.295 75.28 202.519 75.104C202.743 74.928 203.031 74.84 203.383 74.84H206.455V82.592H213.031V86.816H206.455V100.16C206.455 100.928 206.639 101.528 207.007 101.96C207.391 102.392 207.911 102.608 208.567 102.608C208.935 102.608 209.239 102.568 209.479 102.488C209.735 102.392 209.951 102.296 210.127 102.2C210.319 102.104 210.487 102.016 210.631 101.936C210.775 101.84 210.919 101.792 211.063 101.792C211.239 101.792 211.383 101.84 211.495 101.936C211.607 102.016 211.727 102.144 211.855 102.32L213.631 105.2C212.767 105.92 211.775 106.464 210.655 106.832C209.535 107.2 208.375 107.384 207.175 107.384Z" fill="white"/>
<line x1="16" y1="18" x2="16" y2="158" stroke="white" stroke-width="2" stroke-linejoin="round"/>
<line x1="1" y1="4.37114e-08" x2="0.999992" y2="175" stroke="white" stroke-width="2" stroke-linejoin="round"/>
<line x1="30" y1="35" x2="30" y2="140" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
        {/* <h1 className="about-heading1" style={{paddingLeft:'20px'}}>
          Contact
        </h1> */}
        </div>
      </div>
    </div>

  </div>
          <h2 className="about-heading2">
      
          Location

          </h2>
  <p className="about-paragraph1">
      370 S 300 E Church & State 
      <br></br>
      <br></br>
      Salt Lake City, 
      UT 84111
    </p>


  <h2 className="about-heading3">
    Email
  </h2>

  <p className="about-paragraph2">
    contact@devpointstudios.com
  </p>


  <h2 className="about-heading4">Social
  </h2>





    <div className="about-anchor1">
      <a href ='https://www.facebook.com/DevPointLabs/?ref=br_rs'><img  src={require('../../images/Subtract.svg')}/>
    </a>
    </div>

    <div className="about-anchor2">
      <a href ='https://twitter.com/devpointlabs?lang=en'><img  src={require('../../images/twitter.svg')}/>
    </a>

    </div>
    <div className="about-anchor3">
    <a href ='https://www.instagram.com/devpointlabs/?hl=en'><img src={require('../../images/instagram.svg')}/>
    </a>
    </div>
          
    <br></br>

    <div>
      <Button className="contact-btn" href='https://www.devpointstudios.com/contact'>
      Contact Form
      </Button>
    </div>
    
</div>


)

export default About;
