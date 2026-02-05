import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,
} from 'reactstrap';
import classnames from 'classnames';
import RatingsReviews from './RatingBuyer';
import RatingBuyer from './RatingBuyer';
import RatingLocality from './RatingLocality';
import RatingAllOffCanvas from "./RatingAllOffCanvas";
import RatingWriteOffCanvas from './RatingWriteOffCanvas';

const Ratings = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [isCanvasOpen, setIsCanvasOpen] = useState(false);

    const toggleCanvas = () => setIsCanvasOpen(!isCanvasOpen);


     // State to manage the visibility of the off-canvas
  const [isOffCanvasVisible, setIsOffCanvasVisible] = useState(false);

  // Unique function to toggle the off-canvas visibility
  const toggleOffCanvasVisibility = () => setIsOffCanvasVisible(!isOffCanvasVisible);

  // Unique function to handle the submitted rating and comment
  const handleUserFeedbackSubmission = (userRating, userComment) => {
    // Here you can do something with the rating and comment (e.g., save it to a database)
    // For now, no log or alert, just a placeholder for further action
  };
    return (
        <>
            <Card className="mt-5 border-0 bg-light" data-aos="fade-up">
                <CardBody>
                    <Row className="align-items-center">
                        <Col md="6">
                            <h4 className="fw-bold mb-0">Ratings & Reviews</h4>
                            <small>for White Breeze</small>
                        </Col>
                        <Col md="6" className="text-md-end mt-3 mt-md-0">
                            <Nav pills className="justify-content-md-end small ">
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === '1',
                                            'rounded-pill': true,
                                        })}
                                        onClick={() => toggle('1')}
                                        style={{
                                            cursor: 'pointer',
                                            padding: '6px 15px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Project
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === '2',
                                            'rounded-pill': true,
                                        })}
                                        onClick={() => toggle('2')}
                                        style={{
                                            cursor: 'pointer',
                                            padding: '6px 15px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Locality
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col xs="12">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <RatingBuyer />
                                </TabPane>
                                <TabPane tabId="2">
                                    <RatingLocality />
                                </TabPane>
                            </TabContent>
                        </Col>

                        <Col lg="12" className='mt-3'>
                            <Button className='rounded-pill fw-semibold px-4 shadow-sm btn-sm btn btn-danger me-2' onClick={toggleCanvas}>
                                View Ratings
                            </Button>
                            <Button className='rounded-pill fw-semibold px-4 shadow-sm btn-sm btn btn-danger'onClick={toggleOffCanvasVisibility}>
                                Write Ratings
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <RatingAllOffCanvas
                // ratings={ratings} 
                isOpen={isCanvasOpen}
                toggleCanvas={toggleCanvas}
            />


             {/* Off-canvas component */}
      <RatingWriteOffCanvas 
        isVisible={isOffCanvasVisible} 
        onToggleVisibility={toggleOffCanvasVisibility} 
        onFeedbackSubmit={handleUserFeedbackSubmission} 
      />
        </>
    );
};

export default Ratings;
