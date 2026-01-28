"use client";
import React, { useState, useRef } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Collapse,
    Button,
} from "reactstrap";
import {
    FaStar,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import proimg from "../../assets/images/pro-1.jpg";
import LocalityRatings from "./LocalityRatings";
import {
    BsBuildings,
    BsGeoAlt,
    BsHospital,
    BsCheckCircleFill,
} from "react-icons/bs";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Import Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProLocalitySection = () => {
    const [showMore, setShowMore] = useState(false);
    const [openLightbox, setOpenLightbox] = useState(false);
    const swiperRef = useRef(null);

    return (
        <Card className="border-0 shadow-sm" data-aos="fade-up" id="aboutlocality">
            <CardBody>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">About Hebbal</h5>
                    <a href="#" className="text-danger fw-semibold small">
                        Explore Locality
                    </a>
                </div>

                {/* Top Section */}
                <Row className="gy-3">
                    <Col md="4" sm="12">
                        <div className="position-relative rounded overflow-hidden">
                            <Image
                                src={proimg}
                                alt="Hebbal locality"
                                className="img-fluid rounded"
                            />
                            <div
                                className="position-absolute top-50 start-50 translate-middle bg-white text-dark px-3 py-1 rounded shadow-sm cursor-pointer"
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    console.log("Play button clicked!");  // Debugging line
                                    setOpenLightbox(true);  // Open lightbox on click
                                }}
                            >
                                ▶ Play Video
                            </div>
                        </div>
                    </Col>

                    <Col md="8" sm="12">
                        <Row className="align-items-center">
                            <Col xs="12" className="d-flex align-items-center gap-2 mb-2">
                                <h6 className="mb-0">3.9</h6>
                                <FaStar className="text-warning" />
                                <small className="text-muted">118 Reviews</small>
                                <span className="ms-2 fw-semibold">Rank 34</span>
                                <small className="text-muted">out of 4755 localities</small>
                            </Col>
                        </Row>

                        {/* Ratings */}
                        <Row className="gy-2">
                            <LocalityRatings />
                        </Row>
                    </Col>
                </Row>

                {/* Swiper Section */}
                <div className="position-relative mt-3">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {/* Shopping Centers */}
                        <SwiperSlide>
                            <Card className="border rounded-3 p-3 h-100">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="fw-semibold mb-0">Shopping Centers</h6>
                                    <BsBuildings className="text-st fs-5" />
                                </div>
                                <ul className="list-unstyled mb-0 small">
                                    <li className="d-flex align-items-center mb-1">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">Shoppy Mart</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">Esteem Mall</span>
                                    </li>
                                </ul>
                            </Card>
                        </SwiperSlide>

                        {/* Nearby Localities */}
                        <SwiperSlide>
                            <Card className="border rounded-3 p-3 h-100">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="fw-semibold mb-0">Nearby Localities</h6>
                                    <BsGeoAlt className="text-st fs-5" />
                                </div>
                                <ul className="list-unstyled mb-0 small">
                                    <li className="d-flex align-items-center mb-1">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">
                                            KHB Colony Main Road, Bangalore
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">
                                            Ganesha Block Sultanpalya, Bangalore
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </SwiperSlide>

                        {/* Hospital */}
                        <SwiperSlide>
                            <Card className="border rounded-3 p-3 h-100">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="fw-semibold mb-0 ">Hospital</h6>
                                    <BsHospital className="text-st fs-5" />
                                </div>
                                <ul className="list-unstyled mb-0 small">
                                    <li className="d-flex align-items-center mb-1">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">
                                            Columbia Asia Hospital
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <BsCheckCircleFill className="text-success me-2" />
                                        <span className="small text-muted">Hebbal</span>
                                    </li>
                                </ul>
                            </Card>
                        </SwiperSlide>
                    </Swiper>

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
                </div>

                {/* Collapse Section */}
                <div className="mt-2">
                    <Collapse isOpen={showMore}>
                        <p className="text-muted mb-0">
                            Hebbal, a developing locality in North Bengaluru, is placed along
                            the Bellary Road and surrounded by RT Nagar, Nagawara, and
                            Thanisandra. Hebbal hosts several completed and ongoing projects of
                            prominent developers such as Embassy Lake Terraces, Siroya Environ,
                            and Godrej Woodsman Estate. Hebbal Lake is a well-known landmark.
                        </p>
                    </Collapse>
                    <Button
                        color="link"
                        className="text-decoration-none fw-semibold ps-0 mt-2 text-st"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </Button>
                </div>

                {/* Compare Localities */}
                <div className="mt-3">
                    <Button color="danger" size="sm" className="rounded-pill px-3">
                        Compare Localities
                    </Button>
                </div>

                {/* Lightbox for video */}
                <Lightbox
                    open={openLightbox}
                    close={() => setOpenLightbox(false)}
                    slides={[
                        {
                            type: "video",
                            width: 1280,
                            height: 720,
                            sources: [
                                {
                                    src: "https://www.w3schools.com/html/mov_bbb.mp4",  // Use a valid video URL
                                    type: "video/mp4",
                                },
                            ],
                        },
                    ]}
                />
            </CardBody>
        </Card>
    );
};

export default ProLocalitySection;
