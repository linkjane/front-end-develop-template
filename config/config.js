let watcher = require('node-watch');
let shellProcess = require('child_process');

watcher = watcher('./src', {recursive: true, filter: /\.c$/});

watcher.on('change', (evt, name) => {
    console.log('%s changes', name);
    let fileName = name.substring(0, name.lastIndexOf('.')) + '.wasm';

    console.log(fileName);
    console.log(fileName);
    if (evt == 'update') {
        shellProcess.exec(`wa compile -o ${fileName} ${name}`, (error, stdout, stderr) => {
            console.log(error);
            console.log(stdout);
            console.log(stderr);
        })        
    }
    
});

watcher.on('error', err => {
    console.log(err);
});
