import React from 'react';
import Hello from '../component/hello/Hello.jsx';
import Item from '../component/Item/Item.jsx';

/**
 * A container is non-reusable and contain the model-view logic
 */
export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {

        var items = this.props.items.map((item, id)=> {
            return (
                <Item key={ id } hello={ item } url={ item }/>
            );
        });
        return (
            <div className="container" id="container">
                <Hello hello={ this.props.hello }/>
                <ul>
                    { items }
                </ul>
            </div>
        )
    }
}