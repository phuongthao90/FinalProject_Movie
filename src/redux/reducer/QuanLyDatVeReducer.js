import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { CHUYEN_TAB, CHUYEN_TAB_2, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE, CHUYEN_TAB_1 } from "../actions/types/QuanLyDatVeType";


const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat:[],
    tabActive: '1',
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE:
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };

        case DAT_VE:
            //cập nhật ds ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            // console.log('ghe duoc chon: ',action)
            //tìm ghế vừa click ở trong danh sách ghế đã đặt trước đó
            let index = danhSachGheCapNhat.findIndex((gheDangDat) =>
                gheDangDat.maGhe === action.gheDuocChon.maGhe
            )

            if (index != -1) {//Tìm được ghế nghĩa là đã đặt rồi => xoá đi
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat };

        case DAT_VE_HOAN_TAT:
            state.danhSachGheDangDat = []
            return { ...state }

        case CHUYEN_TAB:
            state.tabActive = action.tabChange
            return { ...state }

        default:
            return { ...state };
    }
}