"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button, FormGroup, Label, Card, CardBody } from "reactstrap";

const BalanceTransferCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [oldTenure, setOldTenure] = useState(6); // years
  const [oldRate, setOldRate] = useState(10);
  const [installmentsPaid, setInstallmentsPaid] = useState(40);

  const [procFee, setProcFee] = useState(1);
  const [newTenure, setNewTenure] = useState(6);
  const [newRate, setNewRate] = useState(9);

  const [results, setResults] = useState({
    oldInterest: 0,
    newInterest: 0,
    outstanding: 0,
    newEMI: 0,
    tenureIncrease: 0,
    interestLossOrGain: 0,
  });

  // EMI Formula
  const calculateEMI = (P, r, n) => {
    const monthlyRate = r / 12 / 100; 
    return P * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
  };

  const calculateOutstanding = (P, r, n, paid) => {
    const monthlyRate = r / 12 / 100;
    return (
      P *
      (Math.pow(1 + monthlyRate, n) - Math.pow(1 + monthlyRate, paid)) /
      (Math.pow(1 + monthlyRate, n) - 1)
    );
  };

  useEffect(() => {
    const oldMonths = oldTenure * 12;
    const newMonths = newTenure * 12;

    const oldEMI = calculateEMI(loanAmount, oldRate, oldMonths);
    const outstanding = calculateOutstanding(loanAmount, oldRate, oldMonths, installmentsPaid);

    const newEMI = calculateEMI(outstanding, newRate, newMonths);
    const oldInterestTotal = oldEMI * oldMonths - loanAmount;
    const newInterestTotal = newEMI * newMonths - outstanding;

    setResults({
      oldInterest: Math.round(oldInterestTotal),
      newInterest: Math.round(newInterestTotal),
      outstanding: Math.round(outstanding),
      newEMI: Math.round(newEMI),
      tenureIncrease: newMonths - oldMonths,
      interestLossOrGain: Math.round(newInterestTotal - oldInterestTotal),
    });
  }, [loanAmount, oldTenure, oldRate, installmentsPaid, newRate, newTenure]);

  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col md="6">
              <h5 className="mb-4">How much will I save on balance transfer?</h5>

              {/* Current Loan */}
              <h6 className="fw-bold mt-3">Current Loan</h6>

              <FormGroup>
                <Label>Loan Amount</Label>
                <Input value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
              </FormGroup>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Tenure (Years)</Label>
                    <Input
                      type="number"
                      value={oldTenure}
                      onChange={(e) => setOldTenure(Number(e.target.value))}
                    />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>Rate of Interest (%)</Label>
                    <Input
                      type="number"
                      value={oldRate}
                      onChange={(e) => setOldRate(Number(e.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Installments Paid (Months)</Label>
                <Input
                  value={installmentsPaid}
                  type="number"
                  onChange={(e) => setInstallmentsPaid(Number(e.target.value))}
                />
              </FormGroup>

              {/* NEW LOAN */}
              <h6 className="fw-bold mt-4">New Loan</h6>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Processing Fees (%)</Label>
                    <Input value={procFee} onChange={(e) => setProcFee(Number(e.target.value))} />
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label>Rate of Interest (%)</Label>
                    <Input
                      value={newRate}
                      onChange={(e) => setNewRate(Number(e.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Tenure (Years)</Label>
                <Input
                  value={newTenure}
                  onChange={(e) => setNewTenure(Number(e.target.value))}
                />
              </FormGroup>
            </Col>

            {/* RESULT SECTION */}
            <Col
              md="6"
              className="p-4 d-flex flex-column justify-content-center"
              style={{ background: "#fff8f5", borderRadius: 10 }}
            >
              <h5 className="text-center">Your Interest Difference</h5>

              <h2
                className="text-center fw-bold"
                style={{ color: results.interestLossOrGain > 0 ? "red" : "green" }}
              >
                ₹{results.interestLossOrGain.toLocaleString()}
              </h2>

              <p className="text-center">
                EMI tenure difference: <strong>{results.tenureIncrease} Months</strong>
              </p>

              <Row className="text-center mt-4">
                <Col md="6">
                  <p className="fw-bold">Current Total Interest</p>
                  <h6>₹{results.oldInterest.toLocaleString()}</h6>
                </Col>
                <Col md="6">
                  <p className="fw-bold">New Total Interest</p>
                  <h6>₹{results.newInterest.toLocaleString()}</h6>
                </Col>
              </Row>

              <hr />

              <h6 className="text-center">
                Outstanding Principal:{" "}
                <strong>₹{results.outstanding.toLocaleString()}</strong>
              </h6>

              <h6 className="text-center mt-1">
                New EMI: <strong>₹{results.newEMI.toLocaleString()}</strong>
              </h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BalanceTransferCalculator;
