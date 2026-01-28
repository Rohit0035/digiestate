"use client";

import { Container, Badge } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const youtubeData = [
  {
    id: 1,
    category: "RERA",
    title: "RERA Delhi - Registration, Project Search & Complaint Filing",
    youtubeId: "dQw4w9WgXcQ",
    author: "Jasmine Khurana",
    date: "2025-11-14T12:00:00",
  },
  {
    id: 2,
    category: "RERA",
    title:
      "RERA AP – Andhra Pradesh RERA Projects, Registration, Complaint Filing",
    youtubeId: "3fumBcKC6RE",
    author: "Pawni Mishra",
    date: "2025-10-31T13:00:00",
  },
  {
    id: 3,
    category: "RERA",
    title: "RERA Haryana 2025: Project Search, Registration & Complaints",
    youtubeId: "ysz5S6PUM-U",
    author: "Jasmine Khurana",
    date: "2025-10-29T10:00:00",
  },
  {
    id: 4,
    category: "RERA",
    title:
      "RERA Karnataka – Rules, Registration, Projects & Complaint Filing",
    youtubeId: "aqz-KE-bpKQ",
    author: "Anirudh Singh Chauhan",
    date: "2025-10-17T06:00:00",
  },
];

const YoutubeSection = () => {
  return (
    <section className="py-5 bg-info bg-opacity-10">
      <Container>

        {/* Section Title */}
        <h4 className="fw-bold mb-4">
          Real <span className="text-st">Estate</span>{" "}
          <span className="fw-normal">Tips From Experts</span>
        </h4>

        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {youtubeData.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="rounded overflow-hidden mb-3 p-2 bg-white" style={{height:'320px'}} data-aos='zoom-in'>

                {/* YouTube Iframe */}
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Content */}
                <div className="py-2">
                  <Badge color="info" className="mb-2">
                    {video.category}
                  </Badge>

                  <h6 className="fw-semibold mt-2 st-txt-o">{video.title}</h6>

                  <p className="text-muted small mb-0">
                    {video.date} by{" "}
                    <span className="text-primary">{video.author}</span>
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default YoutubeSection;
