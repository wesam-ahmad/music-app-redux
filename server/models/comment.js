const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Post",
    },
    title: {
      type: String,
      required: [true, "please provide a title"],
    },
    description: {
      type: String,
      required: [true, "please provide a description"],
    },
    authorName: {
      type: String,
      required: true,
    },
    authorEmail: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
