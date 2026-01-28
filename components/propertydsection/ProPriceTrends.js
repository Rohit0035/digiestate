"use client";
import React, { useState } from "react";
import { Container, Row, Col, Table, Badge, Card, CardBody } from "reactstrap";
import {
    FaCheckSquare,
    FaRegSquare,
    FaChartLine,
} from "react-icons/fa";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Area,
    AreaChart,
} from "recharts";

const ProPriceTrends = () => {
    const [selectedProjects, setSelectedProjects] = useState([
        "This Project",
        "Locality Average",
        "Mantri Manyata Lithos",
    ]);

    const projects = [
        {
            name: "This Project",
            rate: 18187,
            yield: "2.93%",
            color: "#f7c844",
            badge: "HIGHEST",
        },
        {
            name: "Locality Average",
            rate: 13755,
            yield: "3.79%",
            color: "#e85a4f",
        },
        {
            name: "Goviannu Jodidhar Atlantis",
            rate: 8322,
            yield: "-",
            color: "#b8a1d1",
        },
        {
            name: "Mantri Manyata Lithos",
            rate: 11045,
            yield: "3.95%",
            color: "#41b3a3",
        },
        {
            name: "Century Marvel",
            rate: 7669,
            yield: "LOWEST",
            color: "#ddd",
        },
    ];

    const data = [
        { month: "Nov'24", "This Project": 15000, "Locality Average": 12000, "Mantri Manyata Lithos": 9500, "Goviannu Jodidhar Atlantis": 8300, "Century Marvel": 7600 },
        { month: "Jan'25", "This Project": 16000, "Locality Average": 13000, "Mantri Manyata Lithos": 9800, "Goviannu Jodidhar Atlantis": 8320, "Century Marvel": 7650 },
        { month: "Mar'25", "This Project": 15500, "Locality Average": 12500, "Mantri Manyata Lithos": 9700, "Goviannu Jodidhar Atlantis": 8310, "Century Marvel": 7700 },
        { month: "May'25", "This Project": 17000, "Locality Average": 13500, "Mantri Manyata Lithos": 10200, "Goviannu Jodidhar Atlantis": 8350, "Century Marvel": 7730 },
        { month: "Jul'25", "This Project": 18000, "Locality Average": 14500, "Mantri Manyata Lithos": 10400, "Goviannu Jodidhar Atlantis": 8340, "Century Marvel": 7750 },
        { month: "Oct'25", "This Project": 18500, "Locality Average": 15000, "Mantri Manyata Lithos": 10600, "Goviannu Jodidhar Atlantis": 8320, "Century Marvel": 7760 },
    ];

    const toggleProject = (name) => {
        if (selectedProjects.includes(name)) {
            setSelectedProjects(selectedProjects.filter((p) => p !== name));
        } else {
            setSelectedProjects([...selectedProjects, name]);
        }
    };

    return (

        <>
            <Card className="my-3 border-0">
                <CardBody>
                    <h5 className="fw-bold mb-1">Price Trends in L and T Raintree Boulevard</h5>
                    <p className="text-muted small mb-4">
                        Other projects in Hebbal - Price Trends for Oct’25
                    </p>

                    <Row className="align-items-start">
                        {/* LEFT SIDE - TABLE */}
                        <Col lg="5" md="6" xs="12" className="mb-4 mb-lg-0">
                            <Table bordered hover responsive className="small">
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Avg Rate /sqft</th>
                                        <th>Rental Yield</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((p, i) => (
                                        <tr key={i}>
                                            <td
                                                className="d-flex align-items-center gap-2"
                                                onClick={() => toggleProject(p.name)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {selectedProjects.includes(p.name) ? (
                                                    <FaCheckSquare color={p.color} />
                                                ) : (
                                                    <FaRegSquare color="#ccc" />
                                                )}
                                                <span>{p.name}</span>
                                            </td>
                                            <td>
                                                ₹ {p.rate.toLocaleString()}{" "}
                                                {p.badge && (
                                                    <Badge color={p.badge === "HIGHEST" ? "success" : "danger"} pill>
                                                        {p.badge}
                                                    </Badge>
                                                )}
                                            </td>
                                            <td>{p.yield}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>

                        {/* RIGHT SIDE - CHART */}
                        <Col lg="7" md="6" xs="12">
                            <div className="bg-light rounded p-3 shadow-sm">
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {selectedProjects.map((p, i) => (
                                            <Area
                                                key={p}
                                                type="monotone"
                                                dataKey={p}
                                                stroke={projects.find((proj) => proj.name === p)?.color}
                                                fill={projects.find((proj) => proj.name === p)?.color}
                                                fillOpacity={0.3}
                                                activeDot={{ r: 6 }}
                                            />
                                        ))}
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </>
    );
};

export default ProPriceTrends;
