import Router from "koa-router"
import { createPage, deletePage, updatePage } from "../controllers/pageController"
import { auth } from "../middleware/auth"
import {isUniquePage,isPageExist} from "../validation/pagevalidation"
import { requiredFields, trimData } from "../validation/uservalidation"
import {Validator} from "../middleware/validator"

const pageRouter = new Router({
    prefix : "/page"
})

pageRouter.post('/create',auth,Validator([

    requiredFields,
    isUniquePage]),createPage)

pageRouter.put('/update/:id',auth,Validator([

    isPageExist,
    trimData]),updatePage)

pageRouter.delete('/delete/:id',auth,Validator([
    isPageExist]),deletePage)



export {pageRouter}