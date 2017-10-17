import {
    Route,
    Link
} from 'react-router-dom';
import React from 'react';

import GetPhoneInfoComponent from './get-phone-info';


const BaseRoute = ({ match }) => (<div>
    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/get-phone-info`}>获得手机基础信息</Link>
    </div>)}></Route>

    <Route path={`${match.url}/get-phone-info`} component={GetPhoneInfoComponent}></Route>
</div>);


export { BaseRoute, GetPhoneInfoComponent };