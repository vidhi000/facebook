import Router from "koa-router";
import { createPost,updatePost,deletePost } from "../controllers/postController";
import { isPostExist, requiredFields } from "../validation/postvalidation";
import {auth} from "../middleware/auth"
import { isPageExist } from "../validation/pagevalidation";
const postRouter = new Router()

postRouter.post("/post/create",auth,requiredFields,isPageExist,createPost)
postRouter.put("/post/update/:id",auth,isPostExist,updatePost)
postRouter.delete("/post/delete/:id",auth,isPostExist,deletePost)

export {postRouter}  