import '../Styles/Contuct.css'

function Contuct() {
  return (
    <div className='ctct-container'>
      <div className="ctct-image">
        <img className='ctct-image-img' src="../../src/assets/images/contu img.png" />
      </div>
      <div className="ctct-over-image">
        <div className="ctct-contuct-container">
          <div className="ctct-contuct-header">
            Connect With Your Next Great Hire Today!
          </div>
          <div className="ctct-contuct-form">
            <div className="single-input">
              <label className='label-design'>Company&nbsp;&nbsp;</label>
              <input className='input-design' type="" placeholder="name" />
            </div>

            <div className="single-input">
              <label className='label-design'>Your name</label>
              <input className='input-design' type="" />
            </div>
            
            <div className="single-input">
              <label className='label-design'>Phone number</label>
              <input className='input-design' type="" />
            </div>
            
            <div className="single-input">
              <label className='label-design'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input className='input-design' type="" />
            </div>
            
            <div className="single-input">
              <label className='label-design'>Project Detail</label>
              <textarea className='input-design' ></textarea>
            </div>
          </div>
          <div className='ctct-contuct-btn'>
              <div className="ctct-check-box">
                <input type="checkbox" checked name="" />
                <div className="ctct-us-policy">
                  By sending this form I confirm that I have read and accept the
                  &nbsp;<strong>Privacy Policy</strong>
                </div>
              </div>
            </div>
            <button className="ctct-form-button">GET CONSULTATION</button>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Contuct