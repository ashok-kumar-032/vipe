import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero_img from "../assets/img/hero.webp";
import star_1 from "../assets/img/star_1.png";
import star_2 from "../assets/img/star_2.png";
import star from '../assets/img/hero_star.svg'
const Hero = () => {
  return (
    <div className="bg_black py-md-5">
      <Container className="py-sm-5 py-3">
        <Row className="d-flex flex-column-reverse flex-xl-row align-items-center">
          <Col xl={6} xs={12} className="mt-3">
            <p className="ff_Use fw_400 fs_5xl clr_white lh_160 border_left_hero ps-3">
              WordPress Development Agency
            </p>
            <p className="fw_700 clr_white ff_Gilroy fs_lg ps-3 pt-1">
              for Enterprise + Friendly Team
            </p>
            <p className="ff_Gilroy fw_400 fs_sm clr_white opacity_0_7 ps-3 pt-1">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for any WordPress service. Websites and,online shops
              development, maintenance and customization is what we do best.
            </p>
            <div className="d-flex align-items-start align-items-sm-center align-items-baseline  flex-column flex-sm-row pb-4 pb-xxl-0 ps-3 pt-2">
              <button className="fs_sm ff_Gilroy fw_600 clr_white bg_blue text-nowrap Get_btn all_btn effect">
                Get Started
              </button>
              <span className=" ms-sm-3 pt-3 pt-sm-0">
                <svg
                  className="ms-sm-4 pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                    fill="white"
                  />
                </svg>
                <button className="ff_Gilroy ps-2 clr_white border-0 bg-black opacity_0_7 fw_400 fs_sm">
                  What is Vipe? (1min)
                </button>
              </span>
            </div>
          </Col>
          <Col
            xl={6}
            xs={12}
            className="hero_gol_1_r position-relative hero_gol"
          >
            <img
              src={hero_img}
              className="hero_img_w hero_img"
              alt="hero_img"
            />
            <span className=" position-absolute star_img">
              <img src={star} alt="star" className="w_100 w_50_400 w_75_md" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Hero;
