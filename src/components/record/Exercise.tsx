import { chunk } from "lodash";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export type ExerciseProps = React.HTMLAttributes<HTMLDivElement>;

export default function Exercise({ ...props }: ExerciseProps) {
  const data = [];
  const item = {
    title: "家事全般（立位・軽い）",
    total: "26kcal",
    timeCount: "10 min",
  };

  for (let i = 0; i < 100; i++) {
    data.push(item);
  }

  const chunkData = chunk(data, 2);

  return (
    <div className="w-[960px] h-[304px] bg-dark-500">
      <div className="text-white flex px-8 py-4">
        <div className="flex flex-col text-start font-light">
          <span>MY</span>
          <span>EXERCISE</span>
        </div>

        <span className="px-8 text-start text-xl font-light">2021.05.21</span>
      </div>
      <ScrollArea className="h-[192px] w-full">
        <div className="p-4">
          {chunkData.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-6">
                {item.map((element, childindex) => (
                  <div key={childindex} className="pr-4">
                    <div className="flex justify-between px-4">
                      <div className="flex text-white gap-3">
                        <span className="font-light text-sm">●</span>
                        <div className="flex flex-col font-light">
                          <div className="text-[440]">{element.title}</div>
                          <div className="text-[500] font-light text-primary-300">
                            {element.total}
                          </div>
                        </div>
                      </div>
                      <div className="text-lg text-primary-300">
                        {element.timeCount}
                      </div>
                    </div>
                    <Separator className="m-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
