import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            dd.device.notification.actionSheet({
                title: "谁是最棒哒？", //标题
                cancelButton: '取消', //取消按钮文本
                otherButtons: ["孙悟空","猪八戒","唐僧","沙和尚"],
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    /*{
                        buttonIndex: 0 //被点击按钮的索引值，Number，从0开始, 取消按钮为-1
                    }*/
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        });

        return (<div>
        单选列表
           </div>)
    }
}