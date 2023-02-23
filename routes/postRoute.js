import Router from "koa-router";
import { createPost,updatePost,deletePost } from "../controllers/postController";
import { isPostExist} from "../validation/postvalidation";
import {auth} from "../middleware/auth"
import { isPageExist } from "../validation/pagevalidation";
import { requiredFields, trimData } from "../validation/uservalidation";
import { Validator } from "../middleware/validator";
const postRouter = new Router({
    prefix : "/post"
})

postRouter.post("/create",auth,Validator([
    requiredFields,
    isPageExist]),createPost)

postRouter.put("/update/:id",auth,Validator([
    isPostExist,
    trimData]),updatePost)

postRouter.delete("/delete/:id",auth,Validator([
    isPostExist]),deletePost)

export {postRouter}  