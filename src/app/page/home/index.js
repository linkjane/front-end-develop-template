import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (<div>
            <div>
                <hr />
                <Link to="/no-auth-demo">不需要鉴权</Link>
            </div>
            <div>
                <Link to="/auth-demo">需要鉴权</Link>
            </div>
        </div>);
    }


}