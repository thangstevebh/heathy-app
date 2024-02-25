import { Badge } from "../common/svgs/Badge";
import FilterButtons from "./FilterButtons";
import { FolkKnife } from "../common/svgs/FolkKnife";

type FitlerButtonsSectionProps = React.HTMLAttributes<HTMLDivElement>;

export default function FilterButtonsSection({
  ...props
}: FitlerButtonsSectionProps) {
  const data = [
    { icon: <FolkKnife />, text: "Morning" },
    { icon: <FolkKnife />, text: "Lunch" },
    { icon: <FolkKnife />, text: "Dinner" },
    { icon: <Badge />, text: "Snack" },
  ];
  return (
    <div className="mx-auto my-2 w-[894px] h-[173px] flex justify-around items-center">
      {data.map((item: { icon: React.ReactNode; text: string }, index) => (
        <FilterButtons key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
}
