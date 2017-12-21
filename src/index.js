const cWidth = 800;
const cHeight = 800;
let canvas = document.querySelector('#myCanvas');
canvas.width = cWidth;
canvas.height = cHeight;

const ctx = canvas.getContext('2d');

require('webassembly')
    .load('./src/components/sqlist/sqlist.wasm', {
        initialMemory: 10,
        imports: {
            print: str => {
                console.log(str);
            },
            jsFillRect: (x, y, w, h) => {
                ctx.fillRect(x, y, w, h);
            },
            jsClearRect: (x, y, w, h) => {
                ctx.clearRect(x, y, w, h);
            },
            jsFillCircle: (x, y, r, red, green, black, alpha) => {
                alpha = Number(alpha).toFixed(1);
                // console.log("red: %d, green: %d, black: %d, alpha: %lf", red, green, black, alpha);

                ctx.beginPath();
                ctx.fillStyle = `rgba(${red}, ${green}, ${black}, ${alpha})`;
                ctx.strokeStyle = '#e3f';
                ctx.arc(x, y, r, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            },
            jsFillCircleColorful: (x, y, r) => {
                console.log('hsdf')
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let black = Math.floor(Math.random() * 256);
                let alpha = .1 + Math.random();
                ctx.beginPath();
                ctx.fillStyle = `rgba(${red}, ${green}, ${black}, ${alpha})`;
                ctx.strokeStyle = '#e3f';
                ctx.arc(x, y, r, 0, 2 * Math.PI);

                ctx.fill();
                ctx.closePath();
            },
            jsFillFPS: (fps) => {
                ctx.save();
                ctx.font = "20px Georgia";
                ctx.textBaseline = 'top';
                ctx.fillStyle = "black";
                ctx.fillText("fps is:" + fps, 10, 10);
                ctx.restore();
            },

            timeNow: () => {
                return Date.now();
            },
            raFrame: callback => {
                requestAnimationFrame(() => {
                    mds.exports.runCallback(callback);
                });
            }
        }
    })
    .then(module => {
        mds = module;
        module.exports.initCircles();
        module.exports.animateCircle();

        // module.exports.initRects();
        // module.exports.test();
    });



