import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const SignInLink: React.FC = () => {
  return (
    <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
  );
};

export default SignInLink;
