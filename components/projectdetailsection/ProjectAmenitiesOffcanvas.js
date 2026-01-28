"use client";
import React from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

const ProjectAmenitiesOffcanvas = ({ isOpen, toggle, data }) => {
  return (
    <Offcanvas isOpen={isOpen} toggle={toggle} direction="end" className="w-75">
      <OffcanvasHeader toggle={toggle}>Project Amenities</OffcanvasHeader>
      <OffcanvasBody>
        <Row>
          {data.map((item) => (
            <Col xs="6" sm="6" md="4" lg="3" className="mb-3" key={item.id}>
              <Card className="text-center border-0 shadow-sm h-100">
                <CardBody>
                  <div className="mb-2">{item.icon}</div>
                  <p className="small text-muted mb-0">{item.title}</p>
                  <small>
                    <strong>{item.value}</strong>
                  </small>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ProjectAmenitiesOffcanvas;
