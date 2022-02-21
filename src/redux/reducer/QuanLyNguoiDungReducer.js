import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_KY_ACTION, DANG_NHAP_ACTION, LOG_OUT, SET_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType"

let user = {}
let logginState
if (localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
    logginState = true
}



const stateDefault = {
    userLogin: user,
    isLoggin: logginState,

    thongTinNguoiDung:{}
}


export const QuanLyNguoiDungReducer = (state = stateDefault,action) =>{
    switch (action.type) {
        case DANG_NHAP_ACTION:
            const {thongTinDangNhap} = action;
            state.isLoggin = true;

            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            
            return {...state,userLogin:thongTinDangNhap}

        case DANG_KY_ACTION:
            console.log('đăng ký thành công!')
            return {...state}

        case LOG_OUT:
            state.isLoggin = action.isLoggin
            state.userLogin = {}

            localStorage.setItem(USER_LOGIN,'');
            localStorage.setItem(TOKEN,'');
            
            return{...state}

        case SET_THONG_TIN_NGUOI_DUNG:
            state.thongTinNguoiDung = action.thongTinNguoiDung

            return {...state}

    
        default:
            return {...state}
    }
}