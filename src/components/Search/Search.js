import React, { Component } from "react";
import SearchBox from "../SearchBox/SearchBox";
import getQueryParams from "../../utils/getQueryParams";
import filmApi from "../../services/filmApi";
import FilmItem from "../PopularFilmItem/PopularFilmItem";
import styles from "./Search.module.css";

export default class Search extends Component {
  state = {
    films: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchQuery(query);
    } else {
      this.setState({ loading: true });
      filmApi
        .fetchPopularFilm()
        .then((films) => this.setState({ films }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  componentDidUpdate(prevProps, PrevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchQuery(nextQuery);
    }
  }
  fetchQuery = (query) => {
    this.setState({ loading: true });
    filmApi
      .fetchQuery(query)
      .then((films) => this.setState({ films }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handlerChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    const { films } = this.state;
    return (
      <>
        <SearchBox onSubmit={this.handlerChangeQuery} />
        <ul className={styles.list}>
          {films.map((film) => (
            <FilmItem
              key={film.id}
              title={film.title ? film.title : film.name}
              image={film.poster_path}
              rating={film.vote_average}
              movieId={film.id}
              location={this.props.location}
            />
          ))}
        </ul>
      </>
    );
  }
}
