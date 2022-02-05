import { Card } from "antd";
import MyLine from "../components/Dashboard/Myline";

function Dashboard() {
  return (
    <div>
      <Card title="看板">
        <MyLine />
      </Card>
    </div>
  );
}

export default Dashboard;
