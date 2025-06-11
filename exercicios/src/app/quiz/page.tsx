import { Quiz } from "../components/Quiz";

export default function quiz () {
    return (
        <div className="bg-blue-500 w-screen min-h-screen flex justify-center items-center">
            <div className="bg-white border w-full max-w-xl aspect-[3/2]">
                <h1 className="font-bold text-xl text-black p-4 border-b">Quiz da NBA</h1>
                <Quiz />
            </div>
        </div>
    )
}