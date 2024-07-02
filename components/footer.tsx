import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full h-14">
      <div className="container flex items-center sm:justify-center justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <p className="text-center">
          Built by
          <Link
            className="px-1 underline underline-offset-2"
            href="https://github.com/abhiroopc84"
          >
            abhiroopc
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
