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
      type: Number,
      required: true
    }
  }
  
);

module.exports = mongoose.model("universal_contents", ucSchema);