"use client";
import { Card, Container } from "reactstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"
import Link from "next/link";
// CATEGORY DATA
const categories = [
    {
        id: 1,
        title: "Decor",
        count: 401,
        img: proimg,
    },
    {
        id: 2,
        title: "Taxation",
        count: 309,
        img: proimg,
    },
    {
        id: 3,
        title: "Celeb Homes",
        count: 217,
        img: proimg,
    },
    {
        id: 4,
        title: "Vastu",
        count: 205,
        img: proimg,
    },
    {
        id: 5,
        title: "Trends",
        count: 149,
        img: proimg,
    },
    {
        id: 6,
        title: "Investments",
        count: 120,
        img: proimg,
    },
];

// COMPONENT AS CONST FUNCTION
const BlogCategorySlider = () => {
    return (
        <section className="py-5 bg-info bg-opacity-10" data-aos="zoom-in">
            <Container>
                <div className="position-relative">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={20}
                        navigation={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="blog-category-swiper"
                    >
                        {categories.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link href="/blogcategory">
                                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                                        <div style={{ position: "relative", width: "100%", height: "160px" }}>
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                            />

                                            {/* TEXT OVERLAY */}
                                            <div
                                                className="d-flex flex-column justify-content-end p-3"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background:
                                                        "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                                                }}
                                            >
                                                <h6 className="text-white fw-bold mb-0">{item.title}</h6>
                                                <small className="text-white-50">{item.count} Articles</small>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>

    );
};

export default BlogCategorySlider;
