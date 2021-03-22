import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {MAX_RATING, COMMENT_MIN_LENGTH} from '../../utils/const';
import {sendComment} from "../../api/api-actions";
import {getStatus} from '../../store/user-interaction/selectors';

const AddReviewForm = ({onSubmit, id, status}) => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (review.rating === 0 || review.comment.length < COMMENT_MIN_LENGTH) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [review]);

  const handleCommentChange = (evt) => {
    setReview({...review, comment: evt.target.value});
  };

  const handleRatingChange = (evt) => {
    setReview({...review, rating: evt.target.value});
  };

  const renderRatingHandler = () => {
    const ratingRange = [];
    for (let i = 1; i <= MAX_RATING; i++) {
      ratingRange.push(
          <React.Fragment key={i}>
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={handleRatingChange} key={`input-key` + i} />
            <label className="rating__label" htmlFor={`star-${i}`} key={`label-key` + i}>Rating {i}</label>
          </React.Fragment>
      );
    }
    return ratingRange;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      id,
      rating: +(review.rating),
      comment: review.comment,
    });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {renderRatingHandler()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text" minLength="50" maxLength="400"
          onChange={handleCommentChange} disabled={status}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled} >Post</button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, comment) {
    dispatch(sendComment(id, rating, comment));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
