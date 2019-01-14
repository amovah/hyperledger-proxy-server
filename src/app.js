import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');

  next();
});

app.get('/', (req, res) => {
  res.json({});
});

app.listen(3015, () => {
  console.log('server is listening on port 3015');
});
