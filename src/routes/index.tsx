import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { Loading } from "@components/loading";

import { Home } from "@pages/home";
import { CharacterProfile } from "@pages/characterProfile";
import { NotFound } from "@pages/notFound";

const handleLoader = () => {
  return <Loading />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" element={<Home />} loader={handleLoader} />
        <Route
          path="/hero/:heroId"
          element={<CharacterProfile />}
          loader={handleLoader}
        />
        <Route path="*" element={<NotFound />} loader={handleLoader} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
