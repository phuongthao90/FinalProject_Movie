
import {http} from '../util/settings/config'
import axios from "axios";
import { GROUPID } from '../util/settings/config';

export class QuanLyNguoiDungService{
    constructor(){
    }

    dangNhap = (thongTinDangNhap) => { //taiKhoan, matKhau
        return http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    dangKy = (thongTinDangKy) =>{ //taiKhoan,matKhau,hoTen,email,soDt,maNhom
        return http.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
    
    layThongTinNguoiDung = () =>{
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()