import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import IComponent from "src/@types";
import { Comic } from "src/@types/comics";

import { useCharacterStore } from "@store/characters";

import { getComicsByCharacter, getCharacterById } from "@services/characters";

import ArrowLeft from "@assets/icons/left-arrow.svg";

import { Loading } from "@components/loading";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

import { HeroBanner, CharacterCard, ComicCard } from "./components";
import { ComicsContainer, Container, LeftIcon } from "./styles";

const CharacterProfile: IComponent = ({
  testId = "character-profile-page",
}) => {
  const { heroId } = useParams<{ heroId: string }>();
  const navigate = useNavigate();

  const { selectedCharacter, setselectedCharacter } = useCharacterStore();

  const [comics, setComics] = useState<Array<Comic>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacterAndComics = async (id: number) => {
    try {
      setLoading(true);
      setError(null);

      if (!selectedCharacter) {
        const characterResponse = await getCharacterById(id);
        setselectedCharacter(characterResponse.data.results[0]);
      }

      const comicsResponse = await getComicsByCharacter(id);
      setComics(comicsResponse.data.results);
    } catch (err) {
      console.error("Failed to fetch character or comics:", err);
      setError("Failed to load character or comics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (heroId) {
      fetchCharacterAndComics(parseInt(heroId));
    }
  }, [heroId]);

  if (error) return <p>{error}</p>;

  if (!selectedCharacter) return <p>Character not found</p>;

  const imageUrl = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

  if (loading) return <Loading isFullScreen />;

  return (
    <Container data-testid={`${testId}-container`}>
      <Header />

      <LeftIcon
        src={ArrowLeft}
        data-testid={`${testId}-back-icon`}
        alt="arrow left"
        onClick={() => {
          setselectedCharacter(null);
          navigate("/");
        }}
        loading="lazy"
      />

      <HeroBanner />

      <CharacterCard
        name={selectedCharacter.name}
        description={selectedCharacter.description}
        imageUrl={imageUrl}
      />

      <ComicsContainer>
        {comics?.length > 0 ? (
          comics.map((comic) => (
            <ComicCard
              key={comic.id}
              title={comic.title}
              description={comic.description}
              date={comic.dates[0].date}
              imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              pages={comic.pageCount}
              loading="lazy"
            />
          ))
        ) : (
          <p>
            Não há histórias em quadrinhos disponíveis para este personagem.
          </p>
        )}
      </ComicsContainer>

      <Footer />
    </Container>
  );
};

export default CharacterProfile;
