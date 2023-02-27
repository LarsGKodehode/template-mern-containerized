import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as db from './db'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

db.connect(app)



app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running`);
});