import React from "react";

import IComponent from "src/@types";
import { IImageProps } from "./types";

import { Img, Skeleton, Wrapper } from "./styles";

const Image: IComponent<IImageProps> = ({
  testId = "image-component",
  alt,
  src,
}) => {
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setShowSkeleton(false);

    const target = event.currentTarget;
    target.style.opacity = "1";
  };

  return (
    <Wrapper data-testid={testId}>
      {showSkeleton && <Skeleton />}

      <Img onLoad={handleLoad} alt={alt} src={src} loading="lazy" />
    </Wrapper>
  );
};

export { Image };
