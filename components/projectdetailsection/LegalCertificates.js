"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    Collapse,
} from "reactstrap";
import { FaFileAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import certificate from "../../assets/images/sanction-letter.jpg";
import Image from "next/image";
import Link from "next/link";

const LegalCertificates = () => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [collapse, setCollapse] = useState(false);

    const toggleCollapse = () => setCollapse(!collapse);

    return (
        <section className="pt-0">
            {/* -------- HEADER -------- */}
            <Card className="border-0 bg-light p-3" data-aos="fade-up">
                <h5 className="fw-bold mb-1 d-flex align-items-center">
                    <FaFileAlt className="me-2 text-danger" /> Legal Certificates{" "}
                    <span className="badge bg-danger ms-2">Only on MB</span>
                </h5>
                <p className="text-muted small mb-0">
                    Last Updated 22 Aug’25 | Approved by RERA - With PRM/KA/RERA/1251/446/PR/051022/007735
                </p>

                {/* -------- CERTIFICATE ROW -------- */}
                <Row className="mt-3 align-items-start">
                    {[...Array(2)].map((_, i) => (
                        <Col key={i} md="3" sm="6" xs="12">
                            <Card className="border-0 shadow-sm">
                                <div
                                    className="position-relative"
                                    onClick={() => setOpenLightbox(true)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Image
                                        src={certificate}
                                        alt="Commencement Certificate"
                                        className="rounded"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <CardBody className="text-center p-2">
                                    <Button
                                        color="danger"
                                        size="sm"
                                        onClick={() => setOpenLightbox(true)}
                                    >
                                        View
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}

                    <Col md="12" className="d-flex align-items-center mt-4">
                        <Button color="link" className="p-0 text-danger fw-bold btn-sm">
                            View All (8) →
                        </Button>
                    </Col>
                </Row>
            </Card>

            {/* ✅ FIXED LIGHTBOX */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={[{ src: certificate.src }]} // ✅ use imported image source
            />

            {/* -------- HIGHLIGHTS -------- */}
            <Card className="border mt-4" data-aos="fade-up">
                <CardBody>
                    <h5 className="fw-bold mb-3">
                        Sumadhura Capitol Residences Highlights
                    </h5>

                    <Row className="gy-2 small">
                        <Col md="6">
                            <strong>Multiple RERA Numbers:</strong> No
                        </Col>
                        <Col md="6">
                            <strong>Legal Title:</strong> Clear (no reported legal encumbrance)
                        </Col>
                        <Col md="6">
                            <strong>Financial Encumbrance:</strong> Not explicitly stated
                        </Col>
                        <Col md="6">
                            <strong>Litigation Details:</strong> No litigation reported
                        </Col>
                        <Col md="6">
                            <strong>Past Experience:</strong> Renowned developer with a strong record
                        </Col>
                        <Col md="6">
                            <strong>Sanctioned Buildings:</strong> 3B + G + 13
                        </Col>
                        <Col md="6">
                            <strong>Development Status:</strong> Under construction
                        </Col>
                        <Col md="6">
                            <strong>Unit Sizes:</strong> 3 & 4 BHK luxury apartments (1835–2150 sq.ft)
                        </Col>
                    </Row>

                    {/* COLLAPSE SECTION */}
                    <Collapse isOpen={collapse}>
                        <Row className="mt-3 gy-2 small">
                            <Col md="6">
                                <strong>Super Built-Up Area:</strong> 1835–2151 sq.ft
                            </Col>
                            <Col md="6">
                                <strong>Floor Plans:</strong> 3 BHK and 4 BHK floor plans available
                            </Col>
                            <Col md="6">
                                <strong>Amenities:</strong> Clubhouse, 24x7 power backup, covered parking, gym, swimming pool
                            </Col>
                            <Col md="6">
                                <strong>Recreation Space:</strong> Library, cricket pitch, badminton court, squash court
                            </Col>
                        </Row>
                    </Collapse>

                    <div className="text-start mt-3">
                        <Button
                            color="link"
                            className="text-st fw-bold p-0"
                            onClick={toggleCollapse}
                        >
                            {collapse ? (
                                <>
                                    View Less <FaChevronUp />
                                </>
                            ) : (
                                <>
                                    View More <FaChevronDown />
                                </>
                            )}
                        </Button>
                    </div>
                </CardBody>
            </Card>

            {/* Footer */}
            <div className="text-danger fw-bold small mt-3">
                <Link href="#" className="text-st ">
                    Sumadhura Capitol Residences RERA Details →

                </Link>
            </div>
        </section>
    );
};

export default LegalCertificates;
