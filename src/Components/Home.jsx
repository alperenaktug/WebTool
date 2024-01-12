import { Input, Space } from "antd";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Space direction="vertical" size="middle">
        <Space.Compact className="flex">
          <Input size="large" className="w-[600px]" placeholder="Search...." />
        </Space.Compact>
      </Space>
    </div>
  );
};

export default Home;
