import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Tell = () => {
  return (
    <div className="bg_light_black tell py-4">
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-right" data-aos-duration="2000">
            <div>
              <p className="ff_Use fw_400 fs_2xl clr_white">Tell us more....</p>
              <p className="ff_Gilroy fw_400 fs_sm clr_white mx_600 pe-4">
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            className="p-lg-5 mt-3"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="tell_input radius_80 w_490 w-100 d-flex align-items-center ">
              <input
                type="text"
                placeholder="What do you need assistance with?"
                className="bg-transparent border-0 ff_Gilroy fw_400 fs_sm opacity_0_7 w-100 padding_lr_tb"
              />
              <svg
                className="pointer me-4"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" d-flex flex-column flex-sm-row align-items-sm-center justify-content-between">
              <p className="mb-0 ff_Gilroy fw_400 fs_sm clr_white pt-2 pointer">
                <svg
                  width="16"
                  className="me-2"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.71505 16L8.00001 13.7143V14.8571C9.13095 14.8573 10.2365 14.5219 11.1767 13.8934C12.117 13.2649 12.8496 12.3716 13.2819 11.3265C13.7141 10.2814 13.8266 9.13161 13.6051 8.02258C13.3835 6.91355 12.8379 5.89517 12.0373 5.09638L13.648 3.4781C14.3949 4.22041 14.9874 5.10333 15.3912 6.07588C15.795 7.04843 16.0022 8.09133 16.0008 9.14438C16.0008 13.5619 12.4198 17.1429 8.00229 17.1429H8.00077V18.2857L5.71505 16ZM0.000767779 9.14286C0.00610111 4.72686 3.58477 1.14819 8.00001 1.14286H8.00077V0L10.2865 2.28571L8.00077 4.57143V3.42857H7.99925C6.86831 3.42864 5.76281 3.7642 4.82265 4.39279C3.88249 5.02138 3.14994 5.91474 2.7177 6.95982C2.28546 8.0049 2.17296 9.15471 2.39444 10.2638C2.61592 11.3728 3.16142 12.3912 3.96191 13.1901L2.35277 14.8084C1.60627 14.0705 1.01386 13.1916 0.609962 12.2228C0.206062 11.254 -0.00127238 10.2146 5.87461e-06 9.16495V9.1421V9.14362L0.000767779 9.14286Z"
                    fill="white"
                  />
                </svg>
                or send us an inquire?
              </p>
              <p className="mb-0 ff_Gilroy fw_400 fs_sm clr_white pt-2 pointer">
                Learn more about...
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Tell;
