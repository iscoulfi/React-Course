import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3007;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    html = await vite.transformIndexHtml(url, html);

    const parts = html.split('<!--app-html-->');

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    res.write(parts[0]);
    const { stream, initialCards } = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(parts[1].replace('<!--preload-state-->', initialCards()));
        res.end();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  });

  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
}

createServer();
