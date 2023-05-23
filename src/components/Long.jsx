import React from "react";
import { Container } from "react-bootstrap";
import long_1 from "../assets/img/long_1.png";
import long_2 from "../assets/img/long_2.png";
import long_3 from "../assets/img/long_3.png";
import long_5 from "../assets/img/long_5.png";
import Slider from "react-slick";

const Long = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-3 py-md-5 bg_light_w">
      <Container>
        <p
          className="fw_400 fs_4xl ff_Use clr_black"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          Long Term <span className="d-block"> WordPress Partner</span>
        </p>
        <p
          className="fw_400 fs_sm ff_Gilroy clr_black max_w_690"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          Our motto is the long-term partnership – we will not only develop your
          perfect website, but will be behind you through the whole process.
          They already trusted us:
        </p>
        <Slider
          {...settings}
          className="d-flex justify-content-between align-items-center justify-content-center mt-5"
        >
          <div>
            <img className="w-75" src={long_1} alt="long_1" />
          </div>
          <div>
            <img className="w-75" src={long_2} alt="long_2" />
          </div>
          <div>
            <img className="w-75" src={long_3} alt="long_3" />
          </div>
          <div>
            <img className="w-75" src={long_2} alt="long_2" />
          </div>
          <div>
            <img className="w-75" src={long_5} alt="long_5" />
          </div>
          <div>
            <img className="w-75" src={long_2} alt="long_2" />
          </div>
          <div>
            <img className="w-75" src={long_3} alt="long_3" />
          </div>
          <div>
            <img className="w-75" src={long_2} alt="long_2" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Long;
