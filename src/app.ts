import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  let b = 10;
  const ab = 200;
  res.send(ab);
});

export default app;
