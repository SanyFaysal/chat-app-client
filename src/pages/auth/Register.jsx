import React from 'react'
import AuthHeader from '../../components/reuseable/AuthHeader'

export default function Register() {
    return (
        <div className="w-full">
            <AuthHeader />
            <div className=" pt-10">
                <h1 className="text-2xl text-center ">Welcome Back</h1>
                <h2 className="text-lg text-center ">Plese login to your account </h2>
                <div className="my-auto ">
                    <form action="" className=" w-[25%]  mx-auto">
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" className="block w-full px-3 py-2 rounded border" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Password</label>
                            <input type="password" className="block px-3 py-2 w-full  rounded border" />
                        </div>
                        <div className="mt-5">

                            <input type="button" value={'Login'} className="block hover:cursor-pointer px-3 py-2 w-full  rounded border" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
