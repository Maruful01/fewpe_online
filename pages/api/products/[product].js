import { products } from '../../../data/products';

export default async function handler(req, res) {

  const { product } = req.query;

  const productById = products.find ((productById) => productById._id == product);

  try {
    const result = await productById;

    res.status(200).send(result)
  } 
  
  catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
  
  }