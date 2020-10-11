import React from 'react'
import './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className="content">
      <MyPosts />
    </div>
  )
}

export default Profile;