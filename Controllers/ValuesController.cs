using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataStatisticsApi.Log;
using log4net;

namespace DataStatisticsApi.Controllers
{
    public class ValuesController : ApiController
    {
        //初始化自定义的日志类别 DataLogAdoAppenderLogger
        ILog logger = LogManager.GetLogger("DataLogAdoAppenderLogger");
        [HttpGet]
        // POST api/values
        public void TestLog()
        {
            var log = new BaseLog()
            {
                test1 = "test1111",
                test2 = "test2222"
            };

            if (logger.IsInfoEnabled)
                logger.Info(log);
        }
    }
}
