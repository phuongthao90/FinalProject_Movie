
import {http} from '../util/settings/config'
import axios from "axios";
import { GROUPID } from '../util/settings/config';

export class QuanLyRapService{
    constructor(){

    }

    layDanhSachBanerHeThongRap = () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) =>{
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    
}

export const quanLyRapService = new QuanLyRapService