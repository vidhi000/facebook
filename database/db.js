import mongodb from "mongodb"
import { MongoClient } from "mongodb"
import env from "dotenv"

env.config()
const URL = process.env.MONGO_URL

const client = new MongoClient(URL)

const connectToDB = async()=>{
     await client.connect()
     console.log("Successfuly connected!");
}

export {connectToDB,client}
