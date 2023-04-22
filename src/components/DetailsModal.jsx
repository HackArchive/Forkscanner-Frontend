import React from 'react'
import { BiCube } from 'react-icons/bi'
function DetailsModal({ onClose, visible }) {
    if (!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === "container")
            onClose()
    }

    return (
        <div id="container" onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className=" shadow-2xl bg-secondary text-white rounded-3xl w-full h-fit mt-10 mx-80 p-5">
                <div className="flex flex-row text-xl">
                    <BiCube/>
                    <span className='ml-2'>BLOCK</span>
                </div>

                <div className="flex flex-col  p-5 gap-2 divide-y divide-primary ">
                    <span className="py-1">Hash : </span>
                    <span className="py-1">Height :  BTC</span>
                    <span className="py-1">Parent Hash : </span>
                    <span className="py-1">Pool Name : </span>
                    <span className="py-1">Total Fee : </span>
                    <span className="py-1">txids : </span>
                    <span className="py-1">work : </span>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal