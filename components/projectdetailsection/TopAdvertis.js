"use client";
import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EnquiryModal from "../EnquiryModal";

const TopAdvertis = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Card className="mt-5 bg-light border-0" data-aos="fade-up" >
                <CardBody>
                    <h4 className="fw-bold">Top Advertisers</h4>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
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
                        {/* Advertiser 1 */}
                        <SwiperSlide>
                            <Card className="small" onClick={toggle} style={{ cursor: 'pointer' }}>
                                <CardBody>
                                    <CardTitle tag="h6">Sumadhura Infracon</CardTitle>
                                    <p>Whitefield, Bangalore <span><FaPhoneAlt size={30} className="rounded-circle bg-info p-2 ms-2" style={{ color: 'red' }} /></span></p>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                        {/* Advertiser 2 */}
                        <SwiperSlide>
                            <Card className="small" onClick={toggle} style={{ cursor: 'pointer' }}>
                                <CardBody>
                                    <CardTitle tag="h6">Adrez Advisors Pvt...</CardTitle>
                                    <p>Whitefield, Bangalore <span><FaPhoneAlt size={30} className="rounded-circle bg-info p-2 ms-2" style={{ color: 'red' }} /></span></p>
                                </CardBody>
                            </Card>
                        </SwiperSlide>

                        {/* Advertiser 3 */}
                        <SwiperSlide>
                            <Card className="small" onClick={toggle} style={{ cursor: 'pointer' }}>
                                <CardBody>
                                    <CardTitle tag="h6">SmartMind</CardTitle>
                                    <p>Whitefield, Bangalore <span><FaPhoneAlt size={30} className="rounded-circle bg-info p-2 ms-2 " style={{ color: 'red' }} /></span></p>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        {/* Advertiser 3 */}
                        <SwiperSlide>
                            <Card className="small" onClick={toggle} style={{ cursor: 'pointer' }}>
                                <CardBody>
                                    <CardTitle tag="h6">SmartMind</CardTitle>
                                    <p>Whitefield, Bangalore <span><FaPhoneAlt size={30} className="rounded-circle bg-info p-2 ms-2 " style={{ color: 'red' }} /></span></p>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </CardBody>
            </Card>


            {/*  EnquiryModal*/}
            <EnquiryModal modal={modal} toggle={toggle} />
        </>
    );
};
export default TopAdvertis;