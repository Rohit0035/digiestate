"use client";
import React from "react";
import { Button, Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import Link from "next/link";
import Select from "react-select";
import AgentHorizontalCard from "../../components/AgentHorizontalCard";
const cityOptions = [
    { value: "chandigarh", label: "Chandigarh" },
    { value: "ghaziabad", label: "Ghaziabad" },
    { value: "newdelhi", label: "New Delhi" },
    { value: "durgapur", label: "Durgapur" },
    { value: "ranchi", label: "Ranchi" },
    { value: "surat", label: "Surat" },
];

const localityOptions = [
    { value: "all", label: "All Localities" },
    { value: "sector17", label: "Sector 17" },
    { value: "sector44", label: "Sector 44" },
    { value: "north", label: "North" },
    { value: "south", label: "South" },
];

const Agents = () => {

    const customStyles = {
        control: (base) => ({
            ...base,
            minHeight: "32px",
            height: "32px",
            fontSize: "14px",
            borderColor: "#ddd",
            boxShadow: "none",
            "&:hover": { borderColor: "#e43f3f" },
        }),
        valueContainer: (base) => ({
            ...base,
            height: "32px",
            padding: "0 6px",
        }),
        indicatorsContainer: (base) => ({
            ...base,
            height: "32px",
        }),
        menu: (base) => ({
            ...base,
            zIndex: 9999,
        }),
    };
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col lg="1">

                    </Col>
                    <Col lg="10">
                        <Row>
                            <Col lg="12" className="">
                                <div className="">
                                    <Link href="/agents" className=" active me-2 btn btn-light btn-sm border-bottom ">
                                        Top Agents
                                    </Link>
                                    <Link href="/property" className="btn btn-light btn-sm border-bottom me-2 ">
                                        Properties <span>(19,716)</span>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg="12" className="bg-light mt-3 rounded py-2">
                                <Row>
                                    <Col md="4" className="mb-xs-3">
                                        Agents in Bangalore Who Can Help You
                                    </Col>
                                    <Col md="2">
                                        <span className="fw-bold me-2">Filters:</span>
                                    </Col>
                                    <Col md="6" className="">
                                        <Row> 
                                            <Col xs="12" sm="12" md="4" lg="4" className="mb-sm-0 mb-2"> 
                                                 <Input type="serach" placeholder="serach..." style={{height:'35px'}} />
                                            </Col>
                                            <Col>
                                                <Select
                                                    options={cityOptions}
                                                    defaultValue={cityOptions[0]}
                                                    styles={customStyles}
                                                    isSearchable={false}
                                                />
                                            </Col>
                                            <Col>
                                                <Select
                                                    options={localityOptions}
                                                    defaultValue={localityOptions[0]}
                                                    styles={customStyles}
                                                    isSearchable={false}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" className="mt-3">
                               <AgentHorizontalCard />
                            </Col>
                            <Col lg="12" className="mt-3">
                               <AgentHorizontalCard />
                            </Col>
                            <Col lg="12" className="mt-3">
                               <AgentHorizontalCard />
                            </Col>
                            <Col lg="12" className="mt-3">
                               <AgentHorizontalCard />
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col lg="1">

                    </Col>
                </Row>
            </Container>
        </>

    );
};
export default Agents;