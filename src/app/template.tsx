import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}
