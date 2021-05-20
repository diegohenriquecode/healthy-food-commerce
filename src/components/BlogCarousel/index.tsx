import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselContainer } from "./styles";
import perfilImage1 from "../../assets/perfil1.png";
import perfilImage2 from "../../assets/perfil2.png";
import perfilImage3 from "../../assets/perfil3.png";
import perfilImage4 from "../../assets/perfil4.png";
import blogImage1 from "../../assets/blog_image_1.svg";
import blogImage2 from "../../assets/bloco_image_2.svg";
import blogImage3 from "../../assets/blog_image_3.svg";
import blogImage4 from "../../assets/blog_image_4.svg";

export function BlogCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 1919, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1080, min: 464 },
      items: 2.4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  return (
    <>
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <div className="card">
            <img className="cardImage" src={blogImage1} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage1} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage2} />
            <h1>Nutrition: Tips for Improving Your Health</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage2} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage3} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage3} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage4} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage4} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>

          <div className="card">
            <img className="cardImage" src={blogImage1} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage1} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage2} />
            <h1>Nutrition: Tips for Improving Your Health</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage2} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage3} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage3} />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src={blogImage4} />
            <h1>Quick-start guide to nuts and seeds</h1>

            <div className="card-footer">
              <div>
                <img src={perfilImage4} alt="" />
              </div>
              <span>Kevin Ibrahim</span>
            </div>
          </div>
        </Carousel>
      </CarouselContainer>
    </>
  );
}
