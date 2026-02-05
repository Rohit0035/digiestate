"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "What is DigiEstate Group?",
      answer:
        "DigiEstate Group is a trusted real estate developer offering premium residential plots and properties in fast-growing locations of Patna with a focus on transparency, legal compliance, and long-term value.",
    },
    {
      id: 2,
      question: "Where is the DigiEstate project located in Patna?",
      answer:
        "DigiEstate projects are strategically located in prime and upcoming areas of Patna with excellent road connectivity, nearby schools, hospitals, and future infrastructure development.",
    },
    {
      id: 3,
      question: "Is DigiEstate Group RERA approved?",
      answer:
        "Yes, DigiEstate Group follows all legal norms and ensures that projects are RERA-compliant or developed with clear land titles and proper documentation as per government regulations.",
    },
    {
      id: 4,
      question: "What types of properties does DigiEstate offer?",
      answer:
        "DigiEstate Group primarily offers residential plots, gated communities, and future-ready developments ideal for both end-users and investors.",
    },
    {
      id: 5,
      question: "What is the price range of DigiEstate plots in Patna?",
      answer:
        "Prices vary depending on location, plot size, and project amenities. DigiEstate plots in Patna are competitively priced, starting from affordable ranges with high appreciation potential.",
    },
    {
      id: 6,
      question: "Is DigiEstate a good investment for the future?",
      answer:
        "Yes, DigiEstate projects are located in growth corridors of Patna, making them ideal for long-term appreciation, residential use, and secure investment backed by planned infrastructure.",
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <>
      <Card className="mt-5 border-0 shadow-sm" data-aos="fade-up">
        <CardBody>
          <h4 className="fw-bold mb-4">
            FAQs about <span className="text-st">DigiEstate Group – Patna</span>
          </h4>

          {displayedFaqs.map((faq) => (
            <div key={faq.id} className="border-bottom py-3">
              <div className="d-flex align-items-start mb-2">
                <span className="badge bg-warning text-dark me-2">
                  Ques
                </span>
                <p className="fw-semibold mb-0">{faq.question}</p>
              </div>

              <div className="d-flex align-items-start">
                <span className="badge bg-success text-light me-2">
                  Ans
                </span>
                <p className="text-muted mb-0">{faq.answer}</p>
              </div>
            </div>
          ))}

          <div className="text-center mt-3">
            <Button
              color="link"
              className="text-st btn-sm fw-semibold text-decoration-none"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show less <FaChevronUp className="ms-1" />
                </>
              ) : (
                <>
                  Show more <FaChevronDown className="ms-1" />
                </>
              )}
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default FaqSection;
