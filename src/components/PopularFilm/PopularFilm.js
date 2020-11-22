import React, { Component } from "react";
import filmApi from "../../services/filmApi";
import Loader from "../Loader/Loader";
import PopularFilmItem from "../PopularFilmItem/PopularFilmItem";
import PropTypes from "prop-types";
import styles from './PopularFilm.module.css';

export default class PopularFilm extends Component {
  static proptTypes = {
    location: PropTypes.object,
  }

  state = {
    films: [],
    error: null,
    loading: false,
  };
  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = () => {
    this.setState({ loading: true });
    filmApi
      .fetchPopularFilm()
      .then((films) => this.setState({ films }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { films, error, loading } = this.state;
    return (
      <>
        {error && <p>Oooops, something went wrong: {error.message}</p>}

        {films.length > 0 && (
          <>
            <h1 className={styles.title}>The best films of that week</h1>
            <ul className={styles.list}>
            {films.map((film) => (
              <PopularFilmItem
                key={film.id}
                title={film.title ? film.title : film.name}
                image={film.poster_path}
                rating={film.vote_average}
                movieId={film.id}
              />
            ))}
            </ul>
          </>
        )}
        {loading && <Loader />}
      </>
    );
  }
}
