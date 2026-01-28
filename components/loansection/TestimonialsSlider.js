"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Card, CardBody } from "reactstrap";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const TestimonialsSlider = () => {

  const testimonials = [
    {
      text: "I received good service and all information from DigiEstate Grouphome loan executive. He helped me at all stages.",
      name: "Y N CHOUDHARY",
    },
    {
      text: "DigiEstate GroupHome Loan Team provided a good service to get the Home Loan. Multiple options provided with best ROI.",
      name: "Suman",
    },
    {
      text: "It was really very great. I was very happy with the service provided by DigiEstate Groupuntil the sanction of my loan.",
      name: "Madhusudan",
    },
    {
      text: "It's been a very helpful service since I connected with SmartMind. I will guide everyone to go for home loan.",
      name: "Tarun",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h4 className="fw-bold mb-4">What our users are saying</h4>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="py-3"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="border-0 shadow-sm h-100 bg-light" style={{ borderRadius: "10px" }}>
                <CardBody>
                  <FaQuoteLeft size={20} color="#999" className="mb-3" />
                  <p className="text-muted" style={{ fontSize: "14px" }}>
                    {item.text}
                  </p>

                  <div className="d-flex align-items-center gap-2 mt-3">
                    <FaUserCircle size={35} color="#ccc" />
                    <span className="fw-semibold">{item.name}</span>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
