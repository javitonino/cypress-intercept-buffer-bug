const fs = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const multer = require('@koa/multer');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const upload = multer();

router.get('/', async (ctx) => {
  ctx.set('Content-Type', 'text/html; charset=utf-8');
  ctx.body = fs.readFileSync('index.html');
});

router.put('/upload', upload.single('image'), async (ctx) => {
  fs.writeFileSync(`uploads/${Date.now()}.jpeg`, ctx.file.buffer);
  ctx.body = 'Done!';
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
