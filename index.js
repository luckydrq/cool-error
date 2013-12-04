var colors = require('colors')

module.exports = exports = function(arg1, arg2){
  if(typeof arg1 === 'string') {
    if(arg2 === true) console.error(arg1.red)
    throw new Error(arg1)
  }
  if(typeof arg1 === 'object'){
    var arr = [], msg = ''
    Object.keys(arg1).forEach(function(key){
      if(typeof key === 'string' && typeof arg1[key] === 'string'){
        arr.push([key, arg1[key] || ''].join(': '))
      }
    })
    msg = arr.join('\n')
    if(arg2 === true) console.error(msg.red)
    throw new Error(msg)
  }
}