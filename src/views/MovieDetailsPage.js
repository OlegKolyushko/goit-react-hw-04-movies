import React from 'react';
import MovieInfoPage from '../components/MovieInfoPage/MovieInfoPage';
import PropTypes from 'prop-types';


const MovieDetailsPage = ({history, location, match}) => (
    <>
    <MovieInfoPage history={history} location={location} match={match} />
    </>
)

MovieDetailsPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
  }
export default MovieDetailsPage;