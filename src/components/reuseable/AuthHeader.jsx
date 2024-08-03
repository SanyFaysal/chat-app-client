import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthHeader() {
    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl mb-3 '>চেটের এপ্লিকেশন </h1>
            <div className='flex justify-center items-center gap-x-5'>
                <Link to={'/login'} className=''>Login</Link>
                <Link to={'/register'} className=''>Register</Link>
            </div>
        </div>
    )
}
