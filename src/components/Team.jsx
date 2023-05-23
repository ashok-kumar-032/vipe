import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teem from "../assets/img/teem.webp";

const Team = () => {
  return (
    <div className="pb-lg-5 pb-4 mb-lg-5">
      <section className="bg_light_w ">
        <Container className="">
          <Row className="pb-5 pb-xl-0">
            <Col
              lg={6}
              xs={12}
              className="mt-3 mt-sm-5"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p className="fw_400 fs_4xl ff_Use clr_black">
                Team Full of Stars
              </p>
              <p className="fw_400 fs_sm ff_Gilroy clr_black max_w_477">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button className="fw_600 fs_sm ff_Gilroy clr_white bg_blue Explore_btn mt-3 effect all_btn">
                Explore
              </button>
            </Col>
            <Col
              lg={6}
              xs={12}
              className=" d-flex justify-content-center align-items-end"
            >
              <img className="width_img team_img" src={teem} alt="teem" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
