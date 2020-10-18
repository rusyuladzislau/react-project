import React from 'react'
import './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <h4>Post</h4>
      <p>{props.message}</p>
    </div>
  )
}

export default Post;