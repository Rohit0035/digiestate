"use client";

import React from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import agentImg from "../assets/images/agent-pic.png";

const AgentCard = () => {
    return (
        <Card data-aos="zoom-in" className="shadow-sm mt-3 text-center border-0 rounded-3 agent-card">
            {/* Preferred Agent Badge */}
            {/* Agent Image */}
            <div className="mt-3 d-flex">
                <Image
                    src={agentImg}
                    alt="Agent"
                    width={80}
                    height={80}
                    className="rounded-circle me-2 border border-3 border-light shadow-sm"
                />
                <div className="text-start">
                    <h6 className="fw-bold mb-1">Rajendra</h6>
                    <div className="text-muted small">RMS Realtors</div>
                    <div className="text-muted small mb-3">Operating since 2008</div>
                </div>
            </div>
            {/* Agent Details */}
            <CardBody className="pt-2">
                <hr />

                {/* About Agent */}
                <div className="text-start">
                    <h6 className="fw-semibold small mb-2">About Agent</h6>
                    <ul className="list-unstyled mb-3">
                        <li className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="text-success me-2" />
                            <span className="small text-muted">Has maximum property options</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="text-success me-2" />
                            <span className="small text-muted">Is the top agent of the locality</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="text-success me-2" />
                            <span className="small text-muted">Is trusted by all users</span>
                        </li>
                    </ul>
                </div>

                {/* View Profile Button */}
                <Button
                     href="/agentdetail"
                    className=" text-white btn-danger rounded-pill fw-semibold w-100 py-2 mt-1 btn-sm"
                >
                    View Profile
                </Button>
            </CardBody>
        </Card>
    );
};

export default AgentCard;
