"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = ({ project = {} }) => {
  const [showAll, setShowAll] = useState(false);

  const faqs = project?.faqs || [];

  if (!faqs.length) return null;

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <Card className="mt-5 border-0 shadow-sm">
      <CardBody>
        <h4 className="fw-bold mb-4">
          FAQs about{" "}
          <span className="text-st">
            {project?.title}
          </span>
        </h4>

        {displayedFaqs.map((faq, index) => (
          <div key={index} className="border-bottom py-3">
            <div className="d-flex align-items-start mb-2">
              <span className="badge bg-warning text-dark me-2">
                Ques
              </span>
              <p className="fw-semibold mb-0">
                {faq.question}
              </p>
            </div>

            <div className="d-flex align-items-start">
              <span className="badge bg-success text-light me-2">
                Ans
              </span>
              <p className="text-muted mb-0">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}

        {/* Show More / Less Button */}
        {faqs.length > 3 && (
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
        )}
      </CardBody>
    </Card>
  );
};

export default FaqSection;