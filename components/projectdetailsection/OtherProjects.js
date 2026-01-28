"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";
import { FaStar, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EnquiryModal from "../EnquiryModal";
import Image from "next/image";
import proimg from "../../assets/images/pro-1.jpg"

const OtherProjects = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const projects = [
        {
            id: 1,
            name: "Nandi Retreat",
            price: "₹1.16 Cr - 1.62 Cr",
            bhk: "3 BHK",
            status: "Ready To Move",
            rating: 4.5,
            reviews: 3,
            distance: "3.8 km from Gottigere Metro Station",
            img: proimg,
        },
        {
            id: 2,
            name: "Nandi Woods",
            price: "Call for Price",
            bhk: "2 BHK",
            status: "Ready To Move",
            rating: 2.9,
            reviews: 5,
            distance: "Currently Not Available",
            img: proimg,
        },
        {
            id: 3,
            name: "Nandi Woods",
            price: "Call for Price",
            bhk: "2 BHK",
            status: "Ready To Move",
            rating: 2.9,
            reviews: 5,
            distance: "Currently Not Available",
            img: proimg,
        },
        {
            id: 4,
            name: "Nandi Woods",
            price: "Call for Price",
            bhk: "2 BHK",
            status: "Ready To Move",
            rating: 2.9,
            reviews: 5,
            distance: "Currently Not Available",
            img: proimg,
        },

    ];

    return (
        <>
            <Card className="mt-5 bg-light border-0" data-aos="fade-up">
                <CardBody>
                    <h5 className="fw-semibold mb-4">
                        Other Projects by <span className="text-st">Nandi Housing Pvt Ltd</span>
                    </h5>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        loop
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {projects.map((p) => (
                            <SwiperSlide key={p.id}>
                                <Card className="shadow-sm border-0  overflow-hidden h-100">
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        className="w-100 rouneded-0"
                                        style={{ height: "180px", objectFit: "cover", borderRadius: '0px' }}
                                    />

                                    <CardBody>
                                        <CardTitle tag="h6" className="fw-bold">
                                            {p.name}
                                        </CardTitle>

                                        <p className="mb-1 text-dark fw-semibold">{p.price}</p>
                                        <p className="mb-1 text-muted small">
                                            {p.bhk}
                                        </p>
                                        {p.status && (
                                            <p className="text-muted small mb-2">{p.status}</p>
                                        )}

                                        {/* Rating and Distance */}
                                        {p.rating ? (
                                            <div className="d-flex align-items-center mb-2 small">
                                                <FaStar className="text-warning me-1" />
                                                <span className="fw-semibold small">
                                                    {p.rating}/5
                                                </span>
                                                <span className="text-muted small ms-1">
                                                    {p.reviews} review
                                                </span>
                                            </div>
                                        ) : null}

                                        <div className="d-flex align-items-center text-muted small mb-3">
                                            <FaMapMarkerAlt className="me-1 text-st" />
                                            <span className="st-txt-o">{p.distance}</span>
                                        </div>

                                        {/* Contact Button */}
                                        <Button
                                            color="link"
                                            className="p-0 text-st fw-semibold text-decoration-none btn-sm"
                                            onClick={toggle}
                                        >
                                            Contact Agent <FaArrowRight className="ms-1" />
                                        </Button>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>

            {/* Enquiry Modal */}
            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};

export default OtherProjects;
