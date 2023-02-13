import { ObjectId } from "mongodb";
import { client } from "../database/db"
const Invite = client.db("facebook").collection("invitation");

const isInvited = async(ctx,next)=>{
   const {id} = ctx.request.params
   console.log(id);
   const invite = await Invite.countDocuments({_id:new ObjectId(id)})
   if(!invite){
    ctx.body = {msg : "User is not invited!"}
    return
   }
   await next() 
}

export {isInvited}