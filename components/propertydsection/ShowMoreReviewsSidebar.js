"use client";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

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
  },
];

const ShowMoreReviewsSidebar = ({ isOpen, toggle }) => {
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
    <Offcanvas
      isOpen={isOpen}
      toggle={toggle}
      direction="end"
      className="w-75 side-st-top"
     
    >
      <OffcanvasHeader toggle={toggle}>
        Show More Reviews
      </OffcanvasHeader>
      <hr />
      <OffcanvasBody>
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
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ShowMoreReviewsSidebar;
