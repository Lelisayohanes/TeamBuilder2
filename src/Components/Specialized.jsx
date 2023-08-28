import { useEffect, useState } from "react";
import '../Styles/Specialized.css';

export default function Specialized() {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // Calculate the index of the visible slide
      const slides = document.querySelectorAll(".sln-slide");
      const windowHeight = window.innerHeight;
      let visibleSlideIndex = 0;

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const rect = slide.getBoundingClientRect();
        const slideTop = rect.top;
        const slideBottom = rect.bottom;

        // Check if the slide is at least 50% visible
        if (slideTop < windowHeight && slideBottom > windowHeight / 2) {
          visibleSlideIndex = i;
          break;
        }
      }

      setCurrentSlideIndex(visibleSlideIndex);
    }

    // Add an event listener to handle scroll events
    window.addEventListener("scroll", handleScroll);

    // Call the handler once to initialize the current slide
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSlideChange = (event) => {
    setCurrentSlideIndex(Number(event.target.value));
  };

  return (
    <div className="whole-specialized">
      <div className="spcz-container">
        <div className="spcz-text">
          <div className="spcz-header2">Specialized</div>
          <div className="spcz-header">Specialized Staff We Provide</div>
        </div>
        <div className="spcz-slides">
          {/* Set the "display" style based on the current slide index */}
          <div
            className="spcz-slide"
            style={{ display: currentSlideIndex === 0 ? "block" : "none" }}
          >
            <div className="spcz-each-items">
              <div className="spcz-each-items-mobile">
                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="spcz-slide"
            style={{ display: currentSlideIndex === 1 ? "block" : "none" }}
          >
            
            <div className="spcz-each-items">
              <div className="spcz-each-items-mobile">
                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

               

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                
                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div
            className="spcz-slide"
            style={{ display: currentSlideIndex === 2 ? "block" : "none" }}
          >
             <div className="spcz-each-items">
              <div className="spcz-each-items-mobile">
                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/fontend.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="spcz-slide"
            style={{ display: currentSlideIndex === 3 ? "block" : "none" }}
          >
            
            <div className="spcz-each-items">
              <div className="spcz-each-items-mobile">
                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>

                <div className="spcz-each-item">
                  <div className="each-spcz-image-background">
                    <img
                      className="each-spcz-image"
                      src="../../src/assets/images/frontend 2.png"
                    />
                  </div>
                  <div className="each-spcz-description">
                    Frontend Engineers
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Radio buttons for manual scrolling with colored underline spans */}
        <div className="spcz-slider-button">
          <label>
            <input
              type="radio"
              name="slide"
              value={0}
              checked={currentSlideIndex === 0}
              onChange={handleSlideChange}
            />
            <span
              className={
                currentSlideIndex === 0
                  ? "colored-underline active"
                  : "colored-underline"
              }
            ></span>
          </label>
          <label>
            <input
              type="radio"
              name="slide"
              value={1}
              checked={currentSlideIndex === 1}
              onChange={handleSlideChange}
            />
            <span
              className={
                currentSlideIndex === 1
                  ? "colored-underline active"
                  : "colored-underline"
              }
            ></span>
          </label>
          <label>
            <input
              type="radio"
              name="slide"
              value={2}
              checked={currentSlideIndex === 2}
              onChange={handleSlideChange}
            />
            <span
              className={
                currentSlideIndex === 2
                  ? "colored-underline active"
                  : "colored-underline"
              }
            ></span>
          </label>
          <label>
            <input
              type="radio"
              name="slide"
              value={3}
              checked={currentSlideIndex === 3}
              onChange={handleSlideChange}
            />
            <span
              className={
                currentSlideIndex === 3
                  ? "colored-underline active"
                  : "colored-underline"
              }
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
}
