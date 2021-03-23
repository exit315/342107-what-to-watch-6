import React, {useRef, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {connect, useDispatch} from "react-redux";
import {login} from "../../api/api-actions";
import Header from '../header/header';
import Footer from '../footer/footer';
import {getIsFormDisabled, getIsErrorShown} from '../../store/user-interaction/selectors';
import {setIsErrorShown} from "../../store/action";

const SignIn = ({onSubmit, isFormDisabled, isErrorShown}) => {
  const {shown, errorText} = isErrorShown;

  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  const [messageText, setMessageText] = useState(``);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  useEffect(() => {
    if (shown) {
      setMessageText(errorText);
    }

    return () => {
      dispatch(setIsErrorShown({shown: false, errorText: ``}));
    };
  }, [shown]);

  const renderErrorMessage = () => {
    return (
      <div>
        <p style={{color: `#866866`}}><strong>{messageText}</strong></p>
      </div>
    );
  };

  return (
    <div className="user-page">
      <Header title={`Sign in`} isUserBlockShown={false}/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} disabled={isFormDisabled}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} disabled={isFormDisabled}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={isFormDisabled}>Sign in</button>
          </div>
        </form>
        {renderErrorMessage()}
      </div>

      <Footer />

    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isErrorShown: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isFormDisabled: getIsFormDisabled(state),
  isErrorShown: getIsErrorShown(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
