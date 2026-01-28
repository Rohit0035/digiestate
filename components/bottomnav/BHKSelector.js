"use client";
import React, { useState } from "react";
import { Badge, Card, Label, CardBody } from "reactstrap";

const BHKSelector = () => {
    const [selectedBHK, setSelectedBHK] = useState([]);

    const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];

    const toggleBHK = (bhk) => {
        if (selectedBHK.includes(bhk)) {
            setSelectedBHK(selectedBHK.filter((b) => b !== bhk));
        } else {
            setSelectedBHK([...selectedBHK, bhk]);
        }
    };

    return (
        <Card className="bg-light mt-3 border-0">
            <CardBody>
                <div className="">
                    <Label className="fw-bold mb-2 text-st">BHK</Label>

                    <div
                        className="d-flex gap-2"
                        style={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            paddingBottom: "5px",
                        }}
                    >
                        {bhkOptions.map((bhk, index) => (
                            <Badge
                                key={index}
                                pill
                                onClick={() => toggleBHK(bhk)}
                                color={selectedBHK.includes(bhk) ? "success" : "light"}
                                className={`px-3 py-2 border small ${selectedBHK.includes(bhk)
                                        ? "text-white border-success"
                                        : "text-dark border-secondary"
                                    }`}
                                style={{
                                    cursor: "pointer",
                                    flex: "0 0 auto",
                                    userSelect: "none",
                                }}
                            >
                                + {bhk}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardBody>
        </Card>

    );
};

export default BHKSelector;
