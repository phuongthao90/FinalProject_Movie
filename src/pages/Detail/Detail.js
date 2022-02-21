import React, { useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/Styles/circle.css'
import { Tabs, Radio, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Rate } from 'antd';

import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import { NavLink } from 'react-router-dom';



const { TabPane } = Tabs;

export default function Detail(props) {


    const dispatch = useDispatch()

    useEffect(() => {
        // lay thong tin tu url
        let { id } = props.match.params;
        // console.log('id:',id)    

        dispatch(layThongTinChiTietPhim(id))

    }, [])
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
    console.log('chi tiet phim: ',filmDetail)


    return (

        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: '100vh', backgroundSize: '100%', backgroundPosition: 'center' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 col-start-3'>
                        <div className="grid grid-cols-2">
                            <img src={filmDetail.hinhAnh} style={{ width: '100%', height: '400px' }} alt="123" />
                            <div className='ml-5' style={{ marginTop: '15%' }}>
                                <p className='text-sm'>Ngày khởi chiếu: {moment(filmDetail.ngayKhoiChieu).format('dd.mm.yyyy')}</p>
                                <p className='text-3xl leading-4'>{filmDetail.tenPhim}</p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    {/* rating */}
                    <div className='ml-10 col-span-3 col-start-9'>
                        <h1 style={{ marginLeft: '12%' }} className='text-green-500 text-2xl' ><Rate allowHalf value={filmDetail.danhGia / 2} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} dark big green`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>


                </div>

                {/* Tab chứa : Lịch Chiếu, Thông tin, Đánh giá */}
                <div className='mt-12 container w-3/4 mx-56'>
                    <Tabs className='bg-white  ml-72' defaultActiveKey="1" centered>

                        {/* Lịch chiếu */}
                        <TabPane tab="Lịch chiếu" key="1">
                            <div className="">
                                <Tabs tabPosition={'left'}>
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div>
                                                <img src={htr.logo} width={50} className='rounded-full' alt={htr.tenHeThongRap} />
                                            </div>}
                                            key={index}>

                                            {/* Nội dung lịch chiếu */}
                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                return <div key={index} className='mt-5'>
                                                    <div className='flex flex-row '>
                                                        <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt={cumRap.maCumRap} />
                                                        <div className='ml-2'>
                                                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0px' }}>
                                                                {cumRap.tenCumRap}
                                                            </p>
                                                            <p className='mt-0 text-gray-300'>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>

                                                    {/* Giờ chiếu */}
                                                    <div className='thong-tin-lich-chieu grid grid-cols-5'>
                                                        {cumRap.lichChieuPhim?.slice(0,10).map((lichChieu,index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1 text-yellow-400 font-bold'>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                            
                                                        })}
                                                    </div>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>

                        {/* Thông tin */}
                        <TabPane tab="Thông tin" key="2">
                            <div className='flex justify-between'>
                                <h1 className=' text-3xl text-yellow-600 pl-10'>{filmDetail.biDanh}</h1>
                                {filmDetail.hot === true ? <span className='text-red-700  w-32'>HOT</span> : ''}
                            </div>
                            <div>
                                <p className='w-3/4 px-10'>{filmDetail.moTa}</p>
                            </div>
                        </TabPane>

                        {/* Đánh giá */}
                        <TabPane tab="Đánh giá" key="3">
                            <h1 className='m-5'>Chưa có đánh giá</h1>
                        </TabPane>
                    </Tabs>
                </div>



            </CustomCard>

        </div>

    )
}

