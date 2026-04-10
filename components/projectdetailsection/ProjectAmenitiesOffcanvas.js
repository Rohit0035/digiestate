"use client";
import React from "react";
import { FaCheck, FaTree } from "react-icons/fa";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

const ProjectAmenitiesOffcanvas = ({ isOpen, toggle, amenities = [] }) => {
  return (
    <Offcanvas isOpen={isOpen} toggle={toggle} direction="end" className="w-75">
      <OffcanvasHeader toggle={toggle}>Project Amenities</OffcanvasHeader>
      <OffcanvasBody>
        <Row>
          {amenities.map(item =>
            <Col xs="6" sm="6" md="4" lg="3" className="mb-3" key={item.id}>
              <Card className="text-center border-0 shadow-sm h-100">
                <CardBody>
                  <div className="mb-2">
                    <FaCheck
                      size={28}
                      className="bg-light p-2 rounded-circle text-st"
                    />
                  </div>
                  <p className="small text-muted mb-0">
                    {item}
                  </p>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ProjectAmenitiesOffcanvas;
