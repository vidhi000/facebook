import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import env from "dotenv";
import { client } from "../database/db";
import { ObjectId } from "mongodb";
env.config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = client.db("facebook").collection("users");

const isValidEmail = async (ctx, next) => {
  ctx.request.body.email = ctx.request.body.email.trim().replace(" ", "");
  const { email } = ctx.request.body;
  // console.log(email);
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regex.test(email)
    ? await next()
    : (ctx.body = { msg: "please enter valid email" });
};

const isValidPassword = async (ctx, next) => {
  ctx.request.body.password = ctx.request.body.password.trim();
  const { password } = ctx.request.body;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  regex.test(password)
    ? await next()
    : (ctx.body = { msg: "plaese enter valid password" });
};

const isUniqueEmail = async (ctx, next) => {
  const { email } = ctx.request.body;
  const userEmail = await User.countDocuments({ email });
  if (userEmail > 0) {
    ctx.body = { msg: "Email is already Exist" };
    return;
  }
  await next();
  
};


const isUniqueContact = async (ctx, next) => {
  const { contact } = ctx.request.body;
  const usercontact = await User.countDocuments({ contact });
  if (usercontact > 0) {
    ctx.body = { msg: "Contact is already exist" };
    return;
  }
  await next();
  
};

const bcryptPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const genToken = (data, exIn = "10d") => {
  return JWT.sign(data, JWT_SECRET, { expiresIn: exIn });
};

const isUserExist = async (ctx, next) => {
  const { id } = ctx.request.params;
  // console.log(id);
  const user = await User.countDocuments({ _id: new ObjectId(id) });
  if (!user) {
    ctx.body = { msg: "User does not exist" };
    return;
  }
  await next();
};

const requiredFields = async (ctx, next) => {

  let data=ctx.request.body
  let arr_field=Object.keys(ctx.request.body)
  let msg=[]

  //for required fileds
  let required_field=["firstName","lastName","email","password","contact"]
  for (const i of required_field) {
    if (!arr_field.includes(i)) msg.push(`${i} is required`)
  }
//!---------trim, if empty then errormsg, if not value then delete field
  for (const i of arr_field) {
     if(typeof data[i] == "string") data[i].trim()
     console.log(data[i]);
     if (required_field.includes(i) && data[i]=="") msg.push(`please enter your ${i}`)
     if (data[i]=="")delete(ctx.request.body[i]) 
  }

  // if (msg.length!= 0) {
  //   ctx.body = {msg};
  //   return
  // } else {
  //   await next();
  // }

};

const validDOB = async(ctx,next) =>{
    const date = ctx.request.body.DOB
    if(date){
      let currentDate = new Date()
    
      let dt=new Date(date)
      if(dt>currentDate){
         ctx.body = {msg : "U can not enter future date"}
         return
      }
      else{
      // console.log(dt);
       let ageDiff = Date.now() - dt.getTime()
       let age = new Date(ageDiff).getUTCFullYear()
       let res = Math.abs(age - 1970) 
       if(res<18){
        ctx.body = {msg : "U are not aligible for signup"} 
        return
       }
     } 
    }
    await next()
}

const isValidContact = async(ctx,next) =>{
   const number = ctx.request.body.contact
   
   if(!(number.toString().length == 10 && Number(number))){
      ctx.body = {msg : "Invalid contact number"}
      return
   }
 
   await next()
}

export {
  isValidEmail,
  isValidPassword,
  bcryptPassword,
  genToken,
  isUserExist,
  isUniqueEmail,
  requiredFields,
  validDOB,
  isValidContact,
  isUniqueContact
};
