import React from "react"
import "./App.css"
import Home from "./components/Home"
import NavBarr from "./components/NavBarr"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailMusicPage from "./components/DetailMusicPage"

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <NavBarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailMusicPage />} />
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App
