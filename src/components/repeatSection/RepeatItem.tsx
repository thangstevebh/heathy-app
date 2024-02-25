type RepeatItemProps = {
  image: string;
  date: Date;
  dayPath: "Morning" | "Lunch" | "Dinner" | "Snack";
  isShowContent: boolean;
  content: string;
  hashTags: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function RepeatItem({
  isShowContent = false,
  ...props
}: RepeatItemProps) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-[234px] h-[234px] max-h-[234px] max-w-[234px] relative"
      >
        <div className="absolute left-0 bottom-0">
          <div className=" bg-primary-300 w-[120px] h-[32px] flex justify-center items-center">
            <div className="text-light">
              {("0" + (props.date.getMonth() + 1)).slice(-2)}.
              {("0" + props.date.getDate()).slice(-2)}.{props.dayPath}
            </div>
          </div>
          {isShowContent && (
            <div className="flex flex-col">
              <div
                style={{
                  maxWidth: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="bg-white font-light"
              >
                {props.content}
              </div>
              <div className="bg-white font-light">
                {props.hashTags.map((el: string, index) => (
                  <span
                    key={index}
                    className="text-sm text-[100] text-primary-400"
                  >{`#${el} `}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
