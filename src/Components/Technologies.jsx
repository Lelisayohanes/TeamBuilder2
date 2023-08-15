import '../Styles/Technologies.css'
import ImageSlideshow from './ImageSlideShow';
function Technologies() {

    const images = [
        '../../src/assets/images/angular-logo-icon-png-svg 1.png',
        '../../src/assets/images/React_logo_wordmark 1.png',
        // Add more image file paths here
      ];


  return (
    <div className='whole-tech-container'>
        <div className='tech-container'>
        <div className='tech-text'>
        <div className="tech-header2">Specialized</div>
        <div className="tech-header">Technologies</div>
      </div>
      <div className="tech-image">
        <ImageSlideshow images={images} interval={3000} />
      </div>
        </div>
      
    </div>
  );
}

export default Technologies







