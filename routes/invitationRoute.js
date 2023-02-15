import Router from "koa-router"
import { invite,updateInvitation,deleteInvitation, sendMail,acceptReject } from "../controllers/inviteController"
import {auth} from "../middleware/auth"
import { alreadyInvited, isInvited } from "../validation/invitevalidation"
 import {isPageExist} from "../validation/pagevalidation"



const inviteRouter = new Router()

inviteRouter.post("/invite",auth,isPageExist,invite)
inviteRouter.put("/invite/update/:id",isInvited,updateInvitation)
inviteRouter.delete("/invite/delete/:id",isInvited,deleteInvitation)
inviteRouter.post("/invite/acceptreject",acceptReject)



export {inviteRouter}