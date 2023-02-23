import { ObjectId } from "mongodb";
import { client } from "../database/db";
const Invite = client.db("facebook").collection("invitation");

const isInvited = async (ctx, next) => {
  const { id } = ctx.request.params;
  // console.log(id);
  const invite = await Invite.countDocuments({ _id: new ObjectId(id) });
  if (!invite) {
    return { "validation": "User is not invited!" };
    
  }
  return null
};

const alreadyInvited = async (ctx, next) => {
  const { reciever,pageId } = ctx.request.body;
  
  const cnt = await Invite.countDocuments({ reciever,pageId : new ObjectId(pageId) });
  // console.log(cnt);
  if (cnt > 0) {
    return { "validation": "User is already invited" };
  
  }
  return null
};

// const requiredFields = async (ctx, next) => {
//   const data = ctx.request.body;
//   let arr_fields = Object.keys(data)
//   let msg = [];
//   let required_fileds = ["pageId","role","reciever"]
   
//   for(const i of required_fileds){
//      if(!arr_fields.includes(i)) msg.push(`${i} is required`)
//   }

//   for(const i of arr_fields){
//    if(typeof data[i] == "string") data[i]=data[i].trim()
//     //  console.log(data[i]);
//      if (required_fileds.includes(i) && data[i]=="") msg.push(`please enter your ${i}`)
//      if (data[i] == "")delete(ctx.request.body[i]) 
//   }
// //   }

  
//   if (msg.length != 0) {
//     ctx.body = { msg };
//     return;
//   } else {
//     await next();
//   }
// }

const isValidReceiver = async (ctx, next) => {
  const { reciever } = ctx.request.body;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // regex.test(reciever)
  //   ? await next()
  //   : (ctx.body = { msg: "please enter valid EmailId of reciever!" });

  if(!regex.test(reciever) && reciever){
    return {"reciever" : "please enter valid EmailId of reciever!"}
  }
  else{
    return null
  }
};

const isValidStatus = async(ctx,next) =>{
  const {status} = ctx.request.body
  console.log(status);
  if(!status){
    return {"satatus" : "please enter status code"}
    
  }
   if(status == 1 || status == 3)
   {
    return null
   }
   else{
    return {"status" : "Invalid status"}
   }   
   }


const isValidRole = async(ctx,next)=>{
  const {role} = ctx.request.body
 if (role)
    if(role==1 || role==2 || role==3) return null
    else return {"role" : "Invalid Role!"}
  else return null
}   

 
export { isInvited, alreadyInvited,isValidStatus,isValidReceiver,isValidRole }
