type TopNoticeSectionProps = React.HTMLAttributes<HTMLDivElement>;

export default function TopNoticeSection({ ...props }: TopNoticeSectionProps) {
  return (
    <div className="mt-14 w-[960px] h-[144px] flex gap-8">
      <div className="w-[261px] h-[144px] bg-dark-600 flex flex-col justify-center items-center gap-2">
        <div className="text-center text-primary-300 font-[300] text-2xl">
          <div>RECOMMENDED</div>
          <div>COLUMN</div>
        </div>
        <hr className="border-[1px] border-white w-14" />
        <div className="font-[300] text-lg text-white">オススメ</div>
      </div>
      <div className="w-[261px] h-[144px] bg-dark-600 flex flex-col justify-center items-center gap-2">
        <div className="text-center text-primary-300 font-[300] text-2xl">
          <div>RECOMMENDED</div>
          <div>DIET</div>
        </div>
        <hr className="border-[1px] border-white w-14" />
        <div className="font-[300] text-lg text-white">ダイエット</div>
      </div>
      <div className="w-[261px] h-[144px] bg-dark-600 flex flex-col justify-center items-center gap-2">
        <div className="text-center text-primary-300 font-[300] text-2xl">
          <div>RECOMMENDED</div>
          <div>BEAUTY</div>
        </div>
        <hr className="border-[1px] border-white w-14" />
        <div className="font-[300] text-lg text-white">美容</div>
      </div>
      <div className="w-[261px] h-[144px] bg-dark-600 flex flex-col justify-center items-center gap-2">
        <div className="text-center text-primary-300 font-[300] text-2xl">
          <div>RECOMMENDED</div>
          <div>HEALTH</div>
        </div>
        <hr className="border-[1px] border-white w-14" />
        <div className="font-[300] text-lg text-white">健康</div>
      </div>
    </div>
  );
}
