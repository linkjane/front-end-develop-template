import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

       
        
        dd.ready(() => {
            dd.device.notification.alert({
                message: "亲爱的",
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
        });

       

        return (<div>
                不需要鉴权
        </div>)
    }
}