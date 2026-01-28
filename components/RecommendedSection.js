"use client";
import React, { useState, useRef } from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Button,
} from "reactstrap";
import classnames from "classnames";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RecommendedSection = () => {
    const tabSwiperRef = useRef(null);
    const areaSwiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState("2");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const tabs = [
        "Top Blogs",
        "Housing Schemes",
        "RERA",
        "Stamp Duty",
        "Home Loan",
        "PMAY",
        "Metro Projects",
        "Interior Design",
    ];

    const housingSchemes = [
        { name: "MHADA Lottery Pune", link: "#" },
        { name: "MHADA Lottery", link: "#" },
        { name: "DDA Housing Scheme", link: "#" },
        { name: "CIDCO Lottery", link: "#" },
        { name: "RGRHCL", link: "#" },
        { name: "APSHCL", link: "#" },
        { name: "APSHCL", link: "#" },
        { name: "APSHCL", link: "#" },
        { name: "APSHCL", link: "#" },
        { name: "APSHCL", link: "#" },
    ];

    const areaConverters = [
        "Acre to Square Feet",
        "Square Meter to Feet",
        "Hectare to Feet",
        "Cent to Square Feet",
        "Hectare to Acre",
        "Guntha to Square Feet",
        "Square Yard to Square Meter",
        "Bigha to Acre",
    ];
 
    return (
        <div className="container py-5"  data-aos="zoom-in">
            <h4 className="fw-bold mb-4">
                Recommended for You
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

            {/* ---------- Tabs Header with Swiper ---------- */}
            <div className="position-relative">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <h5 className="mb-">Top Blogs</h5>
                    </Col>
                    < Col sm="12" md="12" lg="12" className="mt-4">
                        <div
                            className="custom-prev"
                            onClick={() => tabSwiperRef.current?.slidePrev()}
                            style={{ cursor: "pointer", top: '70px' }}
                        >
                            <FaArrowLeft />
                        </div>
                        <div
                            className="custom-next"
                            onClick={() => tabSwiperRef.current?.slideNext()}
                            style={{ cursor: "pointer", top: '70px' }}
                        >
                            <FaArrowRight />
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            onSwiper={(swiper) => (tabSwiperRef.current = swiper)}
                            style={{ padding: "0 50px" }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 5 },
                                1200: { slidesPerView: 6 },
                            }}
                        >
                            {tabs.map((tab, i) => (
                                <SwiperSlide key={i} style={{ width: "auto" }}>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === `${i + 1}` })}
                                            onClick={() => toggle(`${i + 1}`)}
                                            style={{
                                                cursor: "pointer",
                                                whiteSpace: "nowrap",
                                                padding: "1.5rem 1-5rem",
                                                borderBottom: activeTab === `${i + 1}` ? "3px solid #6e2e36" : "3px solid transparent",
                                                transition: "border-color 0.3s ease",
                                                fontWeight: activeTab === `${i + 1}` ? "600" : "400",
                                                textAlign: 'center',
                                            }}
                                        >
                                            {/* <FaArrowRight className="me-2 text-warning" /> */}
                                            {tab}
                                        </NavLink>
                                    </NavItem>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>


            </div>

            {/* ---------- Tab Content ---------- */}
            <TabContent activeTab={activeTab} className="mt-4 small">
                <TabPane tabId="2">
                    <Row>
                        {housingSchemes.map((item, index) => (
                            <Col md="3" sm="6" xs="12" key={index} className="mb-2">
                                <a href={item.link} className="text-decoration-none text-dark">
                                    {item.name}
                                </a>
                            </Col>
                        ))}
                    </Row>
                </TabPane>
                <TabPane tabId="1">
                    <p>Top blog articles will appear here.</p>
                </TabPane>
                <TabPane tabId="3">
                    <p>RERA info will appear here.</p>
                </TabPane>
            </TabContent>

            {/* ---------- Area Calculator Section ---------- */}
            <div className="position-relative mt-5">
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <h5 className=" mb-3">Area Calculator</h5>
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mt-4">
                        {/* Custom Navigation Buttons */}
                        <div
                            className="custom-prev "
                            onClick={() => areaSwiperRef.current?.slidePrev()}
                            style={{ cursor: "pointer", top: '70px' }}
                        >
                            <FaArrowLeft />
                        </div>
                        <div
                            className="custom-next"
                            onClick={() => areaSwiperRef.current?.slideNext()}
                            style={{ cursor: "pointer", top: '70px' }}
                        >
                            <FaArrowRight />
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            onSwiper={(swiper) => (areaSwiperRef.current = swiper)}
                            style={{ padding: "0 50px" }}
                        >
                            {areaConverters.map((text, i) => (
                                <SwiperSlide key={i} style={{ width: "auto" }}>
                                    <Button outline style={{ fontSize: '12px' }} color="secondary" className="rounded-pill me-2 ">
                                        {text}
                                    </Button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default RecommendedSection;
