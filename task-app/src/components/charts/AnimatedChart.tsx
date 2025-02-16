import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const getRandomNumber = (): number => Math.floor(Math.random() * 100) + 1;

const getData = (): Array<[number, number]> => [
  [0, 0], // Placeholder headers for typescript compliance
  ...Array.from({ length: 16 }, (): [number, number] => [getRandomNumber(), getRandomNumber()]),
];

const options = {
  title: "Company Performance",
  legend: { position: "bottom" },
  animation: {
    duration: 1000,
    easing: "out",
  },
  vAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
};

const AnimatedChart: React.FC = () => {
  const [chartData, setChartData] = useState(getData);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
      setYear((y) => y - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="100%"
        data={[["Age", "Weight"], ...chartData]}
        options={options}
      />
      <div style={{ width: "100%", textAlign: "center" }}>{year}</div>
    </>
  );
};

export default AnimatedChart;