import Router from "koa-router"
import { invite,updateInvitation,deleteInvitation,acceptReject } from "../controllers/inviteController"
import {auth} from "../middleware/auth"
import { alreadyInvited, isInvited, isValidReceiver, isValidRole, isValidStatus } from "../validation/invitevalidation"
import {isPageExist} from "../validation/pagevalidation"
import { requiredFields, trimData } from "../validation/uservalidation"



const inviteRouter = new Router({
    prefix : "/invite"
})

inviteRouter.post("/",auth,requiredFields,isPageExist,isValidReceiver,isValidRole,alreadyInvited,invite)
inviteRouter.put("/update/:id",auth,isInvited,trimData,isValidReceiver,isValidRole,updateInvitation)
inviteRouter.delete("/delete/:id",auth,isInvited,deleteInvitation)
inviteRouter.post("/acceptreject",auth,isValidStatus,acceptReject)

export {inviteRouter}