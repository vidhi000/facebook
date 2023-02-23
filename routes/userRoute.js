import koaRouter from "koa-router"
import {userSignup, userLogin,deleteUser,updateUser} from "../controllers/userController"
import { isValidEmail,isValidPassword,isUserExist,isUniqueEmail,isUniqueContact,requiredFields,validDOB, isValidContact, trimData} from "../validation/uservalidation"
 import { Validator } from "../middleware/validator"
 import { validateInputs } from "../middleware/validator"
const userRouter = new koaRouter({
    prefix : "/user"
})
 
 
userRouter.get("/login",Validator([
    isValidEmail,
    isValidPassword,
    trimData
    ]),userLogin)

userRouter.post("/signup",Validator([
    requiredFields,
    trimData,
    validDOB,
    isValidContact,
    isUniqueContact,
    isValidEmail,
    isValidPassword,
    isUniqueEmail]),userSignup) 

userRouter.put("/update/:id",Validator([
    trimData,
    isUserExist,
    isValidEmail,
    isValidContact,
    isUniqueContact,
    isUniqueEmail
    ]),updateUser)
    
userRouter.delete("/delete/:id",Validator([isUserExist]),deleteUser)


export {userRouter}
 