import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';



// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createPost = asyncHandler(async (req, res) => {
  const { heading, content } = req.body;
  const farmerId = req.user._id
  const farmerName = req.user.fullName

  const post = await Post.create({
    farmerId,
    farmerName,
    heading,
    content
  });

  if (post) {    
    res.status(201).send("created successfully")
} else {
    res.status(400);
    throw new Error('Failed to create post');
  }
});



// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


export {
  getAllPosts,
  createPost
};