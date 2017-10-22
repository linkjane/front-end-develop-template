import React from 'react';

export default class NoAuthDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dd.ready(() => {

            dd.device.notification.showPreloader({
                text: "加载NMB..", //loading显示的字符，空表示不显示文字
                showIcon: true, //是否显示icon，默认true
                onSuccess : function(result) {
                    /*{}*/
                },
                onFail: function (err) {
                    alert(JSON.stringify(err));
                }
            });


            setTimeout(() => {
                dd.device.notification.hidePreloader({
                    onSuccess : function(result) {
                        /*{}*/
                    },
                    onFail : function(err) {}
                })
            }, 3000);

        });

        return (<div>
            showPreloader显示浮层
           </div>)
    }
}