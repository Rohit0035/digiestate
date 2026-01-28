"use client";
import React, { useState } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    FormGroup,
    Label,
} from "reactstrap";
import { FaRupeeSign } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const primaryColor = "#0d55a3";
const secondaryColor = "#1088c6";
const bgRight = "#eaf8f9";

const formatINR = (num) =>
    "₹" + Number(num || 0).toLocaleString("en-IN");

const EmiCalculator = () => {
    const [principal, setPrincipal] = useState(8000000);
    const [tenureYears, setTenureYears] = useState(30);
    const [annualRate, setAnnualRate] = useState(8.5);

    const [emiResult, setEmiResult] = useState({
        emi: 61513,
        totalInterest: 14144709,
    });

    const calculateEMI = (P, years, annualR) => {
        const n = years * 12;
        const r = annualR / 12 / 100;

        if (r === 0) {
            let emi = P / n;
            let interest = emi * n - P;
            return { emi: Math.round(emi), totalInterest: Math.round(interest) };
        }

        const x = Math.pow(1 + r, n);
        const emi = (P * r * x) / (x - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - P;

        return {
            emi: Math.round(emi),
            totalInterest: Math.round(totalInterest),
        };
    };

    const handleRecalculate = () => {
        const res = calculateEMI(Number(principal), Number(tenureYears), Number(annualRate));
        setEmiResult(res);
    };

    const data = [
        { name: "Principal Amount", value: Number(principal) },
        { name: "Interest Amount", value: emiResult.totalInterest },
    ];

    const COLORS = [primaryColor, secondaryColor];

    return (
        <div>
            <Card className="shadow-sm" style={{ borderRadius: 14 }}>
                <CardBody style={{ padding: 0 }}>
                    <Row className="g-0">
                        <Col md={6} className="p-3">
                            <div style={{ marginBottom: 12 }}>
                                <strong style={{ color: primaryColor, fontSize: 22 }}>
                                    SmartMind <span style={{ color: secondaryColor }}>Loans</span>
                                </strong>
                            </div>
                            <div style={{ maxWidth: 420 }}>
                                <FormGroup>
                                    <Label className="small text-muted">Loan Amount</Label>
                                    <div className="d-flex align-items-center">
                                        <FaRupeeSign className="me-2" />
                                        <Input
                                            type="number"
                                            value={principal}
                                            onChange={(e) => setPrincipal(e.target.value)}
                                            style={{
                                                border: "none",
                                                borderBottom: "1px solid #ccc",
                                                borderRadius: 0,
                                            }}
                                        />
                                    </div>
                                </FormGroup>
                                <Row>
                                    <Col md={7}>
                                        <FormGroup>
                                            <Label className="small text-muted">Loan Tenure</Label>
                                            <Input
                                                type="select"
                                                value={tenureYears}
                                                onChange={(e) => setTenureYears(e.target.value)}
                                                style={{
                                                    border: "none",
                                                    borderBottom: "1px solid #ccc",
                                                    borderRadius: 0,
                                                }}
                                            >
                                                {Array.from({ length: 35 }, (_, i) => i + 1).map((y) => (
                                                    <option key={y} value={y}>
                                                        {y} yrs
                                                    </option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label className="small text-muted">Interest Rate %</Label>
                                            <Input
                                                type="number"
                                                value={annualRate}
                                                onChange={(e) => setAnnualRate(e.target.value)}
                                                style={{
                                                    border: "none",
                                                    borderBottom: "1px solid #ccc",
                                                    borderRadius: 0,
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button
                                    onClick={handleRecalculate}
                                    className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2"
                                >
                                    Recalculate Your EMI
                                </Button>
                            </div>
                        </Col>

                        <Col
                            md={6}
                            className="p-3"
                            style={{
                                background: bgRight,
                                borderTopRightRadius: 14,
                                borderBottomRightRadius: 14,
                            }}
                        >
                            <div>
                                <div style={{ fontSize: 14, color: "#666" }}>
                                    You are Eligible for EMI Amount
                                </div>
                                <div style={{ fontSize: 28, fontWeight: 700 }}>
                                    {formatINR(emiResult.emi)}
                                </div>
                            </div>
                            <Row>
                                <Col md="6">
                                    <PieChart width={200} height={200}>
                                        <Pie
                                            data={data}
                                            dataKey="value"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={4}
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={index} fill={COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </Col>
                                <Col md="6">
                                    <div className="">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Principal Amount</span>
                                            <strong className="ms-auto">{formatINR(principal)}</strong>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Interest Amount</span>
                                            <strong className="ms-auto">{formatINR(emiResult.totalInterest)}</strong>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-3">
                                <hr />
                                <h6>Why SmartMind?</h6>
                                <ul style={{ fontSize: 14 }}>
                                    <li>Offers from 34+ Banks</li>
                                    <li>Lowest Interest Rate</li>
                                    <li>Highest Loan Value</li>
                                </ul>

                                <Button
                                    className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2"
                                >
                                    Check Bank Offers
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};

export default EmiCalculator;
