import React from 'react'

const ChatItem = ({item}) => {
  return (
    <div className={`message ${item.sender.self && 'owner'}`}>
             <div className='messageInfo'>
              <img src={item.sender.image} alt=''/>
             </div>
             <div className='messageContent'>
              <p>{item.message}</p>
             </div>
          </div>
  )
}

export default ChatItem