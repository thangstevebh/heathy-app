export type ImageBackgroundPosition =
  | "left"
  | "center"
  | "right"
  | "top"
  | "bottom";
export type TopRecordSectionItemProps = {
  title: string;
  description: string;
  image: string;
  position: ImageBackgroundPosition[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function TopRecordSectionItem({
  ...props
}: TopRecordSectionItemProps) {
  return (
    <div className="h-[288px] w-[288px] relative bg-dark-500 border-primary-300 border-[24px] flex justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: props.position.join(" "),
        }}
        className="h-[240px] w-[240px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity opacity-25"
      ></div>
      <div className="z-10 flex justify-center items-center flex-col gap-3">
        <div className="text-[#FFCC21] font-light text-2xl">{props.title}</div>
        <div className="w-[160px] h-[20px] bg-primary-400 text-center font-[220] text-sm text-white flex justify-center items-center">
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
}
