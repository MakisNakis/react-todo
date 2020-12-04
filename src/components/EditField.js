import React from 'react'

import './scss/EditField.scss'

function EditField () {
  const [inputValue, setInputValue] = React.useState('')
  const addRecordRef = React.useRef('')

  const changeInputValue = () => {
    setInputValue(addRecordRef.current.inputRef.current.value)
  }

  React.useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <div>
      342
    </div>



  )
}

export default EditField;
