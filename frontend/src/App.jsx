import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ICAAAILandingPage from './components/LandingPage'
import About from './components/About'
import EthicsStatement from './components/EthicsStatement'
import Schedule from './components/Schedule'
import Conference from './components/Conference'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

// Separate Page Components
import Committees from './components/Committees'
import CallForPapers from './components/CallForPapers'
import Contact from './components/Contact'
import Register from './components/Register'

import './App.css'

// Home view wrapper component
const Home = ({ aboutTab, setAboutTab }) => {
  return (
    <>
      <ICAAAILandingPage setAboutTab={setAboutTab} />
      <About activeTab={aboutTab} setActiveTab={setAboutTab} />
      <EthicsStatement />
      <Schedule />
      <Conference />
      <Sponsors />
    </>
  )
}

function App() {
  const [aboutTab, setAboutTab] = useState("college");

  return (
    <Router>
      <Navbar setAboutTab={setAboutTab} />

      <Routes>
        <Route path="/" element={<Home aboutTab={aboutTab} setAboutTab={setAboutTab} />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
