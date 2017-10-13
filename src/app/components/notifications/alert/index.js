import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        dd.ready(() => {
            dd.device.notification.alert({
                message: "尼玛的",
                title: "提示",//可传空
                buttonName: "收到",
                onSuccess : function() {
                    //onSuccess将在点击button之后回调
                    /*回调*/
                    
                },
                onFail : function(err) {
                    console.log(err);
                }
            });

            dd.device.notification.confirm({
                message: "你爱我吗",
                title: "提示",
                buttonLabels: ['爱', '不爱'],
                onSuccess: function (result) {
                    //onSuccess将在点击button之后回调
                    alert("滚！");
                },
                onFail: function (err) { }
            });
          
        });

       

        return (<div>
                提示组件内部1
        </div>)
    }
}