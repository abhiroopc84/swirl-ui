import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <p className="text-3xl font-bold mb-4 sm:text-6xl">
        Craft Beautiful Interfaces Effortlessly
      </p>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Beautiful animated components built with Next.js, Typescript, Tailwind
        CSS, and Framer Motion.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href={"https://github.com/abhiroopc84/swirl-ui"}
          target="_"
          className={buttonVariants({
            className: "px-6",
            size: "lg",
            variant: "outline",
          })}
        >
          <Github className="mr-2 w-4 h-4" />
          GitHub
        </Link>
      </div>
    </div>
  );
}
