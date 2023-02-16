import { ObjectId } from "mongodb";
import { client } from "../database/db";
const Invite = client.db("facebook").collection("invitation");

const isInvited = async (ctx, next) => {
  const { id } = ctx.request.params;
  // console.log(id);
  const invite = await Invite.countDocuments({ _id: new ObjectId(id) });
  if (!invite) {
    ctx.body = { msg: "User is not invited!" };
    return;
  }
  await next();
};

const alreadyInvited = async (ctx, next) => {
  const { reciever,pageId } = ctx.request.body;
  
  const cnt = await Invite.countDocuments({ reciever,pageId : new ObjectId(pageId) });
  // console.log(cnt);
  if (cnt > 0) {
    ctx.body = { msg: "User is already invited" };
    return;
  }
  await next();
};

const requiredFields = async (ctx, next) => {
  const data = ctx.request.body;
  let arr_fields = Object.keys(data)
  let msg = [];
  let required_fileds = ["pageId","role","reciever"]
   
  for(const i of required_fileds){
     if(!arr_fields.includes(i)) msg.push(`${i} is required`)
  }

  for(const i of arr_fields){
   if(typeof data[i] == "string") data[i]=data[i].trim()
    //  console.log(data[i]);
     if (required_fileds.includes(i) && data[i]=="") msg.push(`please enter your ${i}`)
     if (data[i] == "")delete(ctx.request.body[i]) 
  }
//   }

  
  if (msg.length != 0) {
    ctx.body = { msg };
    return;
  } else {
    await next();
  }
}

const isValidStatus = async(ctx,next) =>{
  const {status} = ctx.request.body
  console.log(status);
  if(!status){
    ctx.body = {msg : "please enter status code"}
    return
  }
   if(status == 1 || status == 3)
   {
     await next()
   }
   else{
    ctx.body = {msg : "Invalid status"}
   }
  //  for (const i in num) {
  //    if(status.includes(i)){
  //     await next()
  //    }
  //    else{
  //     ctx.body = "Invalid status code!"
  //    }
  //  }
   
   }

 
export { isInvited, alreadyInvited, requiredFields,isValidStatus }
