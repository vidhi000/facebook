import { ObjectId } from "mongodb";
import { client } from "../database/db";
import env from "dotenv";
import { genToken } from "../validation/uservalidation";
import { verifyJWT } from "../utils/jwt";
import { findById, findByIdAndDeleteOne, findByIdAndUpdateOne, insertOneDataIntoCollection } from "../model/user";
env.config();
const JWT_SECRET = process.env.JWT_SECRET;

const Invite = client.db("facebook").collection("invitation");

const invite = async (ctx) => {
  console.log(ctx.host);

  const { reciever, role, pageId } = ctx.request.body;
  const data = {
    reciever: reciever,
    sender: ctx.userData.email,
    role,
    status: 2,    //Bydefault - pending
    userId: ctx.userData._id,
    pageId: new ObjectId(pageId)
  };
  const invitation = await insertOneDataIntoCollection("invitation",data)
  console.log(invitation);
  const token = genToken({ invitationId: invitation.insertedId }, "2d");
  const URL = ctx.host + `/invite/acceptreject?token=`
  const url = URL + token;
  ctx.body = { msg: "Invitation send successfully!", url };
};


const updateInvitation = async (ctx) => {
  const { id } = ctx.request.params;
  await findByIdAndUpdateOne("invitation",id,ctx.request.body)
  ctx.body = { msg: "Invitation Updated!" };
};

const deleteInvitation = async (ctx) => {
  const { id } = ctx.request.params;
  await findByIdAndDeleteOne("invitation",id)
  ctx.body = { msg: "Invitation Deleted!" };
};

const acceptReject = async (ctx) => {
  const { token } = ctx.request.query;
  const data = verifyJWT(token);
  // console.log(data);
  const _id = new ObjectId(data?.invitationId);
  const invitation = await findById("invitation",_id)
  console.log(invitation);
  if (invitation.status == 2 ) {
    await Invite.updateOne({ _id }, { $set: { status:ctx.request.body.status} });
    ctx.body = {msg : "Status is updated!"}

  } 
  else if(invitation.status == 1){
    ctx.body = {msg : "Already accepted!"}
  }
  else {
    ctx.body = {msg : "Already declied!"}
  }

};



export { invite, updateInvitation, deleteInvitation, acceptReject };
