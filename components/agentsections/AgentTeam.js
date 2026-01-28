"use client";
import React, { useRef, useEffect } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import agentimg from "../../assets/images/agent-pic.png"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamData = [
    {

        img: agentimg,
    },
    {

        img: agentimg,
    },
    {

        img: agentimg,
    },
    {

        img: agentimg,
    },
    {

        img: agentimg,
    },
];

const AgentTeam = () => {

    const swiperRef = useRef(null);

    return (
        <div className="my-5">
            <Row className="align-items-center mb-3">
                <Col>
                    <h4 className="fw-bold">
                        Meet the Team
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

            <Card className="border-0" data-aos="zoom-in-up">
                <CardBody>
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
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={5}
                        slidesPerView={4}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 4 },
                        }}
                    >
                        {teamData.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center p-3">
                                    <Image
                                        src={member.img}
                                        alt='smartmind'
                                        className="rounded border p-2 mb-3"
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </div>
    );
};

export default AgentTeam;
