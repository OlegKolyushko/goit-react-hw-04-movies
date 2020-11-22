import React from 'react';
import Search from '../components/Search/Search';
import PropTypes from 'prop-types';



const MoviesPage = ({history, location}) => (
    <>
    <Search history={history} location={location} />
    </>
)

MoviesPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  }
export default MoviesPage;