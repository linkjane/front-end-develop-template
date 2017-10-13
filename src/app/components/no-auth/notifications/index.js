import {
    Route,
    Link
} from 'react-router-dom';
import React from 'react';

import Alert from './alert/index';
import Confirm  from './confirm/index';




const NotificationsRoute = ({ match }) => (<div>
    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/alert`}>alert警告</Link>
    </div>)}></Route>

    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/confirm`}>confirm提示</Link>
    </div>)}></Route>

    <Route path={`${match.url}/alert`} component={Alert}></Route>
    
    <Route path={`${match.url}/confirm`} component={Confirm}></Route>
</div>);


export { Alert, NotificationsRoute };