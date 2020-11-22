import React from 'react';
import PopularFilms from '../components/PopularFilm/PopularFilm';
import styles from './styles/HomePage.module.css'
import PropTypes from 'prop-types';


const HomePages = ({location}) => (
    <div className={styles.container}>
    <PopularFilms location={location}/>
    </div>
)
HomePages.propTypes = {
    location: PropTypes.object,
  }
  
export default HomePages;