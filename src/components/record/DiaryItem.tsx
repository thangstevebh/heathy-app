export type DiaryItemProps = {
  dateTime: Date;
  title: string;
  content: string;
} & React.HTMLAttributes<HTMLDivElement>;
export default function DiaryItem({ ...props }: DiaryItemProps) {
  return (
    <div className="w-[231px] h-[231px] border-[2px] border-[#707070]">
      <div className="p-4">
        <div className="font-light text-lg">
          <div>
            {`${props.dateTime.getFullYear()}.${("0" + (props.dateTime.getMonth() + 1)).slice(-2)}.${("0" + props.dateTime.getDate()).slice(-2)}`}
          </div>
          <div>
            {`${("0" + props.dateTime.getHours()).slice(-2)}:${("0" + props.dateTime.getMinutes()).slice(-2)}`}
          </div>
        </div>
        <div className="w-full h-[200px]">
          <p className="text-xs font-light">{props.title}</p>
          <p
            style={{
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-xs font-light"
          >
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}
