import { Fragment } from "react";
import { Route, Router } from "react-router-dom";



export const UserTemplate = (props) => { //path,exact,Component
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        //props.location, props.hítory,props.match

        return <Fragment className="grid">

            <header className="bg-cover border-t-2 border-gray-600 h-full" style={{ backgroundImage: 'url("https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg")' }}>
            <div className="content px-8 py-2 h-full">
            <div className="body  mx-8">
                <div className="md:flex items-baseline">
                    <div className="w-full ml-36 " style={{ textShadow: '0 20px 50px hsla(0,0%,0%,8)' }}>
                        <h1 className="text-4xl font-bold text-white tracking-wide">CyberSoft</h1>
                        <br />
                        <h2 className=" text-2xl font-bold text-white tracking-wide">Welcome <span className="text-gray-800"> Movie Project</span></h2>
                        <p className="text-gray-300">
                            This is a project Movie
                        </p>
                        <span className="text-white">Create New Account?<a href="#" className="text-gray-900 text-lg ml-2 font-bold">Sign Up</a></span>
                    </div>
                    <Component {...propsRoute} />
                </div>
            </div>
        </div>
                
            </header>
        </Fragment>
    }} />



}