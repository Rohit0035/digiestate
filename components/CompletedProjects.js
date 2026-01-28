"use client";
import React, { useRef } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import proimg from "../assets/images/pro-1.jpg";

const CompletedProjects = () => {
  const swiperRef = useRef(null);

  // Completed Projects Data (Patna)
  const projects = [
    {
      id: 1,
      img: proimg,
      name: "Radha Krishna Apartment",
      price: "₹42 Lakhs Onwards",
      size: "3 BHK",
      location: "Anisabad, Patna",
      status: "Completed Project",
      tag: "12",
    },
    {
      id: 2,
      img: proimg,
      name: "Baldev Bhawan",
      price: "₹38 Lakhs Onwards",
      size: "2 & 3 BHK",
      location: "Bailey Road, Patna",
      status: "Delivered",
      tag: "10",
    },
    {
      id: 3,
      img: proimg,
      name: "Anju Sumitra Tower",
      price: "₹45 Lakhs Onwards",
      size: "3 BHK",
      location: "Boring Road, Patna",
      status: "Completed & Occupied",
      tag: "14",
    },
    {
      id: 4,
      img: proimg,
      name: "Abhinav Enclave",
      price: "₹40 Lakhs Onwards",
      size: "2 & 3 BHK",
      location: "Kankarbagh, Patna",
      status: "Project Delivered",
      tag: "9",
    },
    {
      id: 5,
      img: proimg,
      name: "Shiv Residency",
      price: "₹35 Lakhs Onwards",
      size: "2 BHK",
      location: "Danapur, Patna",
      status: "Completed",
      tag: "8",
    },
  ];

  return (
    <Container className="my-5 position-relative">
      {/* Section Header */}
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="fw-bold">
            Completed Projects
            <span
              style={{
                display: "block",
                width: "60px",
                height: "3px",
                background: "#6e2e36",
                marginTop: "5px",
              }}
            ></span>
          </h4>
        </Col>
        <Col className="text-end">
          <a
            href="#"
            className="text-st fw-semibold text-decoration-none"
          >
            View All Projects →
          </a>
        </Col>
      </Row>

      {/* Custom Navigation */}
      <div
        className="custom-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaArrowLeft />
      </div>
      <div
        className="custom-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaArrowRight />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={proj.id}>
            <div data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card className="border shadow-sm h-100">
                <div className="position-relative">
                  <Image
                    src={proj.img}
                    alt={proj.name}
                    className="img-fluid rounded-top"
                  />

                  {/* Image Count */}
                  <div
                    className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small d-flex align-items-center gap-1"
                    style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
                  >
                    <FaRegImage size={13} /> {proj.tag}
                  </div>
                </div>

                <CardBody>
                  <h6 className="fw-semibold mb-1 st-txt-o">
                    {proj.name}
                  </h6>

                  <h6 className="fw-bold mb-1">
                    {proj.price}
                    <span className="fw-normal text-secondary ms-2">
                      | {proj.size}
                    </span>
                  </h6>

                  <p className="text-muted mb-1 small">{proj.location}</p>
                  <p className="text-muted mb-2 small">{proj.status}</p>

                  <div className="text-center mt-2">
                    <Button
                      href="/project-details"
                      color="danger"
                      size="sm"
                      className="rounded-pill w-100"
                    >
                      View Project
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CompletedProjects;
