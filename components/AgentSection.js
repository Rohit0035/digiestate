"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";
import { FaArrowLeft, FaArrowRight, } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import agentpic from "../assets/images/agent-pic.png"
import complogo from "../assets/images/cpm-logo.png"
import Image from "next/image";

const agents = [
    {
        id: 1,
        name: "Rajendra",
        company: "RMS Realtors",
        since: "2008",
        buyersServed: "1500+",
        forSale: 43,
        forRent: 14,
        saleRange: "₹1.30 Cr - 2 Cr",
        rentRange: "₹36,000 - 25 Lacs",
        area: "Doddakallasandra, Kanakapura Road",
        img: agentpic,
    },
    {
        id: 2,
        name: "Young Star Group",
        company: "Young Star Group",
        since: "2010",
        buyersServed: "1500+",
        forSale: 17,
        forRent: 37,
        saleRange: "₹80 L - 1.5 Cr",
        rentRange: "₹20,000 - 60,000",
        area: "BTM, Jayanagar, JP Nagar",
        img: agentpic,

    },
    {
        id: 3,
        name: "Salman",
        company: "B S Associates",
        since: "2010",
        buyersServed: "8000+",
        forSale: 25,
        forRent: 26,
        saleRange: "₹60 L - 1.2 Cr",
        rentRange: "₹18,000 - 40,000",
        area: "Electronic City, HSR Layout",
        img: agentpic,

    },
    {
        id: 4,
        name: "Suresh Kumar",
        company: "Dream Homes",
        since: "2012",
        buyersServed: "2000+",
        forSale: 30,
        forRent: 15,
        saleRange: "₹90 L - 2.5 Cr",
        rentRange: "₹22,000 - 70,000",
        area: "Whitefield, Sarjapur, Bellandur",
        img: agentpic,

    },
    {
        id: 5,
        name: "Amit Verma",
        company: "City Builders",
        since: "2015",
        buyersServed: "1000+",
        forSale: 19,
        forRent: 21,
        saleRange: "₹75 L - 1.8 Cr",
        rentRange: "₹20,000 - 55,000",
        area: "Yelahanka, Hebbal, RT Nagar",
        img: agentpic,

    },
];

const AgentSection = () => {
    const swiperRef = useRef(null);

    return (
        <section className="py-5 bg-white ">
            <div className="container position-relative">
                <Row className="align-items-center mb-3">
                    <Col>
                        <h4 className="fw-bold">
                            MB Preferred Agents in Bangalore
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
                        <a href="/agents" className="text-st fw-semibold text-decoration-none">
                            See all Agents →
                        </a>
                    </Col>
                </Row>
                {/* Swiper Slider */}
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
                    {agents.map((agent) => (
                        <SwiperSlide key={agent.id}>
                            <div data-aos="zoom-in" className="agent-card border mb-3 shadow  position-relative overflow-hidden rounded-3">
                                <div className="d-flex align-items-center bg-light p-3 border-bottom">
                                    <Image
                                        src={agent.img}
                                        alt={agent.name}
                                        width={60}
                                        height={60}
                                        className="rounded-circle me-3"
                                    />
                                    <div>
                                        <span className="badge bg-warning text-dark small mb-1">
                                            MB Preferred
                                        </span>
                                        <h6 className="fw-semibold mb-0 st-txt-o">{agent.name}</h6>
                                    </div>
                                </div>

                                <div className="p-3 small">
                                    <div className="mb-4">
                                        <div className="d-flex">
                                            <Image
                                                src={complogo}
                                                className="me-2"
                                                alt="company-logo"
                                                width={30}
                                                height={30} />
                                            <div className="">
                                                <h6 className="fw-semibold mb-2 st-txt-o">{agent.company}</h6>
                                                <div className="d-flex  justify-content-between mb-2">
                                                    <small className="me-5">Since {agent.since}</small>
                                                    <small className=" ms-auto">
                                                        Buyers {agent.buyersServed}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <h6 className="fw-semibold text-dark mb-0">{agent.forSale}</h6>
                                            <small className="text-muted">For Sale</small>
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold text-dark mb-0">{agent.forRent}</h6>
                                            <small className="text-muted">For Rent</small>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="agent-overlay text-dark p-3">
                                    <p className="small mb-2 text-dark">
                                        <strong>Operates in:</strong> {agent.area}
                                    </p>
                                    <p className="small mb-2 text-dark">
                                        <strong>Sale Range:</strong> {agent.saleRange}
                                    </p>
                                    <p className="small mb-3 text-dark">
                                        <strong>Rent Range:</strong> {agent.rentRange}
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/agents/${agent.id}`} className="text-st text-decoration-none small">
                                            View Details
                                        </Link>
                                        <Button href="/propertydetail" color="danger" size="sm" className="rounded-pill px-3">
                                            View Properties
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Styles */}

        </section>
    );
};

export default AgentSection;
