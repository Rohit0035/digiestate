"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaUser,
  FaBuilding,
  FaHome,
} from "react-icons/fa";
import Image from "next/image";
import postimg from "../../assets/images/dg/postimg.png"

const PostPropertyCTA = () => {
  const [userType, setUserType] = useState("Owner");
  const [purpose, setPurpose] = useState("Sell");

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg="7" md="12"  data-aos="fade-up" className="mb-3">
            <Row className="align-items-center">
             
              <Col md="6" className="text-center mb-3 mb-md-0 d-none d-sm-block">
                <Image
                  src={postimg}
                  alt="Post Property"
                  width={230}
                  height={350}
                  className="img-fluid rounded-4 "
                />
              </Col>

               <Col md="6">
                <h2 className="fw-bold mb-2">
                  Post your property
                </h2>
                <h4 className="fw-semibold mb-3">
                  Sell or Rent online for{" "}
                  <span className="text-success">Free</span>
                </h4>

                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="text-success me-2 mt-1" />
                    Reach thousands of verified buyers & tenants
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="text-success me-2 mt-1" />
                    Faster closure with premium visibility
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="text-success me-2 mt-1" />
                    Pricing & market guidance from experts
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* RIGHT FORM */}
          <Col  lg="5" md="12" data-aos="fade-up" data-aos-delay="150">
            <Card className="border-0 shadow rounded-4">
              <CardBody className="p-4 bg-info bg-opacity-10 rounded-4">
                <h4 className="fw-bold mb-3">Let’s get you started</h4>
                <Form>
                  <Row>
                    {/* NAME */}
                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Full Name</label>
                        <Input type="text" placeholder="Enter your name" />
                      </FormGroup>
                    </Col>

                    {/* EMAIL */}
                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Email Address</label>
                        <Input type="email" placeholder="Enter your email" />
                      </FormGroup>
                    </Col>

                    {/* CONTACT */}
                    <Col md="12">
                      <FormGroup>
                        <label className="fw-semibold mb-1">WhatsApp Number</label>
                        <div className="d-flex">
                          <Input
                            type="select"
                            className="me-2"
                            style={{ maxWidth: "90px" }}
                          >
                            <option>+91</option>
                          </Input>
                          <Input type="tel" placeholder="Enter mobile number" />
                        </div>
                      </FormGroup>
                    </Col>

                    {/* PROPERTY TYPE */}
                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Property Type</label>
                        <Input type="select">
                          <option>Select</option>
                          <option>Apartment</option>
                          <option>Independent House</option>
                          <option>Villa</option>
                          <option>Plot</option>
                          <option>Commercial</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    {/* CITY */}
                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Location</label>
                        <Input type="text" placeholder="Enter city" />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* WHATSAPP INFO */}
                  <div className="d-flex align-items-center bg-white rounded-3 p-2 mb-3 shadow-sm">
                    <FaWhatsapp className="text-success fs-4 me-2" />
                    <small className="text-muted">
                      Get genuine enquiries directly on WhatsApp
                    </small>
                  </div>

                  {/* CTA */}
                  <Button
                    color="danger"
                    className="w-100 rounded-pill fw-semibold py-2"
                  >
                    Start Now
                  </Button>
                </Form>


              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PostPropertyCTA;
