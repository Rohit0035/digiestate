"use client";
import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaCommentDots, FaFolderOpen, FaFileAlt } from "react-icons/fa";

const HeroGrid = () => {
  return (
    <section className="pt-3">
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }}>
            <Row >
              {/* Card 1 */}
              <Col xs="12" md="4" className="mb-2">
                <Card data-aos="zoom-in"
                  className="border-0 text-center px-2 py-1 rounded-5 shadow-sm h-100"
                  style={{ backgroundColor: "#fff7e6" }}
                >
                  <CardBody>
                    <div className="mb-3">
                      <FaCommentDots
                        size={60}
                        className="text-st"
                        style={{
                          background: "white",
                          padding: "10px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <Link href="#" className="text-decoration-none text-dark ">
                      <h5 className="mb-0">Expert Reviews &</h5>
                      <h5 className="fw-bold">Advice</h5>
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col xs="12" md="4" className="mb-2">
                <Card data-aos="zoom-in"
                  className="border-0 text-center px-2 py-1 rounded-5 shadow-sm h-100"
                  style={{ backgroundColor: "#eef8fa" }}
                >
                  <CardBody>
                    <div className="mb-3">
                      <FaFolderOpen
                        size={60}
                        className="text-st"
                        style={{
                          background: "white",
                          padding: "10px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <Link href="#" className="text-decoration-none text-dark h-100">
                      <h5 className="mb-0">Project Directory</h5>
                      <p className="text-muted small mb-0">
                        For All New Projects
                      </p>
                    </Link>
                  </CardBody>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col xs="12" md="4" className="mb-2">
                <Card data-aos="zoom-in"
                  className="border-0 text-center px-2 py-1 rounded-5 shadow-sm"
                  style={{ backgroundColor: "#ffeef0" }}
                >
                  <CardBody>
                    <div className="mb-3">
                      <FaFileAlt
                        size={60}
                        className="text-st"
                        style={{
                          background: "white",
                          padding: "10px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <Link href="#" className="text-decoration-none text-dark">
                      <h5 className="mb-0">Updated Project Reports from</h5>
                      <h5 className="fw-bold text-danger">RERA</h5>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroGrid;
