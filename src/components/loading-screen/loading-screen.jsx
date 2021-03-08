import React from 'react';

const LoadingScreen = () => {
  return (
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
  );
};

export default LoadingScreen;
