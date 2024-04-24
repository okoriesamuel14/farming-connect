import mongoose from 'mongoose';

const postSchema = new mongoose.Schema ({
 farmerId: {
    type: String,
    required: true
 },
 farmerName: {
    type: String,
    required: true
 },
 heading: {
    type: String, 
    required: true 
 },
 content: {
    type: String, 
    required: true 
 }
 
},
{
    timestamps: true,
})
 
 const Post = mongoose.model('Post', postSchema);
 
 export default Post;