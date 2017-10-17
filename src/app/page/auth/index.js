import { ddConfig } from  'dings';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { GeoLocationRoute }from 'components/auth/geolocation';
import { BaseRoute } from 'components/auth/base';



//鉴权
ddConfig();

export default ({ match }) => (<div>

    <Route exact path={match.url} render={() =>
        (<div className="card text-center">
            <div className="card-body">
                <div className="list-group">
                    <div className="list-group-item">
                        <Link  to={`${match.url}/geolocation`}>地理位置</Link>
                    </div>
                    <div className="list-group-item">
                        <Link to={`${match.url}/base`}>手机基本信息</Link>
                    </div>
                </div>
            </div>
            {/* 添加新的组件 */}


        </div>)
    }></Route>

    <Route path={`${match.url}/geolocation`} component={GeoLocationRoute}></Route>
    <Route path={`${match.url}/geolocation`} component={BaseRoute}></Route>

</div>)

