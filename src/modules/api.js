import appG from './appGlobal'
import user from './userInfo'
import router from './router'
import md5 from './md5'

//接口域名  
let domain = "http://api.shidian.com/"
let res_domain = "http://res.shidian.com/"
//测试环境配置
if (process.env.NODE_ENV !== 'production') {
    domain = "/api/"
    res_domain = "/res/"
}

/// <summary>
/// 全局配置类
/// @author   叶委  
/// @date     2014-05-23         
/// </summary>
module.exports = {
    //资源站点
    res: res_domain,
    //待定接口
    api_100: domain + "100",
    //获取签名
    getSign(obj = {}) {
        let { token } = user.methods.getUser()

        function sort(obj) {
            if (obj instanceof Array) {
                //如果数组里面存放的为对象,通过map更改数组结构，排序
                obj = obj.map((ele, index) => {
                    if (ele instanceof Object) {
                        var newObj = {}
                        Object.keys(ele).sort().forEach(function (key) {
                            var o = ele[key]
                            if (o instanceof Object) {
                                o = sort(o)
                            }
                            newObj[key] = o
                        })
                        ele = newObj
                    }
                    return ele
                })
                return obj
            }

            var newObj = {}
            //默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，
            //不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以
            Object.keys(obj).sort((s1, s2) => {
                let x1 = s1.toUpperCase()
                let x2 = s2.toUpperCase()
                if (x1 < x2) {
                    return -1
                }
                if (x1 > x2) {
                    return 1
                }
                return 0
            }).forEach(function (key) {
                var o = obj[key]
                if (o instanceof Object) {
                    o = sort(o)
                }
                newObj[key] = o
            })
            return newObj
        }

        const sign_data = {
            Data: obj,
            Global: {
                IMEI: "",
                IMSI: "",
                IP: "",
                OS: 3,
                Sign: "",
                Token: token
            }
        }

        return {
            Data: obj,
            Global: {
                IMEI: "",
                IMSI: "",
                IP: "",
                OS: 3,
                Sign: md5.md5(JSON.stringify(sort(sign_data)) + ')(4AzEdr5J6a`@#$*%'),
                Token: token
            }
        }
    },
    //请求对象
    post(url, data, cb, ch) {
        //加载框
        store.commit("loadingStatus", { isLoading: true })
        this.$ajax(url, {
            method: "post",
            data: data
        }).then(res => {
            if (res.data.Basis != undefined && res.data.Basis.State == 205) {
                this.$vux.toast.text(res.data.Basis.Msg, "default")
                router.push({ path: "/passport/login" })
            } else {
                cb(this, res)
            }
            store.commit("loadingStatus", { isLoading: false })
        }).catch(err => {
            console.log("错误来自于err" + err)
            if (ch != undefined) {
                ch(err)
            }
        })
    },
    //状态码
    state: {
        // 系统错误
        state_500: 500,
        // 响应成功 
        state_200: 200,
        // 验证通过 
        state_0: 0,
        // 验证未通过
        state_1: 1,
        // 用户未登陆
        state_30045: 30045
    }
}