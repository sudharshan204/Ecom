import mongoose,{Schema} from "mongoose";
const schema1 = new Schema({
         id: String,
         Brand: String,
         Price: String,
         image: String,
         Gender: String,
         Category: String
});

export const Women = mongoose.model("Women", schema1)