"use client"

import { useState } from "react"
import { questionsData } from "../data/questionsData"

export const Quiz = () => {
    
    const [checkOption, setScheckOption] = useState(false);

    const handleCheckButton = (answer: boolean) => {}

    
    return (
        <div className="text-black">
            {questionsData.map((item) => {
            return(    
            <div key={item.id} >
                <h1 className="font-bold text-2xl mb-8 pl-4">{item.id}. {item.title}</h1>
                {item.options.map((option, index) =>
                    <button key={index} className="mb-4 ml-3 pl-3 border border-gray-300 rounded mr-3 bg-blue-200" onClick={() => handleCheckButton(option.answer)}>{option.text}</button>)}
            </div>
            )}
            )}
            
        </div>
    )
}