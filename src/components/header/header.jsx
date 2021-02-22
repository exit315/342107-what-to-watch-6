import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SignInLinkElement = () => {
  return (
    <Link to="/login" className="user-block__link">Sign in</Link>
  );
};

const UserPicElement = () => {
  return (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  );
};

const Header = (props) => {
  const {title} = props;
  const isGuest = true;

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">{title}</h1>

      <div className="user-block">
        {isGuest ? <SignInLinkElement /> : <UserPicElement />}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
