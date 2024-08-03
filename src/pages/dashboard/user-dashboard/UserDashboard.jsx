import React from 'react'
import Conversations from './Conversations'
import Chat from './Chat'
import Suggestion from './Suggestion'

export default function UserDashboard() {
    return (
        <div className='grid grid-cols-4  h-screen gap-5'>
            <div className='col-span-1 bg-gray-100 p-5'>
                <Conversations />
            </div>
            <div className='col-span-2 p-5'>
                <Chat />
            </div>
            <div className='col-span-1 p-5 bg-gray-100'>
                <Suggestion />
            </div>
        </div>
    )
}
