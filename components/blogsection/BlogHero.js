"use client";
import { Container, Row, Col } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";

const BlogHero = () => {
    const mainBlogs = [
        {
            id: 1,
            tag: "DECOR",
            title: "Art Deco Interior Design: Meaning, History and Living Room Ideas",
            date: "2025-11-13T17:10:00",
            author: "Rohan Bhalla",
            image: proimg,
        },
        {
            id: 2,
            tag: "LIFESTYLE",
            title: "Modern Kitchen Designs: Best Upgrades for 2025",
            date: "2025-11-10T10:00:00",
            author: "Meera Shah",
            image: proimg,
        },
    ];

    const sideBlogs = [
        {
            id: 1,
            tag: "MUMBAI MMR",
            title: "Dharavi Slum Mumbai: History, Real Estate and Re-Development",
            date: "2025-11-14T12:00:00",
            author: "Vipra Chadha",
            image: proimg,
        },
        {
            id: 3,
            tag: "TAXATION",
            title: "Machilipatnam Municipal Corporation House Tax Simple Guide 2025",
            date: "2025-11-14T11:30:00",
            author: "Gurima Singh",
            image: proimg,
        },
        {
            id: 3,
            tag: "TAXATION",
            title: "Machilipatnam Municipal Corporation House Tax Simple Guide 2025",
            date: "2025-11-14T11:30:00",
            author: "Gurima Singh",
            image: proimg,
        },
        {
            id: 3,
            tag: "TAXATION",
            title: "Machilipatnam Municipal Corporation House Tax Simple Guide 2025",
            date: "2025-11-14T11:30:00",
            author: "Gurima Singh",
            image: proimg,
        },
        {
            id: 3,
            tag: "TAXATION",
            title: "Machilipatnam Municipal Corporation House Tax Simple Guide 2025",
            date: "2025-11-14T11:30:00",
            author: "Gurima Singh",
            image: proimg,
        },
        {
            id: 3,
            tag: "TAXATION",
            title: "Machilipatnam Municipal Corporation House Tax Simple Guide 2025",
            date: "2025-11-14T11:30:00",
            author: "Gurima Singh",
            image: proimg,
        },
    ];

    return (
        <section className="py-4">
            <Container>
                <Row className="g-4">
                    {/* LEFT MAIN SLIDER */}
                    <Col lg="8">
                        <div className="position-relative h-100 " data-aos="zoom-in">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                navigation
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 1 },
                                    1200: { slidesPerView: 1 },
                                }}
                                className="hero-slider"
                            >
                                {mainBlogs.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="position-relative">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={1200}
                                                height={400}
                                                className="img-fluid w-100 rounded"
                                                style={{ objectFit: "cover", height: "400px" }}
                                            />

                                            {/* CONTENT OVERLAY */}
                                            <div className="hero-content position-absolute bottom-0 start-0 text-white p-4"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                                }}
                                            >
                                                <span className="badge bg-danger mb-2">{item.tag}</span>

                                                <h3 className="fw-bold">{item.title}</h3>

                                                <p className="mt-2 small">
                                                    {item.date} by <span className="fw-bold">{item.author}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>


                        </div>
                    </Col>

                    {/* RIGHT VERTICAL SLIDER */}
                    <Col lg="4">
                        <div className="" data-aos="zoom-in">
                            <Row style={{overflowY:'auto', height:'400PX'}}>
                                {sideBlogs.map((item) => (
                                    <Col lg="12" key={item.id} className="mb-2">
                                        <Link href="/" className="text-dark">
                                            <div className="d-flex align-items-start p-2 bg-light">
                                                <div
                                                    style={{
                                                        width: "180px",
                                                        height: "100px",
                                                        overflow: "hidden",
                                                        borderRadius: "8px"
                                                    }}
                                                    className="me-2"
                                                >
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-100 "
                                                        style={{
                                                            objectFit: "cover",
                                                            height: '200px'
                                                        }}
                                                    />
                                                </div>

                                                <div style={{ overflow: "hidden" }}>
                                                    <span className="badge bg-info mb-1" style={{ fontSize: "12px" }}>
                                                        {item.tag}
                                                    </span>
                                                    <h6 className="mb-1 fw-bold st-txt-o">{item.title}</h6>
                                                    <p className="small m-0">
                                                        {item.date} by <span className="fw-bold"></span>
                                                    </p>
                                                    <small>{item.author}</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BlogHero;
