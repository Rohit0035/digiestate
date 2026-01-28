"use client";

import { Container, Row, Col } from "reactstrap";
import { FaRegListAlt, FaUserTie, FaUniversity, FaRupeeSign } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaRegListAlt size={40} className="text-st" />,
      title: "Fill an online form to view the best offers from our partner banks.",
    },
    {
      icon: <FaUserTie size={40} className="text-st" />,
      title: "Our executive helps you choose the best offer for your requirement.",
    },
    {
      icon: <FaUniversity size={40} className="text-st" />,
      title: "We pick up documents at your doorstep and submit to the bank**.",
    },
    {
      icon: <FaRupeeSign size={40} className="text-st" />,
      title: "Bank reviews your application and confirms approval.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">How it works?</h2>

        <Row className="g-4">
          {steps.map((step, i) => (
            <Col key={i} lg="3" md="6" sm="6" xs="6" data-aos="zoom-in">
              <div
                className="p-4 bg-white shadow-sm rounded h-100"
                style={{ border: "1px solid #eee" }}
              >
                <div className="text-dark mb-3">{step.icon}</div>
                <h5 className="fw-bold mb-2">{i + 1}. </h5>
                <p className="text-muted mb-0">{step.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
