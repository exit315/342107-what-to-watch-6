import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {TabType} from '../../utils/const.js';

type Props = {
  changeTabHandler: (tab: string) => {}
  activeTab: string
}

const FilmTabs:React.FC<Props> = ({changeTabHandler, activeTab}) => {
  const onTabClick = (tab: string) => {
    changeTabHandler(tab);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeTab === TabType.OVERVIEW ? `movie-nav__item--active` : ``}`} onClick={() => onTabClick(TabType.OVERVIEW)}>
          <Link to="#" className="movie-nav__link">{TabType.OVERVIEW}</Link>
        </li>
        <li className={`movie-nav__item ${activeTab === TabType.DETAILS ? `movie-nav__item--active` : ``}`} onClick={() => onTabClick(TabType.DETAILS)}>
          <Link to="#" className="movie-nav__link">{TabType.DETAILS}</Link>
        </li>
        <li className={`movie-nav__item ${activeTab === TabType.REVIEWS ? `movie-nav__item--active` : ``}`} onClick={() => onTabClick(TabType.REVIEWS)}>
          <Link to="#" className="movie-nav__link">{TabType.REVIEWS}</Link>
        </li>
      </ul>
    </nav>
  );
};

FilmTabs.propTypes = {
  changeTabHandler: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default FilmTabs;
