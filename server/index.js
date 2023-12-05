import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';
import testingRoutes from './routes/testingdalle.js';
import testRoutes from './routes/test.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limig:"50mb"}))
app.use('/api/v1/dalle',dalleRoutes);
app.use('/api/v1/test',testRoutes);
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from Dalle"})
});

app.listen(8080,()=>console.log('server has started on port 8080'))