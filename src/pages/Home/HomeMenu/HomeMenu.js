import React, { Fragment, useEffect, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { layDanhSachHeThongRapAction } from '../../../redux/actions/QuanLyRapAction';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

function HomeMenu(props) {

    // Lấy mảng heThongRapChieu ra từ props truyền xuống từ Home.js
    const { heThongRapChieu } = props


    const [state, setstate] = useState({
        tabPosition: 'left'
    })
    const dispatch = useDispatch()

    const changeTabPosition = e => {
        setstate({ tabPosition: e.target.value });
    };

    useEffect(() => {
        const action = layDanhSachHeThongRapAction()
        dispatch(action)

    }, [])

    const renderHeThongRap = () => {
        return heThongRapChieu.map((heThongRap, index) => {
            // Load hệ thống rạp
            return <TabPane tab={
                <img src={heThongRap.logo} className='rounded-full w-10' />
            } key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap.map((cumRap, index) => {
                        //load cụm rạp
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }}>
                                <img src={cumRap.hinhAnh} width='50' /><br />
                                <div className='text-left ml-2'>
                                    {cumRap.tenCumRap}
                                    <p className='text-red-200 '>Chi tiết</p>
                                </div>
                            </div>
                        } key={index}>
                            {/* load phim */}
                            {cumRap.danhSachPhim.slice(0,5).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='mt-6' style={{ display: 'flex' }} >
                                        <div style={{ display: 'flex' }}>
                                            <img src={phim.hinhAnh} style={{ width: '100px', height: '120px' }} alt={phim.tenPhim}
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src="http://picsum.photos/75/75";
                                              }} />
                                            <div className='ml-2'>
                                                <h1 className='text-2xl text-green-500'>{phim.tenPhim}</h1>
                                                <p>{cumRap.diaChi}</p>
                                                <div className='grid grid-cols-6 gap-6'>
                                                    {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu, index) => {
                                                        return <NavLink className='text-2xl text-yellow-600' to='/' key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }
    const { tabPosition } = state;
    return (
        <>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>
        </>
    )
}

export default HomeMenu
