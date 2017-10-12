import React from 'react';
import { Route, Link } from 'react-router-dom';

import { NotificationsRoute } from 'components/notifications';

export default ({ match }) => (<div>

    <Route exact path={match.url} render={() =>
        (<div>
            <Link to={`${match.url}/notifications`}>提醒组件</Link>
            {/* 添加新的组件 */}


        </div>)
    }></Route>

    <Route path={`${match.url}/notifications`} component={NotificationsRoute}></Route>

</div>)

