import { ObjectId } from "mongodb";
import { client } from "../database/db"
const Page = client.db("facebook").collection("pages")
const Invite = client.db("facebook").collection("invitation");

const isUserLogin =(ctx,next)=>{
  
}
const isUniquePage = async(ctx,next)=>{
    const {pageName} = ctx.request.body
    console.log(pageName);
    const count = await Page.countDocuments({pageName})
    if(count > 0){
        ctx.body = {msg : "Page is already Exist"}
        return
    }
    await next()
}

const isPageExist = async(ctx,next)=>{
    const id = ctx.request.params.id || ctx.request.body.pageId
    console.log(id);
   const page = await Page.countDocuments({_id:new ObjectId(id)})
   console.log(page);
   if(!page){
    ctx.body = {msg : "Page does not Exist"}
    return
   }
   await next()
}



export {isUserLogin,
       isUniquePage,
       isPageExist

    
}