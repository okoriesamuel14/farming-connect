import React from 'react'

const PostComponent = ({heading, content, farmerName}) => {
  return (
    <div className='w-full rounded-md bg-slate-300 p-6 gap-5 flex flex-col'>
            <div>
            <h1 className='text-2xl font-bold'>{heading}</h1>
            <p>{content}</p>        
            </div>
            <p className=' text-green-700 uppercase text-sm'>{farmerName}</p>        
    </div>
  )
}

export default PostComponent