import React from 'react';
import Footer from '../footer/footer';

const LoadingScreen: React.FC = () => {
  return (
    <div>
      <div className="user-page">
        <div className="user-page__content page-not-found" style={
          {
            paddingTop: `100px`,
            textAlign: `center`,
          }
        }>
          <h1>Loading...</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoadingScreen;
