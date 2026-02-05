"use client";

import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

// Import your image
import proimg from "../../assets/images/pro-1.jpg";

// Gallery media (images + video)
const media = [
    {
        type: "image",
        src: proimg.src,
        alt: "Building View",
    },
    {
        type: "image",
        src: proimg.src,
        alt: "Interior Design",
    },
    {
        type: "image",
        src: proimg.src,
        alt: "Reception Area",
    },
    {
        type: "image",
        src: proimg.src,
        alt: "Reception Area",
    },

];

const PropertyGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    // Prepare slides for Lightbox
    const slides = media.map((item) =>
        item.type === "video"
            ? {
                type: "video",
                sources: [{ src: item.src, type: "video/mp4" }],
                poster: item.poster,
            }
            : { src: item.src }
    );

    return (
        <section className="pt-0">
            <Card className="border-0 bg-white shadow-sm">
                <CardBody>
                    {/* Section Header */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold mb-0">
                            Sumadhura Capitol Residences Photos & Videos
                        </h5>
                    </div>

                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {media.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="rounded overflow-hidden shadow-sm position-relative"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        setPhotoIndex(index);
                                        setLightboxOpen(true);
                                    }}
                                >
                                    {item.type === "image" ? (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={400}
                                            height={250}
                                            className="img-fluid rounded"
                                        />
                                    ) : (
                                        <video
                                            src={item.src}
                                            poster={item.poster}
                                            width="100%"
                                            height="250"
                                            className="rounded"
                                            muted
                                            loop
                                            autoPlay
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </CardBody>
            </Card>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={photoIndex}
                slides={slides}
            />
        </section>
    );
};

export default PropertyGallery;
