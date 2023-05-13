import Script from "next/script";
import React, { Suspense } from "react";
import { MainFooter } from "../sections/MainFooter";
import { MainHeader } from "../sections/MainHeader";
import Loading from "../../pages/loading";

export const AppTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainHeader />
      <Suspense>{children}</Suspense>
      <Script src="/scripts/tiny.slider.js" />
      <MainFooter />
    </div>
  );
};
