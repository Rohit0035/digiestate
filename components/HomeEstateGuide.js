"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button, Modal } from "reactstrap";
import { FaPlay, FaFileAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import proimg from "../assets/images/pro-1.jpg";
import Image from "next/image";

const HomeEstateGuide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  

  const openVideo = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeVideo = () => {
    setModalOpen(false);
    setVideoUrl("");
  };

  const videos = [
    {
      title: "Locality Review - BTM Layout, Bengaluru",
      img: proimg,
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      title: "Locality Review - Vijayanagar, Bengaluru",
      img: proimg,
      url: "https://www.youtube.com/embed/QILiHiTD3uc",
    },
    {
      title: "Locality Review - Indiranagar, Bengaluru",
      img: proimg,
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
  ];

  const insights = [
    "Lease vs Rent Agreement: Differences, Features...",
    "What is Rent Agreement - Rent Agreement Samples",
    "The Ultimate Landlord Tenant Checklist for First Timers",
    "14 Best Posh Societies in Bangalore",
    "All You Need to Know About Tenant Verification",
  ];

  return (
    <Container className="my-5 position-relative">
      {/* Header */}
      <Row className="align-items-center mb-4" data-aos="fade-up">
        <Col>
          <h4 className="fw-bold">
            Your Real Estate Guide
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
      </Row>

      <Row>
        {/* Locality Videos */}
        <Col md="6" lg="4" className="mb-3" data-aos="fade-up">
          <Card className="shadow-sm h-100 border">
            <CardBody>
              <h5 className="fw-bold mb-3">Locality Videos</h5>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={15}
                slidesPerView={2}
              >
                {videos.map((v, i) => (
                  <SwiperSlide key={i}>
                    <div className="position-relative rounded overflow-hidden">
                      <Image
                        src={v.img}
                        alt={v.title}
                        className="img-fluid w-100 rounded"
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <div
                        onClick={() => openVideo(v.url)}
                        className="position-absolute top-50 start-50 translate-middle bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                        data-aos="zoom-in"
                      >
                        <FaPlay className="ms-1" />
                      </div>
                      <div
                        className="position-absolute small bottom-0 start-0 w-100 text-white fw-bold text-center py-1"
                        style={{ background: "rgba(0,0,0,0.6)" }}
                      >
                        {v.title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Button
                color="link"
                className="text-danger fw-bold mt-3 p-0 text-decoration-none"
              >
                See all →
              </Button>
            </CardBody>
          </Card>
        </Col>

        {/* Industry Insights */}
        <Col md="6" lg="4" className="mb-3" data-aos="fade-up">
          <Card className="shadow-sm h-100 border">
            <CardBody>
              <h5 className="fw-bold mb-3">Industry Insights</h5>
              <ul className="list-unstyled">
                {insights.map((item, i) => (
                  <li
                    key={i}
                    className="d-flex align-items-center mb-3 text-muted"
                    style={{ fontSize: "15px" }}
                  >
                    <FaFileAlt className="text-danger me-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                color="link"
                className="text-danger fw-bold mt-2 p-0 text-decoration-none"
              >
                See all →
              </Button>
            </CardBody>
          </Card>
        </Col>

        {/* Legal Updates */}
        <Col md="6" lg="4" className="mb-3" data-aos="fade-up">
          <Card className="shadow-sm h-100 border">
            <CardBody>
              <h5 className="fw-bold mb-3">Legal Updates</h5>

              {[
                {
                  title:
                    "Model Tenancy Act 2021: Protects the rights of landlords and tenants",
                  btn: "Watch video →",
                },
                {
                  title:
                    "A Khata and B Khata in Bangalore: Types, Difference & How to Apply",
                  btn: "Read article →",
                },
                {
                  title:
                    "Property Registration Rules: Documents and Fees in Karnataka",
                  btn: "Read article →",
                },
              ].map((item, index) => (
                <div className="d-flex mb-3" key={index} data-aos="fade-up">
                  <Image
                    src={proimg}
                    alt="Legal Update"
                    className="rounded me-3"
                    style={{ width: "80px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <p className="mb-0 fw-semibold small">{item.title}</p>
                    <Button
                      color="link"
                      style={{ fontSize: "12px" }}
                      className="text-danger fw-bold p-0 text-decoration-none"
                    >
                      {item.btn}
                    </Button>
                  </div>
                </div>
              ))}

              <div
                className="d-flex justify-content-between align-items-center mt-3"
                data-aos="fade-up"
              >
                <Button
                  color="link"
                  className="text-danger fw-bold p-0 text-decoration-none"
                >
                  See all →
                </Button>
                <Button
                  color="danger"
                  className="text-white rounded-pill px-3 py-1 fw-bold text-decoration-none"
                >
                  Explore Services
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Video Popup Modal */}
      <Modal
        isOpen={modalOpen}
        toggle={closeVideo}
        centered
        size="lg"
        contentClassName="border-0"
      >
        <div className="ratio ratio-16x9">
          {videoUrl && (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default HomeEstateGuide;
