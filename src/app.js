import express from 'express';

const app = express();

app.use((res) => {
  res.set('Access-Control-Allow-Origin', '*');
});

app.get('/', (req, res) => {
  res.json({});
});

app.listen(3015, () => {
  console.log('server is listening on port 3015');
});
