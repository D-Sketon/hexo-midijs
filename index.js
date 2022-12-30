'use strict';

const fs = require('fs')
const path = require('path')
const css = hexo.extend.helper.get('css').bind(hexo)
const js = hexo.extend.helper.get('js').bind(hexo)
const midijs = require('./lib/midijs.js')

hexo.extend.generator.register('midijs_button', () => [{
    path: 'source/midijs_button.png',
    data: () => fs.createReadStream(path.resolve(__dirname, "./source", "midijs_button.png"))
}]);

hexo.extend.generator.register('midijs_css', () => [{
    path: 'source/midijs.css',
    data: () => fs.createReadStream(path.resolve(__dirname, "./source", "midijs.css"))
}]);

hexo.extend.tag.register('midijs', (args) => {
    return midijs(args);
}, {
    async: true,
    ends: true
});

hexo.extend.injector.register('head_begin', () => {
    return css('/source/midijs.css');
}, 'post')

hexo.extend.injector.register('head_begin', () => {
    return js('https://www.midijs.net/lib/midi.js');
}, 'post')
