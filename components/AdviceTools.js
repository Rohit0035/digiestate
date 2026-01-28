"use client";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaCalculator, FaRupeeSign, FaHome, FaChartLine } from "react-icons/fa";
import AOS from "aos";

const toolsData = [
    {
        icon: <FaCalculator className="tool-icon text-st" size={32} />,
        title: "EMI Calculator",
        desc: "Know how much you'll have to pay every month on your loan",
    },
    {
        icon: <FaRupeeSign className="tool-icon text-st" size={32} />,
        title: "Best Home Loan Offers",
        desc: "Get the best bank offers curated just for your profile",
    },
    {
        icon: <FaHome className="tool-icon text-st" size={32} />,
        title: "Interiors Budget Estimator",
        desc: "Know the cost of getting your full/partial home interiors done",
    },
    {
        icon: <FaChartLine className="tool-icon text-st" size={32} />,
        title: "Rates & Trends",
        desc: "Know all about Property Rates & Trends in your city",
    },
        {
        icon: <FaChartLine className="tool-icon text-st" size={32} />,
        title: "Rates & Trends",
        desc: "Know all about Property Rates & Trends in your city",
    },
];

const AdviceTools = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <Container className="my-5 position-relative">
            {/* Section Header */}
            <Row className="align-items-center mb-4">
                <Col>
                    <h4 className="fw-bold">
                        Advice & Tools
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
            </Row>

            {/* Custom Navigation Buttons */}
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

            {/* Swiper Slider */}
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
                {toolsData.map((tool, index) => (
                    <SwiperSlide key={index}>
                        <div data-aos="fade-up" data-aos-delay={index * 150}>
                            <Card className="advice-card border shadow-sm h-100 text-start">
                                <CardBody>
                                    {tool.icon}
                                    <h6 className="fw-bold mt-3">{tool.title}</h6>
                                    <p className="text-muted small mb-3">{tool.desc}</p>
                                    <a href="#" className="view-now text-st fw-semibold">
                                        View now →
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default AdviceTools;
