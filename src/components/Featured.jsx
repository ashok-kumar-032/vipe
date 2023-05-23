import React from "react";
import { Container } from "react-bootstrap";
import on_1 from "../assets/img/on_1.png";
import on_2 from "../assets/img/on_2.png";
import on_4 from "../assets/img/on_4.png";
import on_5 from "../assets/img/on_5.png";
import Slider from "react-slick";

const Featured = () => {
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
          Featured on
        </p>
        <Slider
          {...settings}
          className="d-flex justify-content-between align-items-center justify-content-center mt-5"
        >
          <div>
            <img className="w-75" src={on_1} alt="on_1" />
          </div>
          <div>
            <img className="w-75" src={on_2} alt="on_2" />
          </div>
          <div>
            <img className="w-75" src={on_1} alt="on_1" />
          </div>
          <div>
            <img className="w-75" src={on_4} alt="on_4" />
          </div>
          <div>
            <img className="w-75" src={on_5} alt="on_5" />
          </div>
          <div>
            <img className="w-75" src={on_4} alt="on_4" />
          </div>
          <div>
            <img className="w-75" src={on_1} alt="on_1" />
          </div>
          <div>
            <img className="w-75" src={on_4} alt="on_4" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Featured;
