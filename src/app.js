import 'babel-polyfill';
import express from 'express';
import request from 'request-promise-native';

const app = express();
const server = 'http://66.70.130.225:8080/api/blockAndTxList/1b6b205c6bfa19878a08118392de814a2a1a1df67339a05d0a31b845eb8937a7/0?'; // eslint-disable-line
const generateUrl = (from, to) => `${server}from=${escape(from)}&&to=${escape(to)}`;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');

  next();
});

app.get('/', async (req, res) => {
  try {
    const response = await request(generateUrl(new Date(0).toString(), Date().toString()));
    res.json(JSON.parse(response));
  } catch (e) {
    res.json({
      rows: [],
    });
  }
});

app.listen(3015, () => {
  console.log('server is listening on port 3015');
});
