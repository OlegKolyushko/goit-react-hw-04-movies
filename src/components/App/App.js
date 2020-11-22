import React, {Suspense, lazy} from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
// import HomePages from "../../views/HomePage";
// import MoviesPage from "../../views/MoviesPage";
// import MovieDetailsPage from "../MovieInfoPage/MovieInfoPage";
// import NotFound from "../../views/NotFound";
import routes from "../../routes";
import Loader from '../Loader/Loader';


const HomePage = lazy(() => import('../../views/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage'));
const NotFound = lazy(() => import('../../views/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
      <Switch>
        <Route path={routes.HomePage} exact component={HomePage} />
        <Route path={routes.MoviesPage} exact component={MoviesPage} />
        <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
