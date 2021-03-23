import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {connect, useDispatch} from "react-redux";
import {MAX_RATING, COMMENT_MIN_LENGTH} from '../../utils/const';
import {sendComment} from "../../api/api-actions";
import {getIsFormDisabled, getIsErrorShown} from '../../store/user-interaction/selectors';
import {setIsErrorShown} from "../../store/action";

const AddReviewForm = ({onSubmit, id, isFormDisabled, isErrorShown}) => {
  const {shown, errorText} = isErrorShown;

  const dispatch = useDispatch();

  const [review, setReview] = useState({rating: 0, comment: ``});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [messageText, setMessageText] = useState(``);

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
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={handleRatingChange} key={`input-key` + i} disabled={isFormDisabled} />
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

  useEffect(() => {
    if (shown) {
      setMessageText(errorText);
    }

    return () => {
      dispatch(setIsErrorShown({shown: false, errorText: ``}));
    };
  }, [shown]);

  const renderErrorMessage = () => {
    return (
      <div>
        <p style={{color: `#866866`}}><strong>{messageText}</strong></p>
      </div>
    );
  };

  return (
    <>
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {renderRatingHandler()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text" minLength="50" maxLength="400"
            onChange={handleCommentChange} disabled={isFormDisabled}>
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isSubmitDisabled || isFormDisabled}>Post</button>
          </div>
        </div>
      </form>
      {renderErrorMessage()}
    </>
  );
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isErrorShown: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isFormDisabled: getIsFormDisabled(state),
  isErrorShown: getIsErrorShown(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, comment) {
    dispatch(sendComment(id, rating, comment));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
