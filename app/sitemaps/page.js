"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Buy / Rent Dropdown Options
const filterOptions = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
];

// City Tabs for Swiper
const cities = [
  "Sitemap",
  "Mumbai",
  "Hyderabad",
  "Thane",
  "Pune",
  "New Delhi",
  "Chennai",
  "Ahmedabad",
];

// Data for Bottom Grid
const sitemapData = {
  Residential: {
    Flat: [
      "Flats in Thane",
      "1 BHK Flats in Thane",
      "2 BHK Flats in Thane",
      "3 BHK Flats in Thane",
      "4 BHK Flats in Thane",
      "5 BHK Flats in Thane",
    ],
    House: [
      "House for sale in Thane",
      "1 BHK House for sale in Thane",
      "2 BHK House for sale in Thane",
      "3 BHK House for sale in Thane",
      "4 BHK House for sale in Thane",
      "5 BHK House for sale in Thane",
    ],
    Villa: [
      "Villa for sale in Thane",
      "1 BHK Villa for sale in Thane",
      "2 BHK Villa for sale in Thane",
      "3 BHK Villa for sale in Thane",
      "4 BHK Villa for sale in Thane",
      "5 BHK Villa for sale in Thane",
    ],
    Plots: ["Plots in Thane"],
  },
};

const Sitemap = () => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [activeCity, setActiveCity] = useState("Thane");

  return (
    <section className="py-4">
      <Container>
        {/* Top Row */}
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <h5 className="fw-bold mb-0">Sitemap :</h5>
          </Col>

          <Col xs="3">
            <Select
              options={filterOptions}
              value={selectedFilter}
              onChange={(v) => setSelectedFilter(v)}
              classNamePrefix="react-select"
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : null
              } // ← FIXED (SSR SAFE)
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: "#fff",
                  borderColor: state.isFocused ? "#0d6efd" : "#ced4da",
                  boxShadow: state.isFocused
                    ? "0 0 0 0.15rem rgba(13,110,253,.25)"
                    : "none",
                  borderRadius: "6px",
                  minHeight: "44px",
                  height: "44px",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#0d6efd" },
                }),
              }}
            />
          </Col>
        </Row>

        <hr />

        {/* Swiper Tabs */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          className="py-2"
        >
          {cities.map((city) => (
            <SwiperSlide key={city} style={{ width: "auto" }}>
              <div
                onClick={() => setActiveCity(city)}
                className={`px-2 pb-1 cursor-pointer ${
                  activeCity === city ? "text-primary fw-bold" : "text-dark"
                }`}
                style={{
                  borderBottom:
                    activeCity === city
                      ? "2px solid red"
                      : "2px solid transparent",
                }}
              >
                {city}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Grid */}
        <h4 className="fw-bold mt-4 mb-3">Residential</h4>
        <Row>
          {Object.entries(sitemapData.Residential).map(([title, items]) => (
            <Col md="3" key={title} className="mb-4" data-aos="zoom-in">
              <h6 className="fw-bold mb-2">{title}</h6>

              {items.map((item, idx) => (
                <p
                  key={idx}
                  className="mb-1 text-muted"
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </p>
              ))}

              <p className="mt-2 text-primary fw-bold small">
                Thane's {title} Localities →
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Sitemap;
