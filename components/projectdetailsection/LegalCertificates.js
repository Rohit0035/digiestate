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
import Image from "next/image";
import { IMAGE_URL } from "../../utils/api-config";

const LegalCertificates = ({ project = {} }) => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [collapse, setCollapse] = useState(false);

    const toggleCollapse = () => setCollapse(!collapse);

    const certificates = project?.legalDocuments || [];

    return (
        <section className="pt-0">
            {/* -------- HEADER (STATIC) -------- */}
            <Card className="border-0 bg-light p-3">
                <h5 className="fw-bold mb-1 d-flex align-items-center">
                    <FaFileAlt className="me-2 text-danger" /> Legal Certificates{" "}
                    <span className="badge bg-danger ms-2">Only on DigiEstate</span>
                </h5>
                <p className="text-muted small mb-0">
                    Last Updated 22 Aug’25 | Approved by RERA - With
                    PRM/KA/RERA/1251/446/PR/051022/007735
                </p>

                {/* -------- DYNAMIC CERTIFICATE ROW -------- */}
                <Row className="mt-3 align-items-start">
                    {certificates.slice(0, 4).map((item, index) => (
                        <Col key={index} md="3" sm="6" xs="12">
                            <Card className="border-0 shadow-sm">
                                <div
                                    className="position-relative"
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setOpenLightbox(true);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Image
                                        src={`${IMAGE_URL}${item.image}`}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="rounded"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <CardBody className="text-center p-2">
                                    <Button
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setOpenLightbox(true);
                                        }}
                                    >
                                        View
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}

                    {certificates.length > 4 && (
                        <Col md="12" className="d-flex align-items-center mt-4">
                            <Button
                                color="link"
                                className="p-0 text-danger fw-bold btn-sm"
                                onClick={() => setOpenLightbox(true)}
                            >
                                View All ({certificates.length}) →
                            </Button>
                        </Col>
                    )}
                </Row>
            </Card>

            {/* -------- LIGHTBOX (DYNAMIC) -------- */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                index={activeIndex}
                slides={certificates.map((item) => ({
                    src: item.image,
                }))}
            />

            {/* -------- HIGHLIGHTS (STATIC - UNCHANGED) -------- */}
            {/* -------- HIGHLIGHTS -------- */}
            <Card className="border mt-4">
                <CardBody>
                    <h5 className="fw-bold mb-3">
                        Sumadhura Capitol Residences Highlights
                    </h5>

                    {project?.highlights?.length > 0 && (
                        <>
                            <Row className="gy-2 small">
                                {/* Show first 6 */}
                                {project.highlights.slice(0, 6).map((item, index) => (
                                    <Col key={index} md="6">
                                        <strong>{item}</strong>
                                    </Col>
                                ))}
                            </Row>

                            {/* Show remaining inside collapse */}
                            {project.highlights.length > 6 && (
                                <>
                                    <Collapse isOpen={collapse}>
                                        <Row className="mt-3 gy-2 small">
                                            {project.highlights.slice(6).map((item, index) => (
                                                <Col key={index} md="6">
                                                    <strong>{item}</strong>
                                                </Col>
                                            ))}
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
                                </>
                            )}
                        </>
                    )}
                </CardBody>
            </Card>
        </section>
    );
};

export default LegalCertificates;