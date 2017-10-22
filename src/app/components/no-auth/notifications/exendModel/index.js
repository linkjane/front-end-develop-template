import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {


            dd.device.notification.extendModal({
                cells: [
                     {
                    "image":"https://img.alicdn.com/tfs/TB1KzrwRFXXXXasXXXXXXXXXXXX-540-380.png",
                    "title":"DEMO版本更新",
                    "content":"图片尺寸是540x380;"
                    },
                    {
                    "image":"https://img.alicdn.com/tfs/TB1KzrwRFXXXXasXXXXXXXXXXXX-540-380.png",
                    "title":"DEMO版本更新",
                    "content":"图片尺寸是540x380;"
                     }
                ],
                buttonLabels:["了解更多","知道了"],// 最多两个按钮，至少有一个按钮。
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    /*{
                        buttonIndex: 0 //被点击按钮的索引值，Number，从0开始
                    }*/
                },
                onFail : function(err) {}
            });



        });

        return (<div>
            exendModel增强弹浮层
           </div>)
    }
}