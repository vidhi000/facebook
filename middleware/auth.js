import JWT from "jsonwebtoken"
import env from "dotenv"
import { client } from "../database/db"
const User = client.db("facebook").collection("users")


env.config()
const JWT_SECRET = process.env.JWT_SECRET
const auth = async(ctx,next)=>{
    try {
        const token = ctx.headers.authorization.split(" ")[1]
        // console.log(token);
        const user = JWT.verify(token,JWT_SECRET)
        //  console.log(user);
    
        const userData = await User.findOne({email:user.email})
        // console.log(userData);
        if(!userData){
            ctx.body = "Access Denied"
            return
        }
          ctx.userData = userData
        //   console.log(ctx.userData);
        await next()
        
    } catch (error) {
        console.log(error);
        ctx.body = {msg : "User is not Autorized"}
    }
}

export {auth}