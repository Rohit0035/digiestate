import React from "react";
import { FaTrash } from "react-icons/fa";
import { Card, CardBody, Table, Button } from "reactstrap";

const MyEnquiries = () => {
  // Example enquiry data
  const enquiries = [
    { id: 1, property: "Luxury Villa", date: "2026-01-28", status: "Pending" },
    { id: 2, property: "Downtown Apartment", date: "2026-01-25", status: "Responded" },
    { id: 3, property: "Suburban House", date: "2026-01-20", status: "Closed" },
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardBody>
        <h5 className="fw-bold mb-3">My Enquiries</h5>
        <p>Recent enquiry status will appear here.</p>
 
        <div className="table-responsive mt-3">
          <Table hover bordered responsive className="small">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Property</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry, index) => (
                <tr key={enquiry.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{enquiry.property}</td>
                  <td>{enquiry.date}</td>
                  <td>{enquiry.status}</td>
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
      </CardBody>
    </Card>
  );
};

export default MyEnquiries;
