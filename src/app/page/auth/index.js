import { ddConfig } from  'dings';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { GeoLocationRoute }from 'components/auth/geolocation';

//鉴权
ddConfig();

export default ({ match }) => (<div>

    <Route exact path={match.url} render={() =>
        (<div>
            <Link to={`${match.url}/geolocation`}>地理位置</Link>
            {/* 添加新的组件 */}


        </div>)
    }></Route>

    <Route path={`${match.url}/geolocation`} component={GeoLocationRoute}></Route>

</div>)

