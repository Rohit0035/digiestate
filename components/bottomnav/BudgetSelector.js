"use client";
import React, { useState } from "react";
import { Card, CardBody, FormGroup, Label, Row, Col, Input } from "reactstrap";

const BudgetSelector = () => {
  const budgetOptions = [
    { value: 0, label: "Min" },
    { value: 1000000, label: "₹ 10 L" },
    { value: 5000000, label: "₹ 50 L" },
    { value: 10000000, label: "₹ 1 Cr" },
    { value: 11000000, label: "₹ 1.1 Cr" },
    { value: 12000000, label: "₹ 1.2 Cr" },
    { value: 14000000, label: "₹ 1.4 Cr" },
    { value: 20000000, label: "₹ 2 Cr" },
    { value: 30000000, label: "₹ 3 Cr" },
  ];

  const [minBudget, setMinBudget] = useState(10000000);
  const [maxBudget, setMaxBudget] = useState(0);

  const handleMinChange = (e) => {
    const val = parseInt(e.target.value);
    setMinBudget(val);
    if (maxBudget !== 0 && val > maxBudget) {
      setMaxBudget(val);
    }
  };

  const handleMaxChange = (e) => {
    const val = parseInt(e.target.value);
    setMaxBudget(val);
  };

  return (
    <Card className="border-0 bg-light shadow-sm  mt-3">
      <CardBody>
        <FormGroup>
          <Label className="fw-semibold mb-2 text-st fw-bold">Budget</Label>
          <Row className="align-items-center">
            <Col xs="6">
              <Input
                type="select"
                value={minBudget}
                onChange={handleMinChange}
              >
                {budgetOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Input>
            </Col>
            <Col xs="6">
              <Input
                type="select"
                value={maxBudget}
                onChange={handleMaxChange}
              >
                <option value={0}>Max</option>
                {budgetOptions
                  .filter((b) => b.value >= minBudget)
                  .map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
              </Input>
            </Col>
          </Row>

          {/* Slider */}
          <div className="mt-3">
            <input
              type="range"
              className="form-range"
              min="0"
              max="30000000"
              step="1000000"
              value={minBudget}
              onChange={(e) => setMinBudget(parseInt(e.target.value))}
              style={{ accentColor: "#198754" }}
            />
            <div className="d-flex justify-content-between small text-muted">
              <span>
                {minBudget > 0 ? `₹ ${(minBudget / 10000000).toFixed(1)} Cr` : "Min"}
              </span>
              <span>
                {maxBudget > 0 ? `₹ ${(maxBudget / 10000000).toFixed(1)} Cr` : "Max"}
              </span>
            </div>
          </div>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default BudgetSelector;
