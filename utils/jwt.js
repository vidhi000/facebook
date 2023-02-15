import JWT from "jsonwebtoken";
import env from "dotenv";
env.config();

const secret = process.env.JWT_SECRET;

const verifyJWT = (token) => {
  try {
    const data = JWT.verify(token, secret);
    return data;
  } catch (error) {
    console.log(error);
    ctx.body = {msg : "Invalid Token"}
  }
};

export { verifyJWT };
