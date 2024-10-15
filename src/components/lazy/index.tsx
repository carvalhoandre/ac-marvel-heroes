import { FC, Suspense } from "react";

import { ILazyProps } from "./types";

import { Loading } from "@components/loading";

const Lazy: FC<ILazyProps> = ({ component: Component, children }) => {
  return (
    <Suspense fallback={<Loading isFullScreen />}>
      <Component>{children}</Component>
    </Suspense>
  );
};

export { Lazy };
