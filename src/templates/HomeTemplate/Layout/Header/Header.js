import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { LOG_OUT } from '../../../../redux/actions/types/QuanLyNguoiDungType'

export default function Header() {

    const dispatch = useDispatch()
    const { isLoggin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const renderLoggin = () => {
        if (isLoggin) return <>
            <button className=" px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-coolGray-900  "><UserOutlined /></button>
            <button onClick={() => {
                history.push('/register')
            }} type="button" className=" px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-coolGray-900 ">Sign up</button>
            <button className='px-6 py-2 ml-10 font-semibold rounded lg:block dark:bg-violet-400 dark:text-coolGray-900 ' onClick={() => {
                dispatch({
                    type:LOG_OUT,
                    isLoggin: false,
                })
            }}>Log out</button>
        </>
        return <><button onClick={() => {
            history.push('/login')
        }} type="button" className=" px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-coolGray-900 ">Log in</button><button onClick={() => {
            history.push('/register')
        }} type="button" className=" px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-coolGray-900 ">Sign in</button></>
    }

    return (
        <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-50 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to='/' href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />

                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400 text-white" activeClassName="border-b-2 border-white">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" href className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName="border-b-2 border-white">News</NavLink>
                    </li>
                </ul>
                <div className="flex  items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-coolGray-100">
                                    <path d="" />
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-coolGray-800 dark:text-coolGray-100 focus:dark:bg-coolGray-900" />
                    </div>

                    {renderLoggin()}

                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
