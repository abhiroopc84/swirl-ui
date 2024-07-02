"use client"

import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon, ParenthesesIcon, ToyBrick, CircleDashed } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { motion } from "framer-motion"

export const NAVLINKS = [
  {
    title: "Docs",
    href: `/docs/${page_routes[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="border-b border-violet-500 dark:border-violet-500 w-full h-14 sticky top-0 z-50 lg:px-2 px-3 backdrop-blur-sm bg-transparent overflow-hidden">
      <div className="sm:p-5 p-2 max-w-[1480px] mx-auto h-full flex items-center justify-between gap-2">
        <SheetLeftbar />
        <div className="flex items-center gap-6">
          <div className="md:flex hidden">
            <Logo />
          </div>
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
            {NAVLINKS.map((item) => {
              return (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-black dark:text-white font-semibold"
                  absolute
                  href={item.href}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <Search />
            <div className="flex -space-x-0.5">
              <Link
                href="https://github.com/abhiroopc84/swirl-ui"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://twitter.com/me_abhiroop"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <CircleDashed className="w-6 h-6 text-muted-foreground" />
      <h2 className="text-md font-bold">Swirl UI</h2>
    </Link>
  );
}
