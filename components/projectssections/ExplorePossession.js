"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Badge,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import proimg from "../../assets/images/pro-1.jpg";
import Link from "next/link";

const filters = ["1 Year", "2 Years", "3 Years", "3+ Years"];

const projects = [
    {
        id: 1,
        name: "Serenity Gardens by XYZ",
        price: "₹1.39 Cr - ₹2.37 Cr",
        location: "Begur Koppa Road",
        possession: "DEC 2025",
        img: proimg,
    },
    {
        id: 2,
        name: "Krishna Greens Midtown",
        price: "₹13.2 Lac - ₹1.31 Cr",
        location: "Rajanukunte",
        possession: "DEC 2025",
        img: proimg,
    },
    {
        id: 3,
        name: "DSR Elixir",
        price: "₹2.41 Cr - ₹5.41 Cr",
        location: "Whitefield",
        possession: "DEC 2025",
        img: proimg,
    },
    {
        id: 4,
        name: "Divyasree 77 Life",
        price: "₹5.40 Cr - ₹10.36 Cr",
        location: "HAL Old Airport Road",
        possession: "DEC 2025",
        img: proimg,
    },
];

const ExplorePossession = () => {
    const [activeFilter, setActiveFilter] = useState("1 Year");

    return (
        <section className="bg-light" data-aos="fade-up">
            <Container>
                <Row className="align-items-center mb-3">
                    <Col md="6">
                        <h4 className="fw-bold text-dark mb-0">
                            Explore Projects by <span className="text-st">Possession</span>
                        </h4>
                        <div className="border-bottom border-danger mt-1" style={{ width: "50px", height: "2px" }}></div>
                    </Col>
                    <Col md="6" className="text-md-end mt-3 mt-md-0">
                        <a href="#" className="text-st fw-semibold small text-decoration-none">
                            View All Projects →
                        </a>
                    </Col>
                </Row>

                {/* Filter Buttons */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                    {filters.map((f) => (
                        <Button
                            key={f}
                            color={activeFilter === f ? "danger" : "light"}
                            onClick={() => setActiveFilter(f)}
                            className={`rounded-pill py-1 px-3 border ${activeFilter === f
                                    ? "text-white border-danger"
                                    : "text-dark border-secondary-subtle"
                                }`}
                            style={{ fontSize: "0.85rem" }}
                        >
                            {f}
                        </Button>
                    ))}
                </div>

                {/* Swiper Cards */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3.3}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {projects.map((p) => (
                        <SwiperSlide key={p.id}>
                            <Link href="#">
                                <Card className="border-0 shadow-sm  overflow-hidden h-100">
                                    <div className="d-flex flex-column flex-md-row h-100">
                                        <div className="col-12 col-md-5 p-0">
                                            <Image
                                                src={p.img.src}
                                                alt={p.name}
                                                width={300}
                                                height={200}
                                                className=" h-100 w-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <CardBody className="col-12 col-md-7 p-3 d-flex flex-column justify-content-between">
                                            <div>
                                                <h6 className="fw-bold text-dark mb-1 text-truncate st-txt--o">
                                                    {p.name}
                                                </h6>
                                                <p className="text-secondary small mb-1 st-txt-o">{p.price}</p>
                                                <p className="text-secondary small mb-2 st-txt-o">{p.location}</p>
                                            </div>
                                            <div>
                                                <Badge
                                                    pill
                                                    color="light"
                                                    className="border border-danger s text-st st-txt-o small fw-semibold px-2 py-1"
                                                >
                                                    POSSESSION : {p.possession} →
                                                </Badge>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default ExplorePossession;
