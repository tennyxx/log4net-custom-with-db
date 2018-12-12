/*!
 @Title: BmcwStatisticsScript
 @Description：斑马车务统计脚本 嵌入需要统计的页面
 @Author: liucx
 @Date：2018/12/7
 */
; var BmcwLog = (function (win, $) {
    /**
	 * 初始化方法
	 * @param {string} disCode 渠道编码
     * @param {string} sourceId 来源Id
     * @param {int32} isDev 是否开发环境
     * @param {int32} type  类别 1-H5  2-微信小程序 3-自己的App 4-嵌入合作方App
	 */
    var BmcwLog = function (disCode, sourceId, type, isDev) {
        return new BmcwLog.fn.init(disCode, sourceId, type, isDev);
    };
    BmcwLog.fn = BmcwLog.prototype = {
        constructor: BmcwLog,
        init: function (disCode, sourceId, type, isDev) {
            this.disCode = disCode;
            this.sourceId = sourceId;
            this.site = isDev == 1 ? "http://dev.banmachewu.com/statisticsapi/api/VisitData/LoggingData" : "http://m.banmachewu.com/statisticsapi/api/VisitData/LoggingData";
            var path = this.getPath(type);
            var url = this.getUrl(type);
            var code = this.getUniqueCode();
            this.record(path, url, code);
        },
        //请求接口方法
        record: function (path, url, code) {
            var data = {
                "DisCode": this.disCode,
                "SourceId": this.sourceId,
                "UrlPath": path,
                "Url": url,
                "UniqueCode": code
            };
            console.log(data);
            $.post(this.site, data, function () { });
        },
        getPath: function (type) {
            var path = "";
            switch (this.type) {
                case 1:
                    path = this.getH5Path();
                    break;
                case 2:
                    path = this.getWxMiniPath();
                    break;
                case 3:
                    path = this.getAppPath();
                    break;
                case 4:
                    path = this.getOtherAppPath();
                    break;
                default:
                    path = this.getH5Path();
                    break;
            }
            return path;
        },
        getUrl: function (type) {
            var url = "";
            switch (this.type) {
                case 1:
                    url = this.getH5Url();
                    break;
                case 2:
                    url = this.getWxMiniUrl();
                    break;
                case 3:
                    url = this.getAppUrl();
                    break;
                case 4:
                    url = this.getOtherAppUrl();
                    break;
                default:
                    url = this.getH5Url();
                    break;
            }
            return url;
        },
        getUniqueCode: function () {
            var key = "cookie-banman-log-sn";
            var sn = this.getCookie(key);
            //第一次访问或者清理过cookie，都重新写一个值来作为新user
            if (sn == null) {
                sn = this.guid();
                this.setCookie(key, sn);
            }
            return sn;
        },
        getH5Path: function () {
            return encodeURI(window.location.pathname);
        },
        getH5Url: function () {
            return encodeURI(window.location.href);
        },
        getWxMiniPath: function () {

        },
        getWxMiniUrl: function () {

        },
        getAppPath: function () {

        },
        getAppUrl: function () {

        },
        getOtherAppPath: function () {

        },
        getOtherAppUrl: function () {

        },
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
        },
        guid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    };
    BmcwLog.fn.init.prototype = BmcwLog.fn;
    return BmcwLog;
})(window, jQuery);

var log = BmcwLog('2010201809302313135435079', '101', 1, 1);