import React from 'react'
import './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className="content">
      <Post message='First post' />
      <Post message='Second post' />
      <Post message='Third post' /> 
    </div>
  )
}

export default MyPosts;