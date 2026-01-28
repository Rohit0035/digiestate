"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const PropertyTabs = () => {
  const [selected, setSelected] = useState([]);

  const handleToggle = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const options = [
    "Buy",
    "Rent",
    "New Projects",
    "Plot",
    "Commercial"
  ];

  return (
    <>
      <Card className="border-0 bg-light shadow-sm">
        <CardBody>
          <h6 className="fw-bold mb-3 text-st">Select</h6>
          <Form>
            <Row>
              {options.map((label, index) => (
                <Col xs="6" sm="4" className="mb-2" key={index}>
                  <FormGroup check className="small">
                    <Input
                      id={`option-${index}`}
                      name="propertyType"
                      type="checkbox"
                      checked={selected.includes(label)}
                      onChange={() => handleToggle(label)}
                    />
                    <Label check for={`option-${index}`} className="ms-1">
                      {label}
                    </Label>
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default PropertyTabs;
