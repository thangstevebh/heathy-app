type FitlerButtonsProps = {
  icon: React.ReactNode;
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function FilterButtons({
  icon,
  text,
  ...props
}: FitlerButtonsProps) {
  return (
    <div
      style={{
        clipPath:
          "polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)",
      }}
      className="bg-gradient-to-tr from-primary-300 to-primary-400 w-[116px] h-[136px] flex flex-col justify-center items-center"
    >
      <div className="h-[56px] w-[56px] flex justify-center items-center">
        {icon}
      </div>
      <div className="text-white font-light text-xl">{text}</div>
    </div>
  );
}
