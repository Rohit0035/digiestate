"use client";
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logodemo from "../assets/images/cpm-logo.png";
import bgImage from "../assets/images/dg/slider-1.jpg"

const WhyUsSection = () => {
  return (
    <Container
      className="my-5 py-5 position-relative rounded-4 shadow-sm text-white whyus-container"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          zIndex: 1,
        }}
      ></div>

      <div className="position-relative z-2">
        <Row className="align-items-center px-3 px-md-5 gy-4">
          {/* Left Content */}
          <Col md="6" className="text-center text-md-start text-white">
            <h3 className="fw-bold mb-2">
              <span className="text-warning">Invest</span> with Confidence
            </h3>
            <h2 className="fw-bold text-white">Digi Estate Group</h2>
            <p className="mt-3 text-white">
              Trusted real estate solutions for residential & commercial properties.
            </p>
          </Col>

          {/* Right Content */}
          <Col md="6">
            <div
              className="p-4 rounded-4 shadow-sm bg-white bg-opacity-75"
              data-aos="fade-left"
            >
              <h5 className="fw-bold mb-3 text-dark">Why choose Digi Estate?</h5>

              <p className="text-dark mb-2">
                <FaCheckCircle className="text-success me-2" />
                Access to <span className="fw-bold text-st">1000+ verified properties </span>
                across top locations
              </p>
              <p className="text-dark mb-2">
                <FaCheckCircle className="text-success me-2" />
                <span className="text-st fw-bold">Expert guidance & advisory</span> to
                make informed investment decisions
              </p>
              <p className="text-dark mb-3">
                <FaCheckCircle className="text-success me-2" />
                Transparent deals & <span className="fw-bold text-st">trusted by 10,000+ families</span>
              </p>

              {/* Offer & Top Highlights */}
              <div className="d-flex align-items-center flex-wrap gap-3 mt-3">
                <div className="bg-warning text-dark px-3 py-1 fw-semibold rounded-3 small">
                  Save up to 20% on early bookings
                </div>
                <div className="text-secondary small fw-semibold">Premium Locations</div>
              </div>

              {/* Scrolling Logos */}
              <div className="my-3">
                <Marquee speed={50} gradient={false}>
                  <div className="d-flex align-items-center gap-5 mx-3">
                    <Image src={logodemo} alt="Builder1" height="40" />
                    <Image src={logodemo} alt="Builder2" height="40" />
                    <Image src={logodemo} alt="Builder3" height="40" />
                    <Image src={logodemo} alt="Builder4" height="40" />
                    <Image src={logodemo} alt="Builder5" height="40" />
                  </div>
                </Marquee>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3 mt-3 flex-wrap">
                <Button color="danger" className="rounded-pill px-4 fw-semibold">
                  Explore Properties
                </Button>
                <Button outline color="danger" className="rounded-pill px-4 fw-semibold">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .whyus-container {
          position: relative;
          border: 1px solid #eee;
          overflow: hidden;
           backgroundImage: url(${bgImage.src});
        }
        .z-2 {
          z-index: 2;
        }

        @media (max-width: 768px) {
          .whyus-container {
            padding: 3rem 1rem;
          }
          h2,
          h3 {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  );
};

export default WhyUsSection;
