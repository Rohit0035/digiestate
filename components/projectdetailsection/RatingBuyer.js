"use client";
import React, { useMemo } from "react";
import { Card, CardBody, Row, Col, Badge, Progress } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RatingBuyer = ({ project = {} }) => {
  const reviews = project?.reviews || [];

  /* ------------------ CALCULATIONS ------------------ */

  const { avgRating, ratingBreakdown } = useMemo(() => {
    if (!reviews.length) {
      return { avgRating: 0, ratingBreakdown: {} };
    }

    const total = reviews.length;

    const avg =
      reviews.reduce((sum, r) => sum + (r.overallRating || 0), 0) / total;

    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews.forEach(r => {
      const rounded = Math.round(r.overallRating || 0);
      if (breakdown[rounded] !== undefined) {
        breakdown[rounded]++;
      }
    });

    return {
      avgRating: Number(avg.toFixed(1)),
      ratingBreakdown: breakdown
    };
  }, [reviews]);

  /* ------------------ STAR RENDER ------------------ */

  const renderStars = rating => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={
          i < Math.round(rating)
            ? "text-warning me-1"
            : "text-muted me-1"
        }
      />
    ));
  };

  return (
    <Card className="border-0 bg-white">
      <CardBody>
        <Row>
          {/* LEFT SIDE - Overall Rating */}
          <Col lg="4">
            <Card className="border-0 p-2 small">
              <div className="d-flex">
                <div>
                  <h3 className="text-center mb-0">
                    {avgRating || 0}
                  </h3>

                  <div className="text-center">
                    <Badge color="transparent">
                      {renderStars(avgRating)}
                    </Badge>
                  </div>

                  <p className="text-center mb-0">
                    {reviews.length} Reviews
                  </p>
                </div>

                <Row className="ms-3 w-100">
                  <Col lg="12">
                    <h6 className="small fw-bold mb-2">
                      Overall Rating
                    </h6>
                  </Col>

                  {[5, 4, 3, 2, 1].map(num => {
                    const percent = reviews.length
                      ? (ratingBreakdown[num] / reviews.length) * 100
                      : 0;

                    return (
                      <Col lg="12" key={num}>
                        <span className="d-flex align-items-center mb-1">
                          <Progress
                            value={percent}
                            color="warning"
                            className="flex-grow-1 me-2"
                            style={{ height: "6px" }}
                          />
                          <span>{num}</span>
                        </span>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Card>
          </Col>

          {/* RIGHT SIDE - Latest Reviews Slider */}
          <Col lg="8">
            <Card className="border-0">
              <CardBody className="p-2">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 }
                  }}
                >
                  {reviews.slice(0, 6).map(review => (
                    <SwiperSlide key={review._id}>
                      <Card>
                        <CardBody>
                          <div className="d-flex">
                            <div
                              className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                              style={{
                                width: "60px",
                                height: "60px",
                                fontSize: "24px",
                                fontWeight: "bold"
                              }}
                            >
                              {review.reviewerName
                                ? review.reviewerName.charAt(0).toUpperCase()
                                : "G"}
                            </div>

                            <div>
                              <h6 className="mb-0">
                                {review.reviewerName ||
                                  "Guest User"}
                              </h6>
                              <small>
                                {review.reviewerType}
                              </small>
                            </div>

                            <div className="small ms-auto text-end">
                              <Badge color="transparent">
                              {renderStars(
                                review.overallRating
                              )}
                              </Badge>
                              <p className="small mb-0">
                                {new Date(
                                  review.createdAt
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3">
                            <h6 className="mb-1">
                              {review.title}
                            </h6>
                            <p className="small mb-0">
                              {review.comment}
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default RatingBuyer;