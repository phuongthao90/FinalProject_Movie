import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction,datGheAction } from '../../redux/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'
import './Checkout.css'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { CHUYEN_TAB, DAT_VE } from '../../redux/actions/types/QuanLyDatVeType'
import _ from 'lodash';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import moment from 'moment'
import { connection } from '../../index'



function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe
    const dispatch = useDispatch()
    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)

        //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
        // connection.on('datVeThanhCong', () => {
        //     dispatch(action);
        // })

        //Vừa vào trang load tất cả ghế của các người khác đang đặt
        // connection.invoke('loadDanhSachGhe', props.match.params.id);

        //Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)


        // connection.on("loadDanhSachGheDaDat", (danhSachGheKhachDat) => {
        //     console.log('danhSachGheKhachDat', danhSachGheKhachDat);
        //     // //Bước 1: Loại mình ra khỏi danh sách 
        //     danhSachGheKhachDat = danhSachGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan);
        //     //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung 

        //     let arrGheKhachDat = danhSachGheKhachDat.reduce((result, item, index) => {
        //         let arrGhe = JSON.parse(item.danhSachGhe);

        //         return [...result, ...arrGhe];
        //     }, []);

        //     //Đưa dữ liệu ghế khách đặt cập nhật redux
        //     arrGheKhachDat = _.uniqBy(arrGheKhachDat, 'maGhe');
            
        //     //Đưa dữ liệu ghế khách đặt về redux
        //     // dispatch({
        //     //     type: 'DAT_GHE',
        //     //     arrGheKhachDat
        //     // })
        // })

    }, []);



    const renderGhe = () => {
        console.log("danhSachGhe: ", danhSachGhe)
        return danhSachGhe.map((ghe, index) => {
            // ghe Vip
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';

            //ghe đã đặt
            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';

            //ghế đang đặt
            let checkGhe = danhSachGheDangDat.findIndex((gheDangDat) =>
                gheDangDat.maGhe === ghe.maGhe
            )
            let classGheDangDat = checkGhe !== -1 ? 'gheDangDat' : ''

            //ghế khách đặt
            let checkGheKhachDat = danhSachGheKhachDat.findIndex((gheKD) =>
                gheKD.maGhe === ghe.maGhe
            )
            let classGheKhachDat = checkGheKhachDat !== -1 ? 'gheKhachDat' : ''

            //ghế mình đặt
            let classGheMinhDat = userLogin.taiKhoan === ghe.taiKhoanNguoiDat ? 'gheMinhDat' : ''

            return <Fragment key={index}>
                <button onClick={() => {
                    
                    const action = datGheAction(ghe,props.match.params.id)
                    
                    dispatch(action)

                }} disabled={ghe.daDat || classGheKhachDat !== ''} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheKhachDat} ${classGheMinhDat} text-center `}>
                    {ghe.daDat ? classGheMinhDat != '' ? <CheckOutlined className='pb-1 font-bold' /> : <CloseOutlined className='pb-1 font-bold' /> : classGheKhachDat !== '' ? <CloseOutlined className='pb-1 font-bold' /> : ghe.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    };


    return (
        <div className='mt-5'>
            <div className='grid grid-cols-12 '>
                {/* xem ghe */}
                <div className='col-span-9'>

                    <div className='flex flex-col items-center mt-5'>
                        {/* Man Hinh */}
                        <p className='mb-0 text-yellow-700 text-2xl'>Màn Hình</p>
                        <div className={`${style['manHinh']} bg-black w-full text-white`}>
                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                        </div>
                        {/* Chon Ghe */}
                        <div>
                            {renderGhe()}
                        </div>
                    </div>

                    <div className='mt-5 flex justify-center'>
                        <table className="divide-y divide-gray-200 w-2/3 ">
                            <thead className="bg-gray-50 p-5">
                                <tr>
                                    <th>Ghế thường</th>
                                    <th>Ghế Vip</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế khách đang đặt</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế bạn đã đặt</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className='text-center'>
                                    <td > <button className='ghe text-center'>00</button> </td>
                                    <td> <button className='ghe gheVip text-center'>00</button> </td>
                                    <td> <button className='ghe gheDangDat text-center'>00</button> </td>
                                    <td> <button className='ghe gheKhachDat text-center'><CloseOutlined className='pb-1 font-bold' /></button> </td>
                                    <td> <button className='ghe gheDaDat text-center'><CloseOutlined className='pb-1  font-bold' /></button> <button className='ghe gheVip gheDaDat text-center'><CloseOutlined className='pb-1  font-bold' /></button> </td>
                                    <td> <button className='ghe gheMinhDat text-center'><CheckOutlined className='pb-1 font-bold' /></button> </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>

                {/* dat ve */}
                <div className='col-span-3 flex flex-col justify-between'>
                    <div className=''>
                        <h3 className='text-center text-green-300 text-3xl my-5'> 0d</h3>
                        <hr />
                        <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
                        <div className='flex justify-between'>
                            <p>Địa điểm: </p>
                            <p>{thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Ngày Chiếu:  </p>
                            <p>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                        </div>

                        <hr />
                        <div className='flex my-5'>
                            <div className='w-4/5'>
                                <span className='text-red-400 '>Ghế: </span>
                                {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                    return <span key={index} className='text-green-500'>{gheDD.stt} </span>
                                }
                                )}
                            </div>
                            <div className='text-right '>
                                <span className='text-green-800 text-lg'>

                                    {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                        return tongTien += ghe.giaVe;
                                    }, 0).toLocaleString()}
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className='my-5 flex justify-between'>
                            <i>Email: </i>
                            {userLogin.email}
                        </div>
                        <hr />
                        <div className='my-5 flex justify-between'>
                            <i>Phone: </i>
                            {userLogin.soDT}
                        </div>
                    </div>

                    <hr />
                    <div className="mb-0 text-center">
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat

                            console.log(thongTinDatVe)

                            //đặt vé, lưu dữ liệu về database, chuyển qua tab kết quả đặt vé
                            dispatch(datVeAction(thongTinDatVe))

                        }} className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl my-3 cursor-pointer'>
                            ĐẶT VÉ
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

function KetQuaDatVe(props) {

    const dispatch = useDispatch()
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    useEffect(() => {
        const action = layThongTinNguoiDungAction()
        dispatch(action)
        console.log('thongTinNguoiDung: ', thongTinNguoiDung)
    }, []);



    const renderDatVe = function () {
        console.log('thong tin nguoi dung: ', thongTinNguoiDung)
        return thongTinNguoiDung.thongTinDatVe?.map((item, index) => {

            const seats = _.first(item.danhSachGhe)

            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{item.tenPhim}</h2>
                        <h3>Mã vé: {item.maVe}</h3>
                        <p className="text-gray-500">Giờ Đặt: {moment(item.ngayDat).format('hh:mm A')} - Ngày Đặt: {moment(item.ngayDat).format('DD-MM-YYYY')}</p>
                        <p>Địa điểm: {seats.tenHeThongRap}</p>
                        <p>{seats.tenCumRap} - Ghế: {item.danhSachGhe.map((ghe, index) => {
                            return <span key={index}> [{ghe.tenGhe}] </span>
                        })} </p>
                        {console.log('ds ghe dat: ', item.danhSachGhe)}
                    </div>

                </div>
            </div>
        })
    }

    return <div className='p-5'>
        <h3>Kết quả đặt vé</h3>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-900 ">Lịch sử đặt vé</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Chúc bạn xem phim vui vẻ</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderDatVe()}

                </div>
            </div>
        </section>
    </div>
}



const { TabPane } = Tabs;



export default function (props) {

    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch()

    return <div className='p-5'>
        <Tabs defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: CHUYEN_TAB,
                tabChange: key
            })
        }}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </div>
}


