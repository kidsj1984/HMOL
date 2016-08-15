import http from 'http';
import koa from 'koa';
import render from 'koa-ejs';
import router from './router';
import path from 'path';


var app = koa();


render(app, {
  root: path.join(__dirname, '..', 'app/dist'),
  layout: false,
  viewExt: 'html',
  debug: false,
  cache: true
});



app.use(router.routes());
app.use(router.allowedMethods());



const server =  http.createServer(app.callback());
export default server;