"use client";

import { Container, Row, Col, Badge } from "reactstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import blogimg from "../../assets/images/pro-1.jpg"
const blogData = [
  {
    id: 1,
    category: "VASTU",
    title:
      "12 Bedroom Furniture Placement Tips as per Vastu | Easy to Follow Bedroom Vastu Tips",
    img: blogimg,
    author: "Steffi Joseph",
    date: "2025-11-14T20:00:00",
  },
  {
    id: 2,
    category: "CELEB HOMES",
    title: "Inside Rohit Sharma House - Images, Address, and More",
    img: blogimg,
    author: "Nupur Saini",
    date: "2025-11-14T16:00:00",
  },
  {
    id: 3,
    category: "CELEB HOMES",
    title: "Anil Ambani House in Mumbai: Name, Price, Inside View and Photos",
    img: blogimg,
    author: "Pawni Mishra",
    date: "2025-11-14T16:00:00",
  },
  {
    id: 4,
    category: "VASTU",
    title: "Vastu Tips for North Facing Duplex House",
    img: blogimg,
    author: "Anuja Patil",
    date: "2025-11-14T15:00:00",
  },
];

const HomeImprovementSection = () => {
  return (
    <Container className="py-4">

      {/* TITLE */}
      <h4 className="fw-bold mb-4">
        Home <span className="text-st">Improvement</span>{" "}
        <span className="fw-normal">Tips From Experts</span>
      </h4>

      {/* SWIPER ROW */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="rounded overflow-hidden mb-3" data-aos='zoom-in'>
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                }}
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="py-2">
                <Badge color="danger" className="mb-2">
                  {blog.category}
                </Badge>

                <h6 className="fw-semibold mt-2">{blog.title}</h6>

                <p className="text-muted small mb-0">
                  {blog.date} by <span className="text-danger">{blog.author}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </Container>
  );
};

export default HomeImprovementSection;
