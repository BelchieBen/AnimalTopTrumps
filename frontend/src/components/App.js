import React, { Component} from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h2>Welcome to animal top trumps</h2>
        );
    }
}

const appDiv = document.getElementById('app');
render(<App/>, appDiv);