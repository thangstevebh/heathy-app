"use client";
import Link from "next/link";
import { Challenge } from "../common/svgs/Challenge";
import { IconMenu } from "../common/svgs/IconMenu";
import { LegacyLogo } from "../common/svgs/LegacyLogo";
import { Memo } from "../common/svgs/Memo";
import { Todo } from "../common/svgs/Todo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { CloseIconMenu } from "../common/svgs/CloseIconMenu";
import { useState } from "react";

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

enum PathnameLink {
  HOME = "/",
  SEFL_RECORD = "/sefl-record",
  CHALLENGE = "/challenge",
  NOTICE = "/notice",
}

export default function Navbar({ ...props }: NavbarProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  const handleIsOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const menuData = [
    {
      content: "自分の記録",
      href: "/sefl-record",
    },
    {
      content: "体重グラフ",
      href: "/",
    },
    {
      content: "目標",
      href: "/",
    },
    {
      content: "選択中のコース",
      href: "/",
    },
    {
      content: "コラム一覧",
      href: "/",
    },
    {
      content: "設定",
      href: "/",
    },
  ];

  return (
    <div className="">
      <div className="relative bg-dark-500 px-[12.5%] h-[64px] w-screen flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center group cursor-pointer">
          <LegacyLogo width={140} height={40} className="p-2" />
        </Link>
        <div className="flex gap-10 select-none items-center">
          <Link
            href="/sefl-record"
            className={clsx("flex gap-2 items-center group cursor-pointer")}
          >
            <Todo />
            <span
              className={clsx(
                "text-light group-hover:!text-primary-400 font-light text-[16px]",
                {
                  "text-primary-400": pathname === PathnameLink.SEFL_RECORD,
                },
              )}
            >
              自分の記録
            </span>
          </Link>
          <Link
            href="/challenge"
            className="flex gap-2 items-center group cursor-pointer"
          >
            <Challenge />
            <span
              className={clsx(
                "text-light group-hover:!text-primary-400 font-light text-[16px]",

                {
                  "text-primary-400": pathname === PathnameLink.CHALLENGE,
                },
              )}
            >
              チャレンジ
            </span>
          </Link>
          <Link
            href="/notice"
            className="flex gap-2 items-center group cursor-pointer"
          >
            <Memo notiCount={10} />
            <span
              className={clsx(
                "text-light group-hover:!text-primary-400 font-light text-[16px]",

                {
                  "text-primary-400": pathname === PathnameLink.NOTICE,
                },
              )}
            >
              お知らせ
            </span>
          </Link>
          <div onClick={handleIsOpenMenu} className="cursor-pointer">
            <div className="relative inline-block text-left">
              <div>
                <button type="button" aria-expanded="true" aria-haspopup="true">
                  {!isOpenMenu ? <IconMenu /> : <CloseIconMenu />}
                </button>
              </div>

              {isOpenMenu && (
                <div
                  style={{
                    borderColor: "rgba(0, 0, 0, 0.2)",
                  }}
                  className="absolute right-0 z-20 mt-2 w-[280px] origin-top-right bg-[#777777] divide-y"
                  role="menu"
                  aria-rientation="vertical"
                  aria-abelledby="menu-button"
                >
                  {menuData.map(
                    (item: { content: string; href: string }, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-white block p-6 text-[16px] font-light"
                        role="menuitem"
                      >
                        {item.content}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
