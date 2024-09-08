import React from 'react'
import FormWrapper from './FormWrapper'
import { Input } from './common/Input'

const FirstForm = () => {

  return (
    <FormWrapper>
      <Input  label='Name' placeholder='Please enter your name' type='text' name='name' />
      <Input label='Email' placeholder='Please enter your Email' type='email' name='email' />
      <Input label='password' placeholder='Please enter a strong password' type='password' name='password' />
    </FormWrapper>
  )
}

export default FirstForm