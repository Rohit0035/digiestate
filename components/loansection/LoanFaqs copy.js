"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Collapse,
} from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import proimg from "../../assets/images/faq.png"

const faqs = [
    {
        q: "What are the key features and benefits of home loans?",
        a: (
            <>
                <p><strong>Flexibility to choose a tenure:</strong> Banks give you the flexibility to choose your home loan tenure, usually 5–30 years.</p>
                <p><strong>Cheaper than personal loans:</strong> Home loans have lower interest rates because they are secured loans.</p>
                <p><strong>Tax benefits:</strong> You get tax benefits on interest paid (up to ₹2 lakhs/year) and principal paid (up to ₹1.5 lakhs/year).</p>
                <p><strong>Home loan balance transfer:</strong> Transfer your outstanding loan to another lender at lower rates.</p>
            </>
        )
    },
    { q: "What are the different types of home loans available?", a: "Home purchase loan, construction loan, improvement loan, and more." },
    { q: "What are the factors you should know before applying for a home loan?", a: "Credit score, income, loan tenure, property type, etc." },
    { q: "What are the different types of home loan fees and charges?", a: "Processing fee, legal charges, valuation fee, etc." },
    { q: "How does Credit score impact your interest rate?", a: "Higher score means lower interest rate." },
    { q: "What's the benefit of having a female co-applicant?", a: "Lower interest rates and better approval chances." },
    { q: "How can I improve my Credit score?", a: "Timely payments, low credit utilisation, keep old accounts active." },
    { q: "What is pre-EMI interest?", a: "Interest paid on loan disbursed before final EMI starts." },
    { q: "What is the meaning of the Moratorium Period in Home Loans?", a: "A break period where you don't pay EMI but interest continues." },
    { q: "What is Pradhan Mantri Awas Yojana?", a: "A housing scheme providing subsidy to eligible applicants." }
];

const LoanFaqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) =>
        setOpenIndex(openIndex === index ? -1 : index);

    return (
        <section className="bg-light py-5">
            <Container className="">
                <Row>
                    {/* LEFT IMAGE */}
                    <h4 className="mt-0 mb-4 fw-bold">Home Loan FAQs</h4>
                    <Col md={4} className="text-center">
                        <Image
                            src={proimg}
                            alt="faq"
                            style={{ width: "100%" }}
                        />
                        
                    </Col>

                    {/* RIGHT ACCORDION */}
                    <Col md={8}>
                        {faqs.map((item, i) => (
                            <div
                                key={i}
                                className="py-3 border-bottom"
                                style={{ cursor: "pointer" }}
                                onClick={() => toggle(i)}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6
                                        className={`fw-bold ${openIndex === i ? "text-st" : ""
                                            }`}
                                    >
                                        {item.q}
                                    </h6>

                                    {openIndex === i ? (
                                        <FaChevronUp size={16} />
                                    ) : (
                                        <FaChevronDown size={16} />
                                    )}
                                </div>

                                <Collapse isOpen={openIndex === i}>
                                    <div className="mt-3 text-muted">{item.a}</div>
                                </Collapse>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default LoanFaqs;
