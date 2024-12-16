/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function About() {
  return (
    <div>    
      {/* About Section */}
      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <figure class="about-banner">
            <img src="./assets/images/about-banner.png" width="802" height="654" loading="lazy" alt="about banner"
              class="w-100"/>
          </figure>

          <div class="about-content">

            <h2 class="h2-sm section-title">Your vision, our dedication. Together, let’s redefine possibilities.</h2>

            <p class="section-text">
              Infiedge was born out of a passion for innovation, excellence, and building lasting partnerships. As a team of seasoned professionals, we deliver customized solutions that empower businesses to thrive in a competitive landscape.
              standard dummy text ever.
            </p>

            <ul class="about-list">

              <li class="has-before">
                Innovation: Staying ahead with cutting-edge technology and ideas.
              </li>

              <li class="has-before">
                Dedication: Delivering unparalleled quality and client satisfaction.
              </li>

              <li class="has-before">
                 Collaboration: Building lasting relationships through transparency and trust.
              </li>

            </ul>

            <div class="btn-group">
              <a href="#" class="btn btn-primary">Know More</a>

              <button class="flex-btn">
                <div class="btn-icon">
                  <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
                </div>

                <span class="span">10+ Years Experience</span>
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
