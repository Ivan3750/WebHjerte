import { Suspense } from "react";
import KontaktClient from "./KontaktClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <KontaktClient />
    </Suspense>
  );
}