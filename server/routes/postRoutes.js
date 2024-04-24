import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router();

router
  .route('/')
  .post(protect, createPost)
  .get(protect, getAllPosts)
  
export default router;