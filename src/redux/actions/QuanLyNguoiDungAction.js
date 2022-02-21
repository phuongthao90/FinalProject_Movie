import { history } from "../../App"
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType"


export const dangNhapAction = (thongTinDangNhap) =>{


    return async (dispatch) =>{

        try {

            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if(result.data.statusCode === 200){
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
            history.goBack() //Chuyển hướng về trang trước đó

        } catch (error) {
            console.log('error:', error)
        }
    }
}

export const dangKyAction = (thongTinDangKy) =>{


    return async (dispatch) =>{

        try {

            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)

            if(result.data.statusCode === 200){
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content
                })
            }
            history.goBack() //Chuyển hướng về trang trước đó

        } catch (error) {
            console.log('error:', error)
        }
    }
}

export const layThongTinNguoiDungAction = () =>{


    return async (dispatch) =>{

        try {

            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
            console.log('try thong tin nguoi dung: ',result)

            if(result.data.statusCode === 200){
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }

        } catch (error) {
            console.log('error:', error)
        }
    }
}