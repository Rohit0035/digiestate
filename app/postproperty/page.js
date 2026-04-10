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
  FormFeedback
} from "reactstrap";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import postimg from "../../assets/images/dg/postimg.png";
import { submitEnquiry } from "../../lib/api";

const PostPropertyCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    propertyType: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    if (!formData.propertyType)
      newErrors.propertyType = "Please select property type";

    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      setSuccess("");
      setErrors({});

      const response = await submitEnquiry(formData);

      if (response.success) {
        setSuccess("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          mobile: "",
          propertyType: "",
          location: ""
        });
      } else {
        setErrors({ apiError: response.message });
      }
    } catch (error) {
      setErrors({ apiError: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg="7" md="12" className="mb-3">
            <Row className="align-items-center">
              <Col
                md="6"
                className="text-center mb-3 mb-md-0 d-none d-sm-block"
              >
                <Image
                  src={postimg}
                  alt="Post Property"
                  width={230}
                  height={350}
                  className="img-fluid rounded-4"
                />
              </Col>

              <Col md="6">
                <h2 className="fw-bold mb-2">Post your property</h2>
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
          <Col lg="5" md="12">
            <Card className="border-0 shadow rounded-4">
              <CardBody className="p-4 bg-info bg-opacity-10 rounded-4">
                <h4 className="fw-bold mb-3">Let’s get you started</h4>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          invalid={!!errors.name}
                          placeholder="Enter your name"
                        />
                        <FormFeedback>
                          {errors.name}
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          invalid={!!errors.email}
                          placeholder="Enter your email"
                        />
                        <FormFeedback>
                          {errors.email}
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    <Col md="12">
                      <FormGroup>
                        <label className="fw-semibold mb-1">
                          WhatsApp Number
                        </label>
                        <div className="d-flex">
                          <Input
                            type="select"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="me-2"
                            style={{ maxWidth: "90px" }}
                          >
                            <option value="+91">+91</option>
                          </Input>
                          <Input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            invalid={!!errors.mobile}
                            placeholder="Enter mobile number"
                          />
                        </div>
                        <FormFeedback className="d-block">
                          {errors.mobile}
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">
                          Property Type
                        </label>
                        <Input
                          type="select"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          invalid={!!errors.propertyType}
                        >
                          <option value="">Select</option>
                          <option>Apartment</option>
                          <option>Independent House</option>
                          <option>Villa</option>
                          <option>Plot</option>
                          <option>Commercial</option>
                        </Input>
                        <FormFeedback>
                          {errors.propertyType}
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <label className="fw-semibold mb-1">Location</label>
                        <Input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          invalid={!!errors.location}
                          placeholder="Enter city"
                        />
                        <FormFeedback>
                          {errors.location}
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="d-flex align-items-center bg-white rounded-3 p-2 mb-3 shadow-sm">
                    <FaWhatsapp className="text-success fs-4 me-2" />
                    <small className="text-muted">
                      Get genuine enquiries directly on WhatsApp
                    </small>
                  </div>

                  {errors.apiError &&
                    <div className="text-danger mb-2">
                      {errors.apiError}
                    </div>}

                  {success &&
                    <div className="text-success mb-2">
                      {success}
                    </div>}

                  <Button
                    type="submit"
                    color="danger"
                    className="w-100 rounded-pill fw-semibold py-2"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Start Now"}
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
