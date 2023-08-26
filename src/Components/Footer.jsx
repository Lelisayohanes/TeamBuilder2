import  '../Styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
        <div className='footer-container-item1'>
            <div className="footer-item footer-about"> 
                <div className='footer-about-logo'>
                    <img src='../../src/assets/images/logo 1.png' alt='logo' />
                </div>
                <div className='footer-about-message'>
                    Expertly trained, battle-tested, elite software developers on demand
                </div>
                <div className='footer-about-contuct'>
                    <div className='footer-about-contuct-item footer-about-contuct-phone'>
                        <div className='footer-contuct-logo'><img src='../../src/assets/images/Phone enabled.png' alt='phone' /></div>
                        <div className='footer-contuct-name'>+94 713249222</div>
                    </div>
                    <div className='footer-about-contuct-item footer-about-contuct-mail'>
                        <div className='footer-contuct-logo'> <img src='../../src/assets/images/Email.png'  alt='email'/></div>
                        <div className='footer-contuct-name'>hello@courtney.lk</div>
                    </div>
                    <div className='footer-about-contuct-item footer-about-contuct-location'>
                        <div className='footer-contuct-logo'><img src='../../src/assets/images/Vector.png'  alt='location'/></div>
                        <div className='footer-contuct-name'>Courtney Lanka (Private) Limited Level 35 World Trade Center Colombo 01</div>
                    </div>
                    
                </div>
            </div>

            <div className="footer-item footer-company"> 
                <div >
                    <p className='footer-item-header2'>Company</p>
                </div>
                <div className='footer-item-items'>
                    <p> About Us</p>
                    <p> Success Stories</p>
                    <p> Privacy Policy</p>
                    <p> Terms & Conditions</p>
                    <p> Contact Us</p>
                </div>
            </div>

            <div className=" footer-item footer-services"> 
                <div >
                    <p className='footer-item-header2'>Services</p>
                </div>
                <div>
                    <p> Hire Permanent Staff </p>
                    <p> Staff Augmentation</p>
                    <p> Software Outsourcing</p>
                    <p> Build Remote Office</p>
                
                </div>
            </div>
            
            <div className="footer-item footer-howtostart">
                <div >
                    <p className='footer-item-header2'>How To Start</p>
                </div>
                <div>
                    <p> You Ask</p>
                    <p> We Proceed</p>
                    <p> Negotiate</p>
                    <p> You Get</p>
                    
                </div>
            </div>
        </div>

        <div className="footer-item footer-social"> 
            <img src='../../src/assets/images/Group 55 footer social.png' />
        </div>

        <div className=" footer-item footer-copyright">
            <p>&copy; <span id="year"></span> 2023 Courtney</p>
        </div>
    </div>
  )
}

export default Footer