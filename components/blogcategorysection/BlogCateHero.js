"use client";
import { Container, Row, Col } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";

const BlogCateHero = () => {
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

    return (
        <>
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
                                    <span className="badge bg-info mb-2">{item.tag}</span>

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
        </>
    );
};

export default BlogCateHero;
