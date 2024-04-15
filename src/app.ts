//import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { createProductRouter } from './routes/createProduct.route';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    res.status(500).send({
      errors: [{ message: err.message }]
    });
  };


const app = express();
app.use(cors());
app.use(express.json());

app.use(createProductRouter);

app.all('*', async (req, res) => {
    res.status(400).send('Route not found');
});

app.use(errorHandler);





export { app };
