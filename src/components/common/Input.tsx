import React from 'react'
import { useFormContext } from 'react-hook-form'


type InputType = {
    label: string,
    placeholder: string,
    type: string,
    name : string,
    min ? : number 

}

export const Input = ({ label, placeholder, type , min , name }: InputType) => {

  const {register , formState : {errors}} = useFormContext()


    return (
        <div className="flex flex-col gap-3">
            <label  htmlFor="" className="text-slate-800 text-sm"> {label} :</label>
            <input {...register(name ,{required : true})} type={type} className="border border-[#ddd] rounded-sm p-1 w-full" placeholder={placeholder} min={min} />
        </div>
    )
}
