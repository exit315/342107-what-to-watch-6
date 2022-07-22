import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {getAuthorizationStatus} from '../../store/user/selectors';
import UserBlock from '../user-block/user-block';
import SignInLink from '../sign-in-link/sign-in-link';
import {AppStateType} from '../../store/root-reducer';

type PropsType = {
  title?: string
  authorizationStatus?: boolean
  isUserBlockShown?: boolean
  breadcrumbs?: {}
}

const Header: React.FC<PropsType> = ({title, authorizationStatus, isUserBlockShown, breadcrumbs}) => {

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
        {authorizationStatus ? <UserBlock /> : <SignInLink />}
      </div> : ``}
    </header>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps, null)(Header);
