import { ObjectId } from "mongodb";
import { client } from "../database/db";

const Page = client.db("facebook").collection("pages");

const createPage = async (ctx) => {
  ctx.request.body.createdAt = new Date();
  // console.log(ctx.userData);
   ctx.request.body.userId = ctx.userData._id;
  await Page.insertOne(ctx.request.body);
  ctx.body = { msg: "Page is Created!" };
};
 
const updatePage  = async(ctx)=>{
    const {id} = ctx.request.params
    console.log(id);
    await Page.updateOne({_id: new ObjectId(id)},{$set:{like:"playing"}})
    ctx.body = {msg : "Page is Updated!"} 
}

const deletePage = async (ctx) => {
   const {id} = ctx.request.params
   console.log(id);
   await Page.deleteOne({_id:new ObjectId(id)})
   ctx.body = {msg : "Page is Deleted!"}
};





export { createPage, updatePage, deletePage };
