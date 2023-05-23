import React from "react";
import { Container } from "react-bootstrap";

const Have = () => {
  return (
    <section className="Have">
      <Container>
        <div
          className="Have_box px-3 ps-sm-5 py-4"
          data-aos="flip-down"
          data-aos-duration="3000"
        >
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div>
              <p className="fw_400 fs_4xl ff_Use clr_white mb-0">Have you</p>
              <p className="fw_400 fs_lg ff_Gilroy clr_white max_w_600">
                read our study about Speed and Performance in WordPress?
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <button className="fw_600 fs_sm ff_Inter clr_blue Check_btn w-100 text-nowrap effect">
                Check It Out
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Have;
