import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI || null;

if (typeof DB_URI === 'string') {
  fetch('http://' + DB_URI).then(() => console.log('DB connection is live'))
}

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running`);
});