import { faker } from "@faker-js/faker";
import DiaryItem from "./DiaryItem";

export type DiaryProps = React.HTMLAttributes<HTMLDivElement>;
export default function Diary({ ...props }: DiaryProps) {
  const data = [
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      dateTime: faker.date.anytime(),
      title: "私の日記の記録が一部表示されます。",
      content:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
  ];
  return (
    <div className="w-[960px] h-auto flex flex-col items-center gap-6">
      <div className="w-full h-full grid grid-cols-4 gap-3">
        {data.map(
          (item: { dateTime: Date; title: string; content: string }, index) => (
            <DiaryItem
              key={index}
              title={item.title}
              content={item.content}
              dateTime={item.dateTime}
            />
          ),
        )}
      </div>
      <div>
        <button
          className="w-[296px] h-[56px] text-light rounded-sm bg-gradient-to-tr from-primary-300 to-primary-400 "
          type="button"
        >
          記録をもっと見る
        </button>
      </div>
    </div>
  );
}
