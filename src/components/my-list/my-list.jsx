import React from 'react';
import MovieItemCard from '../movie-item-card/movie-item-card.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const MyList = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <Header title={"My List"}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {films.map((film) => <MovieItemCard key={`${film.name}-${film.id}`} name={film.name} id={film.id} src={film.preview_image} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
