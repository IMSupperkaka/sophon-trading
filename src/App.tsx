import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { routes, IRoute } from "./routes";

const buildRoutes = (routes: IRoute[]) =>
  routes.map((route) => (
    <Route path={route.path} element={route.component} key={route.path}>
      {route.childRoutes && buildRoutes(route.childRoutes)}
    </Route>
  ));

export default function App() {
  return (
    <Router>
      <Routes>{buildRoutes(routes)}</Routes>
    </Router>
  );
}
