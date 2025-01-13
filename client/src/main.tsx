import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Organ from "./pages/Organ";
import Publications from "./pages/Publications";
import Media from "./pages/Media";
import Agenda from "./pages/Agenda";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/biografia" component={Biography} />
        <Route path="/proyectos/organo" component={Organ} />
        <Route path="/proyectos/publicaciones" component={Publications} />
        <Route path="/media" component={Media} />
        <Route path="/agenda/:year" component={Agenda} />
        <Route path="/contacto" component={Contact} />
        <Route>404 - Página no encontrada</Route>
      </Switch>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
