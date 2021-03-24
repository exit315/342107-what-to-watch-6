import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {logout} from "../../api/api-actions";
import {AppRoute} from '../../utils/const';
import {getAuthorizationStatus, getUserEmail} from '../../store/user/selectors';
import UserBlock from '../user-block/user-block';
import SignInLink from '../sign-in-link/sign-in-link';

const Header = (props) => {
  const {title, authorizationStatus, onClick, userEmail, isUserBlockShown, breadcrumbs} = props;

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

      {breadcrumbs}

      {isUserBlockShown ? <div className="user-block">
        {authorizationStatus ? <UserBlock onClick={onClick} userEmail={userEmail}/> : <SignInLink />}
      </div> : ``}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  authorizationStatus: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isUserBlockShown: PropTypes.bool,
  breadcrumbs: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(authData) {
    dispatch(logout(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
