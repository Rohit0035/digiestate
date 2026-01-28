"use client";

import { Container, Row, Col, Badge } from "reactstrap";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"

const heroBlogs = [
    {
        id: 1,
        title: "Griha Pravesh Muhurat 2025 Dates, Month-wise",
        category: "Homes",
        img: proimg,
        author: "Nupur Saini",
        date: "2025-11-04T17:00:00",
    },
    {
        id: 2,
        title: "Best Interior Trends for 2025",
        category: "Decor",
        img: proimg,
        author: "Rohit Sen",
        date: "2025-11-03T14:00:00",
    },
];

const sideCategories = [
    { id: 1, title: "Homes", img: proimg },
    { id: 2, title: "Decor", img: proimg },
    { id: 3, title: "Celeb Homes", img: proimg },
];

const HomeBlogSection = () => {
    return (
        <Container className="py-5">

            {/* HEADER */}
            <Row className="align-items-center mb-3">
                <Col>
                    <h4 className="fw-bold">
                        Make Your House a <span className="text-st">Home</span>
                    </h4>
                </Col>

                <Col className="text-end">
                    <a href="#" className="text-st fw-semibold small">
                        View All Articles &gt;
                    </a>
                </Col>
            </Row>

            <Row className="">

                {/* LEFT SLIDER */}
                <Col lg="7">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="hero-swiper"
                    >
                        {heroBlogs.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="rounded overflow-hidden" data-aos="zoom-in">
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "320px",
                                        }}
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="p-3"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-end",
                                                background:
                                                    "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))",
                                            }}
                                        >
                                            <Badge color="danger" className="mb-2" style={{width:'fit-content'}}>
                                                {item.category}
                                            </Badge>

                                            <h5 className="text-white fw-bold">{item.title}</h5>

                                            <small className="text-white-50">
                                                {item.date} by {item.author}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>

                {/* RIGHT GRID */}
                <Col lg="5">
                    <Row className="g-2">

                        {/* ITEM 1 */}
                        <Col xs="6" lg="12" data-aos="zoom-in">
                            <div
                                className="rounded overflow-hidden position-relative"
                                style={{ height: "155px" }}
                            >
                                <Image
                                    src={proimg}
                                    alt="Homes"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />

                                <div
                                    className="p-3"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                                    }}
                                >
                                    <h6 className="text-white fw-bold mb-0">Homes</h6>
                                </div>
                            </div>
                        </Col>

                        {/* ITEM 2 */}
                        <Col xs="6" lg="6" data-aos="zoom-in">
                            <div
                                className="rounded overflow-hidden position-relative"
                                style={{ height: "155px" }}
                            >
                                <Image
                                    src={proimg}
                                    alt="Decor"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />

                                <div
                                    className="p-3"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                                    }}
                                >
                                    <h6 className="text-white fw-bold mb-0">Decor</h6>
                                </div>
                            </div>
                        </Col>

                        {/* ITEM 3 */}
                        <Col xs="6" lg="6" data-aos="zoom-in">
                            <div
                                className="rounded overflow-hidden position-relative"
                                style={{ height: "155px" }}
                            >
                                <Image
                                    src={proimg}
                                    alt="Celeb Homes"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />

                                <div
                                    className="p-3"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                                    }}
                                >
                                    <h6 className="text-white fw-bold mb-0">Celeb Homes</h6>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Col>

            </Row>

        </Container>
    );
};

export default HomeBlogSection;
