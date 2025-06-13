"use client"

import { useState } from "react"
import { questionsData } from "../data/questionsData"

export const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    
    const currentQuestion = questionsData[currentQuestionIndex];

    const handleCheckButton = (index: number, itemAnswer: number) => {
        if (selectedOption === null) 
            setSelectedOption(index);
        
        setTimeout(() => {
            setSelectedOption(null);
            setCurrentQuestionIndex((prev) => prev+1);
        }, 2000)

    }

    return (
        <div className="text-black">
            {currentQuestion ? (
                <div key={currentQuestion.id} className="flex flex-col">
                <h1 className="font-bold text-2xl mb-8 pl-4">{currentQuestion.id}. {currentQuestion.title}</h1>
                
                {currentQuestion.options.map((alt, index) => (
                    <button 
                        key={index}
                        onClick={() => handleCheckButton(index, currentQuestion.answer)}
                        className={`b-4 ml-3 pl-3 mb-4 flex border border-gray-300 rounded mr-3 bg-blue-200 
                            ${selectedOption !== null ? "cursor-auto" : "cursor-pointer hover:opacity-60"} 
                            ${selectedOption !== null && selectedOption === currentQuestion.answer && selectedOption === index && "bg-green-300"}
                            ${selectedOption !== null && selectedOption !== currentQuestion.answer && selectedOption === index && "bg-red-200"}`}
                    >
                        {alt}
                    </button>
                ))}
            </div>
        ) : (
            <h2 className="text-xl font-bold">Quiz finalizado</h2>
        )}
     </div>
    )
}
