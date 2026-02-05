"use client";

import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Images
import proimg1 from "../../assets/images/dg/pros-1.jpg";
import proimg2 from "../../assets/images/dg/pro-2.jpg";
import proimg3 from "../../assets/images/dg/pro-3.jpg";
import proimg4 from "../../assets/images/dg/pro-4.jpg";

const projects = [
  {
    id: 1,
    img: proimg4,
    name: "Radha Krishna Apartment",
    price: "₹42 Lakhs Onwards",
    size: "3 BHK • 1345 Sqft",
    location: "Bailey Road, Patna",
    status: "Completed Project",
    tag: "RERA Approved",
  },
  {
    id: 2,
    img: proimg3,
    name: "Baldev Bhawan",
    price: "₹38 Lakhs Onwards",
    size: "2 & 3 BHK",
    location: "Bailey Road, Patna",
    status: "Delivered",
    tag: "Premium",
  },
  {
    id: 3,
    img: proimg2,
    name: "Vanasthali Home LLP",
    price: "₹45 Lakhs Onwards",
    size: "3 BHK",
    location: "Boring Road, Patna",
    status: "Completed & Occupied",
    tag: "Luxury",
  },
  {
    id: 4,
    img: proimg1,
    name: "Abhinav Enclave",
    price: "₹40 Lakhs Onwards",
    size: "3 BHK • 1606 Sqft",
    location: "Kankarbagh, Patna",
    status: "Project Delivered",
    tag: "RERA",
  },
];

const NewLaunchShowcase = () => {
  return (
    <section className="pt-0" data-aos="fade-up">
      <Container className="p-4 bg-white shadow-sm rounded">
        <Row className="align-items-center">
          
          {/* LEFT CONTENT */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded p-3 mb-3">
              <FaBuilding className="text-warning fs-2" />
            </div>
            <h4 className="fw-bold mb-1">
              30 Most Popular <span className="text-dark">New</span>
            </h4>
            <h5 className="fw-semibold text-dark">
              Projects <small className="text-secondary">in Patna</small>
            </h5>
          </Col>

          {/* RIGHT SLIDER */}
          <Col md={8}>
            <div className="text-center mb-4">
              <div className="d-inline-block border-top border-warning border-3 mx-3" style={{ width: "80px" }} />
              <span className="fw-semibold text-secondary text-uppercase small">
                New Launch Showcase
              </span>
              <div className="d-inline-block border-top border-warning border-3 mx-3" style={{ width: "80px" }} />
            </div>

            <Swiper
              modules={[EffectCoverflow, Navigation, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
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
                    
                    {/* IMAGE */}
                    <div className="position-relative">
                      <Image
                        src={p.img}
                        alt={p.name}
                        width={600}
                        height={350}
                        className="w-100 img-fluid"
                        style={{
                          objectFit: "cover",
                          filter: "brightness(60%)",
                        }}
                      />

                      {/* OVERLAY CONTENT */}
                      <div className="text-center position-absolute bottom-0 start-0 w-100 text-white p-4">
                        <span className="badge bg-warning text-dark mb-2">
                          {p.tag}
                        </span>

                        <h5 className="fw-bold">{p.name}</h5>

                        <p className="mb-1 text-light small">
                          {p.size} • {p.location}
                        </p>

                        <h6 className="fw-bold">{p.price}</h6>

                        <p className="small text-light mb-3">{p.status}</p>

                        <Button color="danger" className="rounded-pill px-4">
                          Show Interest
                        </Button>
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
