import React from 'react';
import {RatingStar} from "./rating-star";

export const RatingContainer = ({onChange, rating}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {new Array(5).fill(``).map((_, i) => (
          <RatingStar
            rating={rating}
            onChange={onChange}
            key={i}
            index={i + 1}/>
        ))}
      </div>
    </div>
  );
};
