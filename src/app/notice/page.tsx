import TopNoticeSection from "@/components/notice/TopNoticeSection";
import RepeatGridSection from "@/components/repeatSection/RepeatGripSection";

export default function Notice() {
  return (
    <div className="flex flex-col items-center justify-between p-0">
      <TopNoticeSection />
      <RepeatGridSection isShowContent={true} className="mt-16" />
    </div>
  );
}
