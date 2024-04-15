import express, { Request, Response } from "express";
import { body, param } from "express-validator";
import Product from "../models/product.model";

const router = express.Router();

router.post(
  "/api/product",
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  async (req: Request, res: Response) => {
    try{
      const { name, price } = req.body;

      const product = await Product.query().insert({
          name: name as string,
          price: price as number,
        });
      res.status(201).send(product);
    }catch(err){
      console.log('err', err)
      res.status(400).send('error');
    }
    
  }
);


router.get(
  "/api/product/:id",
  [
    param("id").not().isEmpty().withMessage("id is required"),
    
  ],
  async (req: Request, res: Response) => {
    try{
      const { id } = req.params;


    const product = await Product.query().findById(id)


    // const middleAgedJennifers = await Product.query()
    //.select('price')
    //.where('price', '>', 10)
    //.orderBy('price');
      
      res.status(200).send(product);
    }catch(err){
      res.status(400).send('error');
    }
    
  }
);

export { router as createProductRouter };
