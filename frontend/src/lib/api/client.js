// client.js
import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
};

// baseURLが本番環境になったらここを変更するだけでいい
const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:3000/api/v1',
  }),
  options
);

export default client;
