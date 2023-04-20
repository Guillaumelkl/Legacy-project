const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
  localPhoto:{
    type:String
  },
  photoUrl: {
    type: String,
   /*  required: [true, "Please enter a url to add a photo..."], */
  },
  description: {
    type: String,
  },
  likesNum: {
    type: Number,
    default: 0,
  },
});
const photosModel = mongoose.model("photosModel", photosSchema);
module.exports = photosModel;
