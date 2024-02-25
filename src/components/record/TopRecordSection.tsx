import TopRecordSectionItem, {
  ImageBackgroundPosition,
} from "./TopRecordSectionItem";

type TopRecordSectionProps = React.HTMLAttributes<HTMLDivElement>;

export default function TopRecordSection({ ...props }: TopRecordSectionProps) {
  const data = [
    {
      title: "BODY RECORD",
      description: "自分のカラダの記録",
      image: "/assets/MyRecommend-1.jpg",
      position: ["left", "center"],
    },
    {
      title: "MY EXERCISE",
      description: "自分の運動の記録",
      image: "/assets/MyRecommend-2.jpg",
      position: ["left", "center"],
    },
    {
      title: "MY DIARY",
      description: "自分の日記",
      image: "/assets/MyRecommend-3.jpg",
      position: ["center", "center"],
    },
  ] as {
    title: string;
    description: string;
    image: string;
    position: ImageBackgroundPosition[];
  }[];

  return (
    <div className="flex items-center justify-between p-0 gap-12">
      {data.map(
        (
          item: {
            title: string;
            description: string;
            image: string;
            position: ImageBackgroundPosition[];
          },
          index,
        ) => (
          <TopRecordSectionItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            position={item.position}
          />
        ),
      )}
    </div>
  );
}
