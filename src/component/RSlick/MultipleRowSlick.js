import React, { useEffect } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from './MultipleRowSlick.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    />
  );
}






const MultipleRowSlick = (props) => {

  const dispatch = useDispatch()
  const {dangChieu,sapChieu} = useSelector(state => state.QuanLyPhimReducer)

  // useEffect(() => {
  // }, [])

  let activeClassDC = dangChieu === true ? 'active_Film' : 'unactive_Film';
  let activeClassSC = sapChieu === true ? 'active_Film' : 'unactive_Film';

  // const {arrFilm} = props

  const renderFilms = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return <div key={index}>
        {/* <Film film={item} /> */}
        <Film_Flip item={item} />
      </div>
    })
  }


  const settings = {
    dots: true,
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="">
      <div className="my-1">
        <button className={` ${styleSlick[activeClassDC]} mr-2 font-bold py-2 px-4 rounded `} onClick={() => {
          console.log('Now Showing')
          const action = { type: SET_PHIM_DANG_CHIEU }
          dispatch(action)
        }}>Phim đang chiếu</button>
        <button className={` ${styleSlick[activeClassSC]} mr-2 font-bold py-2 px-4 rounded `} onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU }
          dispatch(action)
        }}>Phim sắp chiếu</button>
      </div>
      <Slider {...settings}>
        {renderFilms()}
      </Slider>
    </div>
  );
}

export default MultipleRowSlick ;
