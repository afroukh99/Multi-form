import { FormProvider, useForm } from "react-hook-form"
import FirstForm from "./components/FirstFrom"
import SecondeFrom from "./components/SecondeFrom"
import Stepper from "./components/Stepper"
import { useMultiForm } from "./hooks/useMultiForm"
import toast , {Toaster} from "react-hot-toast"
import "./index.css"


export function App() {
  const { next, prev, step, currentStepIdx, isFirstStep, isLastStep, steps } = useMultiForm([
    <FirstForm />,
    <SecondeFrom />
  ])


  const methods = useForm()
  const onSubmit = (data: any) => console.log(data)
  const errors = methods.formState.errors;




  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-md min-h-60 sm:w-96 w-72 p-4 flex flex-col gap-2 shadow">
        <div className="">
          <Stepper currentSTepIdx={currentStepIdx} />
        </div>
        <FormProvider {...methods}>
          <form action="" class="" onSubmit={methods.handleSubmit(onSubmit)}>
            {step}
            <div className="flex gap-2 justify-end">
              {!isFirstStep && <button type="button" onClick={prev} class="text-sm  text-slate-900 rounded-xl min-w-20 p-1">Prev</button>}
              <button type="submit" onClick={next} class="text-sm bg-pink-800 text-white rounded-xl min-w-20 p-1">{isLastStep ? 'Validate' : 'Next'}</button>
            </div>
          </form>
        </FormProvider>
        <Toaster/>
      </div>
    </div>
  )
}
