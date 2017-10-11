import React from 'react';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import { Home, AuthDemo, NoAuthDemo } from './page';

export default class App extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            backData: {}
        }
    }

    render() {
        let { backData } = this.state;
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home}  ></Route>
                    <Route exact path='/auth-demo' component={AuthDemo}  ></Route>
                    <Route exact path='/no-auth-demo' component={NoAuthDemo}  ></Route>
                </div>
            </Router>
        )
    }
}

