import React from 'react';
import styles from './ReviewsItem.module.css';
import PropTypes from 'prop-types';


function ReviewsItem({author, content}) {
    return (
        <>
        <h2 className={styles.author}>{author}</h2>
        <p className={styles.content}>{content}</p>
        </>
    )
};
ReviewsItem.propTypes = {
    review: PropTypes.string,
    author: PropTypes.string,
  }

export default ReviewsItem;