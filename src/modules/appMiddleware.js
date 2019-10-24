/// <summary>
/// 程序脚本中间件
/// @author   叶委  
/// @date     2019-10-23         
/// </summary>
export default {
    //初始化回调
    init(callback) {
        //获取当前
        app_middleware.getDeviceInfo(callback)
    },
    print(user_id, order_no, callback) {
        //获取当前
        app_middleware.print(user_id, order_no, callback)
    }
}

