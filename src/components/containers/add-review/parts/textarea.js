import React from 'react';

export const TextArea = ({onChange, isBlocked, backgroundColor, isBlockedInput}) => {
  return (
    <div

      className="add-review__text">
      <textarea
        disabled={isBlockedInput}
        onChange={onChange}
        className="add-review__textarea" name="review-text" id="review-text"
        placeholder="Review text" />
      <div className="add-review__submit">
        <button
          disabled={isBlocked}
          className="add-review__btn" type="submit">Post</button>
      </div>

    </div>
  );
};

