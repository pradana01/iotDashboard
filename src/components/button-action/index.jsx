import React from "react";


export default function ButtonAction({ children, onClick, injectClass = "" }) {
    return (
        <div ocClick={onClick}>
            <button class={"w-36 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " + injectClass}>
                {children}
            </button>
        </div>
    )
}