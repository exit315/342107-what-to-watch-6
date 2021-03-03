import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {TabType} from '../../utils/const.js';

const Tabs = (props) => {
  const {changeTabHandler, activeTab} = props;

  const onTabClick = (evt) => {
    changeTabHandler(evt.target.textContent);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeTab === TabType.OVERVIEW ? `movie-nav__item--active` : ``}`} onClick={onTabClick}>
          <Link to="#" className="movie-nav__link">{TabType.OVERVIEW}</Link>
        </li>
        <li className={`movie-nav__item ${activeTab === TabType.DETAILS ? `movie-nav__item--active` : ``}`} onClick={onTabClick}>
          <Link to="#" className="movie-nav__link">{TabType.DETAILS}</Link>
        </li>
        <li className={`movie-nav__item ${activeTab === TabType.REVIEWS ? `movie-nav__item--active` : ``}`} onClick={onTabClick}>
          <Link to="#" className="movie-nav__link">{TabType.REVIEWS}</Link>
        </li>
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  changeTabHandler: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default Tabs;
