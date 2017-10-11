import React from 'react';

import {change2Async} from 'util';

import style from './index.css';


export default class AuthDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null
        };
        this.getLocation = this.getLocation.bind(this);
    }

    locate() {
        dd.read(async => {

        });
    }

    getLocation() {
        dd.ready(async ()=> {
            try {
                let result = await change2Async(dd.device.geolocation.get, {
                    targetAccuracy : 1,
                    coordinate : 1,
                    withReGeocode : false,
                    useCache: false, //默认是true，如果需要频繁获取地理位置，请设置false
                });

                console.log(result);
                this.setState({
                    location: result
                });
            } catch (e) {
                console.log(e);
            }

        });
    }

    render() {
        let { location } = this.state;
        return (<div>
            <button className="btn btn-primary" onClick={this.getLocation}>获得地理位置</button>
            <button onClick={this.locate}>定位</button>
            <div>返回值: </div>
            <div className={style.nowrap}>
                <code>
                    {
                        JSON.stringify(location)
                    }
                </code>
            </div>
        </div>)
    }
}