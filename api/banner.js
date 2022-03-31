import request from '@/utils/request'
export default {
    getAllBanner() {
    return request({
    url: `/educms/Userbanner/getAllBanner`,
    method: 'get'
    })
    }
}