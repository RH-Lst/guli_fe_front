import request from '@/utils/request'
export default {
    //根据手机号码发送短信
    getCode(mobile) {
    return request({
    url: `/edumsm/msm/sendmsg/${mobile}`,
    method: 'get'
     })
     },
    //用户注册
    submitRegister(formItem) {
    return request({
    url: `/educenter/member/register`,
    method: 'post',
    data: formItem
     })
     }
    }