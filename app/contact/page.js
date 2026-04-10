"use client";
import React, { useState } from "react";
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
  FormFeedback,
} from "reactstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { submitEnquiry } from "../../lib/api"; // make sure to create this API function

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setSuccess("");
      setErrors({});

      const response = await submitEnquiry(formData);

      if (response.success) {
        setSuccess("Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
        });
      } else {
        setErrors({ apiError: response.message });
      }
    } catch (err) {
      setErrors({ apiError: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= TOP CONTACT CARDS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            {/* Call */}
            <Col md="4" className="mb-3">
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
            <Col md="4" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
                <CardBody>
                  <FaEnvelope className="fs-1 text-warning mb-3" />
                  <h5 className="fw-bold">Email Us</h5>
                  <p className="text-muted mb-1">We reply within 24 hours</p>
                  <h6 className="fw-semibold text-dark">info@digiestategroup.com</h6>
                </CardBody>
              </Card>
            </Col>

            {/* Address */}
            <Col md="4" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
                <CardBody>
                  <FaMapMarkerAlt className="fs-1 text-warning mb-3" />
                  <h5 className="fw-bold">Visit Office</h5>
                  <p className="text-muted mb-1">Bailey Road, Patna, Bihar</p>
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
          <Row className="align-items-stretch">
            {/* Contact Form */}
            <Col md="6" className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <CardBody>
                  <h4 className="fw-bold mb-2">
                    Get in <span className="text-warning">Touch</span>
                  </h4>
                  <p className="text-muted mb-4">
                    Fill out the form and our team will contact you shortly.
                  </p>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="rounded-3 bg-light border-0"
                            value={formData.name}
                            onChange={handleChange}
                            invalid={!!errors.name}
                          />
                          <FormFeedback>{errors.name}</FormFeedback>
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="rounded-3 bg-light border-0"
                            value={formData.email}
                            onChange={handleChange}
                            invalid={!!errors.email}
                          />
                          <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            className="rounded-3 bg-light border-0"
                            value={formData.mobile}
                            onChange={handleChange}
                            invalid={!!errors.mobile}
                          />
                          <FormFeedback>{errors.mobile}</FormFeedback>
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup className="mt-2">
                          <Input
                            type="text"
                            name="location"
                            placeholder="Interested Location"
                            className="rounded-3 bg-light border-0"
                            value={formData.location}
                            onChange={handleChange}
                            invalid={!!errors.location}
                          />
                          <FormFeedback>{errors.location}</FormFeedback>
                        </FormGroup>
                      </Col>

                      <Col md="12" className="mt-2">
                        <FormGroup>
                          <Input
                            type="textarea"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="rounded-3 bg-light border-0"
                            value={formData.message}
                            onChange={handleChange}
                            invalid={!!errors.message}
                          />
                          <FormFeedback>{errors.message}</FormFeedback>
                        </FormGroup>
                      </Col>

                      {errors.apiError && (
                        <Col md="12">
                          <div className="text-danger mb-2">{errors.apiError}</div>
                        </Col>
                      )}
                      {success && (
                        <Col md="12">
                          <div className="text-success mb-2">{success}</div>
                        </Col>
                      )}

                      <Col md="12">
                        <Button
                          type="submit"
                          color="warning"
                          className="rounded-pill px-4 fw-semibold text-white"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : <>Send Message <FaPaperPlane className="ms-2" /></>}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            {/* Map */}
            <Col md="6">
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