import request from '@/utils/request'
export default {
    getPageList(page, limit, searchObj) {
        return request({
        url: `/eduservice/courseF/${page}/${limit}`,
        method: 'post',
        data: searchObj
        })
    },

    // 获取课程二级分类
    getNestedTreeList2() {
    return request({
    url: `/eduservice/subject/getAllsubject`,
    method: 'get'
     })
     },

     //获取课程详情
     getCourseDetilsInfo(id){
        return request({
            url: `eduservice/courseF/getCourseDetilsInfo/${id}`,
            method: 'get'
             })
     }

}