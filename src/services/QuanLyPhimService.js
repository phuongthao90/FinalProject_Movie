
import {http} from '../util/settings/config'
import axios from "axios";
import { GROUPID } from '../util/settings/config';

export class QuanLyPhimService{
    constructor(){

    }

    layDanhSachBanner = () => {
        return http.get('api/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim = () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    
}

export const quanLyPhimService = new QuanLyPhimService