import { ChartOptions } from "chart.js";
import ProcessCircle from "../common/process/ProcessCircle";
import GraphTable from "./GraphTable";

type TopSectionProps = React.HTMLAttributes<HTMLDivElement>;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {},
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
        beginAtZero: true,

        color: "rgba(255, 255, 255, 0.5)",
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: true,
        display: true,
        color: "rgba(255, 255, 255, 0.5)",
      },

      border: {
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: false,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: true,
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

export default function TopSection({ ...props }: TopSectionProps) {
  const totalTasks = 21;
  const doneTasks = 15;
  return (
    <div className="w-screen h-[312px] bg-dark-600 grid grid-cols-[42.1875%_57.8125%] grid-rows-[100%]">
      <div className="bg-top-section bg-cover bg-center relative flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-[99.88%] bg-gradient-to-tr from-[#FF963C] to-[#FFCC21] mix-blend-soft-light"></div>

        <div className="scale-[150%]">
          <ProcessCircle total={totalTasks} done={doneTasks} colour="white" />
        </div>
      </div>
      <div className="px-12 py-3">
        <GraphTable options={options} />
      </div>
    </div>
  );
}
