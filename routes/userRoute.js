import koaRouter from "koa-router"
import {userSignup, userLogin,deleteUser,updateUser} from "../controllers/userController"
import { isValidEmail,isValidPassword,isUserExist,isUniqueEmail,isUniqueContact,requiredFields,validDOB, isValidContact} from "../validation/uservalidation"
const userRouter = new koaRouter({
    prefix : "/user"
})
 

userRouter.get("/login",isValidEmail,isValidPassword,userLogin)
userRouter.post("/signup",requiredFields,validDOB,isValidContact,isUniqueContact,isValidEmail,isValidPassword,isUniqueEmail,userSignup) 
userRouter.put("/update/:id",isUserExist,updateUser)
userRouter.delete("/delete/:id",isUserExist,deleteUser)





export {userRouter}
 