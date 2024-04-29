import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import api from '../utils/api';
import PostComponent from '../components/PostComponent';

const Posts = () => {
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState("");
    const [posts, setPosts] = useState([]);
    const [addpost, setAddPost] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async() => {
        setLoading(true);
        try {
            const res = await api.post('api/posts', { heading:title, content });
            localStorage.setItem('new-post', JSON.stringify(res))
            console.log(res);
            setLoading(false);
        } catch (error) {
              localStorage.setItem('new-post', JSON.stringify(error))
            console.log(error);
            setLoading(false); // Toggle loading state off after request error
          }
    }
    
    const getPosts = async () =>{
        try {
            const response = await api.get('api/posts');
            localStorage.setItem('posts', JSON.stringify(response))
            console.log(response);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    }
    useEffect(() => {
        getPosts();
    },[])

  return (
    <div>
        <Header/>
        <p
          onClick={() => setAddPost(true)}
          className=" fixed top-[80vh] group rounded-full bg-green-700 text-white z-40 right-8 aspect-square w-10 flex flex-col justify-center items-center text-3xl cursor-pointer"
        >
          <p>+</p>
          <p className="hidden group-hover:block w-40 text-lg absolute top-[120%]">
            Add Mosque
          </p>
        </p>
        <div>
            <h1 className='text-3xl'>Posts</h1>
            <div className='flex gap-4 flex-col'>
                {
                posts.map((post) => (
                    <PostComponent key={post._id} heading={post.heading} content={post.content} farmerName={post.farmerName} />
                ))
            }    
            </div>
        </div>
        {
            addpost && 
            <form onSubmit={handleSubmit} className='w-screen flex justify-center items-center h-screen bg-[rgba(0,125,0,0.3)] absolute top-0 z-50'>
                <div className='flex flex-col bg-green-400 w-1/3 h-1/3'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
            <label htmlFor="content">Content</label>
            <input type="text" name="content" id="content" value={content} onChange={(e)=> setContent(e.target.value)}/>
            <button type='submit'>Add Post</button>
                </div>
        </form>}
        <Footer/>
    </div>
  )
}

export default Posts