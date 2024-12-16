import React from 'react';

export default function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="section contact" id="contact" aria-label="Contact Us">
        <div className="container">
          <div className="title-wrapper text-center">
          <p className="section-subtitle text-center">- Meet the Minds Behind the Magic -</p>
        <h2 className="h2 section-title text-center">Get in Touch</h2>
        <p className="section-text text-center">
         Ready to transform your vision into reality ? Connect with us today!
        </p>
          </div>

          <div className="contact-content-wrapper">
            {/* Left Image */}
            <figure className="contact-banner">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Contact Us Banner" 
                className="img-cover" 
              />
            </figure>

            {/* Right Form */}
            <div className="contact-form-container">
              <form action="#" method="post" className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-input" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
