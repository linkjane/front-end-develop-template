import React from 'react';
import { Route } from 'react-router-dom';

import NoAuthDemo from '../../components/notifications/alert';
console.log(NoAuthDemo);



export default class AuthRouter extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (<div>
               <Route  path="/" component={NoAuthDemo}></Route>
        </div>)
    }
}