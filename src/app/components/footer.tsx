import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='main-footer'>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <img src="/Group1.png" alt="Digital Project Logo" className="footer-logo" />
          </div>
            <div className="footer-right">
              <div className="footer-info">
                <h3><b>Information</b></h3> <br />
        <ul>
          <li>Main</li><br />
          <li>Gallery</li><br />
          <li>Projects</li><br />
          <li>Certifications</li><br />
          <li>Contacts</li> <br />
        </ul>
      </div>
      <div className="footer1-contacts">
        <h3><b>Contacts</b></h3><br /> 
        <p>📍 1234 Sample Street,<br /> Austin Texas 78704</p> <br /><br /><br /><br />
        <p>📞 512.333.2222</p><br /><br /> 
        <p>✉ sampleemail@gmail.com</p>
      </div>
        <div className="footer2-contacts">
           <h3><b>Social Media</b></h3> <br />
             <div className="image-row">
               <img src="/facebook.png" alt="Logo" />
                <img src="/twitter.png" alt="Logo" />
                  <img src="/Linked In.png" alt="Logo" />
                  </div>
       </div>
    </div>
  </div>
  <p className="footer-rights2">© 2024 Ali Dost: All Rights Reserved</p>
</footer>
</div>
  )
}















































