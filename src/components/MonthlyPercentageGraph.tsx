import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
interface Indicator {
  id: number;
  colaboratorId: number;
  indicatorId: number;
  result: number;
  creationMonth: number;
  weight: number;
  unity: string;
  goal: number;
  superGoal: number;
  challenge: number;
}

interface DoughnutChartProps {
  chartData: {
    goal: number;
    superGoal: number;
    challenge: number;
    nothing: number;
    monthGrade: number;
    nothingIndicators: Indicator[];
    monthIndicators: Indicator[];
  };
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ chartData }) => {
  const [userData, setUserData] = useState({
    labels: ["Meta", "Supermeta", "Desafio", "Não alcançado"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ["#AC72C1", "#32B97C", "#6186D3", "#F16062"],
        hoverBackgroundColor: [
          "#AC72C1",
          "#32B97C",
          "#6186D3",
          "#F16062",
        ],
      },
    ],
  });

  useEffect(() => {
    setUserData({
      labels: ["Meta", "Supermeta", "Desafio", "Não alcançado"],
      datasets: [
        {
          data: [
            chartData.goal,
            chartData.superGoal,
            chartData.challenge,
            chartData.nothing,
          ],
          backgroundColor: ["#AC72C1", "#32B97C", "#6186D3", "#F16062"],
          hoverBackgroundColor: [
            "#AC72C1",
            "#32B97C",
            "#6186D3",
            "#F16062",
          ],
        },
      ],
    });
  }, [chartData]);

  return (
    <Doughnut
      data={userData}
      options={{
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 30,
              boxHeight: 7,
              borderRadius: 4,
              useBorderRadius: true,
            },
          },
        },
      }}
    />
  );
};

export default DoughnutChart;