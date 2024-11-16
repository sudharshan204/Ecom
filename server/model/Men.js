import mongoose,{Schema} from "mongoose";
const schema = new Schema({
  id: String,
  Brand: String,
  Price: String,
  image: String,
  Gender: String,
  Category: String,
});

export const Men = mongoose.model("Men", schema);
