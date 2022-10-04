import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {increment, rejectUp, machine} from '../../store/actions';


// * Import components
import ButtonAction from "../../components/button-action"

import './style.css'

function start (input, reject) {
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
        <div className="dashboard">

            <table className="border-separate border border-slate-500 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-600 ...">State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 ...">Input</td>
                        <td className="border border-slate-700 ...">{input}</td>
                        <td className="border border-slate-700 ...">61.93%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 ...">Reject</td>
                        <td className="border border-slate-700 ...">{reject}</td>
                        <td className="border border-slate-700 ...">1.59%</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 ...">Output</td>
                        <td className="border border-slate-700 ...">4,259</td>
                        <td className="border border-slate-700 ...">98.41%</td>
                    </tr>
                </tbody>
            </table>

            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setInput(input+1)}
            >Input UP</button>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setReject(reject+1)}
            >Reject UP</button>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    let timer = setInterval (()=> {
                        let rng = Math.round(Math.random());
                        if (rng) {
                            setInput(input => input+1)
                        } else {
                            setReject(reject => reject+1)
                        }
                    }, 1000)
                    setTime(timer);
                }}
            >Start Machine</button>
            <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    clearInterval(time)
                }}
            >
                Stop Machine
            </button>
        </div>
    )
};


export default Dashboard;