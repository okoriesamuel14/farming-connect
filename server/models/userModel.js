import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema ({
 fullName: {
    type: String,
    required: true
 },
 email: {
    type: String,
    required: true
 },
 username: {
    type: String, 
    required: true 
 },
 DOB: {
    type: Date, 
    required: true 
 },
 gender: {
    type: String, 
    required: true 
 },
 password: {
    type: String,
    required: true
 }
})
userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
 };
 
 // Encrypt password using bcrypt
 userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
     next();
   }
 
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
 });
 
 const User = mongoose.model('User', userSchema);
 
 export default User;