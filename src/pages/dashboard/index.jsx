import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, rejectUp, machine } from '../../store/actions';


// * Import components
import ButtonAction from "../../components/button-action"

import './style.css'

function start(input, reject) {
    let rng = Math.round(Math.random());
    return rng;
}


function Dashboard() {
    // const value = useSelector((state) => state.input)
    // const reject = useSelector((state) => state.reject)
    // const dispatch = useDispatch()
    let [input, setInput] = useState(0);
    let [reject, setReject] = useState(0);
    let [time, setTime] = useState();



    return (
        <div className="dashboard bg-gray-200 mx-auto w-screen h-screen px-4/12 flex flex-col justify-center items-center">
            <div className="flex">
                <div className="mt-12 mx-3 flex flex-col">
                    <ButtonAction
                        onClick={() => setInput(input + 1)}
                    >Input UP</ButtonAction>
                    <ButtonAction
                        onClick={() => setReject(reject + 1)}
                    >Reject UP</ButtonAction>
                </div>

                <table className="bg-gray-100 border-separate border border-slate-500 w-1/5">
                    <thead>
                        <tr>
                            <th colSpan={3} className="border border-slate-600">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left">
                            <td className="border border-slate-700 text-left font-bold">Input</td>
                            <td className="border border-slate-700 text-right">{input}</td>
                            <td className="border border-slate-700 text-right">{Math.floor(input/(input+reject) * 100)}%</td>
                        </tr>
                        <tr className="text-right">
                            <td className="border border-slate-700 text-left font-bold">Reject</td>
                            <td className="border border-slate-700 text-right">{reject}</td>
                            <td className="border border-slate-700 text-right">{Math.floor(reject/(input+reject) * 100)}%</td>
                        </tr>
                        <tr className="text-right">
                            <td className="border border-slate-700 text-left font-bold">Output</td>
                            <td className="border border-slate-700 text-right">{input+reject}</td>
                            <td className="border border-slate-700 text-right">98.41%</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-12 mx-3 flex flex-col">
                    <ButtonAction
                        onClick={() => {
                            let timer = setInterval(() => {
                                let rng = Math.round(Math.random());
                                if (rng) {
                                    setInput(input => input + 1)
                                } else {
                                    setReject(reject => reject + 1)
                                }
                            }, 1000)
                            setTime(timer);
                        }}
                    >Start Machine</ButtonAction>
                    <ButtonAction
                        injectClass="bg-red-500 hover:bg-red-700"
                        onClick={() => {
                            clearInterval(time)
                        }}
                    >Stop Machine</ButtonAction>
                </div>
            </div>
            <span 
                className="mt-4 text-blue-500 hover:text-blue-900 font-bold cursor-pointer"
                onClick={() => {
                    clearInterval(time)
                    setInput(0)
                    setReject(0)
                }}
            >
                Reset
            </span>
        </div>
    )
};


export default Dashboard;