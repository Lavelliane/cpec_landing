import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import feature4 from "../assets/images/feature4.png";
import colorSharp from "../assets/images/color-sharp.png";

export const WhyCpE = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="why">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Why Choose Computer Engineering?</h2>
              <p>
                Students will be provided with both theoretical and practical
                background in computer hardware, networking and software, along
                with the engineering analysis, design and implementation skills
                necessary to work in the different sub-fields<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={feature1} alt="Image" />
                  <h5>High Demand</h5>
                </div>
                <div className="item">
                  <img src={feature2} alt="Image" />
                  <h5>Versatility</h5>
                </div>
                <div className="item">
                  <img src={feature3} alt="Image" />
                  <h5>Tech-oriented</h5>
                </div>
                <div className="item">
                  <img src={feature4} alt="Image" />
                  <h5>Constant Innovation</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
