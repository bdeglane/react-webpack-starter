import React from 'react';
import './item.scss';

/**
 * A simple reusable abstract view component for react
 *
 * @param hello
 * @param url
 * @returns {XML}
 * @constructor
 */
const Item = ({hello, url})=> {
    return (
        <li className="component item">
            <a href={ '/' + url + '#'}>{hello}</a>
        </li>
    );
};
export default Item;