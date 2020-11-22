import React from 'react';
import {Link} from 'react-router-dom';
import image from '../images/notFoundImage.jpg';

const NotFound = () => (
    <div>
        <h1>404</h1>
        <img src={image} width="320" alt=""/>
        <p>Page not found! Here is  <Link to="/">link</Link> to HomePage</p>
    </div>
);
export default NotFound;