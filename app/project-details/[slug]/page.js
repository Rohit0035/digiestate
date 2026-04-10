"use client";
import React, { useState, useEffect } from "react";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import ImageGrid from "../../../components/projectdetailsection/ImageGrid";
import ProjectDetailInfo from "../../../components/projectdetailsection/ProjectDetailInfo";
import Amenities from "../../../components/projectdetailsection/Amenities";
import ProjectAbout from "../../../components/projectdetailsection/ProjectAbout";
import Ratings from "../../../components/projectdetailsection/Ratings";
import AdsFullBanner from "../../../components/projectdetailsection/AdsFullBanner";
import LegalCertificates from "../../../components/projectdetailsection/LegalCertificates";
import PropertyGallery from "../../../components/projectdetailsection/PropertyGallery";
import FaqSection from "../../../components/projectdetailsection/FaqSection";
import { getProjectBySlug, submitEnquiry } from "../../../lib/api"; // ✅ use submitEnquiry API
import { useParams } from "next/navigation";

const ProjectDetail = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loadingProject, setLoadingProject] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    agree: false,
    message: "",
    projectId: "", // we'll store project._id here
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch Project
  useEffect(() => {
    if (slug) fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    try {
      setLoadingProject(true);
      const response = await getProjectBySlug(slug);
      if (response.success) {
        setProject(response.data);
        setFormData((prev) => ({ ...prev, projectId: response.data._id }));
      }
    } catch (err) {
      console.error("Failed to fetch project:", err);
    } finally {
      setLoadingProject(false);
    }
  };

  // Sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Validation
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
    if (!formData.agree) newErrors.agree = "You must agree to Terms of Use";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
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
          countryCode: "+91",
          agree: false,
          message: "",
          projectId: project?._id || "",
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

  if (loadingProject) return null;
  if (!project) return null;

  return (
    <>
      <BreadcrumbNav />
      <ImageGrid project={project} />

      <section className="py-4" style={{ minHeight: "100vh" }}>
        <Container>
          <Row>
            {/* Main Content */}
            <Col lg="9" md="8" sm="12" className="pe-lg-4">
              <ProjectDetailInfo project={project} />
              <Amenities project={project} />
              <ProjectAbout project={project} />
              <Ratings project={project} />
              <AdsFullBanner project={project} />
              <LegalCertificates project={project} />
              <PropertyGallery project={project} />
              <AdsFullBanner project={project} />
              <FaqSection project={project} />
            </Col>

            {/* Sticky Sidebar Form */}
            <Col lg="3" md="4" sm="12">
              <div className="position-sticky" style={{ top: "100px" }}>
                <Card className="bg-light">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label className="fw-semibold small">Your Name</Label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          invalid={!!errors.name}
                          placeholder="Your Name"
                        />
                        <FormFeedback>{errors.name}</FormFeedback>
                      </FormGroup>

                      <FormGroup>
                        <Label className="fw-semibold small">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          invalid={!!errors.email}
                          placeholder="Email"
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                      </FormGroup>

                      <FormGroup>
                        <Label className="fw-semibold small">WhatsApp Number</Label>
                        <Row className="g-2 align-items-center">
                          <Col xs="4" sm="3">
                            <Input
                              type="select"
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleChange}
                            >
                              <option>+91</option>
                              <option>+1</option>
                              <option>+44</option>
                            </Input>
                          </Col>
                          <Col xs="8" sm="9">
                            <Input
                              type="text"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              invalid={!!errors.mobile}
                              placeholder="Your WhatsApp Number"
                            />
                            <FormFeedback>{errors.mobile}</FormFeedback>
                          </Col>
                        </Row>
                      </FormGroup>

                      <FormGroup>
                        <Label className="fw-semibold small">Message (Optional)</Label>
                        <Input
                          type="textarea"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message"
                        />
                      </FormGroup>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          id="agreeCheck"
                        />
                        <label className="form-check-label small" htmlFor="agreeCheck">
                          I Agree to <span className="text-danger">DigiEstate Group Terms of Use</span>
                        </label>
                        {errors.agree && <div className="text-danger small">{errors.agree}</div>}
                      </div>

                      {errors.apiError && <div className="text-danger mb-2">{errors.apiError}</div>}
                      {success && <div className="text-success mb-2">{success}</div>}

                      <Button
                        type="submit"
                        block
                        className="py-2 fw-bold btn-danger btn-sm rounded-pill"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Continue"}
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetail;