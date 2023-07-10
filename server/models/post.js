const mongoose = require("mongoose");
const slugify = require("slugify");

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: true,
      minlength: [4, "Please provide a title least 4 characters "],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      minlength: [4, "Please provide a description least 4 characters "],
    },

    image: {
      type: String,
      default:
        "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
      },
    ],
    commentCount: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
