"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Input,
} from "reactstrap";
import { FaFilter } from "react-icons/fa";
import Link from "next/link";
import "../../assets/styles/navbarfilter.css";

const ProjectFilter = () => {
    const [modal, setModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Bangalore");
    const [selectedHotspots, setSelectedHotspots] = useState([]);
    const [selectedBHK, setSelectedBHK] = useState([]);
    const [budget, setBudget] = useState({ min: "", max: "" });
    const [possession, setPossession] = useState("");

    const toggleModal = () => setModal(!modal);

    const hotspots = [
        "Whitefield",
        "Devanhalli",
        "Thanisandra & Hennur",
        "Sarjapur & HSR",
        "Yelahanka",
        "JP Nagar",
        "Electronic City",
        "Kanakpura & Bannerghatta",
        "Budigere Cross",
        "Rest of Bangalore",
    ];

    const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5 BHK"];
    const possessionOptions = ["1 yr", "2 yrs", "3 yrs", "3 yrs+"];

    const handleHotspotToggle = (item) => {
        setSelectedHotspots((prev) =>
            prev.includes(item) ? prev.filter((h) => h !== item) : [...prev, item]
        );
    };

    const handleBhkToggle = (item) => {
        setSelectedBHK((prev) =>
            prev.includes(item) ? prev.filter((b) => b !== item) : [...prev, item]
        );
    };

    const clearAll = () => {
        setSelectedCity("Bangalore");
        setSelectedHotspots([]);
        setSelectedBHK([]);
        setBudget({ min: "", max: "" });
        setPossession("");
    };

    return (
        <>
            {/* Filter Navbar for desktop*/}
            <div
                className="filter-navbar sticky-top bg-light d-none d-sm-block py-1"
                style={{
                    color: "white",
                    padding: "6px 0",
                    zIndex: 1050,
                }}
            >
                <Container>
                    <Row>
                        <Col lg="12">
                            <Input type="search" placeholder="Search..." className="w-25" />
                            <span style={{ float: "right", marginTop: "-30px" }}>
                                <Link href="#" onClick={toggleModal} className="text-dark fw-bold">
                                    <FaFilter /> Filter
                                </Link>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>

           {/* for mobile  */}
            <div
                className="d-block d-sm-none py-1"
                style={{
                    color: "white",
                }}
            >
                <Container>
                    <Row>
                        <Col lg="12">
                            <Input type="search" placeholder="Search..." style={{width:'220px'}}/>
                            <span style={{ float: "right", marginTop: "-30px" }}>
                                <Link href="#" onClick={toggleModal} className="text-dark fw-bold">
                                    <FaFilter /> Filter
                                </Link>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Scrollable Modal */}
            <Modal isOpen={modal} toggle={toggleModal} scrollable size="lg">
                <ModalHeader toggle={toggleModal}>Filter Projects</ModalHeader>
                <ModalBody>
                    {/* Select City */}
                    <div className="mb-4">
                        <label className="fw-bold">Select City</label>
                        <Input
                            type="select"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option>Bangalore</option>
                            <option>Hyderabad</option>
                            <option>Pune</option>
                            <option>Chennai</option>
                        </Input>
                    </div>

                    {/* Hotspots */}
                    <div className="mb-4">
                        <label className="fw-bold">Hotspots</label>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                            {hotspots.map((spot) => (
                                <Button
                                    key={spot}
                                    outline
                                    color={selectedHotspots.includes(spot) ? "success" : "secondary"}
                                    onClick={() => handleHotspotToggle(spot)}
                                    size="sm"
                                >
                                    {spot}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-4">
                        <label className="fw-bold">Budget</label>
                        <div className="d-flex align-items-center gap-2">
                            <Input
                                type="number"
                                placeholder="Min"
                                value={budget.min}
                                onChange={(e) => setBudget({ ...budget, min: e.target.value })}
                            />
                            to
                            <Input
                                type="number"
                                placeholder="Max"
                                value={budget.max}
                                onChange={(e) => setBudget({ ...budget, max: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* BHK */}
                    <div className="mb-4">
                        <label className="fw-bold">BHK</label>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                            {bhkOptions.map((b) => (
                                <Button
                                    key={b}
                                    outline
                                    color={selectedBHK.includes(b) ? "success" : "secondary"}
                                    onClick={() => handleBhkToggle(b)}
                                    size="sm"
                                >
                                    {b}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Possession Within */}
                    <div className="mb-4">
                        <label className="fw-bold">Possession Within</label>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                            {possessionOptions.map((p) => (
                                <Button
                                    key={p}
                                    outline
                                    color={possession === p ? "success" : "secondary"}
                                    onClick={() => setPossession(p)}
                                    size="sm"
                                >
                                    {p}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                        <Button color="link" onClick={clearAll}>
                            Clear All
                        </Button>
                        <Button color="danger" onClick={toggleModal}>
                            View 159 Projects
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ProjectFilter;
