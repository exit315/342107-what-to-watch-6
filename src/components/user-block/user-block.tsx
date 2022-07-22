import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {logout} from "../../api/api-actions";
import {getUserEmail} from '../../store/user/selectors';
import {AppStateType} from '../../store/root-reducer';

type MapStatePropsType = {
  userEmail: string | null
}

type MapDispatchPropsType = {
  onLogoutClick: (userEmail: string) => void
}

const UserBlock: React.FC<MapStatePropsType & MapDispatchPropsType> = ({userEmail, onLogoutClick}) => {
  const handlLogOut = () => {
    if (userEmail) {
      (e: React.MouseEvent) => onLogoutClick(userEmail)
    }
  }

  return (
    <>
      <div className="user-block__avatar">
        <Link to={AppRoute.MYLIST} className="logo__link">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </div>
      
      <Link to={AppRoute.ROOT} className="user-block__link" onClick={handlLogOut}>{userEmail}</Link>
    </>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => ({
  onLogoutClick(userEmail: string) {
    dispatch(logout(userEmail));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
