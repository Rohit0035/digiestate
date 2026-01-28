"use client";
import React, { useRef } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRupeeSign, FaRulerCombined, FaHome, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const tools = [
    {
        id: 1,
        icon: <FaRupeeSign size={24} className="text-st" />,
        title: "Best Home Loan Offers",
        desc: "Get the best bank offers curated just for your profile",
        link: "#",
    },
    {
        id: 2,
        icon: <FaRulerCombined size={24} className="text-st" />,
        title: "Interiors Budget Estimator",
        desc: "Know the cost of getting your full/partial home interiors done",
        link: "#",
    },
    {
        id: 3,
        icon: <FaHome size={24} className="text-st" />,
        title: "Property Valuation",
        desc: "Know the right value for your Property before you Buy or Sell",
        link: "#",
    },
    {
        id: 4,
        icon: <FaChartLine size={24} className="text-st" />,
        title: "Investment Hotspot",
        desc: "Discover the top localities in your city for investment",
        link: "#",
    },
    {
        id: 5,
        icon: <FaChartLine size={24} className="text-st" />,
        title: "Investment Hotspot",
        desc: "Discover the top localities in your city for investment",
        link: "#",
    },
];

const ProTools = () => {
    const swiperRef = useRef(null);

    return (
        < >
            <Card className="position-relative border-0 my-3" data-aos="fade-up">
                <CardBody>

                
                {/* Section Heading */}
                <Row className="align-items-center mb-4">
                    <Col>
                        <h4 className="fw-bold mb-0">Tools to Help You Decide Better</h4>
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

                {/* Swiper Section */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {tools.map((tool) => (
                        <SwiperSlide key={tool.id}>
                            <div className="border bg-white rounded shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-2">{tool.icon}</div>
                                        <h6 className="fw-semibold mb-0">{tool.title}</h6>
                                    </div>
                                    <p className="text-muted small mb-3">{tool.desc}</p>
                                </div>
                                <div>
                                    <Link
                                        href={tool.link}
                                        className="text-danger fw-semibold text-decoration-none small"
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </CardBody>
            </Card>
        </>
    );
};

export default ProTools;
