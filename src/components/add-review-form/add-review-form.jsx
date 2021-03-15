import React, {useState} from 'react';

const MAX_RATING = 10;

const AddReviewForm = () => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``
  });

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, comment: value});
  };

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, rating: value});
  };

  const renderRatingHandler = () => {
    const ratingRange = [];
    for (let i = 1; i <= MAX_RATING; i++) {
      ratingRange.push(
          <>
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={handleRatingChange}/>
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </>
      );
    }
    return ratingRange;
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {renderRatingHandler()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="comment" placeholder="Review text"
          onChange={handleCommentChange}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default AddReviewForm;
