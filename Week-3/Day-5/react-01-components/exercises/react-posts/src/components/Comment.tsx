import React from 'react'
import UserInfo from './UserInfo'

export default function Comment({comment}:any) {
  return (
    <div><div className='comment'>
    <UserInfo props={comment}/>

    <div className='comment-text'>{comment.text}</div>

    <div className='comment-date'>{comment.date}</div>
  </div></div>
  )
}
