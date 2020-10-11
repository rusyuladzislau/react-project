import React from 'react'
import './Post.module.css'

const Post = (props) => {
  return (
    <div className="content">
      <h2>Post</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Post;