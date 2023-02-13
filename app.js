import koa from "koa"
import bodyParser from "koa-bodyparser"
import { userRouter } from "./routes/userRoute"
import { pageRouter } from "./routes/pageRoute"
import { postRouter } from "./routes/postRoute"
import env from "dotenv"
import { connectToDB } from "./database/db"
import { inviteRouter } from "./routes/invitationRoute"
env.config()
const PORT = process.env.PORT

const app = new koa()
connectToDB()

app.use(bodyParser())
app.use(userRouter.routes(),userRouter.allowedMethods())
app.use(pageRouter.routes(),pageRouter.allowedMethods())
app.use(postRouter.routes(),postRouter.allowedMethods())
app.use(inviteRouter.routes(),inviteRouter.allowedMethods())

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})




















































//npm i @babel/cli @babel/core @babel/preset-env @babel/node