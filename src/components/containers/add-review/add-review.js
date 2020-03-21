import React, {PureComponent} from 'react';
import {TextArea, RatingContainer} from "./parts";
import {Operation} from "../../../reducer/data/reducer";
import {connect} from 'react-redux';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._form = React.createRef();

    this.state = {
      text: ``,
      rating: 5,
      isBlocked: true,
      isBlockedInput: false
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this._unBlockedForm = this._unBlockedForm.bind(this);
  }

  onChangeText(e) {
    this.setState({text: e.target.value});
    this._calcTextLength();
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.sendComment(this.state.text, this.state.rating);
  }

  sendComment(text, rating) {
    const {id, addComment} = this.props;
    this._blockedForm();
    addComment(id, text, rating).then(this._unBlockedForm);
  }

  onChangeRating(rating) {
    this.setState({rating});
  }

  _blockedForm() {
    this.setState({isBlockedInput: true});
  }

  _unBlockedForm() {
    this.setState({isBlockedInput: false});
    this._form.current.reset();
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
          ref={this._form}
          onSubmit={this.onSubmitForm}
          action="#" className="add-review__form">
          <RatingContainer
            rating={this.state.rating}
            onChange={this.onChangeRating}/>

          <TextArea
            backgroundColor={this.props.backgroundColor}
            isBlockedInput={this.state.isBlockedInput}
            isBlocked={this.state.isBlocked}
            onChange={this.onChangeText}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (id, rating, comment) => dispatch(Operation.addComment(id, rating, comment)),
});

export default connect(null, mapDispatchToProps)(AddReview);
