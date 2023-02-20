import { ObjectId } from "mongodb"
import {client} from "../database/db"


const insertOneDataIntoCollection = (coll,data)=>{
    return client.db("facebook").collection(coll).insertOne(data)

}

const findByIdAndUpdateOne = (coll,id,data)=>{
    return client.db("facebook").collection(coll).updateOne({_id:new ObjectId(id)},{$set:data})
}

const findByIdAndDeleteOne = (coll,id) =>{
   return client.db("facebook").collection(coll).deleteOne({_id : new ObjectId(id)})
}

const findById = (coll,id)=>{
   return client.db("facebook").collection(coll).findOne({_id : new ObjectId(id)})
}

export {insertOneDataIntoCollection,findByIdAndUpdateOne,findByIdAndDeleteOne,findById}