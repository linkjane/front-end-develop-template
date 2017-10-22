import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    alertClickHandle() {

        dd.ready(() => {
            dd.device.notification.confirm({
                message: "你爱我吗",
                title: "提示",
                buttonLabels: ['爱', '不爱'],
                onSuccess: function (obj) {
                  
                    //onSuccess将在点击button之后回调,buttonIndex为属性。
                    if(obj.buttonIndex == 0)
                    {
                        alert("ao！");
                    }else{
                        alert("滚！");
                    }
                    
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                 }
            });
        });
    }

    render() {

        return (<div className="card">
            <div className="card-body">
                <button className="btn btn-primary" onClick={(e) => {
                    this.alertClickHandle(e)
                }}>alert</button>
            </div>
        </div>)
    }
}