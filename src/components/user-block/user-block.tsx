import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {logout} from "../../api/api-actions";
import {getUserEmail} from '../../store/user/selectors';
import {AppStateType} from '../../store/root-reducer';

type PropsType = {
  onLogoutClick: (email: string) => void
  userEmail: string
}

const UserBlock: React.FC<PropsType> = ({onLogoutClick, userEmail}) => {

  return (
    <>
      <div className="user-block__avatar">
        <Link to={AppRoute.MYLIST} className="logo__link">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>

      </div>
      <Link to={AppRoute.ROOT} className="user-block__link" onClick={(e: React.MouseEvent) => onLogoutClick(userEmail)}>{userEmail}</Link>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onLogoutClick(userEmail: string) {
    dispatch(logout(userEmail));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
