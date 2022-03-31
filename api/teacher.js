import request from '@/utils/request'
export default {
    getPageList(page, limit) { 
    return request({
    url: `eduservice/teacherF/getTeacherByPageInFront/${limit}/${page}`,
    method: 'get'
    })
    },

    getTeacherCourse(id){ 
        return request({
        url: `eduservice/teacherF/getTeacherCourse/${id}`,
        method: 'get'
        })
        },
}