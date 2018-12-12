using System;
using System.ComponentModel;

namespace DataStatisticsApi.Log
{
    /// <summary>
    /// 日志基础类
    /// </summary>
    [Serializable]
    public class BaseLog
    {
        public BaseLog()
        {
        }

        ///<summary>
        ///唯一标识符
        ///</summary>
        [Description("测试1")]
        public string test1
        {
            get; set;
        }
        ///<summary>
        ///请求时间
        ///</summary>
        [Description("测试2")]
        public string test2
        {
            get; set;
        }
    }
}
