import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const MyList = (props) => {
  const {films} = props;

  const [activeCard, setActiveCard] = useState(null);
  const handleActiveCardChange = (id = null) => {
    setActiveCard(id);
  };

  const filmsList = films.filter((el) => {
    if (el.is_favorite === false) {
      return null;
    } else {
      return el.is_favorite === true;
    }
  });

  return (
    <div className="user-page">
      <Header title={`My List`}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {filmsList.map((film) => <MovieItemCard
            key={`${film.name}-${film.id}`}
            name={film.name} id={film.id}
            src={film.preview_image}
            previewVideoLink={film.preview_video_link}
            handleActiveCardChange={handleActiveCardChange}
            activeCard={activeCard}
          />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.array
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
