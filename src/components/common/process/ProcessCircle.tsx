import React from "react";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct = 0 }: { colour: string; pct?: number }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"2.2px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      filter="url(#f1)"
    ></circle>
  );
};

const ProcessCircle = ({
  total,
  done,
  colour,
}: {
  total: number;
  done: number;
  colour: string;
}) => {
  const percentage = (done / total) * 100;
  const pct = Math.round(cleanPercentage(percentage));
  return (
    <div className="relative">
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle colour={colour} pct={pct} />
        </g>
        <defs>
          <filter id="f1">
            <feDropShadow
              dx="1"
              dy="-1"
              stdDeviation="2"
              floodOpacity="0.7"
              floodColor={"#FC7400"}
            />
          </filter>
        </defs>
      </svg>
      <div className="text-white text-[1.5em]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p
          style={{
            textShadow: "#FC7400 1px 0 10px",
          }}
        >
          <span className="text-sm font-light">
            {done}/{total}&nbsp;&nbsp;
          </span>
          {pct}%
        </p>
      </div>
    </div>
  );
};

export default ProcessCircle;
