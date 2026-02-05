import {
    CardBody,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    Badge,
} from "reactstrap";
import { FaEdit, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React, { useState } from "react";


const InfoTab = () => {
    const [editOpen, setEditOpen] = useState(false);

    const toggleEdit = () => setEditOpen(!editOpen);

    return (
        <>
            <CardBody>
                <h5 className="fw-bold mb-4">My Profile</h5>

                <Row className="mb-3">
                    <Col md="6">
                        <p className="mb-2">
                            <FaUser className="me-2 text-success" />
                            <strong>Name:</strong> John Smith
                        </p>
                        <p className="mb-2">
                            <FaEnvelope className="me-2 text-success" />
                            <strong>Email:</strong> john@email.com
                        </p>
                        <p className="mb-2">
                            <FaPhone className="me-2 text-success" />
                            <strong>Mobile:</strong> +91 9608498908
                        </p>
                    </Col>

                    <Col md="6">
                        <p className="mb-2">
                            <FaMapMarkerAlt className="me-2 text-success" />
                            <strong>City:</strong> Patna, Bihar
                        </p>
                        <p className="mb-2">
                            <strong>Account Type:</strong>{" "}
                            <Badge color="success">Customer</Badge>
                        </p>
                        <p className="mb-2">
                            <strong>Status:</strong>{" "}
                            <Badge color="primary">Active</Badge>
                        </p>
                    </Col>
                </Row>

                <div className="d-flex gap-2">
                    <Button className="btn btn-danger" onClick={toggleEdit}>
                        <FaEdit className="me-1" /> Edit Profile
                    </Button>
                </div>
            </CardBody>

            {/* ================= EDIT PROFILE MODAL ================= */}
            <Modal isOpen={editOpen} toggle={toggleEdit} centered>
                <ModalHeader toggle={toggleEdit}>
                    Edit Profile Details
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" defaultValue="Rohit Sen" />
                        </FormGroup>

                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" defaultValue="rohit@email.com" />
                        </FormGroup>

                        <FormGroup>
                            <Label>Mobile</Label>
                            <Input type="text" defaultValue="+91 9608498908" />
                        </FormGroup>

                        <FormGroup>
                            <Label>City</Label>
                            <Input type="text" defaultValue="Patna" />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button color="secondary" onClick={toggleEdit}>
                        Close
                    </Button>
                    <Button className="btn btn-danger">
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default InfoTab;
