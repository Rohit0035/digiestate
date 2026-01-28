"use client";
import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { FaPiggyBank } from "react-icons/fa";

// EMI Formula
const calculateEMI = (P, r, n) => {
  const monthlyRate = r / (12 * 100);
  return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);
};

const PrepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [installmentsPaid, setInstallmentsPaid] = useState(40);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(8.5);
  const [paymentOption, setPaymentOption] = useState("oneTime");
  const [prepayAmount, setPrepayAmount] = useState(100000);

  const [currentInterest, setCurrentInterest] = useState(0);
  const [newInterest, setNewInterest] = useState(0);
  const [totalSaved, setTotalSaved] = useState(0);
  const [reducedTenure, setReducedTenure] = useState(0);
  const [newLoanPayable, setNewLoanPayable] = useState(0);

  const calculate = () => {
    const nMonths = tenure * 12;
    const emi = calculateEMI(loanAmount, interestRate, nMonths);

    const monthlyRate = interestRate / (12 * 100);

    // Outstanding loan after installments paid
    const outstanding =
      loanAmount * Math.pow(1 + monthlyRate, installmentsPaid) -
      emi *
        ((Math.pow(1 + monthlyRate, installmentsPaid) - 1) / monthlyRate);

    // Total interest original
    const totalInterestCurrent = emi * nMonths - loanAmount;

    let newOutstanding = outstanding;

    if (paymentOption === "oneTime") {
      newOutstanding = outstanding - prepayAmount;
    } else if (paymentOption === "foreclosure") {
      newOutstanding = 0;
    }

    // Find new reduced tenure with same EMI
    let newRemainingMonths = 0;
    let balance = newOutstanding;

    while (balance > 0) {
      const monthlyInterest = balance * monthlyRate;
      const principalPaid = emi - monthlyInterest;
      balance -= principalPaid;
      newRemainingMonths++;
      if (newRemainingMonths > 1000) break;
    }

    const newTotalInterest = emi * newRemainingMonths - newOutstanding;

    setCurrentInterest(Math.round(totalInterestCurrent));
    setNewInterest(Math.round(newTotalInterest));
    setTotalSaved(Math.round(totalInterestCurrent - newTotalInterest));
    setReducedTenure(Math.max(0, nMonths - newRemainingMonths));
    setNewLoanPayable(Math.round(newOutstanding));
  };

  return (
    <div className="container mt-4 mb-5">
      <Row>
        <Col md="6">
          <div
            className="p-4"
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
          >
            <h6 className="fw-bold mb-4">
              How much will I save on early repayment?
            </h6>

            <FormGroup>
              <Label>Loan Amount</Label>
              <Input
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </FormGroup>

            <FormGroup>
              <Label>Installments Paid</Label>
              <Input
                value={installmentsPaid}
                onChange={(e) => setInstallmentsPaid(Number(e.target.value))}
              />
            </FormGroup>

            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Outstanding Tenure (Years)</Label>
                  <Input
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Current Interest Rate %</Label>
                  <Input
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Label>Choose Payment Option</Label>
            <div className="d-flex mb-3">
              <div className="me-4">
                <Input
                  type="radio"
                  checked={paymentOption === "foreclosure"}
                  onChange={() => setPaymentOption("foreclosure")}
                />{" "}
                Foreclosure
              </div>

              <div>
                <Input
                  type="radio"
                  checked={paymentOption === "oneTime"}
                  onChange={() => setPaymentOption("oneTime")}
                />{" "}
                One-time Payment
              </div>
            </div>

            {paymentOption === "oneTime" && (
              <FormGroup>
                <Label>Choose your Amount</Label>
                <Input
                  value={prepayAmount}
                  onChange={(e) => setPrepayAmount(Number(e.target.value))}
                />
              </FormGroup>
            )}

            <Button
              onClick={calculate}
              className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2"
            >
              Calculate
            </Button>

            <p className="mt-3" style={{ fontSize: 11, color: "#666" }}>
              *These calculations are only for illustrative purposes...
            </p>
          </div>
        </Col>

        <Col md="6">
          <div
            className="p-4"
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                background: "#fff8e6",
                borderRadius: 12,
                padding: "15px",
                border: "1px solid #ffe3b7",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <FaPiggyBank
                  size={26}
                  style={{ color: "#e67e22" }}
                  className="me-2"
                />
                <h6 className="fw-bold m-0">Total Interest Saved</h6>
              </div>

              <h3 className="fw-bold" style={{ color: "red", marginTop: "-5px" }}>
                ₹{totalSaved.toLocaleString()}/-
              </h3>

              <p className="mt-2">
                Loan Tenure will be reduced by{" "}
                <b>{Math.floor(reducedTenure / 12)} Years</b>{" "}
                ({reducedTenure} Months)
              </p>

              <div className="d-flex justify-content-between border-bottom pb-3">
                <div>
                  <p className="fw-bold mb-0">Current Interest</p>
                  <h6>₹{currentInterest.toLocaleString()}</h6>
                </div>

                <div>
                  <p className="fw-bold mb-0">New Interest</p>
                  <h6>₹{newInterest.toLocaleString()}</h6>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <div>
                  <p className="fw-bold mb-0">Current Loan Payable</p>
                  <h6>₹{loanAmount.toLocaleString()}*</h6>
                </div>

                <div>
                  <p className="fw-bold mb-0">New Loan Payable</p>
                  <h6>₹{newLoanPayable.toLocaleString()}*</h6>
                </div>
              </div>

              <p className="text-center mt-3">
                Your EMI remains same at <b>₹{calculateEMI(
                  loanAmount,
                  interestRate,
                  tenure * 12
                ).toFixed(0)}</b>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p>Additional Payments not an option?</p>
              <Button className="mt-3 btn btn-danger rounded-pill btn-sm px-5 py-2">
                Re-Finance Your Home Loan
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PrepaymentCalculator;
