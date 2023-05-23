import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aliyen from "../assets/img/aliyen.webp";
import vipe from "../assets/img/vipe.webp";

const Success = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} xs={12}>
            <img
              className="aliyen_width"
              src={aliyen}
              alt="aliyen"
              data-aos-duration="2000"
              data-aos="fade-right"
            />
          </Col>
          <Col lg={8} xs={12} className="mt-4">
            <p className="fw_400 fs_sm ff_Gilroy clr_light_grey mb-0">
              HAVE YOU SEEN OUR MASCOT?
            </p>
            <p className="fw_400 fs_4xl ff_Use clr_black mb-0">
              Success Guides
            </p>
            <div>
              <button className="fw_600 fs_sm ff_Gilroy clr_blue Category_btn effect">
                Category-1
              </button>
              <button className="fw_600 fs_sm ff_Gilroy clr_blue Category_btn mt-3 ms-2 effect">
                Category-2
              </button>
              <button className="fw_600 fs_sm ff_Gilroy clr_blue Category_btn ms-2 effect">
                Category-3
              </button>
              <button className="fw_600 fs_sm ff_Gilroy clr_blue Category_btn ms-2 mt-3 effect">
                Category-4
              </button>
            </div>
            <Row className="mt-4 pt-2">
              <Col md={4} sm={6} xs={12}>
                <div
                  className="vipe_box success_hover"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <img className="w-100 effect" src={vipe} alt="vipe" />
                  <p className="fw_600 fs_lg ff_Gilroy clr_black mt-2 mb-2 text-nowrap">
                    Sit diam metus
                  </p>
                  <p className="fw_400 fs_sm ff_Gilroy clr_black">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <button className="fw_600 fs_sm ff_Gilroy clr_blue Read_btn">
                    Read More....
                  </button>
                </div>
              </Col>
              <Col md={4} sm={6} xs={12} className="mt-3 mt-sm-0">
                <div
                  className="vipe_box success_hover"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img className="w-100 effect" src={vipe} alt="vipe" />
                  <p className="fw_600 fs_lg ff_Gilroy clr_black mt-2 mb-2 text-nowrap">
                    Sit diam metus
                  </p>
                  <p className="fw_400 fs_sm ff_Gilroy clr_black">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <button className="fw_600 fs_sm ff_Gilroy clr_blue Read_btn">
                    Read More....
                  </button>
                </div>
              </Col>
              <Col md={4} sm={6} xs={12} className="mt-3 mt-sm-4 mt-md-0">
                <div
                  className="vipe_box success_hover"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img className="w-100 effect" src={vipe} alt="vipe" />
                  <p className="fw_600 fs_lg ff_Gilroy clr_black mt-2 mb-2 text-nowrap">
                    Sit diam metus
                  </p>
                  <p className="fw_400 fs_sm ff_Gilroy clr_black">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <button className="fw_600 fs_sm ff_Gilroy clr_blue Read_btn">
                    Read More....
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Success;
