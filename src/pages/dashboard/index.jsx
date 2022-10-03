import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {increment, rejectUp, machine} from '../../store/actions';


// * Import components
import ButtonAction from "../../components/button-action"

import './style.css'

function Dashboard() {
    const value = useSelector((state) => state.input)
    const reject = useSelector((state) => state.reject)
    const dispatch = useDispatch()
    // const [input] = useState()

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
                        <td className="border border-slate-700 ...">{value}</td>
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

            <ButtonAction />
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(increment(value))}
            >Input UP</button>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(rejectUp(reject))}
            >Reject UP</button>
            <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => machine(true, 1000, value)}
            >Start Machine</button>
        </div>
    )
};


export default Dashboard;