import { useEffect, useState } from "react";

import IComponent from "src/@types";
import { Comic } from "src/@types/comics";

import { useCharacterStore } from "@store/characters";

import { getComicsByCharacter } from "@services/characters";

import { Loading } from "@components/loading";
import { HeroBanner, CharacterCard, ComicCard } from "./components";
import { ComicsContainer } from "./styles";

const CharacterProfile: IComponent = ({
  testId = "character-profile-page",
}) => {
  const { selectedCharacter } = useCharacterStore();

  const [comics, setComics] = useState<Array<Comic>>([]);

  if (!selectedCharacter) return <></>;

  const imageUrl = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

  const handleFetchComics = async () => {
    const newComicsResponse = await getComicsByCharacter(selectedCharacter.id);

    setComics(newComicsResponse.data.results);
  };

  useEffect(() => {
    handleFetchComics();
  }, []);

  return (
    <div data-testid={`${testId}-container`}>
      <HeroBanner />

      <CharacterCard
        name={selectedCharacter.name}
        description={selectedCharacter.description}
        imageUrl={imageUrl}
      />

      <ComicsContainer>
        {comics.length > 0 ? (
          comics.map((comic) => (
            <ComicCard
              title={comic.title}
              description={comic.description}
              date={comic.dates[0].date}
              imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              pages={comic.pageCount}
            />
          ))
        ) : (
          <Loading />
        )}
      </ComicsContainer>
    </div>
  );
};

export { CharacterProfile };
