import React,{useEffect} from 'react'
import { Carousel } from 'antd';
import { useSelector,useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css'





export default function HomeCarousel(props) {

    const {arrImgBanner} = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarouselAction())
    }, [])

    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        
    };

    const renderImg = () => {
        return arrImgBanner.map((item, index) => {
            return <div key={index}>
                <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh} className='w-full opacity-0'  alt={item.maBanner} />
                </div>
            </div>
        })
    }


    return (
        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}}>
            {renderImg()}
        </Carousel>
    )
}
