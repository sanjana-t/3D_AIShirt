import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from "openai";
dotenv.config();
const openai = new OpenAI({apiKey: ""});

const router = express.Router();

router.route('/').get( async (req,res)=>{
  try{
    const image = await openai.images.generate({ model: "dall-e-3", prompt: "simple logo",size:"1024x1024",
    quality:"standard",
    n:1,
    response_format: 'b64_json' });
    console.log(image.data);
    res.status(200).json({
      message:"Image generation",
      data_image: image.data[0].b64_json
  })
    }catch(error){
      console.log(error);
      res.status(500).json({
        message:"error",
    })
    }

})

export default router;