const postcss = require('postcss');
const purge = require('./src/index');
const fs = require('fs');
const path = require('path');
const css = fs.readFileSync('./example/index.css');

const c = postcss([purge({
    html: path.resolve('./example/index.html'),
})])

c.process(css).then(result => {
    console.log(result.css);
});


