"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardBody,
} from "reactstrap";
import { FaRocket, FaBuilding, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import proimg from "../../assets/images/pro-1.jpg";
import EnquiryModal from "../EnquiryModal";
import Link from "next/link";

const tabs = [
    { id: "1", label: "Just Launched", icon: <FaRocket />, key: "just" },
    { id: "2", label: "By Top Builders", icon: <FaBuilding />, key: "builders" },
    { id: "3", label: "In High Demand", icon: <FaStar />, key: "demand" },
];

const projectsData = {
    just: [
        { id: 1, name: "Prestige Greenbrook", price: "₹1.34 Cr - ₹3.40 Cr", location: "Devanahalli", img: proimg },
        { id: 2, name: "Sobha Magnus", price: "₹3.20 Cr - ₹4.44 Cr", location: "Bannerghatta Main Road", img: proimg },
        { id: 3, name: "Nischitha Divine Paarijat", price: "₹55 Lac - ₹90 Lac", location: "Nelamangala Town", img: proimg },
        { id: 4, name: "Sipani City", price: "₹65 Lac - ₹1.03 Cr", location: "Varthur", img: proimg },
    ],
    builders: [
        { id: 5, name: "Brigade Orchards", price: "₹1.10 Cr - ₹2.90 Cr", location: "Hebbal", img: proimg },
        { id: 6, name: "Salarpuria Sattva", price: "₹95 Lac - ₹2.10 Cr", location: "Whitefield", img: proimg },
    ],
    demand: [
        { id: 7, name: "Purva Park Hill", price: "₹1.50 Cr - ₹2.80 Cr", location: "Kanakapura Road", img: proimg },
        { id: 8, name: "Adarsh Palm Retreat", price: "₹2.10 Cr - ₹4.00 Cr", location: "Bellandur", img: proimg },
    ],
};

const ExploreProjects = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <section className="py-5 bg-light" data-aos="fade-up">
                <Container fluid className="p-4 bg-white rounded shadow-sm">
                    <Row>
                        <Col md={12} className="text-center mb-4">
                            <h4 className="fw-bold text-dark">Explore Projects in Bangalore</h4>
                        </Col>
                    </Row>

                    {/* Tabs */}
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Nav tabs className="justify-content-between border-0 bg-light rounded-pill py-2 px-3">
                                {tabs.map((t) => (
                                    <NavItem key={t.id}>
                                        <NavLink
                                            onClick={() => setActiveTab(t.id)}
                                            className={`d-flex flex-column align-items-center text-center border-0 bg-transparent ${activeTab === t.id ? "text-danger fw-bold" : "text-dark"
                                                }`}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div
                                                className={`d-flex align-items-center justify-content-center rounded-circle mb-2 ${activeTab === t.id
                                                        ? "bg-danger bg-opacity-10 text-danger"
                                                        : "bg-white text-secondary"
                                                    }`}
                                                style={{ width: "50px", height: "50px", fontSize: "22px" }}
                                            >
                                                {t.icon}
                                            </div>
                                            <small>{t.label}</small>
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        </Col>
                    </Row>

                    {/* Tab Content */}
                    <TabContent activeTab={activeTab} className="mt-5">
                        {tabs.map((t) => (
                            <TabPane tabId={t.id} key={t.id}>
                                <Swiper
                                    modules={[Navigation]}
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    navigation
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        992: { slidesPerView: 4 },
                                    }}
                                >
                                    {projectsData[t.key].map((p) => (
                                        <SwiperSlide key={p.id}>
                                            <Card className="shadow-sm rounded-4 overflow-hidden flex-row flex-wrap flex-md-nowrap">
                                                <div className="col-12 col-md-5 p-0">
                                                    <Image
                                                        src={p.img.src}
                                                        alt={p.name}
                                                        width={230}
                                                        height={230}
                                                        className="img-fluid h-100 w-100"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </div>
                                                <CardBody className="col-12 col-md-7 d-flex flex-column justify-content-center">
                                                    <h6 className="fw-bold text-dark mb-1 st-txt-o">{p.name}</h6>
                                                    <p className="text-secondary small mb-1">{p.price}</p>
                                                    <p className="text-secondary small mb-2 st-txt-o">{p.location}</p>
                                                    <Link
                                                        href="javascript:void(0);"
                                                        onClick={toggle}
                                                        className="small fw-semibold text-st text-decoration-none"
                                                    >
                                                        Contact Seller →
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TabPane>
                        ))}
                    </TabContent>
                </Container>
            </section>

            <EnquiryModal modal={modal} toggle={toggle} />

        </>
    );
};

export default ExploreProjects;
