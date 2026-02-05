"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row, Input, InputGroup, InputGroupText } from "reactstrap";
import Link from "next/link";
import PropertyCard from "../../components/PropertyCard";
import { FaSortAmountDownAlt } from "react-icons/fa";
import FilterNavbar from "../../components/FilterNavbar";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

const ProjectListing = () => {
    const [sortOption, setSortOption] = useState("relevance");

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col lg="12">
                        <h3 className="pt-0 mb-0 fw-bold">Ongoing Projects</h3>
                    </Col>
                    {/* <ProjectFilter /> */}
                    <Col xs="12" sm="12" md="12" lg="12" className="mt-4">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </Col>
                </Row>
            </Container>
        </>

    );
};
export default ProjectListing;