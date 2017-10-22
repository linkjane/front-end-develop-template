import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            dd.device.notification.toast({
                icon: true, //icon样式，有success和error，默认为空 0.0.2
                text: "登录成功", //提示信息
                duration: 3, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
                delay: 1, //延迟显示，单位秒，默认0
                onSuccess : function(result) {
                    alert(this.text);
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        });

        return (<div>
           hide
           </div>)
    }
}