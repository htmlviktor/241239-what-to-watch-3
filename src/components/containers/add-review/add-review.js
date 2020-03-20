import React, {PureComponent} from 'react';
import {TextArea, RatingContainer} from "./parts";

export default class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ``,
      rating: 5,
      isBlocked: true
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
  }

  onChangeText(e) {
    this.setState({text: e.target.value});
    this._calcTextLength();
  }

  onSubmitForm(e) {
    e.preventDefault();
  }

  onChangeRating(rating) {
    this.setState({rating});
  }

  _calcTextLength() {
    if (this.state.text.length >= 50 && this.state.text.length <= 400) {
      this.setState({isBlocked: false});
    } else {
      this.setState({isBlocked: true});
    }
  }

  render() {
    return (
      <div className="add-review">
        <form
          onSubmit={this.onSubmitForm}
          action="#" className="add-review__form">
          <RatingContainer
            rating={this.state.rating}
            onChange={this.onChangeRating}/>

          <TextArea
            isBlocked={this.state.isBlocked}
            onChange={this.onChangeText}/>
        </form>
      </div>
    );
  }
}
