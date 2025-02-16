import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import GeoChart from "../components/charts/GeoChart";
import AnimatedChart from "../components/charts/AnimatedChart";

const DashboardContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background: #f4f4f4;
  min-height: 100vh;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <h1>Dashboard</h1>
        <ChartContainer>
          <GeoChart />
        </ChartContainer>
        <ChartContainer>
          <AnimatedChart />
        </ChartContainer>

      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
