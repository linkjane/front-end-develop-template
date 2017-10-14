import React from 'react';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Bunlde } from 'components/common'

import Home from './page/home';

const NoAuthDemoContainer = (props) =>  (
    <Bunlde load={() => import('./page/no-auth') }>
        {
            (AuthDemoContainer) => <AuthDemoContainer {...props}/>
        }
    </Bunlde>
);


const AuthDemoContainer = (props) =>  (
    <Bunlde load={() => import('./page/auth') }>
        {
            (AuthDemoContainer) => <AuthDemoContainer {...props}/>
        }
    </Bunlde>
);

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
                    <Route  path='/auth-demo' component={AuthDemoContainer}  ></Route>
                    <Route  path='/no-auth-demo' component={NoAuthDemoContainer}  ></Route>
                </div>
            </Router>
        )
    }
}

