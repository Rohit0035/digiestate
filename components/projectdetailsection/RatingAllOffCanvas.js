import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Card,
  CardBody,
  Row,
  Col,
  Spinner
} from "reactstrap";
import axios from "axios";
import { GetReviews } from "../../lib/api";

const RatingAllOffCanvas = ({ reviews = [], toggleCanvas, isOpen }) => {
  const renderStars = count => {
    return [...Array(5)].map((_, i) =>
      <FaStar
        key={i}
        className={`me-1 ${i < count ? "text-warning" : "text-muted"}`}
      />
    );
  };

  return (
    <Offcanvas
      isOpen={isOpen}
      toggle={toggleCanvas}
      direction="end"
      className="w-75"
    >
      <OffcanvasHeader toggle={toggleCanvas}>Project Ratings</OffcanvasHeader>

      <OffcanvasBody>
        <Row>
          {reviews.length === 0
            ? <p>No reviews found.</p>
            : reviews.map(review =>
                <Col
                  xs="12"
                  sm="6"
                  md="6"
                  lg="4"
                  className="mb-3"
                  key={review._id}
                >
                  <Card>
                    <CardBody>
                      <div className="d-flex">
                        <div
                          className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            fontSize: "18px",
                            fontWeight: "bold"
                          }}
                        >
                          {review.reviewerName
                            ? review.reviewerName.charAt(0).toUpperCase()
                            : "G"}
                        </div>

                        <div>
                          <h6 className="mb-0">
                            {review.reviewerName || "Guest User"}
                          </h6>
                          <small>
                            {review.reviewerType}
                          </small>
                        </div>

                        <div className="small ms-auto text-end">
                          <div>
                            {renderStars(Math.round(review.overallRating || 0))}
                          </div>
                          <p className="small mb-0">
                            {new Date(review.createdAt).toLocaleDateString()}
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
                </Col>
              )}
        </Row>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default RatingAllOffCanvas;
