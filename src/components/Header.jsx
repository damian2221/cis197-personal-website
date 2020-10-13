import React, { useState } from 'react'
import Introduction from './Introduction'
import EditIntroductionForm from './EditIntroductionForm'

const Header = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h1>
        Hey this is me!
        { isEditing ? '' : <button type="button" onClick={() => setIsEditing(true)}>Edit</button> }
      </h1>
      { isEditing ? <EditIntroductionForm setIsEditing={setIsEditing} /> : <Introduction /> }
    </div>
  )
}
export default Header
