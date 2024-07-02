import Link from "next/link";
import EvervaultCard from "../swirl-ui/evervault-card";
import { Badge } from "../ui/badge";

const EvervaultCardExample = () => {
  return (
    <div
      className={`border bg-border mt-8 rounded-lg p-6 flex items-center justify-center`}
    >
      <div className="relative min-h-[500px] w-full bg-background box-content p-6 flex flex-col justify-start max-w-[350px] gap-4">
        <span className="absolute w-px h-px -left-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"></span>
        <span className="absolute w-px h-px -right-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"></span>
        <span className="absolute w-px h-px -right-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"></span>
        <span className="absolute w-px h-px -left-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"></span>
        <EvervaultCard>
          <span className="text-2xl font-bold">hover</span>
        </EvervaultCard>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            Hover over this card to reveal an effect. This is inspired from
            customer grid on the{" "}
            <Link href={"https://evervault.com/customers"}>
              Evervault website.
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Badge variant={"outline"}>Next.js</Badge><Badge variant={"outline"}>TailwindCSS</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

const EvervaultCardCode = () => (
  <section>
    ```tsx
    {`import EvervaultCard from "../swirl/evervault-card";

const EvervaultCardExample = () => {
  return (
    <div
      className="border bg-border mt-8 rounded-lg p-6 flex items-center justify-center"
    >
      <div className="relative min-h-[500px] bg-background box-content p-6 flex flex-col justify-between max-w-[350px]">
        <span className="absolute w-px h-px -left-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"></span>
        <span className="absolute w-px h-px -right-px -top-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-top-1"></span>
        <span className="absolute w-px h-px -right-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-right-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"></span>
        <span className="absolute w-px h-px -left-px -bottom-px before:bg-foreground before:absolute before:w-[9px] before:h-px before:block before:-left-1 after:bg-foreground after:absolute after:w-px after:h-[9px] after:block after:-bottom-1"></span>
        <EvervaultCard><>abcd</></EvervaultCard>
      </div>
    </div>
  );
};

export default EvervaultCardExample;`}
    ```
  </section>
);

export { EvervaultCardExample, EvervaultCardCode };
