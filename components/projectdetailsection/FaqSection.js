"use client";
import React, { useState } from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const FaqSection = () => {
    const [showAll, setShowAll] = useState(false);

    const faqs = [
        {
            id: 1,
            question: "What is the total area of Nandi Meraki?",
            answer: "Nandi Meraki in Bangalore spans a total area of 8 acres.",
        },
        {
            id: 2,
            question: "What is the address of Nandi Meraki?",
            answer:
                "The address of Nandi Meraki is Nandi Meraki, Kammanahalli, Noble Residency Rd, 1st Cross, Bengaluru South, Bengaluru, Karnataka - 560076.",
        },
        {
            id: 3,
            question: "What is the area pin code of Nandi Meraki?",
            answer:
                "The pin code for Nandi Meraki in Begur Road, Bangalore is 560076.",
        },
        {
            id: 4,
            question: "Who is the builder of Nandi Meraki?",
            answer: "Nandi Housing Pvt Ltd is the builder of Nandi Meraki.",
        },
        {
            id: 5,
            question: "What is the price range of apartments in Nandi Meraki?",
            answer:
                "The apartments in Nandi Meraki are priced between ₹1.1 Cr to ₹1.9 Cr, depending on the configuration.",
        },
    ];

    const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

    return (
        <>
            <Card className="mt-5 border-0 shadow-sm" data-aos="fade-up">
                <CardBody>
                    <h4 className="fw-bold mb-4">FAQs about Nandi Meraki</h4>

                    {displayedFaqs.map((faq) => (
                        <div key={faq.id} className="border-bottom py-3">
                            <div className="d-flex align-items-start mb-2">
                                <span className="badge bg-warning text-dark me-2">Ques</span>
                                <p className="fw-semibold mb-0">{faq.question}</p>
                            </div>
                            <div className="d-flex align-items-start">
                                <span className="badge bg-success text-light me-2">Ans</span>
                                <p className="text-muted mb-0">{faq.answer}</p>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-3">
                        <Button
                            color="link"
                            className="text-st btn-sm fw-semibold text-decoration-none"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? (
                                <>
                                    Show less <FaChevronUp className="ms-1" />
                                </>
                            ) : (
                                <>
                                    Show more <FaChevronDown className="ms-1" />
                                </>
                            )}
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-3 bg-light border-0">
                <CardBody>
                    <h5 className="mb-0 small mb-3"><FaInfoCircle /> This project was last updated on  03 November 2025
                    </h5>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="4" className="mb-2">
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Sale</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4" className="mb-2">
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Rent</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4" className="mb-2">
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Quick Links</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* with swiper */}
            <Card className="mt-3 bg-light border-0">
                <CardBody>
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
                        <SwiperSlide >
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Rent</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                           <SwiperSlide >
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Rent</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                           <SwiperSlide >
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Rent</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                           <SwiperSlide >
                            <Card className="h-100 small border-0">
                                <CardBody>
                                    <h5 className="fw-bold small">Properties for Rent</h5>
                                    <ul style={{ padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="small text-st">
                                                1 BHK Flats for Sale in Nandi Meraki
                                            </Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </CardBody>
            </Card>
        </>
    );
};

export default FaqSection;
