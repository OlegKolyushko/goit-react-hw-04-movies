import React from "react";
import { NavLink } from "react-router-dom";
import styles from './PopularFilmItem.module.css';
import PropTypes from 'prop-types';


function PopularFilmItem({ title, image, rating, movieId, location }) {
  const logo = `https://image.tmdb.org/t/p/w500/${image}`;
  return (
    <li className={styles.item}>
      <NavLink className={styles.link} to={{ pathname: `/movies/${movieId}`, state: { from: location } }}>
        {title}
      <span className={styles.raiting}>{rating}</span>

      <img className={styles.logo} src={logo} alt="" />
      </NavLink>

    </li>
  );
}

PopularFilmItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.number.isRequired,
    movieId: PropTypes.number.isRequired,
    location: PropTypes.object,
  }
export default PopularFilmItem;
