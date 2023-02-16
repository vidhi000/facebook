import Router from "koa-router"
import { createPage, deletePage, updatePage } from "../controllers/pageController"
import { auth } from "../middleware/auth"
import {isUniquePage,isPageExist, requiredFields} from "../validation/pagevalidation"

const pageRouter = new Router({
    prefix : "/page"
})

pageRouter.post('/create',auth,requiredFields,isUniquePage,createPage)
pageRouter.put('/update/:id',auth,isPageExist,updatePage)
pageRouter.delete('/delete/:id',auth,isPageExist,deletePage)



export {pageRouter}