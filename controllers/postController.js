import { ObjectId } from "mongodb"
import {client} from "../database/db"
import {auth} from "../middleware/auth"
import { findByIdAndDeleteOne, findByIdAndUpdateOne, insertOneDataIntoCollection } from "../model/user"

const Post = client.db("facebook").collection("posts")
// const Page = client.db("facebook").collection("pages");

const createPost = async(ctx)=>{
     const {media,content,pageId} = ctx.request.body
     const postData = {
          media,
          content,
          pageId : new ObjectId(pageId),
          userId : ctx.userData._id,
          createdAt : new Date()

     }
     await insertOneDataIntoCollection("posts",postData)
     ctx.body = {msg : "Post is created"}
}

const updatePost = async(ctx)=>{
     const {id} = ctx.request.params
     await findByIdAndUpdateOne("posts",id,ctx.request.body)
     ctx.body = {msg : "Post is Updated"}

}
 
const deletePost = async(ctx)=>{
     const {id} = ctx.request.params
     await findByIdAndDeleteOne("posts",id)
     ctx.body = {msg : "Post is deleted"}

}
export {createPost,
       updatePost,
       deletePost
}

