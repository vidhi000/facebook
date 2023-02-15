import koaRouter from "koa-router"
import {userSignup, userLogin,deleteUser,updateUser} from "../controllers/userController"
import { isValidEmail,isValidPassword,isUserExist,isUniqueEmail,isUniqueContact,requiredFields,validDOB, isValidContact} from "../validation/uservalidation"
const userRouter = new koaRouter()


userRouter.get("/user/login",isValidEmail,isValidPassword,userLogin)
userRouter.post("/user/signup",requiredFields,validDOB,isValidContact,isUniqueContact,isValidEmail,isValidPassword,isUniqueEmail,userSignup) 
userRouter.put("/user/update/:id",isUserExist,updateUser)
userRouter.delete("/user/delete/:id",isUserExist,deleteUser)


export {userRouter}
 