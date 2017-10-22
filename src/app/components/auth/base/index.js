import React from 'react';

import {change2Async} from 'util';

import style from 'components/common/index.css';


export default class GetBaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneBaseInfo: null
        };
        this.getBaseInfoHandle = this.getBaseInfoHandle.bind(this);
    }

    getBaseInfoHandle() {
        dd.ready(async ()=> {
            try {
                let res = await change2Async(dd.device.base.getPhoneInfo);
                this.setState({
                    phoneBaseInfo: res
                });
            } catch (e) {
                console.log(e);
            }
        });
    }

    render() {
        return (<div className="card">
            <div className="card-body">
                <button className="btn btn-primary" onClick={this.getBaseInfoHandle}>获得基础信息</button>
                {/*<button onClick={this.locate}>定位</button>*/}
                <div>返回值: </div>
                <div className={style.nowrap}>
                    <code>
                        {
                            JSON.stringify(this.state.phoneBaseInfo)
                        }
                    </code>
                </div>
            </div>
        </div>)
    }
}