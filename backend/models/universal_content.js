const mongoose = require("mongoose");

const ucSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    file: {
      type: String,
      
    },
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "https://image.flaticon.com/icons/png/512/4/4327.png"
    }
  }
  
);

module.exports = mongoose.model("universal_contents", ucSchema);