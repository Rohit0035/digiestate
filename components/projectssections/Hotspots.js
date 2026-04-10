"use client";
import React, { useRef, useState, useMemo } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import CityPopup from "../CityPopup";

import "swiper/css";
import "swiper/css/navigation";

const Hotspots = ({ allProjects = [] }) => {
  const swiperRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  /* ===============================
     🔥 GROUP PROJECTS BY LOCATION
  =============================== */
  const hotspots = useMemo(() => {
    const locationMap = {};

    allProjects.forEach((project) => {
      const location = project?.location?.trim();

      if (!location) return;

      if (locationMap[location]) {
        locationMap[location] += 1;
      } else {
        locationMap[location] = 1;
      }
    });

    // Convert object → array
    return Object.keys(locationMap).map((location, index) => ({
      id: index + 1,
      name: location,
      projects: locationMap[location],
    }));
  }, [allProjects]);

  return (
    <>
      <section className="py-3">
        <Container>
          {/* Section Header */}
          <Row className="align-items-center mb-4">
            <Col>
              <h4 className="fw-bold mb-0">
                Hotspots in{" "}
                <Link
                  href="javascript:void(0);"
                  className="text-st ms-1 text-decoration-none"
                >
                  Patna <FaAngleDown />
                </Link>
              </h4>
              <div
                className="mt-1"
                style={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "#6e2e36",
                }}
              />
            </Col>
          </Row>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {hotspots.map((spot) => (
              <SwiperSlide key={spot.id}>
                <Card
                  className="border-0 shadow-sm rounded-4 p-2 h-100 bg-white"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.05)";
                  }}
                >
                  <CardBody className="text-start">
                    <h6 className="fw-bold mb-1 st-txt-o">
                      {spot.name}
                    </h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        {spot.projects} Projects
                      </small>
                      <FaArrowRight size={12} className="text-st" />
                    </div>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <CityPopup isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
};

export default Hotspots;