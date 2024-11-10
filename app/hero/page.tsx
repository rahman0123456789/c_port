import React from 'react'
import '../styles/hero.css';
import Image from 'next/image';
function Hero() {
  return (
    <div>
        <section className="profile-section">
  <div className="container">
    <Image
      className="profile-img"
      alt="pic"
      src="/pic.jpeg"
    width={200} height={100}/>
    <div className="profile-content">
      <h1 className="profile-heading">
        Hi I am Abdul Rahman
      </h1>
      <h2 className="profile-subheading">
        Frontend Developer
      </h2>
      <p className="profile-description">
        I am Frontend Developer and UI/UX Designer with a strong foundation in JavaScript Tailwind CSS TypeScript Next js and Node js I am passionate about using these skills to develop innovative web applications that are user friendly I am always eager to learn more about web development and marketing I enjoy the challenge of coding and solving real world problems Currently I am looking for opportunities to join a team that values innovation and shares my enthusiasm for technology
      </p>
      <div className="contact-btn-container">
        <a href="/contact">
          <button className="contact-btn">
            Contact
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero