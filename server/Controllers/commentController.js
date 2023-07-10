const Comment = require("../Models/comment.js");
const Post = require("../Models/post.js");
const User = require("../Models/user.js");

// @desc    Get all comments
// @route   GET /api/comments
// @access  Public
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ success: true, data: comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get a single comment
// @route   GET /api/comments/:id
// @access  Public
exports.getComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }
    res.status(200).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Create a comment
// @route   POST /api/comments
// @access  Public
exports.createComment = async (req, res, next) => {
  try {
    const { postId, title, description, authorName, authorEmail } = req.body;

    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }
    // Create the comment
    const comment = await Comment.create({
      post: postId,
      title,
      description,
      authorName,
      authorEmail,
    });

    // Update the post's comments and commentCount
    post.comments.push(comment);
    post.commentCount = post.comments.length;
    await post.save();

    res.status(201).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Update a comment
// @route   PUT /api/comments/:id
// @access  Public
exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }
    res.status(200).json({ success: true, data: comment });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Public
exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: "Comment not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
