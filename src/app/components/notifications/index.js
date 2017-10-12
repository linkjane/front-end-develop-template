import {
    Route,
    Link
} from 'react-router-dom';
import React from 'react';

import Alert from './alert';




const NotificationsRoute = ({ match }) => (<div>
    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/alert`}>提示</Link>
    </div>)}></Route>

    <Route path={`${match.url}/alert`} component={Alert}></Route>

</div>);


export { Alert, NotificationsRoute };