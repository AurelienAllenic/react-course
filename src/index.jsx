import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Result from './pages/Results'
import Freelances from './components/Freelances'
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`
root.render(
  <BrowserRouter>
  <GlobalStyle />
  <Header />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/survey/:questionNumber"element={<Survey />}></Route>
          <Route path="/result"element={<Result />}></Route>
          <Route path="/freelances"element={<Freelances />}></Route>
          <Route path="*"element={<Error />}></Route> 
      </Routes>
  </BrowserRouter>
)