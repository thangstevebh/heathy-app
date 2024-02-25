"use client";
import { useEffect, useRef, useState } from "react";

type FooterProps = React.HTMLAttributes<HTMLDivElement>;
export function Footer({ ...props }: FooterProps) {
  const data = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];

  return (
    <div className={props.className}>
      <div className="flex items-center gap-10 h-full text-light px-[12.5%]">
        {data.map((item, index) => (
          <span key={`footer-${index}`} className="font-light text-[11px]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
