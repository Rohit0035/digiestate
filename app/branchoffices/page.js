"use client";

import { useState } from "react";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";

// Alphabet List
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Branch Data
const branches = [
  {
    city: "Baroda",
    addressPerson1: "Mr. Mitesh Patel",
    addressPerson2: "Mr. Abhishek Kumar (For Owner Enquiry)",
    fullAddress:
      "DigiEstate GroupRealty Services Limited, The Times Of India Building, 49, Punit Nagar, Opp. Vaccine Ground, Old Padra Road",
    phone1: "9998975632",
    phone2: "07876400400",
    email1: "mitesh.patel@magicbricks.com",
    email2: "enquiry@magicbricks.com",
  },
  // ADD MORE HERE
];

// 🔹 Filter Function
const filterBranches = (letter) => {
  return branches.filter((b) => b.city.toUpperCase().startsWith(letter));
};

// 🔹 Render Phone Element
const PhoneItem = (number) => (
  <div>
    <FaPhone className="me-1" />
    {number}
  </div>
);

// 🔹 Render Email Element
const EmailItem = (email) => (
  <div>
    <FaEnvelope className="me-1" />
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

// 🔹 Render Single Table Row
const BranchRow = (item, index) => (
  <tr key={index}>
    <td className="fw-bold">{item.city}</td>

    <td>
      {item.addressPerson1} <br />
      {item.addressPerson2} <br />
      <small className="text-muted">{item.fullAddress}</small>
    </td>

    <td>
      {PhoneItem(item.phone1)}
      {PhoneItem(item.phone2)}
    </td>

    <td>
      {EmailItem(item.email1)}
      {EmailItem(item.email2)}
    </td>
  </tr>
);



// 🔹 MAIN COMPONENT (const-based)
const BranchOffices = () => {
  const [activeLetter, setActiveLetter] = useState("A");

  const filtered = filterBranches(activeLetter);

  return (
    <section className="py-5">
      <Container>
        {/* Title */}
        <Row>
          <Col>
            <h3 className="fw-bold mb-3">DigiEstate GroupBranch Offices</h3>
          </Col>
        </Row>

        {/* Alphabet Filter */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  size="sm"
                  color={activeLetter === letter ? "danger" : "secondary"}
                  onClick={() => setActiveLetter(letter)}
                  className="rounded-0 px-3"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Table Section */}
        <Row>
          <Col>
            <div className="table-responsive">
              <Table bordered hover>
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "10%" }}>City</th>
                    <th style={{ width: "45%" }}>Address</th>
                    <th style={{ width: "20%" }}>Phone</th>
                    <th style={{ width: "25%" }}>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((item, index) => BranchRow(item, index))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-3">
                        No branches starting with "{activeLetter}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BranchOffices;
