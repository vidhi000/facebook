import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import env from "dotenv";
import { client } from "../database/db";
import { ObjectId } from "mongodb";
env.config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = client.db("facebook").collection("users");

const isValidEmail = async (ctx, next) => {
  const { email } = ctx.request.body;
  // console.log(email);
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // regex.test(email)
  //   ? await next()
  //   : (ctx.body = { msg: "please enter valid email" });
  if(!(regex.test(email)) && email) return { "email": "please enter valid email" }
  else return null
};

const isValidPassword = async (ctx, next) => {
  ctx.request.body.password = ctx.request.body.password.trim();
  const { password } = ctx.request.body;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // regex.test(password)
  //   ? await next()
  //   : (ctx.body = { msg: "plaese enter valid password" });
  if(!(regex.test(password))) return { "password": "please enter valid password" }
  else return null

};

const isUniqueEmail = async (ctx, next) => {
  const { email } = ctx.request.body;
  const userEmail = await User.countDocuments({ email });
  if (userEmail > 0) {
    return  { "email": "Email is already Exist" };

  }
   return null
  
};


const isUniqueContact = async (ctx, next) => {
  const { contact } = ctx.request.body;
  const usercontact = await User.countDocuments({ contact });
  if (usercontact > 0) {
    return { "conatct": "Contact is already exist" };
    ;
  }
  return null
  
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
    return { "validation": "User does not exist" };
    
  }
  return null
};

const requiredFields = async (ctx, next) => {

  let data=ctx.request.body
  let arr_field=Object.keys(ctx.request.body)
  let errmsg={}
  let required_field ;
   //for required fileds
  // console.log(ctx.request.url);
  // let user_required_field=["firstName","lastName","email","password","contact"]
  let post_required_field = ["media","pageId","content"] 
  let page_required_field = ["pageName", "pageCategory", "bio"]
  let invitation_required_field = ["pageId","role","reciever"]

   if(ctx.request.url == "/user/signup"){
      required_field = ["firstName","lastName","email","password","contact"]
   }
   else if(ctx.request.url == "/post/create"){
    required_field =  ["media","pageId","content"]
   }
   else if(ctx.request.url == "/page/create"){
    required_field = ["pageName", "pageCategory", "bio"]
   }
   else if(ctx.request.url == "/invite"){
    required_field = ["pageId","role","reciever"]
   }


  for (const i of required_field) {
    errmsg[i]=[]
    if (!arr_field.includes(i)) errmsg[i].push(`${i} is required`)
    // console.log(errmsg[i]);

    if (errmsg[i].length==0)delete(errmsg[i]) 
  }
//!---------trim, if empty then errormsg, if not value then delete field
  for (const i of arr_field) {
    errmsg[i]=[]
     if(typeof data[i] == "string") data[i] = data[i].trim()
     if (required_field.includes(i) && data[i]=="") errmsg[i].push(`please enter your ${i}`)
     if (data[i]=="")delete(ctx.request.body[i]) 
    //  console.log(errmsg[i]);
     if (errmsg[i].length==0)delete(errmsg[i]) 
  }

  if (Object.keys(errmsg).length!= 0) {
    return {error:errmsg};
  
  } else {
    return null
  }

};

const validDOB = async(ctx,next) =>{
    const date = ctx.request.body.DOB
    if(date){
      let currentDate = new Date()
    
      let dt=new Date(date)
      if(dt>currentDate){
         return {"DOB" : "U can not enter future date"}
        
      }
      else{
      // console.log(dt);
       let ageDiff = Date.now() - dt.getTime()
       let age = new Date(ageDiff).getUTCFullYear()
       let res = Math.abs(age - 1970) 
       if(res<18){
        return {"DOB" : "U are not aligible for signup"} 
        
       }
     } 
    }
    return null
}

const isValidContact = async(ctx,next) =>{
   const {contact} = ctx.request.body
   
  if(contact) if(!(contact.toString().length == 10 && Number(contact)))
    return {"contact" : "Invalid contact number"}
     else  return null
  else 
    return null
}
  

const trimData = async(ctx,next)=>{
  let data = ctx.request.body
   Object.keys(data).forEach((ele)=>{
       if(typeof data[ele] == "string") data[ele] = data[ele].trim()
   })
   return null
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
  isUniqueContact,
  trimData
  
};
