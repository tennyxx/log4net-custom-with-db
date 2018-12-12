using System.IO;

using log4net.Core;
using log4net.Layout;
using log4net.Layout.Pattern;

namespace DataStatisticsApi.Log
{
    public class LogLayout : PatternLayout
    {
        public LogLayout(string pattern)
            : base(pattern)
        {

        }
        public override void ActivateOptions()
        {
            this.AddConverter("test1", typeof(test1Converter));

            this.AddConverter("test2", typeof(test2Converter));

            base.ActivateOptions();
        }
    }

    #region 转换
    internal sealed class test1Converter : PatternLayoutConverter
    {
        override protected void Convert(TextWriter writer, LoggingEvent loggingEvent)
        {
            BaseLog log = (BaseLog)loggingEvent.MessageObject;
            if (log != null)
                writer.Write(log.test1);
        }
    }

    internal sealed class test2Converter : PatternLayoutConverter
    {
        override protected void Convert(TextWriter writer, LoggingEvent loggingEvent)
        {
            BaseLog log = (BaseLog)loggingEvent.MessageObject;
            if (log != null)
                writer.Write(log.test2);
        }
    }

    #endregion


}
