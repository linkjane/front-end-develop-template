import {
    Route,
    Link
} from 'react-router-dom';
import React from 'react';

import GetLocationCompoent from './get-location';


const GeoLocationRoute = ({ match }) => (<div>
    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/getlocation`}>获得地址</Link>
    </div>)}></Route>

    <Route path={`${match.url}/getlocation`} component={GetLocationCompoent}></Route>
</div>);


export { GeoLocationRoute, GetLocationCompoent };