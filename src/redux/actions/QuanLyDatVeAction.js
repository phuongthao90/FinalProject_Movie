// import { connection } from "../..";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";


export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
                // console.log('danh sach ghe:', result.data.content)
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const datVeAction = ( thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {

            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            // console.log('datVe:', result)

            //Khi đặt vé thành công thì gọi api load lại phòng vé 
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:DAT_VE_HOAN_TAT})

            //sau khi load lại phòng vé thì tắt màn hình chờ loading
            await dispatch(hideLoadingAction)

            //chuyển qua tab kết quả đặt vé
            dispatch({
                type: CHUYEN_TAB,
                tabChange: '2'
            })

        } catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error.response?.data)
        }
    }
}

export const datGheAction = (ghe,maLichChieu) =>{

    
    return async (dispatch,getState) =>{
        //dua thong tin len reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        })
        
        // //call api ve backend
        // let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat
        // console.log('danhSachGheDangDatApi: ',danhSachGheDangDat)
        // let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan
        // console.log('taiKhoan: ',taiKhoan)
        


        // //chuyen ve string { yeu cau tu backend}
        // danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)
        // // call api signalR
        // connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu)
        


    }

    
}