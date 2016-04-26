import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/container.jsx';


let items = ['Roger', 'Simon', 'François'];

ReactDOM.render(<Container hello="Name" items={items}/>, document.getElementById('app'));