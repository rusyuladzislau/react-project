import React from 'react'
import './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className="content">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;