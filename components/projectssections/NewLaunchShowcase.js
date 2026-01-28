"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css/effect-coverflow";

import proimg from "../../assets/images/pro-1.jpg";

const projects = [
  {
    id: 1,
    title: "Ramky Lumina",
    subtitle: "Hosa Road, off Hosur Road, Bangalore",
    price: "₹72.2 Lac - ₹1.87 Cr",
    info: "1,2,3 BHK | Possession in Jun 2026",
    badge: "NEWLY LAUNCHED",
    img: proimg,
  },
  {
    id: 2,
    title: "Skyline Residency",
    subtitle: "Electronic City, Bangalore",
    price: "₹55.5 Lac - ₹1.20 Cr",
    info: "2,3 BHK | Ready to move",
    badge: "HOT",
    img: proimg,
  },
  {
    id: 3,
    title: "Greenview Heights",
    subtitle: "Whitefield, Bangalore",
    price: "₹65.0 Lac - ₹2.10 Cr",
    info: "2,3,4 BHK | Possession in Mar 2027",
    badge: "NEW",
    img: proimg,
  },
  {
    id: 4,
    title: "Urban Nest",
    subtitle: "Koramangala, Bangalore",
    price: "₹80.0 Lac - ₹3.00 Cr",
    info: "1,2,3 BHK | Ready to move",
    badge: "FEATURED",
    img: proimg,
  },
];

const NewLaunchShowcase = () => {
  return (
    <section className="pt-0 bg-light" data-aos="fade-up">
      <Container fluid className="p-4 bg-white shadow-sm rounded">
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded p-3 mb-3">
              <FaBuilding className="text-warning fs-2" />
            </div>
            <h4 className="fw-bold text-st mb-1">
              30 Most Popular <span className="text-dark">New</span>
            </h4>
            <h5 className="fw-semibold text-dark">
              Projects <small className="text-secondary">in Bangalore</small>
            </h5>
          </Col>

          {/* Right Section */}
          <Col md={8}>
            <div className="text-center mb-4">
              <div
                className="d-inline-block border-top border-warning border-3 mx-3"
                style={{ width: "80px" }}
              ></div>
              <span className="fw-semibold text-secondary text-uppercase small">
                NEW LAUNCH SHOWCASE
              </span>
              <div
                className="d-inline-block border-top border-warning border-3 mx-3"
                style={{ width: "80px" }}
              ></div>
            </div>

            {/* Swiper Section */}
            <Swiper
              modules={[EffectCoverflow, Navigation, Pagination]}
              effect={"coverflow"}
              grabCursor
              centeredSlides
              slidesPerView={"auto"}
              navigation
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: -50,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              className="pb-5"
            >
              {projects.map((p) => (
                <SwiperSlide key={p.id} style={{ width: "600px" }}>
                  <Card className="border-0 shadow-lg rounded overflow-hidden position-relative">
                    <div className="position-relative">
                      {/* Background Image */}
                      <Image
                        src={p.img.src}
                        alt={p.title}
                        width={600}
                        height={350}
                        className="w-100 rounded img-fluid"
                        style={{
                          objectFit: "cover",
                          filter: "brightness(60%)",
                        }}
                      />

                      {/* Text Overlay */}
                      <div className="position-absolute bottom-0 start-0 w-100 text-white p-4">
                        <span className="badge bg-warning text-dark mb-2">
                          {p.badge}
                        </span>
                        <h5 className="fw-bold">{p.title}</h5>
                        <p className="mb-1 text-light small">{p.subtitle}</p>
                        <h6 className="fw-bold text-white">{p.price}</h6>
                        <p className="small text-light mb-3">{p.info}</p>
                        <div className="d-flex gap-2">
                          <Button color="danger" className="rounded-pill px-4">
                            Show Interest
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewLaunchShowcase;
