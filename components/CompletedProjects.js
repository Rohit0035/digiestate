"use client";
import React, { useRef } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import proimg1 from "../assets/images/dg/pros-1.jpg";
import proimg2 from "../assets/images/dg/pro-2.jpg";
import proimg3 from "../assets/images/dg/pro-3.jpg";
import proimg4 from "../assets/images/dg/pro-4.jpg";
import ProjectCardHomePage from "./ProjectCardHomePage";

const CompletedProjects = ({ completedProjects=[]}) => {
  const swiperRef = useRef(null);

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
        {completedProjects.map((proj, index) => (
          <SwiperSlide key={proj.id}>
            <div data-aos="zoom-in" data-aos-delay={index * 100}>
             <ProjectCardHomePage project={proj} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CompletedProjects;
