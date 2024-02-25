"use client";

import useScrollPosition from "@/lib/hooks/useScrollPosition";
import { useEffect, useState } from "react";
import { ScrollButoon } from "../svgs/ScrollButton";

type ScrollToTopButtonProps = React.HTMLAttributes<HTMLDivElement>;

export default function ScrollToTopButton({
  ...props
}: ScrollToTopButtonProps) {
  const [isShow, setIsShow] = useState<boolean>(false);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  const handleScrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition > 80) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [isShow, scrollPosition]);
  return (
    <>
      {isShow && (
        <div
          onClick={handleScrollToTop}
          className="fixed right-[5%] bottom-[12.5%] h-14 w-14 flex justify-center items-center"
        >
          <ScrollButoon />
        </div>
      )}
    </>
  );
}
