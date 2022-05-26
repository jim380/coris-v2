const mongoose = require("mongoose");

const BlockSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
    unique: true
  },
});

const Block = mongoose.model("Block", BlockSchema);

module.exports = Block;
