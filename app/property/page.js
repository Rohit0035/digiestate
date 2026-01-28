"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row, Input, InputGroup, InputGroupText  } from "reactstrap";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import Link from "next/link";
import PropertyCard from "../../components/PropertyCard";
import AgentCard from "../../components/AgentCard";
import { FaSortAmountDownAlt } from "react-icons/fa";
import FilterNavbar from "../../components/FilterNavbar";

const PropertyList = () => {
      const [sortOption, setSortOption] = useState("relevance");

    return (
        <>
            <BreadcrumbNav className="mb-0" />
            <FilterNavbar/>
            <Container>
                <Row>
                    <Col lg="9">
                        <Row>
                            <Col lg="12" className="">
                                <div className="">
                                    <Link href="/property" className="btn btn-light btn-sm border-bottom me-2 mb-2 ">
                                        Properties <span>(19,716)</span>
                                    </Link>
                                    <Link href="/agents" className="btn btn-light btn-sm border-bottom mb-2">
                                        Top Agents
                                    </Link>
                                    <span style={{float:'right'}}>
                                        <InputGroup className="rounded-pill shadow-sm bg-light" style={{ width: "150px" }}>
                                            <InputGroupText className="bg-light border-0 rounded-start-pill ps-3 small">
                                                <FaSortAmountDownAlt className="text-muted" />
                                            </InputGroupText>
                                            <Input
                                                type="select"
                                                value={sortOption}
                                                onChange={(e) => setSortOption(e.target.value)}
                                                className="border-0 bg-light small fw-semibold text-dark rounded-end-pill small"
                                                style={{fontSize:'12px'}}
                                            >
                                                <option value="relevance">Sort by: Relevance</option>
                                                <option value="priceLowHigh">Price - Low to High</option>
                                                <option value="priceHighLow">Price - High to Low</option>
                                                <option value="recent">Most Recent</option>
                                                <option value="rateLowHigh">Rate/sqft - Low to High</option>
                                                <option value="rateHighLow">Rate/sqft - High to Low</option>
                                            </Input>
                                        </InputGroup>
                                    </span>
                                </div>
                            </Col>
                            <Col lg="12">
                                <h3 className=" pt-4 ">19837 results | Flats for Rent in Bangalore</h3>
                            </Col>
                            <Col xs="12" sm="12" md="14" lg="12">
                                <PropertyCard />
                                <PropertyCard />
                                <PropertyCard />
                                <PropertyCard />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3">
                        <div className=" text-center bg-light p-2">
                            <Card className="border-0 " style={{ backgroundColor: '#e1788536' }}>
                                <CardBody>
                                    <h4>
                                        Sell/Rent your Property with us for Free
                                    </h4>
                                </CardBody>
                            </Card>

                            <Card className="border-0 ">
                                <CardBody>
                                    <p>
                                        Sell/Rent your Property with us for Free
                                    </p>
                                    <Button className="btn btn-danger w-100 rounded-pill">
                                        Post Property
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className=" text-center bg-light p-2 mt-3">
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="12">
                                    <AgentCard />
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="12">
                                    <AgentCard />
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="12">
                                    <AgentCard />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
};
export default PropertyList;