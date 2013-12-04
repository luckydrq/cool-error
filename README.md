cool-error
==========

A shim module for wrapping error in a more elegant way!

###Install
```sh
  npm install cool-error
```

###Usage

####code
```javascript
  var toss = require('cool-error')

  // equals `throw new Error('error!')`
  toss('error!')

  // when the second arg specified to true
  // it will log the error message before throwing an error instance
  toss('error!', true)

  // json format supported
  toss({statusCode: 404, msg: 'Not Found'})
```

####colors
Feel free to use ```console.log('xxx'.red)``` in your code because [colors](https://github.com/Marak/colors.js) is wrapped underlying.


