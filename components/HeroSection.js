'use client';
import { Container, Row, Col, Button } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "../assets/styles/heroslider.css";

import Slide1 from "../assets/images/dg/slider-1.jpg"
import Slide2 from "../assets/images/dg/slider-2.jpg"
import Slide3 from "../assets/images/dg/slider-3.jpg"

const slides = [
  {
    title: 'Building Trust in Real Estate',
    subtitle: 'Residential & Commercial Property Experts',
    desc: 'We provide transparent, reliable, and result-driven real estate solutions to help you buy, sell, and invest with confidence.',
    btn: 'Explore Properties',
    image: Slide1,
  },
  {
    title: 'Smart Property Solutions',
    subtitle: 'From Consultation to Possession',
    desc: 'Our experienced team guides you through every step of the property journey with clarity, professionalism, and care.',
    btn: 'Our Services',
    image: Slide2,
  },
  {
    title: 'Your Trusted Real Estate Partner',
    subtitle: 'Quality • Value • Long-Term Growth',
    desc: 'Whether residential or commercial, we deliver properties that meet your goals and build lasting value.',
    btn: 'Book Site Visit',
    image: Slide3,
  },
];

const HeroSection = () => {
  return (
    <section className="hero-slider position-relative py-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="heroSwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide d-flex align-items-center"
              style={{
                backgroundImage: `url(${item.image.src})`,
              }}
            >
              <div className="overlay"></div>

              <Container>
                <Row>
                  <Col lg="6" md="8" className="text-white">
                    <span className="hero-subtitle d-block mb-2">
                      {item.subtitle}
                    </span>
                    <h1 className="hero-title mb-3">
                      {item.title}
                    </h1>
                    <p className="hero-desc mb-4">
                      {item.desc}
                    </p>
                    <Button className="btn btn-danger rounded-pill">
                      {item.btn}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
