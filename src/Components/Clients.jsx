import '../Styles/Clients.css'
import ImageSlideshow from './ImageSlideShow';
function Clients() {

    const images = [
        '../../src/assets/images/angular-logo-icon-png-svg 1.png',
        '../../src/assets/images/React_logo_wordmark 1.png',
        // Add more image file paths here
      ];


  return (
    <div className='whole-clt-container'>
        <div className='clt-container'>
        <div className='clt-text'>
        <div className="clt-header2">clients</div>
        <div className="clt-header">Amazing Clients who trust us   </div>
      </div>
      <div className="clt-image">
        <ImageSlideshow images={images} interval={3000} />
      </div>
        </div>
      
    </div>
  );
}

export default Clients







