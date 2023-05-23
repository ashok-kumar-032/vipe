import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import agile from "../assets/img/agile.webp";
const Agile = () => {
  return (
    <section className="py-sm-5 py-4 mb-lg-5">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={5}
            className="d-flex align-items-center justify-content-center"
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            <img className="agile_img_w" src={agile} alt="Agile" />
          </Col>
          <Col
            lg={7}
            className="mt-4 mt-lg-0"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <p className="fw_400 fs_4xl ff_Use clr_black lh_56">
              <span className="clr_blue">Agile WordPress</span> Development
              Project management
            </p>
            <p className="fw_400 fs_sm ff_Gilroy clr_black max_w_570">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <button className="fw_600 fs_sm ff_Gilroy clr_white bg_blue Explore_btn mt-3 all_btn effect">
              Explore
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agile;
