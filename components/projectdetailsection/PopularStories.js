"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardImg,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import proimg from "../../assets/images/pro-1.jpg"
import Image from "next/image";
const PopularStories = () => {
    const [activeTab, setActiveTab] = useState("1");

    const relatedStories = [
        {
            title: "Pune Bangalore Expressway - Route Map, Facts, Latest Updates",
            desc: "Pune Bangalore Expressway is set to reduce the distance between two of India’s biggest cities. Find out more about this greenfield project...",
            img: proimg,
        },
        {
            title: "Bangalore Airport Metro | Namma Metro Blue Line – Updates",
            desc: "Bangalore Airport Metro featuring 32 metro stations is under construction. Once operational, the metro line will enhance airport connectivity...",
            img: proimg,
        },
        {
            title: "Bangalore Mysore Expressway: Route, Map and Benefits",
            desc: "Inaugurated in March 2023, the Bangalore Mysore Expressway has reduced the travel time by half for commuters. Read the blog to know more...",
            img: proimg,
        },
    ];

    const latestStories = [
        {
            title: "Chennai Outer Ring Road Expansion Plans Revealed",
            desc: "The new extension aims to boost connectivity between industrial zones and the airport, expected to be completed by 2026.",
            img: proimg,
        },
        {
            title: "Hyderabad Metro Phase 2 – Route & Launch Details",
            desc: "Phase 2 will connect IT hubs to residential belts, bringing faster travel and reduced congestion to the city.",
            img: proimg,
        },
        {
            title: "Mumbai Coastal Road Project Nearing Completion",
            desc: "The ambitious project will reduce traffic congestion along Mumbai’s western coast and enhance scenic travel experiences.",
            img: proimg,
        },
    ];

    return (
        <Card className="border-0 shadow-sm mt-5 bg-light" data-aos="fade-up">
            <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold mb-0">Popular Stories Around You</h4>
                </div>

                {/* Nav Pills */}
                <Nav pills className="mb-3 border-bottom">
                    <NavItem>
                        <NavLink
                            className={`fw-semibold ${activeTab === "1" ? "active text-white border-bottom border-danger" : "text-dark"
                                }`}
                            onClick={() => setActiveTab("1")}
                            style={{ cursor: "pointer" }}
                        >
                            Related
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`fw-semibold ${activeTab === "2" ? "active text-white border-bottom border-danger" : "text-dark"
                                }`}
                            onClick={() => setActiveTab("2")}
                            style={{ cursor: "pointer" }}
                        >
                            Latest
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* Tab Content */}
                <TabContent activeTab={activeTab}>
                    {/* Related Tab */}
                    <TabPane tabId="1">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Navigation]}
                        >
                            {relatedStories.map((story, index) => (
                                <SwiperSlide key={index}>
                                    <Card className="border-0 shadow-sm h-100">
                                        <Image
                                            top
                                            src={story.img}
                                            alt={story.title}
                                            style={{ height: "180px", objectFit: "cover", borderRadius: '0px' }}
                                        />
                                        <CardBody>
                                            <h6 className="fw-bold text-dark mb-2">{story.title}</h6>
                                            <p className="text-muted small mb-0">{story.desc}</p>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPane>

                    {/* Latest Tab */}
                    <TabPane tabId="2">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Navigation]}
                        >
                            {latestStories.map((story, index) => (
                                <SwiperSlide key={index}>
                                    <Card className="border-0 shadow-sm h-100">
                                        <Image
                                            top
                                            src={story.img}
                                            alt={story.title}
                                            style={{ height: "180px", objectFit: "cover", borderRadius: '0px' }}
                                        />
                                        <CardBody>
                                            <h6 className="fw-bold text-dark mb-2">{story.title}</h6>
                                            <p className="text-muted small mb-0">{story.desc}</p>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
};

export default PopularStories;
