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

export {isPostExist}