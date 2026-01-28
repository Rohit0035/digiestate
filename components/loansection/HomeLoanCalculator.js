"use client";

import React, { useRef, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Container } from "reactstrap";
import {
    FaCalculator,
    FaMoneyBillWave,
    FaExchangeAlt,
    FaUndo,
    FaPercent,
    FaCalendarAlt,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import EmiCalculator from "./tabs/EmiCalculator";
import LoanEligibilityCalculator from "./tabs/LoanEligibilityCalculator";
import BalanceTransferCalculator from "./tabs/BalanceTransferCalculator";
import PrepaymentCalculator from "./tabs/PrepaymentCalculator";
import RateChangeCalculator from "./tabs/RateChangeCalculator";
import MonthlyRepayment from "./tabs/MonthlyRepayment";

const HomeLoanCalculator = () => {
    const [activeTab, setActiveTab] = useState("1");

    const scrollRef = useRef(null);

    // Scroll Left
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    // Scroll Right
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <section className="py-5">
            <Container>
                <div className="text-center mb-4">
                    <h3 className="fw-bold">Home Loan Calculator</h3>
                    <p className="text-muted">All you need to know about your home loan</p>
                </div>

                {/* Scroll Buttons + Tabs */}
                <div className="d-flex align-items-center position-relative">

                    {/* Left Button */}
                    <button
                        onClick={scrollLeft}
                        className="btn btn-light shadow-sm d-block d-md-none me-2"
                        style={{ width: 35, height: 35, borderRadius: "50%" }}
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Scrollable Tabs */}
                    <div
                        ref={scrollRef}
                        className="flex-grow-1 overflow-auto"
                        style={{
                            whiteSpace: "nowrap",
                            scrollbarWidth: "none",
                        }}
                    >
                        <Nav tabs className="flex-nowrap justify-content-start">
                            <NavItem className="cursor">
                                <NavLink
                                    className={activeTab === "1" ? "active" : ""}
                                    onClick={() => setActiveTab("1")}
                                >
                                    <FaCalculator className="me-2" /> EMI Calculator
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={activeTab === "2" ? "active" : ""}
                                    onClick={() => setActiveTab("2")}
                                >
                                    <FaMoneyBillWave className="me-2" /> Loan Eligibility
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={activeTab === "3" ? "active" : ""}
                                    onClick={() => setActiveTab("3")}
                                >
                                    <FaExchangeAlt className="me-2" /> Balance Transfer
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={activeTab === "4" ? "active" : ""}
                                    onClick={() => setActiveTab("4")}
                                >
                                    <FaUndo className="me-2" /> Prepayment
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={activeTab === "5" ? "active" : ""}
                                    onClick={() => setActiveTab("5")}
                                >
                                    <FaPercent className="me-2" /> Rate Change
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={activeTab === "6" ? "active" : ""}
                                    onClick={() => setActiveTab("6")}
                                >
                                    <FaCalendarAlt className="me-2" /> Monthly Repayment
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={scrollRight}
                        className="btn btn-light shadow-sm d-block d-md-none ms-2"
                        style={{ width: 35, height: 35, borderRadius: "50%" }}
                    >
                        <FaChevronRight />
                    </button>

                </div>

                {/* Tab Content */}
                <TabContent activeTab={activeTab} className="mt-4">
                    <TabPane tabId="1">
                        <EmiCalculator />
                    </TabPane>
                    <TabPane tabId="2">
                        <LoanEligibilityCalculator />
                    </TabPane>
                    <TabPane tabId="3">
                        <BalanceTransferCalculator />
                    </TabPane>
                    <TabPane tabId="4">
                        <PrepaymentCalculator />
                    </TabPane>
                    <TabPane tabId="5">
                        <RateChangeCalculator />
                    </TabPane>
                    <TabPane tabId="6">
                        <MonthlyRepayment/>
                    </TabPane>
                </TabContent>
            </Container>
        </section>
    );
};

export default HomeLoanCalculator;
