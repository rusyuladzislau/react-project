import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData
    .map( d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messagesData
    .map( m => <Message message={m.message} />)

  return (
    <div className="content">
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>
          { dialogsElements }
        </div>
        <div className={style.messagesItems}>
          { messagesElements }
        </div>
      </div>
    </div>
  )
}

export default Dialogs;