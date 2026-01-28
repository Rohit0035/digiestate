"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const HomeLoanEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(26900000);
  const [tenure, setTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [emi, setEmi] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [calculated, setCalculated] = useState(false);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    const emiAmount =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emiAmount * months;
    const totalInterest = totalPayment - loanAmount;

    setEmi(Math.round(emiAmount));
    setPrincipal(loanAmount);
    setInterest(Math.round(totalInterest));
    setCalculated(true);
  };

  const COLORS = ["#417867", "#ffc107"];

  const data = [
    { name: "Principal Amount", value: principal },
    { name: "Total Interest", value: interest },
  ];

  return (
    <section className="pt-0 bg-light">
      <Card className="border-0 shadow-sm rounded-3 bg-light">
        <CardBody>
          <Row className="align-items-center">
            {/* Left Side - Inputs */}
            <Col md="6" sm="12" className="border-end">
              <h5 className="fw-bold mb-4">Home Loan EMI Calculator</h5>
              <FormGroup>
                <Label className="fw-semibold">Loan Amount</Label>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  min={100000}
                  className="mb-2"
                />
              </FormGroup>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label className="fw-semibold">Loan Tenure (Years)</Label>
                    <Input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      min={1}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label className="fw-semibold">Interest Rate (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min={1}
                      className="mb-2"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                color="danger"
                className="w-100 fw-bold mt-3"
                onClick={calculateEMI}
              >
                Check Eligibility
              </Button>
            </Col>

            {/* Right Side - Chart */}
            <Col md="6" sm="12" className="text-center mt-4 mt-md-0">
              {calculated ? (
                <>
                  <h6 className="fw-semibold mb-3">
                    You are Eligible for EMI Amount{" "}
                    <span className="text-danger fs-5 fw-bold">
                      ₹{emi.toLocaleString()}
                    </span>
                  </h6>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>

                  <hr />
                  <div className="text-start small mt-3 d-flex">
                    <p className="mb-1 text-success st-txt-o">
                      ✔ Offers from 34+ Banks
                    </p>
                    <p className="mb-1 text-success st-txt-o">
                      ✔ Lowest Interest Rate
                    </p>
                    <p className="mb-0 text-success st-txt-o">
                      ✔ Highest Loan Value
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-muted">
                  <p className="mt-4">
                    Enter your loan details and click{" "}
                    <strong>Check Eligibility</strong> to view EMI details.
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </section>
  );
};

export default HomeLoanEMICalculator;
