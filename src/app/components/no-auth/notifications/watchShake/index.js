import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            dd.device.accelerometer.watchShake({
                sensitivity: 20,//振动幅度，Number类型，加速度变化超过这个值后触发shake
                frequency: 150,//采样间隔(毫秒)，Number类型，指每隔多长时间对加速度进行一次采样， 然后对比前后变化，判断是否触发shake
                callbackDelay: 30000,//触发『摇一摇』后的等待时间(毫秒)，Number类型，防止频繁调用
                onSuccess: function (result) {
                    alert("让我们一起摇一摇");
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });

            // dd.device.accelerometer.clearShake({
            //     onSuccess: function (result) {
            //         alert.log("监听已清除");
            //     },
            //     onFail: function (err) { }
            // });



        });

        return (<div>
            监听
           </div>)
    }
}