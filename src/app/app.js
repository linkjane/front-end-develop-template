import React from 'react';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';


export default class App extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            backData: {}
        }
    }

    render() {
        let { backData } = this.state;
        return (
            <Router>
                <div>
                    <Route exact path='/' render={() => {
                       return (<div>
                           <button onClick={() => {
                               dd.biz.util.scan({
                                   type: 'all' , // type 为 all、qrCode、barCode，默认是all。
                                   onSuccess: function(data) {
                                       //onSuccess将在扫码成功之后回调
                                       /* data结构
                                        { 'text': String}
                                        */
                                       alert(JSON.stringify(data));
                                   },
                                   onFail : function(err) {
                                   }
                               })
                           }}>点我扫码</button>
                           <button onClick={() => {
                               dd.device.geolocation.get({
                                   targetAccuracy : Number,
                                   coordinate : Number,
                                   withReGeocode : Boolean,
                                   useCache:true, //默认是true，如果需要频繁获取地理位置，请设置false
                                   onSuccess : function(result) {

                                       /* 高德坐标 result 结构
                                                {
                                                    longitude : Number,
                                                    latitude : Number,
                                                    accuracy : Number,
                                                    address : String,
                                                    province : String,
                                                    city : String,
                                                    district : String,
                                                    road : String,
                                                    netType : String,
                                                    operatorType : String,
                                                    errorMessage : String,
                                                    errorCode : Number,
                                                    isWifiEnabled : Boolean,
                                                    isGpsEnabled : Boolean,
                                                    isFromMock : Boolean,
                                                    provider : wifi|lbs|gps,
                                                    accuracy : Number,
                                                    isMobileEnabled : Boolean
                                                }
                                                */
                                   },
                                   onFail : function(err) {}
                               });
                           }}>获得定位</button>
                       </div>)
                    }}></Route>
                </div>
            </Router>
        )
    }
}

