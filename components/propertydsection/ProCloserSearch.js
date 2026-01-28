"use client";
import React, { useRef } from "react";
import { Card, Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import "swiper/css";

const searchData = [
    {
        title: "Flats near Whitefield",
        links: [
            "Flats for rent in Whitefield",
            "Flats for rent in Kundalahalli",
            "Flats for rent in Brigade Metropolis",
            "Flats for rent in ITPL",
            "Flats for rent in AECS Layout Marathahalli",
            "Flats for rent in Doddanekundi",
            "Flats for rent in Panathur",
            "Flats for rent in Varthur",
            "Flats for rent in Thubarahalli",
            "Flats for rent in Hoodi",
        ],
    },
    {
        title: "3 BHK Flats near Whitefield",
        links: [
            "3 BHK Flats for rent in Whitefield",
            "3 BHK Flats for rent in Kundalahalli",
            "3 BHK Flats for rent in ITPL",
            "3 BHK Flats for rent in AECS Layout Marathahalli",
            "3 BHK Flats for rent in Doddanekundi",
            "3 BHK Flats for rent in Panathur",
            "3 BHK Flats for rent in Varthur",
            "3 BHK Flats for rent in Thubarahalli",
            "3 BHK Flats for rent in Hoodi",
            "3 BHK Flats for rent in Kadugodi",
        ],
    },
    {
        title: "5 BHK Flats near Whitefield",
        links: [
            "5 BHK Flats for rent in Whitefield",
            "5 BHK Flats for rent in Mahadevapura",
        ],
    },
    {
        title: "Property in Whitefield",
        links: [
            "House for rent in Whitefield",
            "Villa for rent in Whitefield",
            "Property for rent in Whitefield",
            "New Projects in Whitefield",
        ],
    },
      {
        title: "Property in Whitefieldfgf",
        links: [
            "House for rent in Whitefield",
            "Villa for rent in Whitefield",
            "Property for rent in Whitefield",
            "New Projects in Whitefield",
        ],
    },
];

const ProCloserSearch = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <Card data-aos="fade-up" className="position-relative border-0 my-3">
                <div className="bg-white  shadow-sm p-4">
                    <h4 className="fw-bold mb-4">Closer to Your Search</h4>


                    {/* Custom Navigation Buttons */}
                    <div
                        className="custom-prev"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        className="custom-next"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaArrowRight />
                    </div>
                    {/* Swiper Section */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {searchData.map((col, i) => (
                            <SwiperSlide key={i}>
                                <div>
                                    <h6 className="fw-semibold mb-3">{col.title}</h6>
                                    <ul className="list-unstyled mb-0">
                                        {col.links.map((link, index) => (
                                            <li key={index} className="mb-2">
                                                <Link
                                                    href="#"
                                                    className="text-decoration-none text-muted small"
                                                >
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Card>
        </>
    );
};

export default ProCloserSearch;
