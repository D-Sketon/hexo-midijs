const { midiTemplate } = require('hexo-midijs/lib/template.js')

const processArgs = (args) => {
    return {
        id: 'midijs' + ((Math.random() * 9999) | 0),
        url: args[0],
        width: args[1] || '85%'
    }
}

module.exports = (args) => midiTemplate(processArgs(args))
