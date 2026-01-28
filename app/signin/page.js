"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Row,
    Col,
} from "reactstrap";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt, FaSyncAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import authimg from "../../assets/images/auth-img.jpg"
import logo from "../../assets/images/logo.png"
const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="d-flex justify-content-center align-items-center py-5"
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8f9fa",
            }}
        >
            <Card
                className="shadow-sm border-0 overflow-hidden"  data-aos="fade-up"
                style={{
                    width: "900px",
                    maxWidth: "95%",
                    borderRadius: "10px",
                }}
            >
                <Row className="g-0">
                    {/* Left Side Image */}
                    <Col
                        md="6"
                        className="d-none d-md-block"
                        style={{
                            backgroundColor: "#f0f2f5",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
                            }}
                        ></div>
                        <Image
                            src={authimg}
                            alt="Signup Illustration"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Col>

                    {/* Right Side Form */}
                    <Col md="6" xs="12" className="bg-white" >
                        <CardBody className="p-4">
                            <div className="text-center mb-3">
                                <Image src={logo} alt="logo" className="st-logo ms-auto me-auto"/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-0 fw-bold">Sign In</h5>
                                <Link href="/" className="text-st fw-bold">
                                    Back to Home
                                </Link>
                            </div>
                            <hr />
                            <Form>
                                <FormGroup tag="fieldset" className="mb-3 text-center">
                                    <legend className="fs-6 mb-2">I am</legend>
                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        {["Buyer/Owner/Tenant", "Agent", "Builder"].map((role) => (
                                            <Label
                                                key={role}
                                                className="d-flex align-items-center small fw-semibold"
                                            >
                                                <Input type="radio" name="role" className="me-2" /> {role}
                                            </Label>
                                        ))}
                                    </div>
                                </FormGroup>

                                <FormGroup className="mb-3 position-relative">
                                    <FaEnvelope className="position-absolute text-muted" style={{ top: "10px", left: "10px" }} />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        style={{ paddingLeft: "35px" }}
                                    />
                                </FormGroup>
                                <div className="text-center mb-3">
                                    <small>-------------or-------------</small>
                                </div>
                                <FormGroup className="mb-3 d-flex align-items-center">
                                    <select
                                        className="form-select w-auto me-2 small"
                                        style={{ maxWidth: "100px" }}
                                    >
                                        <option>+91</option>
                                        <option>+1</option>
                                        <option>+44</option>
                                    </select>
                                    <Input
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="flex-grow-1"
                                    />
                                </FormGroup>

                                <FormGroup className="mb-3 position-relative">
                                    <FaLock className="position-absolute text-muted" style={{ top: "10px", left: "10px" }} />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        style={{ paddingLeft: "35px" }}
                                    />
                                    <Button
                                        color="link"
                                        className="position-absolute end-0 top-0 text-decoration-none text-muted small"
                                        style={{ padding: "0.5rem 1rem" }}
                                        onClick={() => setShowPassword(!showPassword)}
                                        type="button"
                                    >
                                        {showPassword ? "HIDE" : "SHOW"}
                                    </Button>
                                </FormGroup>



                                <FormGroup className="d-flex align-items-center mb-3">
                                    <Input type="checkbox" className="me-2" />
                                    <Label className="small mb-0">
                                        I agree to the{" "}
                                        <Link href="#" className="text-st text-decoration-none">
                                            T&amp;C, Privacy Policy
                                        </Link>{" "}
                                        &amp;{" "}
                                        <Link href="#" className="text-st text-decoration-none">
                                            Cookie Policy
                                        </Link>
                                    </Label>
                                </FormGroup>

                                {/* Captcha */}
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        className="border text-center me-2"
                                        style={{
                                            width: "100px",
                                            height: "38px",
                                            lineHeight: "38px",
                                            backgroundColor: "#e9ecef",
                                            fontFamily: "monospace",
                                            letterSpacing: "2px",
                                        }}
                                    >
                                        Y5gH6
                                    </div>
                                    <FaSyncAlt className="text-muted me-2" style={{ cursor: "pointer" }} />
                                    <Input
                                        type="text"
                                        placeholder="Enter code"
                                        style={{ maxWidth: "150px" }}
                                    />
                                </div>

                                <Button color="danger" className="w-100 fw-semibold">
                                    Sign In
                                </Button>

                                <p className="text-center mt-3 small">
                                    Not Sign Up?  please frist
                                    <Link href="/signup" className="text-st fw-semibold ms-1">
                                        Sign Up ,
                                    </Link>
                                    <Link href="/forgotpassword" className="text-st fw-semibold ms-1 me-3 ">
                                        <b>Forgot Passwoard</b>
                                    </Link>
                                </p>
                            </Form>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default SignUpPage;
