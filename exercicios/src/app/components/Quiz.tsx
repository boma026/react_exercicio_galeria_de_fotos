"use client"

import { useState } from "react"
import { questionsData } from "../data/questionsData"

export const Quiz = () => {
    
    const [checkOption, setCheckedOption] = useState<number>();
    const [isCorrect, setIsCorrect] = useState<boolean>();
    const [buttonClicked, setButtonClicked] = useState<number>();
0
    const handleCheckButton = ( index: number, itemAnswer: number) => {
        setCheckedOption(itemAnswer);
        setButtonClicked(index);
        setIsCorrect(index === itemAnswer);
    }

    
    return (
        <div className="text-black">
            {questionsData.map((item) => {
            return(    

            <div key={item.id} className="flex flex-col" >

                <h1 className="font-bold text-2xl mb-8 pl-4">{item.id}. {item.title}</h1>
                

                {item.options.map((alt, index) =>
                    <button key={index} onClick={() => handleCheckButton(index, item.answer)} className={`cursor-pointer b-4 ml-3 pl-3 mb-4 flex border border-gray-300 rounded mr-3 bg-blue-200 ${
                        index === buttonClicked? (isCorrect? "bg-green-300": "bg-red-400"): "bg-blue-300"}`}>{alt}</button>)}
            
            </div>
            )}
            )}
            
        </div>
    )
}