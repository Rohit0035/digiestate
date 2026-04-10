import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Button,
} from 'reactstrap';
import RatingBuyer from './RatingBuyer';
import RatingAllOffCanvas from "./RatingAllOffCanvas";
import RatingWriteOffCanvas from './RatingWriteOffCanvas';

const Ratings = ({ project = {} }) => {

    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const toggleCanvas = () => setIsCanvasOpen(!isCanvasOpen);

    const [isOffCanvasVisible, setIsOffCanvasVisible] = useState(false);
    const toggleOffCanvasVisibility = () => setIsOffCanvasVisible(!isOffCanvasVisible);

    return (
        <>
            <Card className="mt-5 border-0 bg-light" data-aos="fade-up">
                <CardBody>
                    <Row className="align-items-center">
                        <Col md="6">
                            <h4 className="fw-bold mb-0">Ratings & Reviews</h4>
                            <small>for White Breeze</small>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col xs="12">
                            {/* Only Project Rating */}
                            <RatingBuyer project={project}/>
                        </Col>

                        <Col lg="12" className='mt-3'>
                            <Button 
                                className='rounded-pill fw-semibold px-4 shadow-sm btn-sm btn-danger me-2' 
                                onClick={toggleCanvas}
                            >
                                View Ratings
                            </Button>

                            <Button 
                                className='rounded-pill fw-semibold px-4 shadow-sm btn-sm btn-danger'
                                onClick={toggleOffCanvasVisibility}
                            >
                                Write Ratings
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <RatingAllOffCanvas
                isOpen={isCanvasOpen}
                toggleCanvas={toggleCanvas}
                reviews={project?.reviews}
            />

            <RatingWriteOffCanvas 
                isVisible={isOffCanvasVisible} 
                onToggleVisibility={toggleOffCanvasVisibility} 
                projectId={project?._id}
            />
        </>
    );
};

export default Ratings;