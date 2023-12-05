import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from "openai";

// const openai = new OpenAI({apiKey: ""});
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});
dotenv.config();

const router = express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({
        message:"Hello from dalle routes"
    })
})

router.route('/').post(async (req, res) => {
    try {
      const { prompt } = req.body;

      response = openai.images.generate({
        model:"dall-e-3",
        prompt:prompt,
        size:"1024x1024",
        quality:"standard",
        n:1,
        response_format: 'b64_json'
      }
      )
      
      // image_url = response.data[0].url
      console.log(response);
      const image = response.data[0].b64_json;
  
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" })
    }
  })
  
  export default router;

// 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