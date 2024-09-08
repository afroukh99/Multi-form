import React from 'react'

const FormWrapper = ({children} : {children : React.ReactNode}) => {
  return (
    <div class="flex flex-col gap-3 py-6 px-3">
        {children}
    </div>
  )
}

export default FormWrapper