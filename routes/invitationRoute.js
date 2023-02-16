import Router from "koa-router"
import { invite,updateInvitation,deleteInvitation,acceptReject } from "../controllers/inviteController"
import {auth} from "../middleware/auth"
import { alreadyInvited, isInvited, isValidStatus } from "../validation/invitevalidation"
 import {isPageExist} from "../validation/pagevalidation"
import { requiredFields } from "../validation/invitevalidation"



const inviteRouter = new Router()

inviteRouter.post("/invite",auth,requiredFields,isPageExist,alreadyInvited,invite)
inviteRouter.put("/invite/update/:id",auth,isInvited,updateInvitation)
inviteRouter.delete("/invite/delete/:id",auth,isInvited,deleteInvitation)
inviteRouter.post("/invite/acceptreject",auth,isValidStatus,acceptReject)



export {inviteRouter}