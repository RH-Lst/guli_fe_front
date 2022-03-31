import request from '@/utils/request'
export default {
    //1、创建订单
        createOrder(cid) {
        return request({
        url: '/eduorder/torder/createOrder/'+cid,
        method: 'post'
     })
     },
    //2、根据id获取订单
    getById(id) {
        return request({
        url: '/eduorder/torder/getOrder/'+id,
        method: 'get'
        })
     },
     //3、生成微信支付二维码
    createNative(id) {
    return request({
    url: '/eduorder/tpaylog/createNative/'+id,
    method: 'get'
     })
     },
     //4、根据id获取订单支付状态
    queryPayStatus(id) {
    return request({
    url: '/eduorder/tpaylog/queryPayStatus/'+id,
    method: 'get'
     })
     },
     //判断是否购买课程
     isBuyCheck(Ids){
        return request({
            url: '/eduorder/torder/isBuyCheck',
            method: 'post',
            data: Ids
             })
     }
}