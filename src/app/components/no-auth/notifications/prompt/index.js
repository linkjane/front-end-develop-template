import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            alert("sss");
            dd.device.notification.prompt({
                message: "再说一遍？",
                title: "提示",
                defaultText: "默认提示",
                buttonLabels: ['继续', '不玩了'],
                onSuccess: function (result) {
                    alert("成功");
                    //onSuccess将在点击button之后回调
                    /*
                    {
                        buttonIndex: 0, //被点击按钮的索引值，Number类型，从0开始
                        value: '' //输入的值
                    }
                    */
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        });

        return (<div>
            提示
           </div>)
    }
}