import { products } from '../../../data/products';

export default async function handler(req, res) {
   
    try {
        const result = await products;
        res.status(200).send(result)
      } 
      
      catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
      }
  }