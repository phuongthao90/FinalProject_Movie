import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../actions/types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType"


const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1506,
            "tenPhim": "Southpaww 696",
            "biDanh": "southpaww-696",
            "trailer": "https://www.youtube.com/embed/Mh2ebPxhoLs",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
            "moTa": "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
            "maNhom": "GP13",
            "ngayKhoiChieu": "2021-08-21T00:00:00",
            "danhGia": 8,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1506,
            "tenPhim": "Southpaww 696",
            "biDanh": "southpaww-696",
            "trailer": "https://www.youtube.com/embed/Mh2ebPxhoLs",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
            "moTa": "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
            "maNhom": "GP13",
            "ngayKhoiChieu": "2021-08-21T00:00:00",
            "danhGia": 8,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
    ],
    dangChieu: 'true',
    sapChieu: 'true',
    arrFilmDefault: [],
    filmDetail : {}

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM:{
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = action.arrFilm
            return {...state}
        }
        case SET_PHIM_DANG_CHIEU:{
            state.sapChieu = false;
            state.dangChieu = true;
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)
            // console.log('nowShowing: ', state.arrFilm)
            return {...state}
        }
        case SET_PHIM_SAP_CHIEU:{
            state.dangChieu = false;
            state.sapChieu = true;
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
            // console.log('upcomingShow: ', state.arrFilm)
            return {...state}
        }
        case SET_CHI_TIET_PHIM:{
            state.filmDetail = action.filmDetail;
            console.log('chi tiet phim',state.filmDetail)
            return {...state}
        }

        default:
            return { ...state }
    }
}