import { useEffect, useState } from "react";
import "../Styles/Expertise.css";

function Expertise() {
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
    <div>
      <div className="exts-container">
        <div className="exts-text">
          <div className="exts-header2">Expertice</div>
          <div className="exts-header">Hire Permanent and Remote Developers</div>
          <div className="exts-paragraph">
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </div>
        </div>
        <div className="exts-slides">
          {/* Set the "display" style based on the current slide index */}
          <div
            className="exts-slide"
            style={{ display: currentSlideIndex === 0 ? "block" : "none" }}
          >
            <div className="exts-slide-image">
              <img
                className="slide-image"
                src="../../src/assets/images/cube 1.png"
                alt="Slide 1"
              />
            </div>
            <div className="exts-slide-text">
              <div className="exts-each-header">Dedicated Teams</div>
              <div className="exts-each-paragraph">
              Find your next team member
              </div>
            </div>
          </div>
          <div
            className="exts-slide"
            style={{ display: currentSlideIndex === 1 ? "block" : "none" }}
          >
            <div className="exts-slide-image">
              <img
                className="slide-image"
                src="../../src/assets/images/cube 1.png"
                alt="Slide 2"
              />
            </div>
            <div className="exts-slide-text">
            <div className="exts-each-header">Staff Augmentation</div>
            <div className="exts-each-paragraph">
            Build a distributed development team
            </div>
            </div>
          </div>
          <div
            className="exts-slide"
            style={{ display: currentSlideIndex === 2 ? "block" : "none" }}
          >
            <div className="exts-slide-image">
              <img
                className="slide-image"
                src="../../src/assets/images/cube 1.png"
                alt="Slide 3"
              />
            </div>
            <div className="exts-slide-text">
              <div className="exts-each-header">Software Outsourcing</div>
              <div className="exts-each-paragraph">
              End-to-End Software Development Outsourcing Solutions
              </div>
            </div>
            
          </div>
          <div
            className="exts-slide"
            style={{ display: currentSlideIndex === 3 ? "block" : "none" }}
          >
            <div className="exts-slide-image">
              <img
                className="slide-image"
                src="../../src/assets/images/cube 1.png"
                alt="Slide 4"
              />
            </div>
            <div className="exts-slide-text">
              <div className="exts-each-header">Remote Office</div>
              <div className="exts-each-paragraph">
              Open your own remote development center and grow your business
              </div>
            </div>
          </div>
        </div>

        {/* Radio buttons for manual scrolling with colored underline spans */}
        <div className="exts-slider-button">
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

export default Expertise;
