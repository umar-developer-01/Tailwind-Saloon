import { useState } from 'react'
import NavBar from "./navBar";
import Slider from "./slider";
import Details from "./details";
import Banner from "./banner";
import Offer from "./offer";
import Office from "./office";
import './App.css'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Slider />
        <Details />
        <Banner />
        <Offer/>
        <Office/>
      </div>
    </>
  )
}

export default App
