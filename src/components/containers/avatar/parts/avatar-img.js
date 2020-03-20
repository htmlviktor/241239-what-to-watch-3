import React from "react";
import {getUserInfo} from "../../../../reducer/user/selectors";
import {connect} from 'react-redux';
import {compose} from "redux";
import withLoadIndicator from "../../../hocs/withLoadIndicator";

const AvatarImg = ({item}) => {
  return (
    <div className="user-block__avatar">
      <img src={`https://htmlacademy-react-3.appspot.com/${item.avatar}`} alt="User avatar" width={63} height={63} />
    </div>);
};

const mapStateToProps = (state) => ({
  item: getUserInfo(state)
});

export default compose(
    connect(mapStateToProps),
    withLoadIndicator
)(AvatarImg);
