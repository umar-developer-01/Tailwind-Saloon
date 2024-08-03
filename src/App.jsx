import { useState } from 'react'
import NavBar from "./navBar";
import Slider from "./slider";
import Details from "./details";
import Banner from "./banner";
import Offer from "./offer";
import Office from "./office";
import ContactUs from "./contactUs";
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
        <ContactUs/>
      </div>
    </>
  )
}

export default App
