/// <summary>
/// 程序脚本中间件
/// @author   叶委  
/// @date     2019-10-23         
/// </summary>
import app_g from '@/modules/appGlobal'

export default {
    devInfo: '{ "Basis": { "State": 200, "Sign": "", "Msg": "操作成功" }, "Result": { "network_card": "00:1C:42:6F:BF:86","product":"browser","store_id":1 } }',
    //POS设备初始化
    init(callback) {
        try {
            if (app_middleware != undefined) {
                app_middleware.getDeviceInfo(callback)
            }
        } catch (ex) {
            callback(this.devInfo)
        }
    },
    //调用打印
    print(store_id, user_id, order_no, callback) {
        try {
            if (app_middleware != undefined) {
                app_middleware.print(store_id, user_id, order_no, callback)
            }
        } catch (ex) {
            callback(this.devInfo)
        }
    }
}

