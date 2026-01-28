"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EnquiryModal from "../EnquiryModal";
import proimg from "../../assets/images/pro-1.jpg"
import Image from "next/image";
const SimilarProjects = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const projects = [
        {
            id: 1,
            price: "₹ 1.13 Cr - 1.13 Cr",
            name: "Assetz Canvas and Cove Phase",
            location: "Begur Road",
            bhk: "2, 3 BHK",
            img: proimg,
        },
        {
            id: 2,
            price: "₹ 72.4 Lac - 1.09 Cr",
            name: "C R Serenity",
            location: "Begur Road",
            bhk: "3 BHK",
            img: proimg,
        },
        {
            id: 3,
            price: "₹ 87.7 Lac - 1.19 Cr",
            name: "Golden Hasmitha Nandana",
            location: "Begur Road",
            bhk: "3 BHK",
            img: proimg,
        },
        {
            id: 4,
            price: "₹ 85 Lac - 1.05 Cr",
            name: "Saiyba Enclave",
            location: "Begur Road",
            bhk: "2 BHK",
            img: proimg,
        },
    ];

    return (
        <>
            <Card className="mt-5 bg-light border-0" data-aos="fade-up">
                <CardBody>
                    <h6 className="text-muted mb-0">If you like Nandi Meraki,</h6>
                    <h4 className="fw-bold">
                        <span className="text-st">Don’t miss</span> these similar projects{" "}
                        <span className="badge bg-light text-st border ms-1">SmartMind</span>
                    </h4>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        navigation
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
                                <div className="position-relative overflow-hidden rounded shadow-sm" style={{ cursor: "pointer" }}>
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        className="w-100"
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />

                                    {/* Overlay Content */}
                                    <div
                                        className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                                        }}
                                    >
                                        <p className="mb-1 fw-semibold text-white">{p.price}</p>
                                        <h6 className="mb-1">{p.name}</h6>
                                        <small className="text-light d-block">
                                            {p.location} <br /> {p.bhk}
                                        </small>
                                        <Button
                                            color="danger"
                                            className="rounded-pill fw-semibold mt-2 d-flex align-items-center btn-sm"
                                            onClick={toggle}
                                        >
                                            View Phone No. <FaPhoneAlt className="ms-2" />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>

            {/* Modal */}
            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};

export default SimilarProjects;
