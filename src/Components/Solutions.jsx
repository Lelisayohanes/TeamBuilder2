import { useEffect, useState } from "react";
import "../Styles/Solutions.css";

function Solutions() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      // eslint-disable-next-line no-inner-declarations
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
    }
  }, []); // This effect will run once on component mount

  const handleSlideChange = (event) => {
    setCurrentSlideIndex(Number(event.target.value));
  };

  return (
    <div className="sln-container">
      <div className="sln-text">
        <div className="sln-header2">Solutions</div>
        <div className="sln-header">
          Software Solutions, with expert software engineering teams
        </div>
        <div className="sln-paragraph">
          We specialize in helping you build a team of expert developers,
          testers, and leaders.
        </div>
      </div>
      <div className="sln-slides">
        {/* Set the "display" style based on the current slide index */}
        <div
          className="sln-slide"
          style={{ display: currentSlideIndex === 0 ? "block" : "none" }}
        >
          <div className="sln-slide-image">
            <img
              className="slide-image"
              src="../../src/assets/images/cube 1.png"
              alt="Slide 1"
            />
          </div>
          <div className="sln-slide-text">
          <div className="sln-each-header">Architect your solutions</div>
          <div className="sln-each-paragraph">
            Our team in on your operational, technological, and strategic
            challenges through an in-depth understanding of your business. We
            design a strategic roadmap to guide your result-oriented goals.
          </div>
          </div>
        </div>
        <div
          className="sln-slide "
          style={{ display: currentSlideIndex === 1 ? "block" : "none" }}
        >
          <div className="sln-slide-image">
            
            <img
              className="slide-image"
              src="../../src/assets/images/cube 1.png"
              alt="Slide 1"
            />

          </div>
          <div className="sln-slide-text">
            <div className="sln-each-header">Engineer your Solution</div>
            <div className="sln-each-paragraph">
              We promptly put together your nearshore engineering dream team to
              fulfill your specific requirements. We create the most elegant
              solution for your difficulties by combining our deep tech expertise,
              Top 1% Tech Talent, and industry-specific experience.
            </div>
          </div>
        </div>
        <div
          className="sln-slide "
          style={{ display: currentSlideIndex === 2 ? "block" : "none" }}
        >
          <div className="sln-slide-image">
            <img
              className="slide-image"
              src="../../src/assets/images/cube 1.png"
              alt="Slide 1"
            />
          </div>
          <div className="sln-slide-text">
            <div className="sln-each-header">
              ReEngineer your Business Process
            </div>
            <div className="sln-each-paragraph">
              Bolster by our team, your digital transformation swiftly gains speed
              and evolves into a digital acceleration. This process places the
              foundation for a more efficient and strong business that can meet
              demands at scale.
            </div>
          </div>
        </div>
      </div>

      {/* Radio buttons for manual scrolling with colored underline spans */}
      <div className="sln-slider-button">
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
      </div>
    </div>
  );
}

export default Solutions;
