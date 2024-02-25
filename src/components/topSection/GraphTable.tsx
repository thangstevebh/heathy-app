"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TitleOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

type GraphTableProps = {
  options: ChartOptions<"line">;
} & React.HTMLAttributes<HTMLDivElement>;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
);

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgba(143, 233, 208, 1)",
      backgroundColor: "rgba(143, 233, 208, 1)",
    },
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgba(255, 204, 33, 1)",
      backgroundColor: "rgba(255, 204, 33, 1)",
    },
  ],
};

export default function GraphTable({ ...props }: GraphTableProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Line options={props.options} data={data} />
    </div>
  );
}
