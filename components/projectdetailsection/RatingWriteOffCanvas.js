import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Spinner,
  FormFeedback
} from "reactstrap";
import { FaStar } from "react-icons/fa";
import { submitReview } from "../../lib/api";

const RatingWriteOffCanvas = ({ isVisible, onToggleVisibility, projectId }) => {
  const initialRatings = {
    waterSupply: 1,
    mainElectricity: 1,
    powerBackup: 1,
    sewageHandling: 1,
    sportsFacility: 1,
    parkingFacility: 1,
    gardenGreenery: 1,
    shopsWithinPremises: 1,
    constructionQuality: 1,
    commonAreaMaintenance: 1,
    availabilityOfService: 1,
    security: 1
  };

  const [loading, setLoading] = useState(false);
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  const [reviewerMobile, setReviewerMobile] = useState("");

  const [title, setTitle] = useState("");
  const [reviewerType, setReviewerType] = useState("");
  const [userComment, setUserComment] = useState("");
  const [ratingCategory, setRatingCategory] = useState(initialRatings);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const handleRatingSelection = (category, value) => {
    setRatingCategory({ ...ratingCategory, [category]: value });
  };

  const renderRatingStars = category =>
    [1, 2, 3, 4, 5].map(i =>
      <FaStar
        key={i}
        className={`me-1 ${i <= ratingCategory[category]
          ? "text-warning"
          : "text-muted"}`}
        onClick={() => handleRatingSelection(category, i)}
        style={{ cursor: "pointer" }}
      />
    );

  const validateForm = () => {
    const newErrors = {};

    if (!reviewerName.trim()) newErrors.reviewerName = "Name is required";
    if (!reviewerEmail.trim()) newErrors.reviewerEmail = "Email is required";
    if (!reviewerMobile.trim()) newErrors.reviewerMobile = "Mobile is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!reviewerType) newErrors.reviewerType = "Please select an option";
    if (!userComment.trim()) newErrors.userComment = "Review is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitUserFeedback = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = {
        projectId,
        reviewerName,
        reviewerEmail,
        reviewerMobile,
        title,
        reviewerType,
        comment: userComment,
        ratings: ratingCategory
      };
      const response = await submitReview(data);

      if (response.success) {
        setReviewerName("");
        setReviewerEmail("");
        setReviewerMobile("");
        setTitle("");
        setReviewerType("");
        setUserComment("");
        setRatingCategory(initialRatings);
        setErrors({});
        setSuccess({ apiSuccess: response.message });
      } else {
        setErrors({ apiError: response.message });
      }

      // Reset form

      //   onToggleVisibility();
    } catch (error) {
      setErrors({ apiError: error.message });
    } finally {
      setLoading(false);
    }
  };

  const RatingRow = ({ label, field }) =>
    <div className="small d-flex justify-content-between mb-1">
      <Label className="mb-0">
        {label}
      </Label>
      <span>
        {renderRatingStars(field)}
      </span>
    </div>;

  return (
    <Offcanvas
      isOpen={isVisible}
      toggle={onToggleVisibility}
      direction="end"
      className="w-75"
    >
      <OffcanvasHeader toggle={onToggleVisibility}>
        Rate Your Experience
      </OffcanvasHeader>

      <OffcanvasBody>
        <Form onSubmit={submitUserFeedback}>
          <Row>
            <Col lg="4">
              <div className="mb-3 border p-3">
                <h5>Project Infrastructure</h5>
                <RatingRow label="Water Supply" field="waterSupply" />
                <RatingRow label="Main Electricity" field="mainElectricity" />
                <RatingRow label="Power Backup" field="powerBackup" />
                <RatingRow label="Sewage Handling" field="sewageHandling" />
              </div>
            </Col>

            <Col lg="4">
              <div className="mb-3 border p-3">
                <h5>Project Amenities</h5>
                <RatingRow label="Sports Facility" field="sportsFacility" />
                <RatingRow label="Parking Facility" field="parkingFacility" />
                <RatingRow label="Garden & Greenery" field="gardenGreenery" />
                <RatingRow
                  label="Shops within Premises"
                  field="shopsWithinPremises"
                />
              </div>
            </Col>

            <Col lg="4">
              <div className="mb-3 border p-3">
                <h5>Project Maintenance</h5>
                <RatingRow
                  label="Construction Quality"
                  field="constructionQuality"
                />
                <RatingRow
                  label="Common Area Maintenance"
                  field="commonAreaMaintenance"
                />
                <RatingRow
                  label="Availability of Service"
                  field="availabilityOfService"
                />
                <RatingRow label="24/7 Security" field="security" />
              </div>
            </Col>
          </Row>

          {/* Title */}
          <FormGroup>
            <Label>Reviewer Name *</Label>
            <Input
              type="text"
              value={reviewerName}
              invalid={!!errors.reviewerName}
              onChange={e => setReviewerName(e.target.value)}
              placeholder="Add reviewer name"
            />
            <FormFeedback>
              {errors.title}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Reviewer Email *</Label>
            <Input
              type="text"
              value={reviewerEmail}
              invalid={!!errors.reviewerEmail}
              onChange={e => setReviewerEmail(e.target.value)}
              placeholder="Add reviewer email"
            />
            <FormFeedback>
              {errors.title}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Reviewer Mobile *</Label>
            <Input
              type="text"
              value={reviewerMobile}
              invalid={!!errors.reviewerMobile}
              onChange={e => setReviewerMobile(e.target.value)}
              placeholder="Add reviewer Mobile"
            />
            <FormFeedback>
              {errors.title}
            </FormFeedback>
          </FormGroup>

          {/* Title */}
          <FormGroup>
            <Label>Title *</Label>
            <Input
              type="text"
              value={title}
              invalid={!!errors.title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Add review title"
            />
            <FormFeedback>
              {errors.title}
            </FormFeedback>
          </FormGroup>

          {/* Reviewer Type */}
          <FormGroup>
            <Label>Select *</Label>
            <Input
              type="select"
              value={reviewerType}
              invalid={!!errors.reviewerType}
              onChange={e => setReviewerType(e.target.value)}
            >
              <option value="">Select</option>
              <option>I own a property here</option>
              <option>I currently/used to live here</option>
              <option>I am a local agent</option>
              <option>I visited the project</option>
              <option>Other</option>
            </Input>
            <FormFeedback>
              {errors.reviewerType}
            </FormFeedback>
          </FormGroup>

          {/* Comment */}
          <FormGroup>
            <Label>Write Review *</Label>
            <Input
              type="textarea"
              value={userComment}
              invalid={!!errors.userComment}
              onChange={e => setUserComment(e.target.value)}
              placeholder="Tell us what you like & dislike about this project"
            />
            <FormFeedback>
              {errors.userComment}
            </FormFeedback>
          </FormGroup>

          {/* API Error */}
          {errors.apiError &&
            <div className="text-danger mb-3">
              {errors.apiError}
            </div>}
          {success.apiSuccess &&
            <div className="text-success mb-3">
              {success.apiSuccess}
            </div>}

          <Button
            type="submit"
            color="danger"
            className="rounded-pill px-4"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </Form>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default RatingWriteOffCanvas;
