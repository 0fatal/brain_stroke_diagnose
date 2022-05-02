import QuickOperation from '@/components/QuickOperation/QuickOperation';
import { Line } from '@ant-design/charts';
import { Card, Space } from 'antd';
import IconRecordCount from './assets/icon_record_count.png';
import IconDeviceCount from './assets/icon_device_count.png';

const AnalysisPage = () => {
  const data = [
    { date: '05-01', value: 80 },
    { date: '05-02', value: 20 },
    { date: '05-03', value: 57 },
    { date: '05-04', value: 48 },
    { date: '05-05', value: 40 },
    { date: '05-06', value: 60 },
    { date: '05-07', value: 81 }
  ];
  const config = {
    data,
    xField: 'date',
    yField: 'value'
  };

  return (
    <div className="space-y-3">
      <QuickOperation />
      <Card title="系统概况">
        <div className="flex space-x-3">
          <div className="bg-[#FF7970] p-[15px] w-[340px] rounded-md flex items-center">
            <img src={IconRecordCount} />
            <div className="text-white ml-4">
              <h3 className="text-white">总诊断人次</h3>
              <h1 className="text-white text-[24px]">399 人</h1>
            </div>
          </div>

          <div className="bg-[#FFD344] p-[15px] w-[340px] rounded-md flex items-center">
            <img src={IconDeviceCount} />
            <div className="text-white  ml-4">
              <h3 className="text-white">设备数量</h3>
              <h1 className="text-white text-[24px]">5 台</h1>
            </div>
          </div>
        </div>
      </Card>
      <Card title="检测人次波动情况">
        <div className="flex flex-col items-center space-y-10">
          <Line {...config} className="w-full" />
          <div className="font-bold space-x-10">
            <span className="text-gray-500">按周</span>
            <span>按月</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnalysisPage;
