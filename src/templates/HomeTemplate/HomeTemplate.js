import { Fragment } from "react";
import { Route, Router } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTempate = (props) => { //path,exact,Component
    const {Component,...restProps} = props;

    return <Route {...restProps} render = {(propsRoute) => {
        //props.location, props.hítory,props.match
        return <Fragment>
            <Header {...propsRoute}/>
            
            <Component {...propsRoute} />

            <Footer/>
        </Fragment>
    }} />



}