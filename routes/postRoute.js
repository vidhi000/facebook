import Router from "koa-router";
import { createPost,updatePost,deletePost } from "../controllers/postController";
import { isPostExist} from "../validation/postvalidation";
import {auth} from "../middleware/auth"
import { isPageExist } from "../validation/pagevalidation";
import { requiredFields, trimData } from "../validation/uservalidation";
const postRouter = new Router({
    prefix : "/post"
})

postRouter.post("/create",auth,requiredFields,isPageExist,createPost)
postRouter.put("/update/:id",auth,isPostExist,trimData,updatePost)
postRouter.delete("/delete/:id",auth,isPostExist,deletePost)

export {postRouter}  