"use client";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import CityPopup from "../CityPopup";

const Hotspots = () => {
    const swiperRef = useRef(null);

    // citypopup
        const [modalOpen, setModalOpen] = useState(false);
        const toggleModal = () => setModalOpen(!modalOpen);

    const hotspots = [
        { id: 1, name: "Whitefield", projects: 306 },
        { id: 2, name: "Devanhalli", projects: 178 },
        { id: 3, name: "Thanisandra & Hennur", projects: 139 },
        { id: 4, name: "Sarjapur & HSR", projects: 130 },
        { id: 5, name: "Yelahanka", projects: 113 },
        { id: 6, name: "JP Nagar", projects: 111 },
    ];

    return (
        <>
        <section className="py-3">
            <Container className="position-relative">
                {/* Section Header */}
                <Row className="align-items-center mb-4">
                    <Col>
                        <h4 className="fw-bold mb-0">
                            Hotspots in
                            <span className="text-st">
                                <Link href="javascript:void(0);" className="text-st ms-1" 
                                //    onClick={toggleModal}
                                >
                                    Patna <FaAngleDown/>
                                </Link>
                            </span>
                        </h4>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#6e2e36",
                                marginTop: "5px",
                            }}
                        ></div>
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
                        320: { slidesPerView: 2 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                >
                    {hotspots.map((spot, index) => (
                        <SwiperSlide key={spot.id}>
                            <Card
                                data-aos="fade-up"
                                className="border-0 shadow-sm rounded-4 p-2 h-100 bg-white"
                                style={{
                                    background: "#fff",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
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
                                    <h6 className="fw-bold mb-1 st-txt-o">{spot.name}</h6>
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
