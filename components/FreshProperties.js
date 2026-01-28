"use client";
import React, { useRef } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import proimg from "../assets/images/pro-1.jpg";

const FreshProperties = () => {
  const swiperRef = useRef(null);

  // Upcoming / Fresh project data
  const properties = [
    {
      id: 1,
      img: proimg,
      bhk: "2 & 3 BHK Apartments",
      price: "₹42 Lakh Onwards",
      size: "1800  sqft",
      location: "Whitefield, Bangalore",
      status: "Upcoming Project",
      tag: "8",
    },
    {
      id: 2,
      img: proimg,
      bhk: "Luxury 3 BHK Flats",
      price: "₹68 Lakh Onwards",
      size: "1600 sqft",
      location: "Sarjapur Road, Bangalore",
      status: "Launching Soon",
      tag: "12",
    },
    {
      id: 3,
      img: proimg,
      bhk: "Premium 2 BHK Homes",
      price: "₹55 Lakh Onwards",
      size: "1200 sqft",
      location: "Yelahanka, Bangalore",
      status: "Pre-Launch",
      tag: "10",
    },
    {
      id: 4,
      img: proimg,
      bhk: "Smart Studio Apartments",
      price: "₹35 Lakh Onwards",
      size: "650 sqft",
      location: "Electronic City, Bangalore",
      status: "Upcoming Project",
      tag: "6",
    },
    {
      id: 5,
      img: proimg,
      bhk: "Premium 3 BHK Residences",
      price: "₹78 Lakh Onwards",
      size: "1750 sqft",
      location: "Hebbal, Bangalore",
      status: "Launching Soon",
      tag: "14",
    },
  ];

  return (
    <Container className="my-5 position-relative">
      {/* Section Header */}
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="fw-bold">
            Upcoming  Projects 
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
          <a href="/" className="text-st fw-semibold text-decoration-none">
            View All Upcoming Projects →
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

      {/* Swiper Carousel */}
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
        {properties.map((prop, index) => (
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

export default FreshProperties;
