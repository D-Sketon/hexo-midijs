var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'template.html');

function midijs(args) {
    var template = fs.readFileSync(filePath).toString();

    return _.template(template)({
        id: 'midijs' + ((Math.random() * 9999) | 0),
        url: args[0],
        width: args[1] || '85%'
    });
}

hexo.extend.generator.register('midijs_button', ()=>[
    {
      path: 'static/midijs_button.png',
      data: function(){
        return fs.createReadStream(
          path.resolve(path.resolve(__dirname, "./static"),"midijs_button.png"))
      }
    }
]);

hexo.extend.generator.register('midijs_css', ()=>[
    {
      path: 'static/midijs.css',
      data: function(){
        return fs.createReadStream(
          path.resolve(path.resolve(__dirname, "./static"),"midijs.css"))
      }
    }
]);

hexo.extend.tag.register('midijs', midijs, {
    async: true,
    ends: true
});