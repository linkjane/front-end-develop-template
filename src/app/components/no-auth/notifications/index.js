import {
    Route,
    Link
} from 'react-router-dom';
import React from 'react';

import Alert from './alert/index';
import Confirm  from './confirm/index';
import Prompt  from './prompt/index';
import Vibrate from './vibrate/index';
import showPreloader from './showPreloader';
import toast from './toast';
import actionsheet from './actionsheet';
import model from './model';
import exendModel from './exendModel';





const NotificationsRoute = ({ match }) => (<div>
    <Route exact path={match.url} render={() => (<div>
        <Link to={`${match.url}/alert`}>alert警告</Link><br />
        <Link to={`${match.url}/confirm`}>confirm提示</Link><br />
        <Link to={`${match.url}/prompt`}>prompt提示</Link><br />
        <Link to={`${match.url}/vibrate`}>vibrate震动</Link><br />
        <Link to={`${match.url}/showPreloader`}>showPreloader显示浮层</Link><br />
        <Link to={`${match.url}/toast`}>toast提示</Link><br />
        <Link to={`${match.url}/actionsheet`}>actionsheet</Link><br />
        <Link to={`${match.url}/model`}>model弹浮层</Link><br />
        <Link to={`${match.url}/exendModel`}>exendModel</Link><br />
    </div>)}></Route>

    <Route path={`${match.url}/alert`} component={Alert}></Route>
    <Route path={`${match.url}/confirm`} component={Confirm}></Route>
    <Route path={`${match.url}/prompt`} component={Prompt}></Route>
    <Route path={`${match.url}/vibrate`} component={Vibrate}></Route>
    <Route path={`${match.url}/showPreloader`} component={showPreloader}></Route>
    <Route path={`${match.url}/toast`} component={toast}></Route>
    <Route path={`${match.url}/actionsheet`} component={actionsheet}></Route>
    <Route path={`${match.url}/model`} component={model}></Route>
    <Route path={`${match.url}/exendModel`} component={exendModel}></Route>
</div>);




//第一个导出路由, 剩下的都是各自的组件
export { NotificationsRoute, Alert };