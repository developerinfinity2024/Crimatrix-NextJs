import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full w-full fixed inset-0'>
            <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-blue-600" />
        </div>
    )
}

export default Loading