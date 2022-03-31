import request from '@/utils/request'
export default {
    getindexList() {
        return request({
        url: `/eduservice/index/index`,
        method: 'get'
        })
    }
}