"use client";
import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";

// EMI Formula
const calcEMI = (P, R, N) => {
  const r = R / (12 * 100);
  return (
    (P * r * Math.pow(1 + r, N)) /
    (Math.pow(1 + r, N) - 1)
  );
};

// Outstanding balance after x months
const outstandingBalance = (P, R, N, paidMonths) => {
  const r = R / (12 * 100);
  const emi = calcEMI(P, R, N);

  return (
    P * Math.pow(1 + r, paidMonths) -
    emi *
      ((Math.pow(1 + r, paidMonths) - 1) / r)
  );
};

const RateChangeCalculator = () => {
  const [data, setData] = useState({
    amount: "",
    tenure: "",
    roi: "",
    oldDate: "",
    newROI: "",
    changeDate: "",
  });

  const [result, setResult] = useState({
    loseSameTenure: 0,
    loseSameEMI: 0,
    oldEMI: 0,
    newEMI: 0,
    oldTenure: 0,
    newTenure: 0,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const P = Number(data.amount);
    const T = Number(data.tenure) * 12;
    const R_old = Number(data.roi);
    const R_new = Number(data.newROI);

    if (!P || !T || !R_old || !R_new || !data.oldDate || !data.changeDate) {
      alert("Please fill all fields");
      return;
    }

    // Months passed between loan start & ROI change date
    const monthsPaid =
      Math.max(
        0,
        Math.floor(
          (new Date(data.changeDate) -
            new Date(data.oldDate)) /
            (1000 * 60 * 60 * 24 * 30)
        )
      );

    const oldEMI = calcEMI(P, R_old, T);

    // Outstanding balance at ROI change date
    const outstanding = outstandingBalance(P, R_old, T, monthsPaid);

    // New EMI keeping tenure same
    const newEMI = calcEMI(outstanding, R_new, T - monthsPaid);

    // Total interest old vs new
    const oldRemainingInterest =
      oldEMI * (T - monthsPaid) - outstanding;
    const newRemainingInterest_sameTenure =
      newEMI * (T - monthsPaid) - outstanding;

    // Loss in case of same tenure
    const lossSameTenure =
      newRemainingInterest_sameTenure - oldRemainingInterest;

    // NOW CASE 2: EMI SAME → RECALCULATE NEW TENURE
    const r_new = R_new / (12 * 100);
    let newRemainingTenure = 0;
    let balance = outstanding;

    while (balance > 0 && newRemainingTenure < 1000) {
      const interest = balance * r_new;
      const principal = oldEMI - interest;
      balance -= principal;
      newRemainingTenure++;
    }

    const newRemainingInterest_sameEMI =
      oldEMI * newRemainingTenure - outstanding;

    const lossSameEMI =
      newRemainingInterest_sameEMI - oldRemainingInterest;

    setResult({
      loseSameTenure: Math.round(lossSameTenure),
      loseSameEMI: Math.round(lossSameEMI),
      oldEMI: Math.round(oldEMI),
      newEMI: Math.round(newEMI),
      oldTenure: T,
      newTenure: newRemainingTenure,
    });
  };

  return (
    <Card>
      <CardBody>
        <Row>
          {/* LEFT SIDE FORM */}
          <Col md={6} className="border-end">
            <h6 className="fw-bold mb-4">How will a rate change impact me?</h6>

            <Form>
              <FormGroup>
                <Label>Loan Amount</Label>
                <Input
                  type="text"
                  name="amount"
                  placeholder="₹ 10,00,000"
                  value={data.amount}
                  onChange={handleChange}
                />
              </FormGroup>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Tenure (Years)</Label>
                    <Input
                      type="number"
                      name="tenure"
                      placeholder="3"
                      value={data.tenure}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label>Rate of Interest</Label>
                    <Input
                      type="number"
                      name="roi"
                      placeholder="6 %"
                      value={data.roi}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Loan Taken On</Label>
                <Input
                  type="date"
                  name="oldDate"
                  value={data.oldDate}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>New Rate of Interest</Label>
                <Input
                  type="number"
                  name="newROI"
                  placeholder="7 %"
                  value={data.newROI}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Rate of Interest Changes On</Label>
                <Input
                  type="date"
                  name="changeDate"
                  value={data.changeDate}
                  onChange={handleChange}
                />
              </FormGroup>

              <Button
                color="danger"
                className="w-100 mt-3"
                onClick={calculate}
              >
                Compare
              </Button>
            </Form>
          </Col>

          {/* RIGHT SIDE RESULT */}
          <Col md={6} className="px-4">
            <div className="text-center mt-4">

              {/* SAME TENURE */}
              <p className="small text-muted mb-1">
                If you keep the Tenure same ({Math.round(result.oldTenure / 12)} months)
              </p>
              <h5 className="text-danger fw-bold">You will lose</h5>
              <h4 className="text-danger fw-bold">
                ₹ {result.loseSameTenure.toLocaleString()}
              </h4>

              <Row className="mt-4 border-bottom pb-4">
                <Col>
                  <p className="mb-1 text-muted small">Current EMI</p>
                  <h6>₹ {result.oldEMI}</h6>
                </Col>
                <Col>
                  <p className="mb-1 text-muted small">New EMI</p>
                  <h6>₹ {result.newEMI}</h6>
                </Col>
              </Row>

              {/* SAME EMI */}
              <div className="mt-4">
                <p className="small text-muted mb-1">
                  If you keep your EMI same (₹ {result.oldEMI})
                </p>
                <h5 className="text-danger fw-bold">You will lose</h5>
                <h4 className="text-danger fw-bold">
                  ₹ {result.loseSameEMI.toLocaleString()}
                </h4>

                <Row className="mt-4">
                  <Col>
                    <p className="mb-1 text-muted small">Current Tenure</p>
                    <h6 className="fw-bold">
                      {Math.round(result.oldTenure / 12)} Years
                    </h6>
                  </Col>
                  <Col>
                    <p className="mb-1 text-muted small">New Tenure</p>
                    <h6 className="fw-bold">
                      {Math.floor(result.newTenure / 12)} Y
                      {" "}{result.newTenure % 12} M
                    </h6>
                  </Col>
                </Row>
              </div>

            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default RateChangeCalculator;
