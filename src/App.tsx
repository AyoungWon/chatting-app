/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import Pages from "./pages";
import GlobalStyle from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Pages.Talks />}></Route>
            <Route path="/talks" element={<Pages.Talks />}></Route>
            {/* <Route path="/product/*" element={<Product />}></Route> */}
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
