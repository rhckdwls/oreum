const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oreumSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    kakao: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
    area: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

oreumSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      title: 5,
      description: 1,
    },
  }
);

const Oreum = mongoose.model("Oreum", oreumSchema);

module.exports = { Oreum };
