const Koa = require('koa');
const IO = require('koa-socket-2');

const LY = require('../dist/app')
console.log(LY)
const yoke = LY.ServerLovelyYokefellowHandler(
[
  [1, 'first click'],
  [2, 'two click'],
  [3, 'three click']
],
[
  [1, 2, 3]
])

const app = new Koa();
const io = new IO();

io.attach(app);

io.on('lovely-yokefellow', (ctx, data) => {
  console.log('client sent data to message endpoint: ', data);
});

// io.on('connection', (ctx, data) => {
//   console.log('client connection:', data, ctx.data);
// });

// io.on('disconnect', (ctx, data) => {
//   console.log('client disconnnet:', data, ctx);
// });

app.listen( process.env.PORT || 3000 );