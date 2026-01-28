"use client";
import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
} from "reactstrap";

const RatingInfoSidebar = ({ isOpen, toggle }) => {
    return (
        <Offcanvas
            isOpen={isOpen}
            toggle={toggle}
            direction="end"
            className="w-75 side-st-top"
            
        >
            <OffcanvasHeader toggle={toggle}>
                Know how its calculated
            </OffcanvasHeader>
            <OffcanvasBody>
                <h6 className="fw-bold">Rating Methodology</h6>
                <p className="small text-muted">
                    Magicbricks locality rating system rates a locality based on three key parameters
                    that impact quality <b>Project Infrastructure</b> <b>Project Amenities</b>
                    and <b>Project Maintenance</b>. Each parameter has a specific weight
                    determined through surveys and research.
                </p>

                <p className="small text-muted">
                    The rating system is developed by <b>Magicbricks Research</b> which combines
                    user rankings and extensive research sources such as SafeTipin Numbeo Wikipedia
                    Google Search and Government public data. MB user ranking reflects
                    the personal experience of local residents.
                </p>

                <p className="small text-muted">
                    The survey results are modeled and ranked according to the weighted average
                    gain of individual parameters. For methodology inquiries contact
                    <a href="mailto:surabhi.arora@magicbricks.com" className="text-danger ms-1">
                        surabhi.arora@magicbricks.com
                    </a>.
                </p>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default RatingInfoSidebar;
