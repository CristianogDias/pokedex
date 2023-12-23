import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Header";
import { Suspense, lazy } from "react";

const PaginaInicial = lazy(() => import("pages/PaginaInicial"));
const PaginaErro = lazy(() => import("pages/PaginaErro"));


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Suspense>
        <Routes path="/">
          <Route index Component={PaginaInicial} />
          <Route path="*" Component={PaginaErro} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
