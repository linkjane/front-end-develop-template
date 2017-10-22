import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {
            dd.device.notification.modal({
                image:"http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg", // 标题图片地址
                banner:["http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg"],   // 图片地址列表
                title:"2.4版本更新", //标题
                content:"1.功能更新2.功能更新;", //文本内容
                buttonLabels:["了解更多","知道了"],// 最多两个按钮，至少有一个按钮。
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    /*{
                        buttonIndex: 0 //被点击按钮的索引值，Number，从0开始
                    }*/
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });
        });

        return (<div>
            model弹浮层
           </div>)
    }
}