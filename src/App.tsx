import { Home } from "./pages/home";
import "./App.css";

import { Footer } from "@components/footer";
import { useCharacterStore } from "./store/characters";
import { CharacterProfile } from "./pages/characterProfile";

function App() {
  const { selectedCharacter } = useCharacterStore();

  return (
    <>
      {!!selectedCharacter ? <CharacterProfile /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
