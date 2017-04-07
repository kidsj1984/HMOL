import http from 'http';
import koa from 'koa';
import cors from 'koa-cors';
import render from 'koa-ejs';
import koaStatic from 'koa-static';
import session from 'koa-session';
import router from './router';
import path from 'path';
import bodyparser from 'koa-bodyparser';


var app = koa();
render(app, {
  root: path.join(__dirname, '..', 'app/dist'),
  layout: false,
  viewExt: 'html',
  debug: false,
  cache: true
});


app.use(koaStatic('./app',{
  maxage: 129600
}));


app.use(koaStatic('./app/demo',{
  maxage: 129600
}));

app.use(cors({
  credentials: true
}));

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
};

app.use(session(CONFIG, app));

app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

const server =  http.createServer(app.callback());
export default server;