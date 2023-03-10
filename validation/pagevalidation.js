import { ObjectId } from "mongodb";
import { client } from "../database/db";
const Page = client.db("facebook").collection("pages");
const Invite = client.db("facebook").collection("invitation");

const isUniquePage = async (ctx, next) => {
  const { pageName } = ctx.request.body;
  // console.log(pageName);
  const count = await Page.countDocuments({ pageName });
  if (count > 0) {
    return { "validation": "Page is already Exist" };
    
  }
  return null
};

const isPageExist = async (ctx, next) => {
  const id = ctx.request.params.id || ctx.request.body.pageId;
  // console.log(id);
  const page = await Page.countDocuments({ _id: new ObjectId(id) });
  //    console.log(page);
  if (!page) {
    return { "validation": "Page does not Exist" };
    
  }
  return null
};

// const requiredFields = async (ctx, next) => {
//   let data = ctx.request.body;
//   //  console.log(data);
//   let array_filed = Object.keys(data);
//   // console.log(array_filed);
//   let msg = [];

//   //for required fileds
//   const required_fileds= ["pageName", "pageCategory", "bio"];
//   for (const i of required_fileds) {
//     if (!array_filed.includes(i)) {
//       msg.push(`${i} is required!`);
//     }
//   }
//   for (const i of array_filed) {
//     if (typeof data[i] === "string") data[i]=data[i].trim();
//     if (required_fileds.includes(i) && data[i] == "")
//       msg.push(`please enter your ${i}`);
//     if (data[i] == "") delete ctx.request.body[i];
//   }

//   if (msg.length != 0) {
//     ctx.body = { msg };
//     return;
//   } else {
//     await next();
//   }
// };

export { isUniquePage, isPageExist };
