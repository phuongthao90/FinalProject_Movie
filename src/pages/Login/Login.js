import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
// import { QuanLyNguoiDungReducer } from '../../redux/reducer/QuanLyNguoiDungReducer';

export default function Login(props) {

    const dispatch = useDispatch()

    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log('userLogin: ',userLogin)

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            console.log('values:', values)

            const action = dangNhapAction(values)
            dispatch(action)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex justify-center min-h-screen w-full ">
                <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                    {/* header */}
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Đăng nhập</h1>
                        <p className="text-gray-500">Đăng nhập bằng tài khoản của bạn</p>
                    </div>
                    {/* sign-in */}
                    <div className="m-6">
                        <div className="mb-4">
                            <div className="mb-6">
                                {/* htmlFor="email" */}
                                <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Tài khoản</label>
                                <input type="text" name="taiKhoan" onChange={formik.handleChange} id="email" placeholder="Tài khoản của bạn" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Mật khẩu</label>
                                    <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Quên mật khẩu?</a>
                                </div>
                                <input type="password" name="matKhau" onChange={formik.handleChange} id="password" placeholder="Mật khẩu của bạn" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button onClick={formik.handleSubmit} type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Đăng nhập</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">
                                Bạn chưa có tài khoản?
                                <NavLink to='/register' href="#!" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Đăng kí tại đây</NavLink>.
                            </p>
                        </div>
                        {/* seperator */}
                        <div className="flex flex-row justify-center mb-8">
                            <span className="absolute bg-white px-4 text-gray-500">hoặc đăng nhập với</span>
                            <div className="w-full bg-gray-200 mt-3 h-px" />
                        </div>
                        {/* alternate sign-in */}
                        <div className="flex flex-row gap-2">
                            <button className="bg-red-800 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-red-900 duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                                Google
                            </button>
                            <button className="bg-blue-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-blue-800 duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" fill="currentColor" /></g></svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </form>



    )
}


