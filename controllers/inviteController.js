import { ObjectId } from "mongodb";
import { client } from "../database/db";
import nodemailer from "nodemailer";
import JWT from "jsonwebtoken";
import env from "dotenv";
import { genToken } from "../validation/uservalidation";
import { verifyJWT } from "../utils/jwt";
env.config();
const JWT_SECRET = process.env.JWT_SECRET;

const Invite = client.db("facebook").collection("invitation");

const invite = async (ctx) => {
  const { reciever, role, pageId } = ctx.request.body;
  const data = {
    reciever: reciever,
    sender: ctx.userData.email,
    role,
    status: 2,    //Bydefault - pending
    userId: ctx.userData._id,
    pageId: new ObjectId(pageId),
  };
  const invitation = await Invite.insertOne(data);
  console.log(invitation);
  const token = genToken({ invitationId: invitation.insertedId }, "2d");
  const url = `localhost:3000/invite/acceptreject?token=` + token;
  ctx.body = { msg: "Invitation send successfully!", url };
};


const updateInvitation = async (ctx) => {
  const { id } = ctx.request.params;
  await Invite.updateOne(
    { _id: new ObjectId(id) },
    { $set: { like: "chess" } }
  );
  ctx.body = { msg: "Invitation Updated!" };
};

const deleteInvitation = async (ctx) => {
  const { id } = ctx.request.params;
  await Invite.deleteOne({ _id: new ObjectId(id) });
  ctx.body = { msg: "Invitation Deleted!" };
};

const acceptReject = async (ctx) => {
  const { token } = ctx.request.query;
  const data = verifyJWT(token);
  // console.log(data);
  const _id = new ObjectId(data?.invitationId);
  const invitation = await Invite.findOne({ _id });
  console.log(invitation);
  if (invitation.status == 2 ) {
    await Invite.updateOne({ _id }, { $set: { status:ctx.request.body.status} });
    ctx.body = {msg : "update status"}

  }
  else if(invitation.status == 1){
    ctx.body = {msg : "Alreday accepted!"}
  }
  else {
    ctx.body = {msg : "Alreday declied!"}
  }

};



export { invite, updateInvitation, deleteInvitation, acceptReject };
