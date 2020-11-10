import React from 'react'
import { Icon, Input, Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
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
    // <div>
    //   <input

    //     ref={addRecordRef}
    //     type={"text"}
    //   />
    //   <Button
    //     icon={}
    //     onClick={() => changeInputValue()}
    //   ></Button>
    // </div>


    <Input
      action={{
        color: 'teal',
        icon: 'check',
        onClick: () => changeInputValue()
      }}
      actionPosition='right'
      className={"editField"}
      ref={addRecordRef}
      // onChange={changeInputValue}
    />
  )
}

export default EditField;
