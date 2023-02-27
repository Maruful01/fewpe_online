// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  try {
    const result = await [{url: "gz58WHM/slider-2-Slider.png",
    _id: "3001" },
    {
      url: "kmh4C7M/Slider-3.png",
      _id: "3002"
    },
    {
      url: "NmYQ82S/Eay-Glass-Slider.jpg",
      _id: "3003"
    }
  
    ];


    res.status(200).send( result )
    
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
