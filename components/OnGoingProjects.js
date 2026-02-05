"use client";
import React, { useRef } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import proimg from "../assets/images/pro-1.jpg";
import proimg1 from "../assets/images/dg/pros-1.jpg";
import proimg2 from "../assets/images/dg/pro-2.jpg";
import proimg3 from "../assets/images/dg/pro-3.jpg";
import proimg4 from "../assets/images/dg/pro-4.jpg";


const OnGoingProjects = () => {
  const swiperRef = useRef(null);

  // Ongoing project data
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

  return (
    <Container className="my-5 position-relative">
      {/* Section Header */}
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="fw-bold">
            Ongoing Projects 
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
          <a href="#" className="text-st fw-semibold text-decoration-none">
            View All Projects →
          </a>
        </Col>
      </Row>

      {/* Custom Navigation */}
      <div className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
        <FaArrowLeft />
      </div>
      <div className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
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
        {projects.map((prop, index) => (
          <SwiperSlide key={prop.id}>
            <div data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card className="border shadow-sm h-100">
                <div className="position-relative">
                  <Image
                    src={prop.img}
                    alt={prop.bhk}
                    className="img-fluid rounded-top"
                  />

                  {/* Image count */}
                  <div
                    className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small d-flex align-items-center gap-1"
                    style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
                  >
                    <FaRegImage size={13} /> {prop.tag}
                  </div>
                </div>

                <CardBody>
                  <h6 className="fw-semibold mb-1 st-txt-o">{prop.bhk}</h6>

                  <h6 className="fw-bold mb-1">
                    {prop.price}
                    <span className="fw-normal text-secondary ms-2">
                      | {prop.size}
                    </span>
                  </h6>

                  <p className="text-muted mb-1 small">{prop.location}</p>
                  <p className="text-muted mb-2 small">{prop.status}</p>

                  <Button
                    href="/propertydetail"
                    color="danger"
                    size="sm"
                    className="rounded-pill w-100"
                  >
                    View Project Details
                  </Button>
                </CardBody>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default OnGoingProjects;



