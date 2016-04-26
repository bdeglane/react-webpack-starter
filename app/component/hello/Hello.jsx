import React from 'react';

/**
 * A simple reusable abstract view component for react
 *
 * @param hello
 * @returns {XML}
 * @constructor
 */
const Hello = ({hello})=> {
    return (
        <div className={ 'hello-' + hello }>
            <h1>Hello { hello } !</h1>
        </div>
    );
};
export default Hello;