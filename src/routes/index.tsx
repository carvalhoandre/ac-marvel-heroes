import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes as BrowserRouterRoutes,
} from "react-router-dom";

import { Lazy } from "@components/lazy";
import { Loading } from "@components/loading";
import { ErrorBoundary } from "@components/errorBoundary";

const Home = lazy(() => import("@pages/home"));
const CharacterProfile = lazy(() => import("@pages/characterProfile"));
const NotFound = lazy(() => import("@pages/notFound"));

const handleLoader = () => {
  return <Loading isFullScreen />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={handleLoader()}>
        <ErrorBoundary>
          <BrowserRouterRoutes>
            <Route
              path=""
              element={<Lazy component={Home} />}
              loader={handleLoader}
            />
            <Route
              path="/hero/:heroId"
              element={<Lazy component={CharacterProfile} />}
              loader={handleLoader}
            />
            <Route
              path="*"
              element={<Lazy component={NotFound} />}
              loader={handleLoader}
            />
          </BrowserRouterRoutes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
