"use client";
import React, { useRef , useState } from "react";
import { Card, CardBody, Button, Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import EnquiryModal from "../EnquiryModal";
import Link from "next/link";

const properties = [
    {
        img: proimg,
        price: "₹ 5 Cr",
        sqftPrice: "₹ 15484 per sqft",
        title: "3 BHK Apartment 2360 sqft",
        location: "in Hebbal",
        society: "SNN Clermont",
        details: "3 Bath | Freehold",
    },
    {
        img: proimg,
        price: "₹ 3.8 Cr",
        sqftPrice: "₹ 13500 per sqft",
        title: "4 BHK Apartment 2800 sqft",
        location: "in Indiranagar",
        society: "Prestige Leela Residences",
        details: "4 Bath | Freehold",
    },
    {
        img: proimg,
        price: "₹ 2.5 Cr",
        sqftPrice: "₹ 12000 per sqft",
        title: "2 BHK Apartment 2100 sqft",
        location: "in Whitefield",
        society: "Brigade Cosmopolis",
        details: "2 Bath | Freehold",
    },
    {
        img: proimg,
        price: "₹ 6.2 Cr",
        sqftPrice: "₹ 16200 per sqft",
        title: "5 BHK Duplex 3800 sqft",
        location: "in Koramangala",
        society: "Sobha City",
        details: "5 Bath | Freehold",
    },
];

const PropertySale = () => {


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const swiperRef = useRef(null);

    return (
        <>

            <div className="my-5">
                <Row className="align-items-center mb-3">
                    <Col>
                        <h4 className="fw-bold">
                            Featured Properties
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
                    </Col>


                </Row>

                <Card data-aos="zoom-in-up">
                    <CardBody>
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
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={4}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                        >
                            {properties.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="border rounded-3 overflow-hidden shadow-sm property-card">
                                        <div className="position-relative">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                className="img-fluid w-100"
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                            <div
                                                className="position-absolute bottom-0 start-0 w-100 text-white p-2"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                                }}
                                            >
                                                <h6 className="mb-0 fw-bold">{item.price}</h6>
                                                <small>{item.sqftPrice}</small>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h6 className="fw-bold mb-1">{item.title}</h6>
                                            <p className="text-muted mb-1 small">{item.location}</p>
                                            <p className="mb-1 small">
                                                <strong>Society:</strong> {item.society}
                                            </p>
                                            <p className="text-muted mb-3 small">{item.details}</p>
                                            <Button
                                                onClick={toggle}
                                                className="rounded-pill text-white w-100 my-2 px-4 mb-2 btn-sm btn btn-danger"
                                            >
                                                Contact Agent
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Link href="#" className="text-st py-3  d-block">
                            See All Properties
                        </Link>
                    </CardBody>
                </Card>
            </div>

            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};

export default PropertySale;
