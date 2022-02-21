
import { http } from '../util/settings/config'
import axios from "axios";
import { GROUPID } from '../util/settings/config';
import { ThongTinDatVe } from '../_core/models/ThongTinDatVe';

export class QuanLyDatVeService {
    constructor() {
    }

    layChiTietPhongVe = (maLichChieu) => { //lấy từ url
        return http.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, maLichChieu)
    }

    datVe = (thongTinDatVe = new ThongTinDatVe) => { 

        return http.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe)

    }

}

export const quanLyDatVeService = new QuanLyDatVeService()