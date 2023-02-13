import { ObjectId } from "mongodb";
import { client } from "../database/db";
import nodemailer from "nodemailer"

const Invite = client.db("facebook").collection("invitation");


const invite = async (ctx) => {
    const { email, role, pageId } = ctx.request.body;
    const data = {
      reciver: email,
      sender: ctx.userData.email,
      role,
      userId: ctx.userData._id,
      pageId: new ObjectId(pageId),
  
    };
    await Invite.insertOne(data);
    ctx.body = {msg : "Invitation send successfully!"};
  }

  const updateInvitation = async(ctx)=>{
    const {id} = ctx.request.params
    await Invite.updateOne({_id:new ObjectId(id)},{$set : {like:"chess"}})
    ctx.body = {msg : "Invitation Updated!"}
  }

  const deleteInvitation = async(ctx)=>{
     const {id} = ctx.request.params
     await Invite.deleteOne({_id:new ObjectId(id)})
     ctx.body = {msg : "Invitation Deleted!"}
  }

  const sendMail = async(ctx)=>{
     const testAccount = await nodemailer.createTestAccount()

     //connect with the smtp
     let transporter =  nodemailer.createTransport({
       host: "smtp.ethereal.email",
       port: "587",
       auth: {
         user: "theo58@ethereal.email",
         pass: "WgEynbGgXp49uqCfCd"
       }
     })
     //send mail with transpoter object
     let info = await transporter.sendMail({
      from : "vidhi5410rana@gmail.com",
      to: "vanshpratik0165@gmail.com",
      subject : "Hello",
      text : "hello world",
      html : "<h1>dcscd</h1>"
     })

     console.log("msg sent : %s",info.messageId);

       ctx.body = {msg : "mail"}
  }


  export {invite,
    updateInvitation,
    deleteInvitation,
    sendMail
  }
   