import { Posts } from "@/components/icons";
import { Body100 } from "@/components/shared";
import { InViewReveal } from "@/components/animations";

export function Blog() {
  return (
    <section className="flex flex-col items-center gap-1 py-4">
      <InViewReveal className="flex flex-col items-center">
        <div className="h-20 w-20">
          <Posts />
        </div>
        <Body100 className="mt-4 !text-xl">Whoops, no blogs yet</Body100>
      </InViewReveal>
    </section>
  );
}
