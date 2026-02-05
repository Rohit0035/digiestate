import React from "react";
import { FaTrash } from "react-icons/fa";
import { Table, Button } from "reactstrap";

const SaveProperties = () => {
  // Example data
  const savedProperties = [
    { id: 1, name: "Luxury Villa", location: "Lorem", price: "$1,200,000" },
    { id: 2, name: "Downtown Apartment", location: "Lorem", price: "$850,000" },
    { id: 3, name: "Suburban House", location: "Lorem", price: "$650,000" },
  ];

  return (
    <div className="table-responsive">
      <h5 className="fw-bold mb-3">Saved Properties</h5>
      <p className="text-muted mb-3">
        You have saved properties from DigiEstate Group.
      </p>

      <Table hover bordered responsive className="small">
        <thead className="table-warning">
          <tr>
            <th>#</th>
            <th>Property Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {savedProperties.map((property, index) => (
            <tr key={property.id}>
              <th scope="row">{index + 1}</th>
              <td>{property.name}</td>
              <td>{property.location}</td>
              <td>{property.price}</td>
              <td>
                <Button color="danger" size="sm">
                   <FaTrash/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SaveProperties;
