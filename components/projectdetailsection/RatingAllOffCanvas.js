import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button, Progress, Row, Card, CardBody, Col } from "reactstrap";

const RatingAllOffCanvas = ({ ratings, toggleCanvas, isOpen }) => {



    return (
        <Offcanvas isOpen={isOpen} toggle={toggleCanvas} direction="end" className="w-75">
            <OffcanvasHeader toggle={toggleCanvas}>
                Project Ratings
            </OffcanvasHeader>
            <OffcanvasBody>
                <Row>
                    <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{ width: "40px", height: "40px", fontSize: "24px", fontWeight: "bold" }}>
                                        E
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">Guest User
                                        </h6>
                                        <small>Owner</small>
                                    </div>
                                    <div className="small ms-auto">
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <p className="small">16/03/2021</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                    <p className="small">
                                        East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{ width: "40px", height: "40px", fontSize: "24px", fontWeight: "bold" }}>
                                        E
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">Guest User
                                        </h6>
                                        <small>Owner</small>
                                    </div>
                                    <div className="small ms-auto">
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <p className="small">16/03/2021</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                    <p className="small">
                                        East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{ width: "40px", height: "40px", fontSize: "24px", fontWeight: "bold" }}>
                                        E
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">Guest User
                                        </h6>
                                        <small>Owner</small>
                                    </div>
                                    <div className="small ms-auto">
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <p className="small">16/03/2021</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                    <p className="small">
                                        East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4" className="mb-2">
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{ width: "40px", height: "40px", fontSize: "24px", fontWeight: "bold" }}>
                                        E
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">Guest User
                                        </h6>
                                        <small>Owner</small>
                                    </div>
                                    <div className="small ms-auto">
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <FaStar className="text-warning me-1" />
                                        <p className="small">16/03/2021</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                    <p className="small">
                                        East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default RatingAllOffCanvas;
