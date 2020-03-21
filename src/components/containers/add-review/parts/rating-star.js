import React from 'react';

export const RatingStar = ({index: i, onChange}) => {
  return (
    <React.Fragment>
      <input
        onChange={() => onChange(i)}
        className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} />
      <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
    </React.Fragment>
  );
};
