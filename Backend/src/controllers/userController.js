import express from 'express'
const userRouter = express.Router()
import * as z from 'zod'

userRouter.post("/signup" ,async (req,res)=>{
    const UserInfo = z.object({
        email:z.string().email(),
        password:z.string().min(5).max(10),
        username:z.string().min(3).max(10),
        prompts: z.array(
            z.string().regex(/^[a-f\d]{24}$/i, "Invalid ObjectId")
        ).optional()
    })
    
    const validateUser = UserInfo.safeParse(req.body)
    if(!validateUser){
        return res.send(500).send({
            msg:"Incorrect credits",
            error:validateUser.error.errors
        })
    }
    const {email , password , username , prompts} = validateUser.data
    try{

    }
    catch(error){
        res.status()
    }
})