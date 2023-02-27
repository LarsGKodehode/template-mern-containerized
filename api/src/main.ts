import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGODB_URI || null;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server. DB_URI' + DB_URI);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running`);
});