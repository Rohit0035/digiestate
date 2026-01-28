"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import RatingInfoSidebar from "./RatingInfoSidebar";
import ShowMoreReviewsSidebar from "./ShowMoreReviewsSidebar";
import ReviewWriteSidebar from "./ReviewWriteSidebar";

const data = [
    {
        title: "Project Infrastructure",
        rating: "2.5/5",
        items: ["Water Supply", "Main Electricity", "Power Backup", "Sewage Handling"],
        stars: 3,
    },
    {
        title: "Project Amenities",
        rating: "2/5",
        items: ["Sports Facility", "Parking Facility", "Garden of Greenery", "Shops within Premises"],
        stars: 2,
    },
    {
        title: "Project Maintenance",
        rating: "1/5",
        items: ["Construction Quality", "Common Area", "Availability of Services", "24/7 Security"],
        stars: 1,
    }
];


const ProReviews = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [showReviewSidebar, setShowReviewSidebar] = useState(false);

    const toggleReviewSidebar = () =>
        setShowReviewSidebar(!showReviewSidebar);

    const [isShowMoreSidebarOpen, setIsShowMoreSidebarOpen] = useState(false);

    const toggleShowMoreSidebar = () =>
        setIsShowMoreSidebarOpen(!isShowMoreSidebarOpen);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


    // helper to render stars
    const renderStars = (count) => (
        <>
            {[...Array(5)].map((_, i) =>
                i < count ? (
                    <FaStar key={i} className="text-warning me-1" />
                ) : (
                    <FaRegStar key={i} className="text-warning me-1" />
                )
            )}
        </>
    );
    return (
        <>
            <Card className="border-0 mt-4">
                <CardBody >
                    <h4 className="fw-bold mb-0">L&T Raintree Boulevard Reviews & Ratings</h4>
                    <small className="text-sn c">
                        <Link href="javascript:void(0);" onClick={toggleSidebar} className=" small text-st">
                            !Know how its calculated
                        </Link>
                    </small>
                    <Row className="mt-4">
                        {data.map((section, index) => (
                            <Col xs="12" sm="12" md="6" lg="4" key={index}>
                                <Card className="border rounded-3 shadow-sm h-100">
                                    <CardBody>
                                        <h6 className="fw-semibold st-txt-o mb-3">
                                            {section.title}
                                            <span className="float-end">{section.rating}</span>
                                        </h6>
                                        <ul className="list-unstyled mb-0">
                                            {section.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="d-flex justify-content-between align-items-center mb-2 small text-muted"
                                                >
                                                    <span>{item}</span>
                                                    <span>{renderStars(section.stars)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-3">
                        <Col lg="12">
                            <Button onClick={toggleShowMoreSidebar} className="rounded-pill btn-danger   btn btn-danger btn-sm me-2">
                                Show all 17 Reviews

                            </Button>
                            <Button onClick={toggleReviewSidebar} className="rounded-pill btn-danger   btn btn-danger btn-sm">
                                Write a review
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* Sidebar for Rating Info */}
            <RatingInfoSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

            {/* show more review sidbar */}

            <ShowMoreReviewsSidebar
                isOpen={isShowMoreSidebarOpen}
                toggle={toggleShowMoreSidebar}
            />

            <ReviewWriteSidebar
                isOpen={showReviewSidebar}
                toggle={toggleReviewSidebar}
            />

        </>

    );
};
export default ProReviews;