"use client";
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      {/* ================= TOP CONTACT CARDS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="">
            {/* Call */}
            <Col md="4" data-aos="zoom-in" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
                <CardBody>
                  <FaPhoneAlt className="fs-1 text-warning mb-3" />
                  <h5 className="fw-bold">Call Us</h5>
                  <p className="text-muted mb-1">Speak with our property experts</p>
                  <h6 className="fw-semibold text-dark">+91 98765 43210</h6>
                </CardBody>
              </Card>
            </Col>

            {/* Email */}
            <Col md="4" data-aos="zoom-in" data-aos-delay="100" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
                <CardBody>
                  <FaEnvelope className="fs-1 text-warning mb-3" />
                  <h5 className="fw-bold">Email Us</h5>
                  <p className="text-muted mb-1">We reply within 24 hours</p>
                  <h6 className="fw-semibold text-dark">
                    info@digiestategroup.com
                  </h6>
                </CardBody>
              </Card>
            </Col>

            {/* Address */}
            <Col md="4" data-aos="zoom-in" data-aos-delay="200" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
                <CardBody>
                  <FaMapMarkerAlt className="fs-1 text-warning mb-3" />
                  <h5 className="fw-bold">Visit Office</h5>
                  <p className="text-muted mb-1">
                    Bailey Road, Patna, Bihar
                  </p>
                  <h6 className="fw-semibold text-dark">India – 800014</h6>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-5">
        <Container>
          <Row className=" align-items-stretch">
            {/* Contact Form */}
            <Col md="6" data-aos="zoom-in-right" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <CardBody>
                  <h4 className="fw-bold mb-2">
                    Get in <span className="text-warning">Touch</span>
                  </h4>
                  <p className="text-muted mb-4">
                    Fill out the form and our team will contact you shortly.
                  </p>

                  <Form>
                    <Row className="">
                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="text"
                            placeholder="Your Name"
                            className="rounded-3 bg-light border-0"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="email"
                            placeholder="Email Address"
                            className="rounded-3 bg-light border-0"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            className="rounded-3 bg-light border-0"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="text"
                            placeholder="Interested Location"
                            className="rounded-3 bg-light border-0"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="12" className="mt-2">
                        <FormGroup>
                          <Input
                            type="textarea"
                            rows="4"
                            placeholder="Your Message"
                            className="rounded-3 bg-light border-0"
                          />
                        </FormGroup>
                      </Col>

                      <Col md="12">
                        <Button
                          color="warning"
                          className="rounded-pill px-4 fw-semibold text-white"
                        >
                          Send Message <FaPaperPlane className="ms-2" />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            {/* Map */}
            <Col md="6" data-aos="zoom-in-left">
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <iframe
                  title="Digi Estate Group Location"
                  src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  loading="lazy"
                ></iframe>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
