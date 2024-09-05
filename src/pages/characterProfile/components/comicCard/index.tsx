import IComponent from "src/@types";
import { IComicCard } from "./types";

import { formatDate } from "@helpers/date";
import { truncateString } from "@helpers/string";

import { ComicCardContainer, ComicImage, ComicInfo } from "./styles";

const ComicCard: IComponent<IComicCard> = ({
  testId = "comic-card",
  title,
  date,
  imageUrl,
  description,
  pages,
}) => {
  return (
    <ComicCardContainer data-testid={`${testId}-container`}>
      <ComicImage src={imageUrl} alt={title} data-testid={`${testId}-image`} />

      <ComicInfo data-testid={`${testId}-info`}>
        <div>
          <h3 data-testid={`${testId}-title`}>{title}</h3>

          <div className="meta" data-testid={`${testId}-meta`}>
            {formatDate(date)} - {pages} pages
          </div>
        </div>

        <p data-testid={`${testId}-description`}>
          {truncateString(description, 200)}
        </p>
      </ComicInfo>
    </ComicCardContainer>
  );
};

export { ComicCard };
