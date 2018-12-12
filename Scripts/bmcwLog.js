var bmcw_log_disCode = "";//渠道编码
var dev = 0;//123
var bmcwLogCommon = {
    setCookie: function (name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 30);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getCookie: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
}
var bmcwLog = {

    bmcw_log_disCode: bmcw_log_disCode,
    bmcw_log_pathName:dev==0? window.location.pathname:"",
    bmcw_log_curUrl: window.location.href,
    bmcw_log_uniqueCode: "",
    Init: function () {
        bmcwLog.bmcw_log_uniqueCode = bmcwLog.getUniCode();//uv唯一码

    },
    getUniCode: function () {
        var sn = bmcwLogCommon.getCookie("bmcw-cookie-log-sn");
        //第一次访问或者清理过cookie，都重新写一个值来作为新user
        if (sn == null)
            sn = Date.parse(new Date()) + '|bmcw|' + Math.round(Math.random() * 100000);
        return sn;
    },
}

