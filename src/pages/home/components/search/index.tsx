import { useEffect } from "react";

import IComponent from "src/@types";
import { ISearch } from "./types";

import { useDebounce } from "@hooks/debounce";

import SearchIcon from "@assets/icons/Vector.svg";
import { Input, Container, Image } from "./styles";
import { useCharacterStore } from "@/store/characters";

const TIME_INTERVAL = 500;

const Search: IComponent<ISearch> = ({
  testId = "search-component",
  onSearch,
}) => {
  const { search, setSearch } = useCharacterStore();

  const debouncedSearch = useDebounce({
    value: search,
    delay: TIME_INTERVAL,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Container data-testid={`${testId}-container`}>
      <Image src={SearchIcon} data-testid={`${testId}-image`} />

      <Input
        type="text"
        value={search}
        data-testid={`${testId}-input`}
        placeholder="Procure por heróis"
        onChange={handleInputChange}
      />
    </Container>
  );
};

export { Search };
