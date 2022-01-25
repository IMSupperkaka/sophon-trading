import Main from "../layout/main";

import Landing from "../pages/landing";
import Home from "../pages/home";
import Services from "../pages/services";
import Occupation from "../pages/occupation";
import Opportunities from "../pages/opportunities";

export type IRoute = {
  path: string;
  component: React.ReactElement;
  childRoutes?: IRoute[];
  cacheKey?: string;
};

export const routes: IRoute[] = [
  {
    path: "/",
    component: <Main />,
    childRoutes: [
      { path: "/", component: <Landing /> },
      { path: "/home", component: <Home /> },
      { path: "/services", component: <Services /> },
      { path: "/occupation", component: <Occupation /> },
      { path: "/opportunities", component: <Opportunities /> },
    ],
  },
];
