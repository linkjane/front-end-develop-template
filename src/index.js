
let zrender = require('zrender');
let zr = zrender.init(document.querySelector('.draw-center'));
var circle = new zrender.Circle({
    shape: {
        cx: 150,
        cy: 50,
        r: 40
    },
    style: {
        fill: 'none',
        stroke: '#F00'
    }
});
zr.add(circle);


require('webassembly')
    .load('./src/components/sqlist/sqlist.wasm', {
        imports: {
            print: function(str) {
                console.log(str);
            }
        }
    })
    .then(module => {
        Object.assign(module.env, {
            print: function(str) {
                console.log(str);
            }
        })
        console.log(module.exports.add(1, 2));
    });