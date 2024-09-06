import { Home } from "./pages/home";

import { Footer } from "@components/footer";
import { useCharacterStore } from "./store/characters";
import { CharacterProfile } from "./pages/characterProfile";

import { AppContainer } from "./styles";

const App = () => {
  const { selectedCharacter } = useCharacterStore();

  return (
    <AppContainer>
      {!!selectedCharacter ? <CharacterProfile /> : <Home />}

      <Footer />
    </AppContainer>
  );
};

export default App;
