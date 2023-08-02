import '../Styles/Hero.css'

function Hero() {
  return (
    <div className="hr-container">
      <div className="image-row">
        <img
          className="hero-image"
          src="../../src/assets/images/Rectangle26.png"
          alt="team working together"
        />
      </div>
      <div className="hero-text">
        <div className='hero-header'>Building dev team, Quickly and Affordabily</div>
        <div className='hero-paragraph'>
          
          we specialize in helping you build a team of expert
          developers,testers, and leaders. we are setup to deliver long term
          solution, or scale to different needs quickly.
        </div>
        <button className='hero-btn'>Build a team</button>
      </div>
    </div>
  );
}

export default Hero