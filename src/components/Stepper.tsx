import React, { useState } from 'react'



const Stepper = ({currentSTepIdx}: {currentSTepIdx : number}) => {

    const steps = [
        {
            num: 1,
            label: "Information",
        },
        {
            num: 2,
            label: "details",
        }
    ]

    const [active , setActive] = useState(true)

    return (

        <div class="flex items-center justify-evenly">
            {
                steps.map(step => (
                    <div className="flex flex-col items-center">
                        <span key={step.num} class={`p-1 rounded-full border flex items-center justify-center w-8 h-8
                                ${active && currentSTepIdx == step.num - 1 ? "bg-rose-700 text-white border-none" : ""}
                            `}>
                            {step.num}
                        </span>
                        <div className="text-sm">{step.label}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Stepper