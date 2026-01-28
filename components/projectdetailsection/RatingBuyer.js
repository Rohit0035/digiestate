"use client";
import React, { useRef } from "react";
import { Card, CardBody, Row, Col, Badge, Progress } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const ratings = {
  "Water Supply": 5,
  "Main Electricity": 4,
  "Power Back Up": 3,
  "Sewage Handling": 4
};
const RatingBuyer = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-warning me-1" : "text-muted me-1"}
        />
      );
    }
    return stars;
  };
  return (
    <>
      <Card className="border-0 bg-white">
        <CardBody>
          <Row>
            {/* LEFT SIDE - Overall Rating */}
            <Col lg="4">
              <Card className="border-0 p-2 small">
                <div className="d-flex">
                  <div>
                    <h3 className="text-center mb-0">3.4</h3>
                    <div className="text-center">
                      <Badge color="warning">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      </Badge>
                    </div>
                    <p className="text-center mb-0">Average Rating</p>
                  </div>

                  <Row className="ms-3">
                    <Col lg="12">
                      <h6 className="small fw-bold mb-2">Overall Rating</h6>
                    </Col>
                    <Col lg="12">
                      {[5, 4, 3, 2, 1].map((num, i) => (
                        <span key={i} className="d-flex align-items-center mb-1">
                          <Progress
                            value={Math.random() * 100}
                            color="warning"
                            className="st-progress flex-grow-1 me-2"
                            style={{ height: "6px" }}
                          />
                          <span>{num}</span>
                        </span>
                      ))}
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            {/* RIGHT SIDE - Swiper Slider */}
            <Col lg="8">
              <Card className="border-0 ">
                <CardBody className="p-2">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 2 },
                      1200: { slidesPerView: 2 },
                    }}
                  >
                    <SwiperSlide>
                      <div className="p-3 border rounded bg-light" data-aos="zoom-in">
                        <h6 className="mb-2 small">
                          Project Infrastructure
                          <span className="float-end">3.8/5</span>
                        </h6>
                        <ul className="small unstyled" style={{ listStyle: 'none', padding: '0px' }}>
                          {Object.keys(ratings).map((item) => (
                            <li key={item}>
                              {item}
                              <span style={{ float: "right" }}>
                                {renderStars(ratings[item])}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-3 border rounded bg-light" data-aos="zoom-in">
                        <h6 className="mb-2 small">
                          Project Infrastructure
                          <span className="float-end">3.8/5</span>
                        </h6>
                        <ul className="small unstyled" style={{ listStyle: 'none', padding: '0px' }}>
                          {Object.keys(ratings).map((item) => (
                            <li key={item}>
                              {item}
                              <span style={{ float: "right" }}>
                                {renderStars(ratings[item])}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-3 border rounded bg-light" data-aos="zoom-in">
                        <h6 className="mb-2 small">
                          Project Infrastructure
                          <span className="float-end">3.8/5</span>
                        </h6>
                        <ul className="small unstyled" style={{ listStyle: 'none', padding: '0px' }}>
                          {Object.keys(ratings).map((item) => (
                            <li key={item}>
                              {item}
                              <span style={{ float: "right" }}>
                                {renderStars(ratings[item])}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Card className="mt-2 border-0">
              <CardBody>
                <h4 className="fw-blod small mb-2">Buyer Reviews</h4>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                  }}
                >
                  <SwiperSlide>
                    <Card>
                      <CardBody>
                        <div className="d-flex">
                          <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                            E
                          </div>
                          <div className="">
                            <h6 className="mb-0">Guest User
                            </h6>
                            <small>Owner</small>
                          </div>
                          <div className="small ms-auto">
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <p className="small">16/03/2021</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                          <p className="small">
                            East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <CardBody>
                        <div className="d-flex">
                          <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                            E
                          </div>
                          <div className="">
                            <h6 className="mb-0">Guest User
                            </h6>
                            <small>Owner</small>
                          </div>
                          <div className="small ms-auto">
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <p className="small">16/03/2021</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                          <p className="small">
                            East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <CardBody>
                        <div className="d-flex">
                          <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                            E
                          </div>
                          <div className="">
                            <h6 className="mb-0">Guest User
                            </h6>
                            <small>Owner</small>
                          </div>
                          <div className="small ms-auto">
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <p className="small">16/03/2021</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                          <p className="small">
                            East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </CardBody>
            </Card>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default RatingBuyer;
