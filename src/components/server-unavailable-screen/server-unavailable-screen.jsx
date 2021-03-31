import React from 'react';
import Footer from '../footer/footer';

const ServerUnavailableScreen = () => {
  return (
    <div>
      <div className="user-page">
        <div className="user-page__content page-not-found" style={
          {
            paddingTop: `100px`,
            textAlign: `center`,
          }
        }>
          <h1>Service is not available</h1>
          <p>Please, refresh the page or try again later</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServerUnavailableScreen;
