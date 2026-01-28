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
                    {/* <Col lg="12" className="">
                        <div className="">
                            <Link href="/property" className="btn btn-danger btn-sm border-bottom me-2 mb-2 ">
                                Properties <span>(19,716)</span>
                            </Link>
                            <Link href="/agents" className="btn btn-danger btn-sm border-bottom mb-2 me-2">
                                Top Agents
                            </Link>
                            <Link href="/agents" className="btn btn-danger btn-sm border-bottom mb-2">
                                Top Agents
                            </Link>
                        </div>
                    </Col>
                    <Col lg="12">
                        <h3 className=" pt-4 ">19837 results | Flats for Rent in Bangalore</h3>
                    </Col> */}
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