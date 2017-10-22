import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            dd.device.notification.vibrate({
                duration: 300, //震动时间，android可配置 iOS忽略
                onSuccess : function(result) {
                    /*
                    {}
                    */
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        });

        return (<div>
            vibrate震動
           </div>)
    }
}