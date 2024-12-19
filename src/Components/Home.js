import React from 'react'

export default function Home() {
  return (
    <div>    {/* <!-- 
        - #HERO
      --> */}
       
  <section className="section hero" id="home" aria-label="hero">
  <div className="container">
    <div className="hero-content">
      <p className="hero-subtitle has-before">Welcome to Infiedge</p>
      <h1 className="h1 hero-title">Your Gateway to Digital Excellence!</h1>
      <p className="hero-text">
        At Infiedge, we specialize in turning visionary ideas into impactful realities. As innovators in the digital world, we craft captivating experiences, build robust applications, and drive transformative results. Whether it’s leveraging AI and data analytics, mastering UI/UX design, or enhancing your online presence through cutting-edge marketing, Infiedge is your trusted partner for success.
      </p>
      {/* <div className="btn-group">
        <a href="#home" className="btn btn-primary">Discover More</a>
      </div> */}
    </div>
    <figure
      className="hero-banner has-before img-holder"
      style={{ "--width": "650px", "--height": "650px" }}
    >
      <img
        src="./assets/images/hero-banner.png"
        width="650"
        height="650"
        alt="hero banner"
        className="img-cover"
      />
    </figure>
  </div>
</section>

      </div>
  )
}
