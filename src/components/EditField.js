import React from 'react'
import { Icon, Input, Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

function EditField () {
  const [inputValue, setInputValue] = React.useState('')

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  React.useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <Input
      action={{
        color: 'teal',
        icon: 'check',
      }}
      actionPosition='right'
      onChange={changeInputValue}
    />
  )
}

export default EditField;
