"use client";

import {
  ReactElement,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "next-themes";

const GridImage = ({ children }: { children: ReactElement }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex w-full h-full aspect-square justify-center items-center rounded-3xl relative cursor-pointer">
      {children}
      <div
        className="absolute top-0 left-0 h-full w-full rounded-3xl dark:mix-blend-darken mix-blend-lighten"
        style={{
          backgroundImage: `radial-gradient(${
            resolvedTheme === "light" ? "rgb(232,231,218)" : "rgb(23, 24, 37)"
          } 40%,rgb(102, 51, 238) 50%,rgb(142, 100, 255),rgb(249, 38, 114))`,
        }}
      ></div>
    </div>
  );
};

const GridText = ({
  children,
  position,
  divRef,
}: {
  children: ReactElement;
  position: { x: number; y: number };
  divRef: Ref<HTMLDivElement>;
}) => {
  const { resolvedTheme } = useTheme();
  return (
    <div
      ref={divRef}
      className="absolute hover:opacity-1 top-0 left-0 h-full w-full font-mono text-foreground text-wrap flex flex-col break-all text-xs rounded-3xl overflow-clip transition	delay-150 ease-in-out opacity-0"
      style={{
        WebkitMaskImage: `radial-gradient(350px circle at ${position.x}px ${
          position.y
        }px, ${
          resolvedTheme === "dark" ? "black" : "white"
        } 20%, rgba(0,0,0,0.25), transparent)`,
        maskImage: `radial-gradient(350px circle at ${position.x}px ${
          position.y
        }px, ${
          resolvedTheme === "dark" ? "black" : "white"
        } 20%, rgba(0,0,0,0.25), transparent)`,
      }}
    >
      {children}
    </div>
  );
};

const EvervaultCard = ({ children }: { children: ReactElement }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [randText, setRandText] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const setFromEvent = (e: MouseEvent) => {
      if (divRef.current) {
        if (
          e.clientX > divRef.current.getBoundingClientRect().left &&
          e.clientX < divRef.current.getBoundingClientRect().right &&
          e.clientY > divRef.current.getBoundingClientRect().top &&
          e.clientY < divRef.current.getBoundingClientRect().bottom
        ) {
          divRef.current.style.opacity = "100";
          setPosition({
            x: e.clientX - divRef.current.getBoundingClientRect().left,
            y: e.clientY - divRef.current.getBoundingClientRect().top,
          });
          setRandText(getRandomString(1500));
        } else {
          divRef.current.style.opacity = "0";
        }
      }
    };
    const getRandomString = (length: number) => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  if (!mounted) return null;

  return (
    <GridImage>
      <>
        <div className="z-10 fill-foreground text-foreground">{children}</div>
        <GridText divRef={divRef} position={position}>
          <>{randText}</>
        </GridText>
      </>
    </GridImage>
  );
};

export default EvervaultCard;
