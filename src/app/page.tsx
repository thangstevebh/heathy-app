import FilterButtonsSection from "@/components/filterButtons/FilterButtonsSection";
import RepeatGridSection from "@/components/repeatSection/RepeatGripSection";
import TopSection from "@/components/topSection/TopSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-0">
      <TopSection />
      <FilterButtonsSection />
      <RepeatGridSection />
    </div>
  );
}
