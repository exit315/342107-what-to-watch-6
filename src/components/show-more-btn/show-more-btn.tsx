import React from 'react';

type PropsType = {
  handleFilmCountChange: () => void
  showBtn: boolean
}

const ShowMoreBtn: React.FC<PropsType> = ({handleFilmCountChange, showBtn}) => {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(e: React.MouseEvent) => handleFilmCountChange()}>Show more</button>
    </div>
  );
};

export default ShowMoreBtn;
