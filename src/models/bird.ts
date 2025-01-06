import { model, Schema } from "mongoose";


const birdSchema = new Schema({
	_id: String,
commonName :String,
scientificName:String, 
description:String,
habitat:String,
appearance:String,
photos:[String]}

)

export default model('Bird',birdSchema)