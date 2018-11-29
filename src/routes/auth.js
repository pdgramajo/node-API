import express from 'express';

const router = express.Router();

router.post('/',(req,res)=>{
   const { credentials } = req.body;
    console.log('****** credentials',credentials);
    
    res.status(400).json({ errors: { global: 'invalid credentials' } });
});


export default router;