import koaRouter from "koa-router"
import {userSignup, userLogin,deleteUser,updateUser} from "../controllers/userController"
import { isValidEmail,isValidPassword,isUserExist,isUniqueEmail} from "../validation/uservalidation"
const userRouter = new koaRouter()


userRouter.get("/user/login",isValidEmail,isValidPassword,userLogin)
userRouter.post("/user/signup",isValidEmail,isValidPassword,isUniqueEmail,userSignup) 
userRouter.put("/user/update/:id",isUserExist,updateUser)
userRouter.delete("/user/delete/:id",isUserExist,deleteUser)


export {userRouter}
 