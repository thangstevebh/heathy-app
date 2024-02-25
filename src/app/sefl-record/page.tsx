import Diary from "@/components/record/Diary";
import Exercise from "@/components/record/Exercise";
import TopRecordSection from "@/components/record/TopRecordSection";
import GraphTable from "@/components/topSection/GraphTable";
import clsx from "clsx";

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

export default function SeflRecord() {
  const data = [
    {
      text: "日",
      isActive: false,
    },
    {
      text: "週",
      isActive: false,
    },
    {
      text: "月",
      isActive: false,
    },
    {
      text: "年",
      isActive: true,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between p-0 my-[56px] gap-14">
      <TopRecordSection />
      <div className="w-[960px] h-[304px] bg-dark-500">
        <div className="text-white flex px-8 py-4">
          <div className="flex flex-col text-start font-light">
            <span>BODY</span>
            <span>RECORD</span>
          </div>

          <span className="px-8 text-start text-xl font-light">2021.05.21</span>
        </div>
        <div className="w-[851px] h-[185px] mx-auto">
          <GraphTable options={options} />
        </div>
        <div className="flex gap-6 px-7 py-1">
          {data.map((item: { text: string; isActive: boolean }, index) => (
            <div
              key={index}
              className={clsx(
                {
                  "w-14 h-6 bg-light text-center text-[#FFCC21] rounded-full":
                    item.isActive === false,
                },
                {
                  "w-14 h-6 bg-[#FFCC21] text-center text-light rounded-full":
                    item.isActive === true,
                },
              )}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <Exercise />
      <Diary />
    </div>
  );
}
