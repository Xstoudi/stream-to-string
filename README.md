# stream-to-string
Just `npm install @xstoudi/stream-to-string` and have fun!

## Example
The second argument is optional (default: `utf8`).
```
const streamToString = require('@xstoudi/stream-to-string')

streamToString(myStream, { encoding: 'binary' })
```