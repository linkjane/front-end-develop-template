import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        dd.ready(() => {
          

           
            dd.device.notification.confirm({
                message: "你爱我吗",
                title: "提示",
                buttonLabels: ['爱', '不爱'],
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    alert("滚！");
                },
                onFail : function(err) {}
            });
        });

       

        return (<div>
                提示组件内部
        </div>)
    }
}