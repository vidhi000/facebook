import { client } from "../database/db"
import { bcryptPassword } from "../validation/uservalidation";
import { genToken } from "../validation/uservalidation";
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb";
import { findByIdAndDeleteOne, findByIdAndUpdateOne, insertOneDataIntoCollection } from "../model/user";

const User = client.db("facebook").collection("users")
console.log(User);
 

const userSignup = async(ctx)=>{
   //  console.log(ctx.request.body);
   const {email,password} = ctx.request.body
   ctx.request.body.password = await bcryptPassword(password)
   
   ctx.request.body.createdAt = new Date()
   await insertOneDataIntoCollection("users",ctx.request.body)
   
   ctx.body = {msg:"Signup successfully!"}
}

const userLogin = async(ctx)=>{
   const token = ctx.headers.authorization.split(" ")[1]
   // console.log(token);
   const {email,password} = ctx.request.body 
   const user = await User.findOne({email})
   if(user && await bcrypt.compare(password,user.password)){
      const data = {id:user._id ,email}
      ctx.body = {msg:"Login successful!",token:genToken(data)}
   }
   else{
      ctx.body = {msg:"email or passwod is incorrect"}
   }
   
}

const deleteUser = async(ctx)=>{
   const {id} = ctx.request.params
   // console.log(id);
   await findByIdAndDeleteOne("users",id)
   ctx.body = {msg : "User Deleted!"}
}

const updateUser = async(ctx)=>{
    const {id} = ctx.request.params
    await findByIdAndUpdateOne("users",id,ctx.request.body) 
    ctx.body = {msg : "User Updated!"}
}

export {userLogin,
       userSignup,
       deleteUser,
       updateUser
}