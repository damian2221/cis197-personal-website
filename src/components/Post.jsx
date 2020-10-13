import React, { useState } from 'react'

import DisplayPostCard from './DisplayPostCard'
import EditPostCard from './EditPostCard'

const Post = props => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="card">
      { isEditing ? <EditPostCard {...props} setIsEditing={setIsEditing} />
        : <DisplayPostCard {...props} setIsEditing={setIsEditing} /> }
    </div>
  )
}

export default Post
