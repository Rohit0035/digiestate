"use client";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import CityPopup from "../CityPopup";

// Swiper styles (important)
import "swiper/css";
import "swiper/css/navigation";

const Hotspots = () => {
    const swiperRef = useRef(null);

    // city popup
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    const hotspots = [
        { id: 1, name: "Bailey Road", projects: 142 },
        { id: 2, name: "Saguna More", projects: 118 },
        { id: 3, name: "Danapur", projects: 164 },
        { id: 4, name: "Patliputra Colony", projects: 96 },
        { id: 5, name: "Boring Road", projects: 88 },
        { id: 6, name: "Kankarbagh", projects: 121 },
        { id: 7, name: "Rajeev Nagar", projects: 74 },
        { id: 8, name: "Bihta", projects: 109 },
        { id: 9, name: "Ashiana Nagar", projects: 83 },
    ];

    return (
        <>
            <section className="py-3">
                <Container>
                    {/* Section Header */}
                    <Row className="align-items-center mb-4">
                        <Col>
                            <h4 className="fw-bold mb-0">
                                Hotspots in{" "}
                                <Link
                                    href="javascript:void(0);"
                                    className="text-st ms-1 text-decoration-none"
                                    // onClick={toggleModal}
                                >
                                    Patna <FaAngleDown />
                                </Link>
                            </h4>
                            <div
                                className="mt-1"
                                style={{
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "#6e2e36",
                                }}
                            />
                        </Col>
                    </Row>

                    {/* Swiper Slider with Default Navigation */}
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={4}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                            1200: { slidesPerView: 5 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {hotspots.map((spot) => (
                            <SwiperSlide key={spot.id}>
                                <Card
                                    data-aos="fade-up"
                                    className="border-0 shadow-sm rounded-4 p-2 h-100 bg-white"
                                    style={{
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 6px 15px rgba(0,0,0,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow =
                                            "0 2px 10px rgba(0,0,0,0.05)";
                                    }}
                                >
                                    <CardBody className="text-start">
                                        <h6 className="fw-bold mb-1 st-txt-o">
                                            {spot.name}
                                        </h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <small className="text-muted">
                                                {spot.projects} Projects
                                            </small>
                                            <FaArrowRight size={12} className="text-st" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>

            <CityPopup isOpen={modalOpen} toggle={toggleModal} />
        </>
    );
};

export default Hotspots;
