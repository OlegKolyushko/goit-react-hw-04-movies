import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import filmApi from "../../services/filmApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import routes from "../../routes";
import styles from "./MovieInfoPage.module.css";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";

export default class MovieinfoPage extends Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
  };
  state = {
    film: [],
    error: null,
    loading: false,
  };
  componentDidMount() {
    this.fetchFilm();
  }
  fetchFilm = () => {
    this.setState({ loading: true });
    const { match } = this.props;
    filmApi
      .fetchFilmDetails(match.params.movieId)
      .then((film) => this.setState({ film }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handlerBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
    } else {
      this.props.history.push(routes.MoviesPage);
    }
  };
  render() {
    const { loading, error } = this.state;
    const { poster_path, overview, original_title } = this.state.film;
    const logo = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const { movieId } = this.props.match.params;

    return (
      <>
        {error && <p>Oooops, something went wrong: {error.message}</p>}
        <button
          className={styles.goBack}
          type="button"
          onClick={this.handlerBack}
        >
          Go back
        </button>
        {loading && <Loader />}
        <h1 className={styles.title}>{original_title}</h1>
        <p className={styles.overview}>{overview}</p>
        <img className={styles.logo} src={logo} alt="" />
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={styles.casts}
              activeClassName={styles.activeCasts}
              to={`${this.props.match.url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={styles.reviews}
              activeClassName={styles.activeReviews}
              to={`${this.props.match.url}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            path={routes.Cast}
            render={(props) => <Cast {...props} movieId={movieId} />}
          />
          <Route
            path={routes.Reviews}
            render={(props) => <Reviews {...props} movieId={movieId} />}
          />
        </Switch>
      </>
    );
  }
}
