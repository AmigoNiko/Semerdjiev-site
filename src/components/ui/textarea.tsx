import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-forest/20 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-forest-dark/40 dark:placeholder:text-cream/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terra disabled:cursor-not-allowed disabled:opacity-50 dark:border-cream/20",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
