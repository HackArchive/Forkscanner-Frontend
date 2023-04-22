import React from 'react'
import { BiCube } from 'react-icons/bi'
function DetailsModal({ onClose, visible, props }) {
    if (!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === "container")
            onClose()
    }
    const info = props
    return (
        <div id="container" onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="shadow-2xl bg-secondary text-white rounded-3xl w-fit h-fit mx-5 lg:mt-10 lg:mx-80 p-5">
                <div className="flex flex-row text-xl">
                    <BiCube/>
                    <span className='ml-2'>BLOCK {info.height}</span>
                </div>

                <div className="flex break-all flex-col p-1 lg:p-5 gap-4 divide-primary">
                    <span className="py-1">Hash : {info.hash}</span>
                    <span className="py-1">Height : {info.height}</span>
                    <span className="py-1">Parent Hash : {info.parent_hash}</span>
                    <span className="py-1">Pool Name : {info.pool_name}</span>
                    <span className="py-1">Total Fee : {info.total_fee}</span>
                    <span className="py-1">txids : {info.hash}</span>
                    <span className="py-1">work : {info.work}</span>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal