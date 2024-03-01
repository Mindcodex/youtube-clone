import React from 'react'
import AddComment from './add-comment'
import CommentFilter from './comment-filter'
import Comment from './comment'

const CommentBox = () => {
  return (
    <div className='ml-3 mt-4'>
       <CommentFilter/>
       <AddComment/>
       <Comment/>
       <Comment/>
    </div>
  )
}

export default CommentBox