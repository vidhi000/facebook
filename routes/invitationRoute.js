import Router from "koa-router"
import { invite,updateInvitation,deleteInvitation, sendMail } from "../controllers/inviteController"
import {auth} from "../middleware/auth"
import { isInvited } from "../validation/invitevalidation"
 import {isPageExist} from "../validation/pagevalidation"



const inviteRouter = new Router()

inviteRouter.post("/invite",auth,isPageExist,invite)
inviteRouter.put("/invite/update/:id",isInvited,updateInvitation)
inviteRouter.delete("/invite/delete/:id",isInvited,deleteInvitation)

inviteRouter.get("/mail",sendMail)



export {inviteRouter}