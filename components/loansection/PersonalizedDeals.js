"use client";

import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/procus.jpg"
import Image from "next/image";

const PersonalizedDeals = () => {

  const data = [
    {
      img: proimg,
      title: "Private Employees",
      desc: "Discover home loan offers for private employees with attractive rates and quick approval.",
    },
    {
      img: proimg,
      title: "Government Employees",
      desc: "Build your dream home with an easy and affordable home loan for government employees.",
    },
    {
      img: proimg,
      title: "Cash income With Irregular ITR",
      desc: "Don't let your irregular cash income stop you from owning a home. Check out your home loan options now.",
    },
    {
      img: proimg,
      title: "Self-Employed With ITR",
      desc: "Unlock your perfect home with an attractive loan offer that is personalized for your needs.",
    },
     {
      img: proimg,
      title: "Self-Employed With ITR",
      desc: "Unlock your perfect home with an attractive loan offer that is personalized for your needs.",
    },
  ];

  return (
    <section className="py-5 mt-5" style={{ background: "#f8f9fa" }}>
      <Container>
        <div className="text-center mb-4">
          <h3 className="fw-bold">Personalized deals for everyone</h3>
          <p className="mb-0">
            Explore the home loan options that best match your requirements
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="shadow-sm border-0" data-aos="zoom-in">
                <Image
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                <CardBody>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default PersonalizedDeals;
