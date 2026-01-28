"use client";

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import bank1 from "../../assets/images/bank/part-a.png"
import bank2 from "../../assets/images/bank/part-2.png"
import bank4 from "../../assets/images/bank/part-4.png"
import bank3 from "../../assets/images/bank/part-3.png"


const BankPartners = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };

  const banks = [
    {
      id: "1",
      logo: bank1,
      name: "Central Bank of India",
      rate: "7.35%",
      tenure: "30 years",
      details:
        "Central Bank offers flexible home loan schemes with minimal documentation.",
    },
    {
      id: "2",
      logo: bank2,
      name: "Canara Bank",
      rate: "7.4%",
      tenure: "30 years",
      details:
        "Canara Bank provides competitive interest rates and hassle-free processing.",
    },
    {
      id: "3",
      logo: bank3,
      name: "Indian Bank",
      rate: "7.4%",
      tenure: "30 years",
      details:
        "Indian Bank is known for quicker sanction and low processing fees.",
    },
    {
      id: "4",
      logo: bank4,
      name: "Bank of Baroda",
      rate: "7.45%",
      tenure: "30 years",
      details:
        "Bank of Baroda offers a wide range of home loan products with easy EMI plans.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="text-center fw-bold mb-4">
          Top Home Loan Bank Partners
        </h3>

        <Accordion className="border-0" open={open} toggle={toggle}>
          {banks.map((bank) => (
            <AccordionItem key={bank.id}>
              <div
                className="p-3 bg-light shadow-sm rounded mb-3" data-aos="fade-up"
              >
                <Row className="align-items-center">
                  <Col md="2" sm="3" xs="4">
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      width={100}
                      height={40}
                      className="img-fluid mb-3 mb-sm-0"
                    />
                  </Col>

                  <Col md="3" sm="5" xs="8" className="fw-bold">
                    {bank.name}
                  </Col>

                  <Col md="3" sm="6" xs="12" className="text-muted">
                    From <strong>{bank.rate}</strong> p.a.
                  </Col>

                  <Col md="2" sm="6" xs="12" className="text-muted">
                    Max Tenure <strong>{bank.tenure}</strong>
                  </Col>

                  <Col
                    md="2"
                    sm="4"
                    xs="12"
                    className="text-end mt-sm-0 mt-2"
                  >
                    <Button
                      className="rounded-pill btn-danger btn-sm px-4 py-1 fw-bold"
                      onClick={() => toggle(bank.id)}
                    >
                      Know <FaChevronDown size={12} className="ms-1" />
                    </Button>
                  </Col>
                </Row>

                {/* Accordion Body */}
                <AccordionHeader targetId={bank.id} className="d-none" />
                <AccordionBody accordionId={bank.id}>
                  <div className="border-top pt-3 mt-3">
                    <p className="mb-0">{bank.details}</p>
                    <Button color="danger" className="mt-3 px-4 rounded-pill">
                      Apply Now
                    </Button>
                  </div>
                </AccordionBody>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default BankPartners;
