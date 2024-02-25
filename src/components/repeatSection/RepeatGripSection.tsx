import { faker } from "@faker-js/faker";
import RepeatItem from "./RepeatItem";
import clsx from "clsx";

type RepeatGridSectionProps = {
  isShowContent?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RepeatGridSection({
  isShowContent = false,
  ...props
}: RepeatGridSectionProps) {
  const data = [
    {
      image: "/assets/m01.jpg",
      date: faker.date.anytime(),
      dayPath: "Morning",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/l01.jpg",
      date: faker.date.anytime(),
      dayPath: "Lunch",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/d01.jpg",
      date: faker.date.anytime(),
      dayPath: "Dinner",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/l01.jpg",
      date: faker.date.anytime(),
      dayPath: "Snack",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/m02.jpg",
      date: faker.date.anytime(),
      dayPath: "Morning",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/l02.jpg",
      date: faker.date.anytime(),
      dayPath: "Lunch",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/d02.jpg",
      date: faker.date.anytime(),
      dayPath: "Dinner",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
    {
      image: "/assets/s01.jpg",
      date: faker.date.anytime(),
      dayPath: "Snack",
      content:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
      hashTags: ["魚料理", "和食", "DHA"],
    },
  ] as {
    image: string;
    date: Date;
    dayPath: "Morning" | "Lunch" | "Dinner" | "Snack";
    content: string;
    hashTags: string[];
  }[];

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center mb-16 gap-6",
        props.className,
      )}
    >
      <div className="mx-auto my-2 w-[960px]  grid grid-cols-4 gap-2">
        {data.map((item, index) => (
          <RepeatItem
            key={index}
            image={item.image}
            date={item.date}
            dayPath={item.dayPath}
            content={item.content}
            hashTags={item.hashTags}
            isShowContent={isShowContent}
          />
        ))}
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
