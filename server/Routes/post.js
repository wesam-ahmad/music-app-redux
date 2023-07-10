const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostByName,
  notActivePosts,
  acceptPostRequest,
  rejectPostRequest,
} = require("../Controllers/postController.js");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/request", notActivePosts);
router.get("/post/:title", getPostByName);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
// Accept a post request by ID
router.put("/accept/:id", acceptPostRequest);

// Reject a post request by ID
router.put("/reject/:id", rejectPostRequest);
module.exports = router;
