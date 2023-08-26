import "../Styles/HowToStart.css";

function HowToStart() {
  return (
    <div className="hts-container">
      <div className="hts-text">
        <div className="hts-header2">How to Start</div>
        <div className="hts-header">Easy Process</div>
        <div className="hts-paragraph">
          We specialize in helping you build a team of expert developers,
          testers, and leaders.
        </div>
      </div>
      <div className="hts-steps">
        
        <div className="hts-step">
            <div className="hts-step-image">
                <img src="../../src/assets/images/Group 12.png"  alt="group"/>
            </div>
            <div className="hts-step-description">
                <div className="hts-step-number">01</div> You ask
            </div>
        </div>
        <div className="hts-step">
            <div className="hts-step-image">
                <img src="../../src/assets/images/Group hts2.png"  alt="group"/>
            </div>
            <div className="hts-step-description">
                <div className="hts-step-number">02</div> we proceed
            </div>
        </div>
        <div className="hts-step">
            <div className="hts-step-image">
                <img src="../../src/assets/images/handshake 3.png"  alt="group"/>
            </div>
            <div className="hts-step-description">
                <div className="hts-step-number">03</div> we negotiate
            </div>
        </div>
        <div className="hts-step">
            <div className="hts-step-image">
                <img src="../../src/assets/images/medal 3.png"  alt="group"/>
            </div>
            <div className="hts-step-description">
                <div className="hts-step-number">04</div> You get
            </div>
        </div>
      </div>
    </div>
  );
}

export default HowToStart;
