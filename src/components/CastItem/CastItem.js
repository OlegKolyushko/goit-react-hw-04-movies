import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastItem.module.css';

function CastItem({name, character, profile_path}) {
    const logo = `https://image.tmdb.org/t/p/w500/${profile_path}`;
    return (
        <>
    <h2 className={styles.name}>{name}</h2>
    <h2 className={styles.character}>{character}</h2>
    <img className={styles.logo} src={logo} alt=""  />
    </>
    )
};
CastItem.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
}

export default CastItem;