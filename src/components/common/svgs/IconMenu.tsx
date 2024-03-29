export type IconMenuProps = {
  width?: number;
  height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const IconMenu = ({
  width = 32,
  height = 32,
  ...props
}: IconMenuProps) => {
  return (
    <div className={props.className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
        <path d="M3 8H29" stroke="#FF963C" strokeWidth="3" />
        <path d="M3 16H29" stroke="#FF963C" strokeWidth="3" />
        <path d="M3 24H29" stroke="#FF963C" strokeWidth="3" />
      </svg>
    </div>
  );
};
