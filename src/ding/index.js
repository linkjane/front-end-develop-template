import jsapi from './jsapi.json';

const { AUTH_URL, APP_URL } = require(`../config/develop.json`);

async function ddConfig() {
        let jsapiArr = Object.keys(jsapi);
        try {
            
            let res = await fetch(AUTH_URL, {
                method: 'POST',
                body: JSON.stringify({
                    url: APP_URL
                })
            });
            console.log('heeh');
            let data = await res.json();
            console.log(data); 
            if (data.success) {
                console.log(data);
                const {corpId, timeStamp, nonceStr, signature} = data.data;
                //返回的data数据自行修改
                console.log(data);
                dd.config({
                    agentId: '',
                    corpId: corpId,
                    timeStamp: timeStamp,
                    nonceStr: nonceStr,
                    signature: signature,
                    jsApiList: jsapiArr
                });

                dd.error(function (error) {
                    alert(JSON.stringify(error));
                    alert('鉴权失败, 请联系管理员');
                    reject("DingTalk jsApi concent : ", JSON.stringify(error))
                });

                dd.ready(async () => {
                    console.log("dingding ready!");
                    // dd.device.geolocation.get({
                    //     targetAccuracy : Number,
                    //     coordinate : Number,
                    //     withReGeocode : Boolean,
                    //     useCache:true, //默认是true，如果需要频繁获取地理位置，请设置false
                    //     onSuccess : function(result) {
                    //         /* 高德坐标 result 结构
                    //          {
                    //          longitude : Number,
                    //          latitude : Number,
                    //          accuracy : Number,
                    //          address : String,
                    //          province : String,
                    //          city : String,
                    //          district : String,
                    //          road : String,
                    //          netType : String,
                    //          operatorType : String,
                    //          errorMessage : String,
                    //          errorCode : Number,
                    //          isWifiEnabled : Boolean,
                    //          isGpsEnabled : Boolean,
                    //          isFromMock : Boolean,
                    //          provider : wifi|lbs|gps,
                    //          accuracy : Number,
                    //          isMobileEnabled : Boolean
                    //          }
                    //          */
                    //         console.log(result);
                    //     },
                    //     onFail : function(err) {
                    //         console.log(err);
                    //     }
                    // });

                    dd.biz.util.scan({
                        type: "all" , // type 为 all、qrCode、barCode，默认是all。
                        onSuccess: function(data) {
                            //onSuccess将在扫码成功之后回调
                            /* data结构
                             { 'text': String}
                             */
                            console.log(data);
                        },
                        onFail : function(err) {
                            console.log(err);
                        }
                    })
                });
            } else {
                console.log(data.errors);
                alert(JSON.stringify(data.errors))
            }
        } catch (e) {
            console.log(e);
        }
};
ddConfig();

export { ddConfig };

