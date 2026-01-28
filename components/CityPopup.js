"use client";
import React, { useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const CityPopup = ({ isOpen, toggle }) => {


  const nearbyCities = [
    "Bangalore - East",
    "Bangalore - South",
    "Bangalore - West",
    "Bangalore - Central",
    "Bangalore - North",
  ];

  const popularCities = [
    "Ahmedabad",
    "Bangalore",
    "Beyond Thane",
    "Chennai",
    "Gurgaon",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Navi Mumbai",
    "New Delhi",
    "Noida",
    "Pune",
    "Thane",
  ];

  const otherCities = [
    "Agra","Ahmadnagar","Allahabad","Aluva","Amritsar","Aurangabad","Bareilly","Belgaum","Bhiwadi","Bhopal",
    "Bhubaneswar","Bokaro Steel City","Chandigarh","Coimbatore","Dehradun","Durgapur","Goa","Ernakulam",
    "Faridabad","Ghaziabad","Gwalior","Haridwar","Hubli","Jabalpur","Jalandhar","Jammu","Jamshedpur",
    "Jodhpur","Kochi","Kottayam","Kozhikode","Madurai","Mangalore","Mohali","Nashik","Nagpur","Ooty",
    "Patna","Pondicherry","Raipur","Ranchi","Salem","Satara","Shimla","Solapur","Sonipat","Surat",
    "Thanjavur","Thiruvananthapuram","Tirupati","Tiruppur","Udupi","Varanasi","Vijayawada","Visakhapatnam",
  ];

  const internationalCities = [
    { name: "NRI Home", flag: "🏠", link: "/nri-home" },
    { name: "US", flag: "🇺🇸", link: "/us" },
    { name: "UAE", flag: "🇦🇪", link: "/uae" },
    { name: "Canada", flag: "🇨🇦", link: "/canada" },
    { name: "Australia", flag: "🇦🇺", link: "/australia" },
    { name: "Singapore", flag: "🇸🇬", link: "/singapore" },
  ];

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered scrollable>
      <ModalHeader toggle={toggle}>
        <FaMapMarkerAlt className="text-st me-2" />
        Select City
      </ModalHeader>

      <ModalBody>
        <Row>
          {/* ---------- INDIA SECTION ---------- */}
          <Col md="12" className="mb-4">
            {/* <h6 className="text-st fw-bold mb-3 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2" /> INDIA
            </h6> */}

            {/* Nearby Cities */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <h6 className="fw-semibold mb-3">Nearby Cities</h6>
              <Row className="g-3">
                {nearbyCities.map((city, i) => (
                  <Col xs="6" sm="4" key={i}>
                    <Link
                      href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-decoration-none"
                    >
                      <Card className="shadow-sm border-0 rounded-3 city-card h-100">
                        <CardBody className="d-flex align-items-center gap-2 py-2 px-3">
                          <FaMapMarkerAlt className="text-st" />
                          <span className="small text-dark">{city}</span>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Popular Cities */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <h6 className="fw-semibold mb-3">Popular Cities</h6>
              <Row className="g-3">
                {popularCities.map((city, i) => (
                  <Col xs="6" sm="4" key={i}>
                    <Link
                      href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-decoration-none"
                    >
                      <Card className="shadow-sm border-0 rounded-3 city-card h-100">
                        <CardBody className="d-flex align-items-center gap-2 py-2 px-3">
                          <FaMapMarkerAlt className="text-st" />
                          <span className="small text-dark">{city}</span>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Other Cities */}
            <div>
              <h6 className="fw-semibold mb-3">Other Cities</h6>
              <div>
                <Row className="g-2">
                  {otherCities.map((city, index) => (
                    <Col xs="6" sm="4" key={index}>
                      <Link
                        href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-decoration-none"
                      >
                        <div className="d-flex align-items-center gap-2 small text-dark city-hover p-1">
                          <FaMapMarkerAlt className="text-muted" size={13} />
                          {city}
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>

          {/* ---------- INTERNATIONAL SECTION ---------- */}
          {/* <Col md="3" className="border-start ps-3">
            <h6 className="text-st fw-bold mb-3">
              🌍 International
            </h6>
            <ul className="list-unstyled">
              {internationalCities.map((item, i) => (
                <li
                  key={i}
                  className="d-flex align-items-center mb-3 aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <span style={{ fontSize: "1.5rem" }} className="me-2">
                    {item.flag}
                  </span>
                  <Link
                    href={item.link}
                    className="text-decoration-none text-dark small"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col> */}
        </Row>
      </ModalBody>

      <style jsx global>{`
        .city-card {
          transition: all 0.3s ease;
        }
        .city-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .city-hover:hover {
          color: #6e2e36 !important;
        }
        
      `}</style>
    </Modal>
  );
};

export default CityPopup;
