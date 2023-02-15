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


   for(const i of arr_field){
      
   }

   if(msg.length!==0){
      ctx.body = {msg}
   }
   else{   await next()
   }
   
}  
export {isPostExist,requiredFields}