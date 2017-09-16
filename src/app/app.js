import React from 'react';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';


export default class App extends React.Component {
    constructor(props) {
       super(props);

    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={() => {
                       return  <h1>welcome</h1>
                    }}></Route>
                </div>
            </Router>
        )
    }
}

