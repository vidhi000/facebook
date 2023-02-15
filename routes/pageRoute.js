import Router from "koa-router"
import { createPage, deletePage, updatePage } from "../controllers/pageController"
import { auth } from "../middleware/auth"
import {isUniquePage,isPageExist, requiredFields} from "../validation/pagevalidation"

const pageRouter = new Router()

pageRouter.post('/page/create',auth,requiredFields,isUniquePage,createPage)
pageRouter.put('/page/update/:id',auth,isPageExist,updatePage)
pageRouter.delete('/page/delete/:id',auth,isPageExist,deletePage)



export {pageRouter}