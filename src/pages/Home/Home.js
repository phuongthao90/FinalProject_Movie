import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import { QuanLyPhimService } from '../../services/QuanLyPhimService'
import Film from '../../component/Film/Film'
import MultipleRowSlick from '../../component/RSlick/MultipleRowSlick'
import { LayDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachHeThongRapAction as layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'


export default function Home(props) {

    // lay ds phim tu reducer QuanLyPhimReducer
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer) 

    // lay ds he thong rap chieu tu reducer QuanLyRapReducer
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer)



    const dispatch = useDispatch()

    useEffect(() => {
        const action = LayDanhSachPhimAction();
        dispatch(action)

        dispatch(layDanhSachHeThongRapAction())
    }, [])


    return (
        <div>
            <HomeCarousel/>

            {/* ds phim dang chieu - sap chieu */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                        <MultipleRowSlick arrFilm={arrFilm} />
                </div>
            </section>

            {/* ds phim theo he thong rap chieu */}
            <div className="mx-48">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
            
        </div>
    )
}
