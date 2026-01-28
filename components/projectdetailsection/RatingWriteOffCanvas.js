import React, { useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FaStar } from 'react-icons/fa'; // Importing star icon from react-icons

const RatingWriteOffCanvas = ({ isVisible, onToggleVisibility, onFeedbackSubmit }) => {
    const [selectedRating, setSelectedRating] = useState(0); // Stores the selected rating
    const [userComment, setUserComment] = useState(''); // Stores the comment entered by the user
    const [ratingCategory, setRatingCategory] = useState({
        waterSupply: 0,
        mainElectricity: 0,
        powerBackup: 0,
        sewageHandling: 0,
        sportsFacility: 0,
        parkingFacility: 0,
        gardenGreenery: 0,
        shopsWithinPremises: 0,
        constructionQuality: 0,
        commonAreaMaintenance: 0,
        availabilityOfService: 0,
        security: 0,
    });

    const handleRatingSelection = (category, value) => {
        setRatingCategory({ ...ratingCategory, [category]: value });
    };

    const handleCommentInputChange = (e) => {
        setUserComment(e.target.value);
    };

    const submitUserFeedback = () => {
        onFeedbackSubmit(ratingCategory, userComment);
        onToggleVisibility();
    };

    const renderRatingStars = (category) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={`me-1 ${i <= ratingCategory[category] ? 'text-warning' : 'text-muted'}`}
                    onClick={() => handleRatingSelection(category, i)}
                    style={{ cursor: 'pointer' }}
                />
            );
        }
        return stars;
    };

    return (
        <Offcanvas isOpen={isVisible} toggle={onToggleVisibility} direction="end" className='w-75'>
            <OffcanvasHeader toggle={onToggleVisibility}>Rate Your Experience</OffcanvasHeader>
            <OffcanvasBody>
                <Form>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="4">
                            <div className="mb-3 border p-2">
                                <h5>Project Infrastructure</h5>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Water Supply</Label>
                                    <span>
                                        {renderRatingStars('waterSupply')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Main Electricity</Label>
                                    <span>
                                        {renderRatingStars('mainElectricity')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Power Backup</Label>
                                    <span>
                                        {renderRatingStars('powerBackup')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Sewage Handling</Label>
                                    <span>
                                        {renderRatingStars('sewageHandling')}
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4">
                            <div className="mb-3 border p-2">
                                <h5>Project Amenities</h5>
                                <div className='small  d-flex justify-content-between' >
                                    <Label>Sports Facility</Label>
                                    <span>
                                        {renderRatingStars('sportsFacility')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Parking Facility</Label>
                                    <span>
                                        {renderRatingStars('parkingFacility')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Garden of Greenery</Label>
                                    <span>
                                        {renderRatingStars('gardenGreenery')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Shops within Premises</Label>
                                    <span>
                                        {renderRatingStars('shopsWithinPremises')}
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="4">
                            <div className="mb-3 border p-2">
                                <h5>Project Maintenance</h5>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Construction Quality</Label>
                                    <span>
                                        {renderRatingStars('constructionQuality')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Common Area Maintenance</Label>
                                    <span>
                                        {renderRatingStars('commonAreaMaintenance')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>Availability of Service</Label>
                                    <span>
                                        {renderRatingStars('availabilityOfService')}
                                    </span>
                                </div>
                                <div className='small  d-flex justify-content-between'>
                                    <Label>24/7 Security</Label>
                                    <span>
                                        {renderRatingStars('security')}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Comment Input */}


                    <FormGroup>
                        <Label>
                            Title
                        </Label>
                        <Input type='text' placeholder='add title' />
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Select
                        </Label>
                        <Input type='select'>
                            <option>I own a property here</option>
                            <option>I currently/used to live here</option>
                            <option>I am a local agent</option>
                            <option>I visited the project</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Write Review</Label>
                        <Input
                            type="textarea"
                            name="comment"
                            id="comment"
                            value={userComment}
                            onChange={handleCommentInputChange}
                            placeholder="Tell us what you like & dislike about this project"
                        />
                    </FormGroup>

                    {/* Submit Button */}
                    <Row>
                        <Col className="text-start">
                            <Button className='rounded-pill fw-semibold px-4 shadow-sm btn-sm btn btn-danger me-2 btn btn-secondary' onClick={submitUserFeedback}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default RatingWriteOffCanvas;
