import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import env from "dotenv"
import { client } from "../database/db"
import { ObjectId } from "mongodb"
env.config()
const JWT_SECRET = process.env.JWT_SECRET

const User = client.db("facebook").collection("users")

 
const isValidEmail = async(ctx,next)=>{
    const {email} =   ctx.request.body 
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    regex.test(email) ? await next() : ctx.body = {msg:"please enter valid email"}
}

const isValidPassword = async(ctx,next)=>{
    const {password} = ctx.request.body
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    regex.test(password)? await next() : ctx.body = {msg:"plaese enter valid password"}
}

const isUniqueEmail = async(ctx,next)=>{
     const {email} = ctx.request.body
     const userEmail = await User.countDocuments({email})
     if(userEmail > 0){
        ctx.body = {msg : "Email is already Exist"}
        return
     }
     await next()
}


const bcryptPassword = async(password)=>{
   return await bcrypt.hash(password,10)
}

const genToken = (data)=>{
  return JWT.sign(data,JWT_SECRET,{expiresIn:"10d"})
}

const isUserExist = async(ctx,next)=>{
    const {id} = ctx.request.params
    // console.log(id);
    const user = await User.countDocuments({_id: new ObjectId(id)})
    if(!user){
        ctx.body = {msg : "User does not exist"}
        return
    }
   await next()
}





export {isValidEmail,
    isValidPassword,
    bcryptPassword,
    genToken,
    isUserExist,
    isUniqueEmail
}