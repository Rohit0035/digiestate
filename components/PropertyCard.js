"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, Button, Row, Col, Badge } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../assets/styles/custom.css";
import proimg from "../assets/images/pro-1.jpg";
import {
    FaBath,
    FaUsers,
    FaRulerCombined,
    FaBuilding,
    FaCouch,
    FaClock,
    FaHeart,
    FaShareAlt,
} from "react-icons/fa";
import Link from "next/link";
import EnquiryModal from "./EnquiryModal";

const PropertyCard = () => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const images = [proimg, proimg, proimg];
    const slides = images.map((img) => ({ src: img.src }));

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Card data-aos="zoom-in" className="property-card shadow-sm border p-2 mt-3">
                <Row>
                    {/*  Image Swiper */}
                    <Col sm="12" md="12" lg="3">
                        <Swiper modules={[Navigation]} navigation loop className="property-swiper">
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div
                                        className="position-relative"
                                        onClick={() => {
                                            setPhotoIndex(i);
                                            setOpen(true);
                                        }}
                                        style={{ cursor: "zoom-in" }}
                                    >
                                        <Image
                                            src={img}
                                            alt="Property"
                                            width={100}
                                            className="w-100 rounded"
                                            style={{ objectFit: "cover", height: "200px" }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <span className="photo-badge small mt-3">10+ Photos</span>
                        <div className="posted-badge small">Posted: Today</div>
                    </Col>

                    {/* 🏠 Property Info */}
                    <Col sm="12" md="12" lg="6">
                        <Card className="p-2 border-0">
                            <div className="d-flex justify-content-between align-items-start flex-wrap">
                                <Link href="/propertydetail">
                                    <h6 className="text-dark mb-1">
                                        3 BHK Flat for Rent in Thanisandra, Bangalore
                                        <span style={{ float: "right" }}>
                                            <FaHeart className="text-muted cursor-pointer me-2 text-st" />
                                            <FaShareAlt className="text-muted cursor-pointer text-st" />
                                        </span>
                                    </h6>
                                    <div className="text-st small fw-semibold mb-2">Sobha City</div>

                                    {/* Features Grid */}
                                    <Row>
                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaCouch size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">FURNISHING</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">Semi-Furnished</div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaBath size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">BATHROOM</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">3</div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaUsers size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">TENANT PREF.</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">Bachelors/Family</div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaClock size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">AVAILABILITY</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">Immediately</div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaRulerCombined size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">SUPER AREA</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">1750 sqft</div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs="6" sm="6" md="6" lg="4">
                                            <div className="d-flex bg-light p-1 mb-1 rounded">
                                                <FaBuilding size={20} className="text-st me-2 mt-1" />
                                                <div style={{ fontSize: "12px" }}>
                                                    <small className="text-muted d-block st-txt-o">FLOOR</small>
                                                    <div className="fw-semibold small text-dark st-txt-o">10 out of 18</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Link>
                                {/* Description + Read More */}
                                <p className="mt-3 mb-1 text-muted small">
                                    3 bhk flat for rent in Sobha City, SBA 1750 sft, mid floors,
                                    semi-furnished, north facing, 1 covered parking.{" "}
                                    {!showMore ? (
                                        <span
                                            className="text-st cursor-pointer fw-semibold"
                                            onClick={() => setShowMore(true)}
                                        >
                                            Read More
                                        </span>
                                    ) : (
                                        <>
                                            covered car park, Rent ₹50,000 per month, plus deposit,
                                            large project with all amenities. The monthly maintenance
                                            is ₹6,000/-.
                                            <br />
                                            <span className="fw-semibold text-dark mt-2 mb-2 d-block ">
                                                View Property Nearby:
                                            </span>
                                            <Row>
                                                {[
                                                    "Park Facing",
                                                    "Gated Society",
                                                    "24x7 Water Supply",

                                                ].map((item, i) => (
                                                    <Col xs="6" sm="6" md="6" lg="3" key={i}>
                                                        <Badge color="danger" pill className="me-1 mb-1 st-txt-o">
                                                            {item}
                                                        </Badge>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <span
                                                className="text-st cursor-pointer fw-semibold d-block mt-2"
                                                onClick={() => setShowMore(false)}
                                            >
                                                Read Less
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </Card>
                    </Col>

                    {/* Price & Actions */}
                    <Col sm="12" md="12" lg="3">
                        <div className="bg-light text-center px-2 py-4 rounded">
                            <h5 className="fw-bold text-dark mb-1">₹50,000</h5>
                            <a href="#" className="text-decoration-none small text-st">
                                Security Deposit
                            </a>
                            <div className="d-flex flex-column gap-2 mt-3">
                                <Button color="danger" onClick={toggle} className="rounded-pill fw-semibold btn btn-sm">
                                    Contact Agent
                                </Button>
                                <Button outline color="danger" onClick={toggle} className="rounded-pill fw-semibold btn btn-sm">
                                    Get Phone No.
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={photoIndex}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
            />

            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};

export default PropertyCard;
