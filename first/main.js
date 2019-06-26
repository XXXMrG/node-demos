const event = require("events")

const eventEmitter = new event.EventEmitter()

const connectHandler = function connected() {
  console.log('链接成功')
  eventEmitter.emit('data_received')
}
eventEmitter.on('connection', connectHandler)
eventEmitter.on('data_received', () => {
  console.log('数据接受成功')
})
eventEmitter.emit('connection')
console.log('over!')
