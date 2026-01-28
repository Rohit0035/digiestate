"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
    Card,
    Button,
    Row,
    Col,
    Badge,
    Modal,
    ModalBody,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlayCircle, FaDownload, FaShare } from "react-icons/fa";
import "swiper/css";

import proimg from "../../assets/images/pro-1.jpg";
import thumb1 from "../../assets/images/pro-1.jpg";
import thumb2 from "../../assets/images/pro-1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import EnquiryModal from "../EnquiryModal";

const ProjectCard = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const swiperRef = useRef(null);


    const openVideo = (url) => {
        setVideoUrl(url);
        setVideoOpen(true);
    };

    const closeVideo = () => {
        setVideoOpen(false);
        setVideoUrl("");
    };

    const videos = [
        {
            id: 1,
            title: "Nandi Meraki",
            views: "10.7k Views",
            thumb: thumb1,
            url: "https://www.youtube.com/embed/XnT6vaLwGPw",
        },
        {
            id: 2,
            title: "One Yard Venture",
            views: "113 Views",
            thumb: thumb2,
            url: "https://www.youtube.com/embed/XnT6vaLwGPw",
        },
        {
            id: 3,
            title: "Skyline Bliss",
            views: "220 Views",
            thumb: thumb2,
            url: "https://www.youtube.com/embed/XnT6vaLwGPw",
        },
        {
            id: 4,
            title: "Skyline Bliss",
            views: "220 Views",
            thumb: thumb2,
            url: "https://www.youtube.com/embed/XnT6vaLwGPw",
        },
    ];

    return (
        <>
            <Card
                className="border-0 shadow-sm p-2 mb-3 rounded-4"
                style={{ background: "#fff" }}
                data-aos="zoom-in"
            >
                <Row className="align-items-center">
                    {/* Left: Project Image */}
                    <Col lg="3" md="12" className="mt-0  mb-2">
                        <Link href="/projectdetail" className="text-dark mt-0">
                            <div className="position-relative rounded-3 overflow-hidden">
                                <Image
                                    src={proimg}
                                    alt="Project"
                                    className="w-100"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{ background: "rgba(0,0,0,0.35)" }}
                                ></div>

                                <div
                                    className="position-absolute top-0 end-0 m-2 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                    style={{ width: "28px", height: "28px", cursor: "pointer" }}
                                >
                                    <FaShare />
                                </div>

                                <div className="position-absolute bottom-0 start-0 text-white p-2">
                                    <h6 className="fw-bold mb-0">Nandi Meraki</h6>
                                    <small>Begur Road, Bangalore</small>
                                    <div className="fw-semibold small mt-1">
                                        ₹79.8 Lac - ₹2.05 Cr
                                    </div>
                                    <div className="small">1,2,3 BHK | Ready To Move</div>
                                </div>
                            </div>
                        </Link>
                    </Col>

                    {/* Middle: Info, Videos, RERA, Amenities */}
                    <Col lg="6" md="12">
                        <div className="h-100">
                            <h6 className="fw-bold mb-2">Expert Reviews & Advice</h6>

                            <Swiper
                                // modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={4}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {videos.map((video, i) => (
                                    <SwiperSlide key={i}>
                                        <div
                                            className="position-relative rounded-3 overflow-hidden"
                                            style={{
                                                width: "100%",
                                                height: "85px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => openVideo(video.url)}
                                        >
                                            <Image
                                                src={video.thumb}
                                                alt={video.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />
                                            <div className="position-absolute top-50 start-50 translate-middle text-white">
                                                <FaPlayCircle size={32} className="text-white" />
                                            </div>
                                            <div
                                                className="position-absolute bottom-0 start-0 end-0 px-2 py-1"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                                }}
                                            >
                                                <small className="text-white">{video.views}</small>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="d-flex flex-wrap gap-3 mt-3 mb-3">
                                <div
                                    className="p-2 rounded-3"
                                    style={{ background: "#fff6e0", minWidth: "220px" }}
                                >
                                    <Badge color="warning" className="text-dark mb-1">
                                        RERA Reports
                                    </Badge>
                                    <div className="small text-dark mb-1">
                                        Bhk wise configuration
                                    </div>
                                    <a
                                        href="#"
                                        className="text-danger text-decoration-none fw-semibold small"
                                    >
                                        View Bhk Layouts →
                                    </a>
                                </div>

                                <div
                                    className="p-2 rounded-3"
                                    style={{ background: "#e8fafa", minWidth: "220px" }}
                                >
                                    <Badge color="info" className="text-dark mb-1">
                                        Amenities
                                    </Badge>
                                    <div className="small text-dark mb-1">
                                        All 36 Amenities in the Project
                                    </div>
                                    <a
                                        href="#"
                                        className="text-danger text-decoration-none fw-semibold small"
                                    >
                                        View Now →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right: Buttons */}
                    <Col lg="3" md="12">
                        <div className="d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <Button
                                color="danger"
                                onClick={toggle}
                                className="rounded-pill fw-semibold px-4 py-2 w-100"
                            >
                                Contact Builder
                            </Button>
                            <Button
                                outline
                                color="danger"
                                className="rounded-pill fw-semibold px-4 py-2 w-100 d-flex align-items-center justify-content-center gap-2"
                            >
                                <FaDownload /> Download Brochure
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card>

            {/* ✅ Reactstrap Modal for YouTube Video */}
            <Modal
                isOpen={videoOpen}
                toggle={closeVideo}
                size="lg"
                centered
            >
                <ModalBody className="p-0 position-relative">
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-2"
                        aria-label="Close"
                        onClick={closeVideo}
                    ></button>
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "10px",
                        }}
                    >
                        <iframe
                            src={`${videoUrl}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        ></iframe>
                    </div>
                </ModalBody>
            </Modal>

            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};

export default ProjectCard;
