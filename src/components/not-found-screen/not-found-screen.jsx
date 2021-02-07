import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const NotFoundScreen = () => {

  return (
    <div className="user-page">
      <Header />

      <div className="user-page__content page-not-found" style={
          {
            paddingTop: '100px',
            textAlign: 'center',
          }
        }>
        <h1>Oops! Seems like there is no such page</h1>
        <a href="/" style={
          {
            color: 'inherit',
            fontSize: '1.5em',
            textDecoration: 'none'
          }
        }>Return to the main page</a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundScreen;
