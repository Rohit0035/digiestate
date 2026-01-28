"use client";

import { Container, Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaRupeeSign } from "react-icons/fa";
import Image from "next/image";
import sbiimg from "../../assets/images/bank/b-sbi.png"
import mhimg from "../../assets/images/bank/b-mh.png"
import bimg from "../../assets/images/bank/b-broda.png"
import himg from "../../assets/images/bank/b-hdfc.png"


const LoanOffers = () => {
  const banks = [
    {
      logo: sbiimg,
      name: "State Bank of India",
      tag: "Recommended",
      interest: "8.5%",
      loanAmt: "50L",
      tenure: "30 Yr",
      emi: "38.4K",
      reward: "₹10,000 Cash Reward",
    },
    {
      logo: mhimg,
      name: "Bank of Maharashtra",
      tag: "",
      interest: "8.3%",
      loanAmt: "1 Cr",
      tenure: "30 Yr",
      emi: "75.5K",
      reward: "₹20,000 Cash Reward",
    },
    {
      logo: bimg,
      name: "Bank of Baroda",
      tag: "",
      interest: "8.4%",
      loanAmt: "70L",
      tenure: "30 Yr",
      emi: "53.3K",
      reward: "₹14,000 Cash Reward",
    },
    {
      logo: himg,
      name: "HDFC",
      tag: "",
      interest: "8.7%",
      loanAmt: "60L",
      tenure: "30 Yr",
      emi: "49.0K",
      reward: "Luxury Stay @ Taj",
    },
  ];

  return (
    <div className="py-5">
      <Container>
        <h3 className="text-center fw-bold mb-1">Home Loan Offers</h3>
        <p className="text-center">
          Get personalised home loan offers from top banks in{" "}
          <b>just 2 mins...</b>
        </p>

        {/* SLIDER */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mt-4"
        >
          {banks.map((b, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-3 rounded shadow-sm bg-light"
                style={{ height:'250px' }}
              >
                <Row className="align-items-center mb-2">
                  <Col xs="2" className="text-center pe-0">
                    <Image
                      src={b.logo}
                      width={40}
                      height={40}
                      alt={b.name}
                      className="mx-auto "
                    />
                  </Col>
                  <Col xs="10">
                    <h6 className="mb-0">{b.name}</h6>
                    {b.tag && (
                      <small className="text-success fw-bold">{b.tag}</small>
                    )}
                  </Col>
                </Row>

                <Row className="text-center py-2">
                  <Col>
                    <h6 className="fw-bold text-primary">{b.interest}</h6>
                    <small className="text-muted d-block">Interest</small>
                  </Col>

                  <Col>
                    <h6>
                      <FaRupeeSign
                        size={12}
                        className="me-1"
                        style={{ marginBottom: 3 }}
                      />
                      {b.loanAmt}
                    </h6>
                    <small className="text-muted d-block st-txt-o" style={{fontSize:'12px'}}>Loan Amount</small>
                  </Col>

                  <Col>
                    <h6>{b.tenure}</h6>
                    <small className="text-muted d-block" style={{fontSize:'12px'}}>Tenure</small>
                  </Col>

                  <Col>
                    <h6>{b.emi}</h6>
                    <small className="text-muted d-block" style={{fontSize:'12px'}}>Monthly EMI</small>
                  </Col>
                </Row>

                <div className="text-center py-2">
                  <small className="text-muted">
                    Get Loan disbursed under <b>18 Days</b>
                  </small>
                </div>

                <div className="border-top p-2 d-flex justify-content-between bg-white">
                  <small className="text-danger">{b.reward}</small>
                  <button className="btn btn-danger btn-sm px-3">
                    Claim Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default LoanOffers;
