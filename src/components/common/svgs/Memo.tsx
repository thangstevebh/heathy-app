import clsx from "clsx";

export type MemoProps = {
  width?: number;
  height?: number;
  notiCount?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Memo = ({
  width = 26,
  height = 28,
  notiCount = 0,
  ...props
}: MemoProps) => {
  return (
    <div className={clsx("relative", props.className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 26 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5 22.2975H13.0722L5.07178 28V22.2975H0.5V0H25.5V22.2975H25.5ZM23.2142 2.27186H2.78577V20.0256H7.35755V23.5755L12.3374 20.0256H23.2142V2.27186ZM14.3634 10.391V16.9249H11.7335V10.391H14.3634ZM13.048 8.4314C13.9555 8.4314 14.6913 7.69983 14.6913 6.79798C14.6913 5.896 13.9555 5.16444 13.048 5.16444C12.1405 5.16444 11.4044 5.89601 11.4044 6.79798C11.4044 7.69984 12.1405 8.4314 13.048 8.4314Z"
          fill="#FF963C"
        />
      </svg>
      {notiCount > 1 && (
        <span className="absolute -top-1 -right-3 h-4 w-4 bg-primary-500 text-center align-baseline text-[10px] text-white font-[200] rounded-full">
          {notiCount}
        </span>
      )}
    </div>
  );
};
