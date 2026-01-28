"use client";
import { useState } from "react";
import { Container, Row, Col, Card, CardBody, Collapse } from "reactstrap";
import userimg from "../../assets/images/agent-pic.png"
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    text: "Our group has reached a huge number of people throughout the country through DigiEstate Group. The response is tremendous and we are glad to be a part of your website. Thank you. Keep up the great work and continue helping people find their dream homes",
    name: "Sumeet Sawlani",
    location: "Bhopal",
    img: userimg
  },
  {
    id: 2,
    text: "DigiEstate Group.com comes across as one of the most organised & informative websites in the country for real estate news, views, trends & much more. Personally I found a rented house within 3 days after searching on the website. The filters are good and the suggestions were very close to what I needed.",
    name: "Rumpa Dutta",
    location: "Delhi",
    img: userimg
  },
  {
    id: 3,
    text: "I have been using DigiEstate Group.com as an individual since its launch, and as a real estate professional for many years. It has helped give sound advice to aspiring property buyers and allows transparent communication between buyers and sellers.",
    name: "Milind Desai",
    location: "Ahmedabad",
    img: userimg
  },
  {
    id: 4,
    text: "Excellent Portal and very good quality service. DigiEstate Group is providing great service to everyone looking for real estate. Anyone can easily find the property of their choice. Their support team is also responsive and resolves issues quickly.",
    name: "Ravindra Chavan",
    location: "Pune",
    img: userimg
  }
];

export default function Testimonials() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-5">Customer Stories</h2>

      <Row className="g-4">
        {testimonialsData.map((item) => (
          <Col md="6" key={item.id}>
            <Card className="shadow-sm border-0 h-100">
              <CardBody>
                {/* Preview (4 lines) */}
                <p className={`testimonial-preview ${openId === item.id ? "d-none" : ""}`}>
                  {item.text}
                </p>

                {/* Expand Content */}
                <Collapse isOpen={openId === item.id}>
                  <p className="mb-3">{item.text}</p>
                </Collapse>

                {/* More / Less button */}
                <button
                  className="btn btn-link p-0 fw-bold text-info"
                  onClick={() => toggle(item.id)}
                >
                  {openId === item.id ? "Less" : "More"}
                </button>

                <div className="d-flex align-items-center mt-3">
                  <Image
                    src={item.img}
                    width="48"
                    height="48"
                    className="rounded-circle me-3"
                    alt=""
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.location}</small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .testimonial-preview {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 92px; /* keeps equal height */
        }
      `}</style>
    </Container>
  );
}
