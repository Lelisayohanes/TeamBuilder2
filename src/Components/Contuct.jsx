import '../Styles/Contuct.css'

function Contuct() {
  return (
    <div>
      <div className="ctct-image">
        <img src="../../src/assets/images/contu img.png" />
      </div>
      <div className="ctct-over-image">
        <div className="ctct-contuct-container">
          <div className="ctct-contuct-header">
            <div>Connect With Your Next Great Hire Today!</div>
          </div>
          <div className="ctct-contuct-form">
            <label>Company</label>
            <input type="" placeholder="name" />
            <label>Your name</label>
            <input type="" />
            <label>Phone number</label>
            <input type="" />
            <label>Email</label>
            <input type="" />
            <label>Project Detail</label>
            <textarea></textarea>
            <div>
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
        <div className='contuct-last-line'> </div>
      </div>
    </div>
  );
}

export default Contuct