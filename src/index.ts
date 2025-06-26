import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`API ouvindo em http://localhost:${port}`);
});
