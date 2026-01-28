"use client";
import React, { useState } from "react";
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardBody,
} from "reactstrap";

const MonthlyRepayment = () => {
    const [form, setForm] = useState({
        amount: "",
        tenure: "",
        rate: "",
        installments: "",
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // ---------------- EMI CALC FUNCTION ----------------
    const calculateEMI = () => {
        const P = parseFloat(form.amount);
        const years = parseFloat(form.tenure);
        const r = parseFloat(form.rate) / 12 / 100;
        const n = years * 12;
        const installmentsPaid = parseInt(form.installments);

        if (!P || !years || !r || !installmentsPaid) return;

        // EMI formula
        let EMI = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        EMI = Math.round(EMI);

        // Outstanding loan after X installments
        const outstanding =
            P * Math.pow(1 + r, installmentsPaid) -
            (EMI * (Math.pow(1 + r, installmentsPaid) - 1)) / r;

        // Principal paid so far
        const principalPaid = P - outstanding;

        // Total interest to be paid
        const totalInterest = EMI * n - P;

        // Interest paid till now
        const interestPaid = totalInterest * (principalPaid / P);

        // Remaining interest
        const interestOutstanding = totalInterest - interestPaid;

        setResult({
            EMI,
            principalPaid: Math.round(principalPaid),
            outstanding: Math.round(outstanding),
            interestPaid: Math.round(interestPaid),
            interestOutstanding: Math.round(interestOutstanding),
            lastInstallment: installmentsPaid,
        });
    };

    return (
        <Card>
            <CardBody>
                <Row>
                    {/* LEFT FORM */}
                    <Col md={6} className="pe-md-5">

                        <h6 className="fw-bold mb-4">What will be my monthly loan repayment?</h6>

                        <Form>

                            <FormGroup>
                                <Label>Loan Amount</Label>
                                <Input
                                    type="number"
                                    placeholder="₹ 10,00,000"
                                    name="amount"
                                    value={form.amount}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Tenure (Years)</Label>
                                        <Input
                                            type="number"
                                            placeholder="4"
                                            name="tenure"
                                            value={form.tenure}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label>Rate of Interest</Label>
                                        <Input
                                            type="number"
                                            placeholder="4 %"
                                            name="rate"
                                            value={form.rate}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label>Installments Paid</Label>
                                <Input
                                    type="number"
                                    placeholder="45"
                                    name="installments"
                                    value={form.installments}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <Button color="danger" className="w-50 mt-3" onClick={calculateEMI}>
                                Calculate
                            </Button>

                        </Form>

                    </Col>

                    {/* RIGHT RESULTS */}
                    <Col md={6} className="ps-md-5 pt-4 pt-md-0">

                        {result && (
                            <Row>
                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">Principal Paid</p>
                                    <h6 className="fw-bold">₹{result.principalPaid.toLocaleString()}</h6>
                                </Col>

                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">Principal Outstanding</p>
                                    <h6 className="fw-bold">₹{result.outstanding.toLocaleString()}</h6>
                                </Col>

                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">Interest Paid</p>
                                    <h6 className="fw-bold">₹{result.interestPaid.toLocaleString()}</h6>
                                </Col>

                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">Interest Outstanding</p>
                                    <h6 className="fw-bold">₹{result.interestOutstanding.toLocaleString()}</h6>
                                </Col>

                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">Last Installment</p>
                                    <h6 className="fw-bold">{result.lastInstallment}</h6>
                                </Col>

                                <Col md={6} className="mb-4">
                                    <p className="text-muted small mb-1">EMI</p>
                                    <h6 className="fw-bold">₹{result.EMI.toLocaleString()}</h6>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default MonthlyRepayment;
