import { Suspense } from "react";
import KontaktClient from "./KontaktClient";
import AfterMessageBlock from "../components/kontakt/AfterMessageBlock";
import Questions from "../components/Questions";
export default function Page() {
  return (
    <Suspense fallback={null}>
      <KontaktClient />
      <AfterMessageBlock></AfterMessageBlock>
      <Questions></Questions>
    </Suspense>
  );
}