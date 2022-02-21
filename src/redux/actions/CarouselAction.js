
import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_CAROUSEL } from "./types/CarouselType"



export const getCarouselAction =  () => {
    return async (dispatch)=>{
        try {
            const result = await quanLyPhimService.layDanhSachBanner()
            dispatch({
                type: SET_CAROUSEL,
                arrImgBanner:result.data.content
            })
        } catch (error) {
            console.log('error:',error )
        }
    }
}