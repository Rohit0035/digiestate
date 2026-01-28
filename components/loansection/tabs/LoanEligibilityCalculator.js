"use client";
import React, { useState } from "react";
import { Row, Col, Input, Button, FormGroup, Label, Card, CardBody } from "reactstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

const LoanEligibilityCalculator = () => {
    const [income, setIncome] = useState(50000);
    const [ongoingEmi, setOngoingEmi] = useState(0);
    const [tenure, setTenure] = useState(30);
    const [rate, setRate] = useState(8.45);

    const [eligibleAmount, setEligibleAmount] = useState(4572000);
    const [monthlyEmi, setMonthlyEmi] = useState(35000);

    const calculateEligibility = () => {
        const disposable = income - ongoingEmi;
        const amount = disposable * 60;
        setEligibleAmount(amount);
        setMonthlyEmi(disposable * 0.7);
    };

    return (
        <div>
            <Card className="shadow-sm" style={{ borderRadius: 14 }}>
                <CardBody>
                    <Row>
                        <Col md="6" className="mb-4">
                            <FormGroup>
                                <Label>Net Monthly Income</Label>
                                <Input
                                    type="number"
                                    value={income}
                                    onChange={(e) => setIncome(Number(e.target.value))}
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #ccc",
                                        borderRadius: 0,
                                    }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Ongoing EMI's</Label>
                                <Input
                                    type="number"
                                    value={ongoingEmi}
                                    onChange={(e) => setOngoingEmi(Number(e.target.value))}
                                    style={{
                                        border: "none",
                                        borderBottom: "1px solid #ccc",
                                        borderRadius: 0,
                                    }}
                                />
                            </FormGroup>

                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Loan Tenure</Label>
                                        <Input
                                            type="select"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            style={{
                                                border: "none",
                                                borderBottom: "1px solid #ccc",
                                                borderRadius: 0,
                                            }}
                                        >
                                            <option value={5}>5 yrs</option>
                                            <option value={10}>10 yrs</option>
                                            <option value={15}>15 yrs</option>
                                            <option value={20}>20 yrs</option>
                                            <option value={25}>25 yrs</option>
                                            <option value={30}>30 yrs</option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col md="6">
                                    <FormGroup>
                                        <Label>Interest Rate (% p.a.)</Label>
                                        <Input
                                            type="number"
                                            value={rate}
                                            onChange={(e) => setRate(Number(e.target.value))}
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
                                className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2"
                                onClick={calculateEligibility}
                            >
                                Check Eligibility
                            </Button>
                        </Col>

                        <Col
                            md="6"
                            className="d-flex pt-3 flex-column justify-content-center"
                            style={{ background: "#fff7f5", borderRadius: 10 }}
                        >
                            <h5 className="text-center mb-2">You are Eligible for Amount</h5>
                            <h3 className="text-center" style={{ color: "#d21f1f" }}>
                                ₹{(eligibleAmount / 100000).toFixed(2)} Lac
                            </h3>

                            <div className="text-center mt-3">
                                <p className="m-0">Monthly EMI</p>
                                <h4 style={{ color: "#0056d2" }}>₹{monthlyEmi.toLocaleString()}</h4>
                            </div>

                            <hr />

                            <h6 className="mb-3">Why SmartMind?</h6>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <AiOutlineCheckCircle color="green" /> Offers from 34+ Banks
                                </li>
                                <li className="mb-2">
                                    <AiOutlineCheckCircle color="green" /> Lowest Interest Rate
                                </li>
                                <li className="mb-2">
                                    <AiOutlineCheckCircle color="green" /> Highest Loan Value
                                </li>
                            </ul>

                            <Button
                                className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2 w-50"
                            >
                                Check Bank Offers
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </div>
    );
};

export default LoanEligibilityCalculator;
