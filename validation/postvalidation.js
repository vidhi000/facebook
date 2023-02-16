import { ObjectId } from "mongodb"
import { client } from "../database/db"

const Post = client.db("facebook").collection("posts")
const isPostExist = async(ctx,next)=>{
   const {id} = ctx.request.params
   const post = await Post.countDocuments({_id:new ObjectId(id)})
   if(!post){
      ctx.body = {msg : "Post does not Exist"}
      return
   }
   await next()
}

const requiredFields = async(ctx,next) =>{
   const data = ctx.request.body
   let msg = []
   // console.log(data)
   
   let arr_field = Object.keys(data)
   let required_fileds = ["media","pageId","content"]

   for (const i of required_fileds) {
      if (!arr_field.includes(i)) {
        msg.push(`${i} is required!`);
      }
    }
    for (const i of arr_field) {
      if (typeof data[i] === "string") data[i] = data[i].trim();
      if (required_fileds.includes(i) && data[i] == "")
        msg.push(`please enter your ${i}`);
      if (data[i] == "") delete ctx.request.body[i];
    }
  

   if(msg.length!==0){
      ctx.body = {msg}
      return
   }
   else{   await next()
   }
   
}  
export {isPostExist,requiredFields}