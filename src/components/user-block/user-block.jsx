import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {logout} from "../../api/api-actions";
import {AppRoute} from '../../utils/const';
import {getUserEmail} from '../../store/user/selectors';

const UserBlock = (props) => {
  const {onClick, userEmail} = props;

  return (
    <>
      <div className="user-block__avatar">
        <Link to={AppRoute.MYLIST} className="logo__link">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>

      </div>
      <Link to={AppRoute.ROOT} className="user-block__link" onClick={onClick}>{userEmail}</Link>
    </>
  );
};

UserBlock.propTypes = {
  userEmail: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(authData) {
    dispatch(logout(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
