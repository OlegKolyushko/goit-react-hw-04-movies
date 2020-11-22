import React, { Component } from "react";
import filmApi from "../../services/filmApi";
import CastItem from "../CastItem/CastItem";
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

export default class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  }
  state = {
    actors: [],
    error: null,
    loading: false,
  };
  componentDidMount() {
    this.fetchCast();
  }
  fetchCast = () => {
    this.setState({ loading: true });
    filmApi
      .fetchCast(this.props.movieId)
      .then((actors) => this.setState({ actors }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { actors } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {actors.map((actor) => (
            <li className={styles.item} key={actor.id}>
              <CastItem
                name={actor.name}
                character={actor.character}
                profile_path={actor.profile_path}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
