"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const EnquiryModal = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle} className="border-0 pb-0">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="fw-bold fs-6 text-center w-100">
            Contact Details of the Owner
           </div>
        </div>
      </ModalHeader>

      <ModalBody>
        <Form>
          <FormGroup>
            <Label className="fw-semibold small">Your Name</Label>
            <Input type="text" placeholder="Your Name" />
          </FormGroup>

          <FormGroup>
            <Label className="fw-semibold small">Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Label className="fw-semibold small">WhatsApp Number</Label>
            <Row className="g-2 align-items-center">
              <Col xs="4" sm="3">
                <Input type="select" defaultValue="+91">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </Input>
              </Col>
              <Col xs="8" sm="9">
                <Input type="text" placeholder="Your WhatsApp Number" />
              </Col>
            </Row>
          </FormGroup>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="agreeCheck"
            />
            <label className="form-check-label small" htmlFor="agreeCheck">
              I Agree to <span className="text-danger">SmartMind Terms of Use</span>
            </label>
          </div>

          <Button
            color="danger"
            block
            className="py-2 fw-bold rounded-pill"
            style={{ backgroundColor: "#e43f3f", border: "none" }}
          >
            Continue
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EnquiryModal;
