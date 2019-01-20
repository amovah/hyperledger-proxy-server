import 'babel-polyfill';
import express from 'express';
import request from 'request-promise-native';

const app = express();
const server = 'http://66.70.130.224:8080/api/blockAndTxList/1889abeb2e4aaaaea7f4759e5cf133568951cea85b879925d90a85ff154cf619/0?'; // eslint-disable-line
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
