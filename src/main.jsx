import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import "./styles/styles.css";
import reportWebVitals from "./reportWebVitals.js";

import App from "./App.jsx";
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx'; // Make sure this import exists

// 1. Create root layout route
const rootRoute = createRootRoute({
  component: App,
});

// 2. Create child routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

// 3. Add child routes to root
const routeTree = rootRoute.addChildren([
  homeRoute,
  projectsRoute,
]);

// 4. Create router
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// 5. Mount app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

reportWebVitals();