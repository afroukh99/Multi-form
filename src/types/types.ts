import React, { ReactElement } from "preact/compat";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ImultiForm {
    name: string;
    email: string;
    age: number
}

export type StepType = {
    step :  any
}

export interface IuseMultiForm {
    next : () => void
    prev : () => void
    goTo : (index : number) => void
    isLastStep : boolean
    isFirstStep : boolean
    currentStepIdx : number
    steps :StepType []
    step: StepType
}


export interface MultiFormContextType {
    handleSubmit: UseFormHandleSubmit<ImultiForm , undefined>;
    register: UseFormRegister<ImultiForm>;
    errors: FieldErrors<ImultiForm>;
}