import { ObjectId } from "mongodb";
import { client } from "../database/db";
import { findByIdAndDeleteOne, findByIdAndUpdateOne, insertOneDataIntoCollection } from "../model/user";

const Page = client.db("facebook").collection("pages");

const createPage = async (ctx) => {
  ctx.request.body.createdAt = new Date();
  // console.log(ctx.userData);
   ctx.request.body.userId = ctx.userData._id;
  await insertOneDataIntoCollection("pages",ctx.request.body)
  ctx.body = { msg: "Page is Created!" };
};
 
const updatePage  = async(ctx)=>{
    const {id} = ctx.request.params
    console.log(id);
    await findByIdAndUpdateOne("pages",id,ctx.request.body)
    ctx.body = {msg : "Page is Updated!"} 
}

const deletePage = async (ctx) => {
   const {id} = ctx.request.params
   console.log(id);
   await findByIdAndDeleteOne("pages",id)
   ctx.body = {msg : "Page is Deleted!"}
};


export { createPage, updatePage, deletePage };
