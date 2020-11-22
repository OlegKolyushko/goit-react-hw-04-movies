import React, { Component } from "react";
import filmApi from "../../services/filmApi";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import styles from './Reviews.module.css';
import PropTypes from 'prop-types';

export default class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  }

  state = {
    reviews: [],
    error: null,
    loading: false,
  };
  componentDidMount() {
      this.fetchReviews();
  }
  fetchReviews = () => {
    this.setState({ loading: true });
    filmApi
      .fetchReviews(this.props.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li className={styles.item} key={review.id}>
              <ReviewsItem author={review.author} content={review.content} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
