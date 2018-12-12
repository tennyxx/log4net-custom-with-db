
using System;
using System.Collections.Generic;
using System.Text;

using log4net.Appender;
using System.Configuration;
using System.Collections.Specialized;
namespace DataStatisticsApi.Log
{
    /// <summary>
    /// Ö§³ÖÁ´½ÓÃû³Æ
    /// </summary>
    public class CustomAdoNetAppender : AdoNetAppender
    {
        /// <summary>
        /// Á¬½Ó×Ö·û´®Ãû³Æ
        /// </summary>
        public new string ConnectionStringName
        {
            set
            {
                this.ConnectionString = ConfigurationManager.ConnectionStrings[value].ConnectionString;
            }
        }

    }
}
