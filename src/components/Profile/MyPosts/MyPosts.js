import React from 'react'
import { addPostActionCreator, onNewPostActionCreator } from '../../../redux/state'
import './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.postsData
    .map( p => <Post message={p.message} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onNewPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(onNewPostActionCreator(text))
  }

  return (
    <div>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea 
            onChange={onNewPostChange} 
            ref={newPostElement} 
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;