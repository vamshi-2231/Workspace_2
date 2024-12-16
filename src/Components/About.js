/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function About() {
  return (
    <div>    
      {/* About Section */}
      <section className="section about" id="about" aria-label="about">
        <div className="container">
  
          {/* About Banner Image */}
          <figure className="about-banner">
            <img src="./assets/images/about-banner.png" width="802" height="654" loading="lazy" alt="about banner"
              className="w-100"/>
          </figure>
  
          <div className="about-content">
  
            {/* About Title */}
            <h2 className="h2-sm section-title">Your vision, our dedication. Together, let’s redefine possibilities.</h2>
  
            {/* About Text */}
            <p className="section-text">
              Infiedge was born out of a passion for innovation, excellence, and building lasting partnerships. As a team of seasoned professionals, we deliver customized solutions that empower businesses to thrive in a competitive landscape.
              <br /> 
              We are committed to:
              <ul>
                <li><strong>Innovation:</strong> Staying ahead with cutting-edge technology and ideas.</li>
                <li><strong>Dedication:</strong> Delivering unparalleled quality and client satisfaction.</li>
                <li><strong>Collaboration:</strong> Building lasting relationships through transparency and trust.</li>
              </ul>
              Our mission is to empower businesses with transformative strategies, helping them achieve unparalleled growth and success.
            </p>

            {/* Button Group */}
            <div className="btn-group">
              <a href="#" className="btn btn-primary">Know More</a>
            </div>
  
          </div>
  
        </div>
      </section>
    </div>
  )
}
