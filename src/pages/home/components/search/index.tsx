import { useEffect, useState } from "react";

import IComponent from "src/@types";
import { ISearch } from "./types";

import { useDebounce } from "@hooks/debounce";

import SearchIcon from "@assets/icons/Vector.svg";
import { Input, Container, Image } from "./styles";

const TIME_INTERVAL = 500;

const Search: IComponent<ISearch> = ({ testId = "search-page", onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchTerm = useDebounce({
    value: searchValue,
    delay: TIME_INTERVAL,
  });

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Container data-testid={`${testId}-container`}>
      <Image src={SearchIcon} />

      <Input
        type="text"
        onChange={({ target }) => setSearchValue(target.value)}
        placeholder="Procure por heróis"
      />
    </Container>
  );
};

export { Search };
