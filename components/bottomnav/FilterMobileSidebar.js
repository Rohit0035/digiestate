"use client";
import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Row, Col, Button } from "reactstrap";
import PropertyTabs from "./PropertyTabs";
import CityMultiSelect from "./CityMultiSelect";
import BudgetSelector from "./BudgetSelector";
import PropertyTypeSelector from "./PropertyTypeSelector";
import BHKSelector from "./BHKSelector";

const FilterMobileSidebar = ({ isOpen, toggle }) => {
  return (
    <Offcanvas
      direction="end"
      isOpen={isOpen}
      toggle={toggle}
      className="filter-sidebar"
    >
      <OffcanvasHeader toggle={toggle} className="fw-bold bg-light">
        Filters
      </OffcanvasHeader>

      <OffcanvasBody className="p-3 filter-body-scroll">
        <div className="filter-content">
          <PropertyTabs />
          <CityMultiSelect />
          <BudgetSelector />
          <PropertyTypeSelector />
          <BHKSelector/>
          <Row> 
             <Col md="12" className="mt-3 mb-2">
                <Button className="rounded-pill btn-danger w-100  btn btn-danger btn-sm">
                    View Properties
                </Button>
             </Col>
          </Row>
        </div>
      </OffcanvasBody>

      <style jsx>{`
        .filter-sidebar {
          width: 360px;
          max-width: 100%;
          background-color: #fff;
        }
        .filter-body-scroll {
          overflow-y: auto;
          max-height: calc(100vh - 60px);
        }
        .filter-body-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .filter-body-scroll::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 10px;
        }
        .filter-body-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #aaa;
        }
        .filter-content > *:not(:last-child) {
          margin-bottom: 1rem;
        }
      `}</style>
    </Offcanvas>
  );
};

export default FilterMobileSidebar;
