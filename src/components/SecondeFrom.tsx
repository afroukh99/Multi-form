import React from 'react'
import FormWrapper from './FormWrapper'
import { Input } from './common/Input'

const SecondeFrom = () => {
  return (
    <FormWrapper>
      <Input label='Age' placeholder='Please enter your age' type='number' name='age' min={0}/>
      <Input label='Phone number' placeholder='Please enter phone number' type='number' name='phone'/>
      <Input label='Adress' placeholder='Please enter your address' type='text' name='address'/>
    </FormWrapper>
  )
}

export default SecondeFrom