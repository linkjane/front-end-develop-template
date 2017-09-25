const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const os = require('os');

let IPv4, hostName, netCard;

hostName = os.hostname();

if (os.platform() == "darwin") {
    netCard = os.networkInterfaces().en1;
} else if(os.platform() == 'win32'){
    netCard = os.networkInterfaces().以太网;
}

for(var i=0;i<netCard.length;i++){
    if(netCard[i].family=='IPv4'){
        IPv4=netCard[i].address;
    }
}

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        // hot: true
        host: IPv4,
        compress: true,
        historyApiFallback: true,


    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
});