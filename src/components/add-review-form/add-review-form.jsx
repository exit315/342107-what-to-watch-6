import React, {useState, useEffect} from 'react';
import {MAX_RATING, COMMENT_MIN_LENGTH} from '../../utils/const';

const AddReviewForm = () => {
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
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={handleRatingChange} key={`input-key` + i}/>
            <label className="rating__label" htmlFor={`star-${i}`} key={`label-key` + i}>Rating {i}</label>
          </React.Fragment>
      );
    }
    return ratingRange;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // onSubmit({
    //   rating: ratingRef.current.value,
    //   comment: commentRef.current.value,
    // });
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
          onChange={handleCommentChange}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default AddReviewForm;
