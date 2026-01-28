import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"; // Correct image import
import Image from 'next/image';
Image
// Sample Data
const projects = [
  {
    id: 1,
    title: "Ramky Lumina",
    subtitle: "Hosa Road, off Hosur Road, Bangalore",
    price: "₹72.2 Lac - ₹1.87 Cr",
    info: "1,2,3 BHK | Possession in Jun 2026",
    badge: "NEWLY LAUNCHED",
    img: proimg,
  },
  {
    id: 2,
    title: "Skyline Residency",
    subtitle: "Electronic City, Bangalore",
    price: "₹55.5 Lac - ₹1.20 Cr",
    info: "2,3 BHK | Ready to move",
    badge: "HOT",
    img: proimg,
  },
  {
    id: 3,
    title: "Greenview Heights",
    subtitle: "Whitefield, Bangalore",
    price: "₹65.0 Lac - ₹2.10 Cr",
    info: "2,3,4 BHK | Possession in Mar 2027",
    badge: "NEW",
    img: proimg,
  },
  {
    id: 4,
    title: "Urban Nest",
    subtitle: "Koramangala, Bangalore",
    price: "₹80.0 Lac - ₹3.00 Cr",
    info: "1,2,3 BHK | Ready to move",
    badge: "FEATURED",
    img: proimg,
  },
];


const NewLaunchesSection = () => {
    return (
        <div className="container my-5">
            <h4 className="fw-bold mb-2">Explore New Launches Nearby</h4>

            {/* Swiper Container */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                }}
                onInit={(swiper) => swiper.update()}  // Force Swiper to update on initialization
            >
                {projects.map((p) => (
                    <SwiperSlide key={p.id}>
                        <Card className="border-0 shadow-lg rounded overflow-hidden position-relative">
                            <div className="position-relative">
                                {/* Background Image */}
                                <Image
                                    src={p.img.src}
                                    alt={p.title}
                                    width={600}
                                    height={350}
                                    className="w-100 rounded img-fluid"
                                    style={{
                                        objectFit: "cover",
                                        filter: "brightness(60%)",
                                    }}
                                />

                                {/* Text Overlay */}
                                <div className="position-absolute bottom-0 start-0 w-100 text-white p-4">
                                    <span className="badge bg-warning text-dark mb-2">
                                        {p.badge}
                                    </span>
                                    <h5 className="fw-bold">{p.title}</h5>
                                    <p className="mb-1 text-light small">{p.subtitle}</p>
                                    <h6 className="fw-bold text-white">{p.price}</h6>
                                    <p className="small text-light mb-3">{p.info}</p>
                                    <div className="d-flex gap-2">
                                        <Button color="danger" className="rounded-pill px-4">
                                            Show Interest
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewLaunchesSection;
