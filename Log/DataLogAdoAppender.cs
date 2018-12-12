
using System;

using log4net.Appender;
using System.Data;
using log4net.Layout;
namespace DataStatisticsApi.Log
{
    public class DataLogAdoAppender : CustomAdoNetAppender
    {
        public DataLogAdoAppender()
        {
            //System.Data.SqlClient
            Type t = typeof(System.Data.SqlClient.SqlConnection);
            string s = t.Assembly.FullName.ToString();
            //数据连接类型
            this.ConnectionType = $"System.Data.SqlClient.SqlConnection, {s}";

            base.UseTransactions = false;
            this.CommandType = CommandType.Text;
            //sql语句
            this.CommandText = @"INSERT INTO [dbo].[testLog]
                                       ([test1]
                                       ,[test2])
                                      
                                 VALUES
                                       (@test1
                                       ,@test2
                                       )";
            //填充参数
            string parameterName = "test1";
            this.AddParameter(new AdoNetAppenderParameter() { ParameterName = "@" + parameterName, DbType = DbType.String, Size = 50, Layout = new Layout2RawLayoutAdapter(new LogLayout("%" + parameterName)) });
            parameterName = "test2";
            this.AddParameter(new AdoNetAppenderParameter() { ParameterName = "@" + parameterName, DbType = DbType.String, Size = 200, Layout = new Layout2RawLayoutAdapter(new LogLayout("%" + parameterName)) });

            base.ActivateOptions();
        }
    }
}
