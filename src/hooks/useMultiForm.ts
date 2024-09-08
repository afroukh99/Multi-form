import { ReactElement, useState } from "preact/compat";
import { IuseMultiForm } from "../types/types";




export const useMultiForm = (steps: any[] ): IuseMultiForm => {

    const [currentStepIdx, setCurrentStepIdx] = useState<number>(0)

    function next() {
        setCurrentStepIdx(
            index => {
                if (index >= steps.length - 1) {
                    return index
                } else {
                    return index + 1
                }
            }
        )
    }

    function prev() {
        setCurrentStepIdx(
            index => {
                if (index <= 0) {
                    return index
                } else {
                    return index - 1
                }
            }
        )
    }


    function goTo(index: number) {
        setCurrentStepIdx(index)
    }


    return {
        next,
        prev,
        goTo,
        step: steps[currentStepIdx],
        steps,
        isLastStep: currentStepIdx === steps.length - 1,
        isFirstStep: currentStepIdx === 0,
        currentStepIdx
    }


}