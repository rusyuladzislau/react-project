/* eslint-disable default-case */

const addPostActionName = 'ADD-POST'
const onNewPostActionName = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'},
        {id: 3, message: 'Third post'},
        {id: 4, message: 'Fouth post'},
        {id: 5, message: 'Fifth post'},
      ],
      newPostText: 'new post text',
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Sergei'},
        {id: 4, name: 'Olya'},
        {id: 5, name: 'Veronika'},
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'React'},
      ]
    }
  },
  _callSubscriber() { 

  },

  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },

  _addPost() {
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText
    }
    this._state.profilePage.postsData.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  _updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  dispatch(action) {
    switch (action.type) {
      case addPostActionName: this._addPost(); break;
      case onNewPostActionName: this._updateNewPostText(action.newText); break;
    }
  },

}

export const addPostActionCreator = () => {
  return {
    type: addPostActionName 
  }
}

export const onNewPostActionCreator = (newText) => {
  return {
    type: onNewPostActionName,
    newText: newText
  }
}

export default store