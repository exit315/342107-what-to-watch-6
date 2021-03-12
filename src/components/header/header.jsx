import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {logout} from "../../api/api-actions";
import {AppRoute} from '../../utils/const';

const SignInLinkElement = () => {
  return (
    <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
  );
};

const UserPicElement = (props) => {
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

const Header = (props) => {
  const {title, authorizationStatus, onClick, userEmail} = props;

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">{title}</h1>

      <div className="user-block">
        {authorizationStatus ? <UserPicElement onClick={onClick} userEmail={userEmail}/> : <SignInLinkElement />}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  authorizationStatus: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

UserPicElement.propTypes = {
  userEmail: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(authData) {
    dispatch(logout(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
