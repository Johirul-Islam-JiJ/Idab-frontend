import React from 'react'
import Nav from './Component/navbar/navbar'
import Home from './Component/home/home'
import About from './Component/about/about_idab'
import Member from './Component/members/members'
import Constitution from './Component/constitution/constitution'
import Event from './Component/events/events'
import Notice from './Component/notice/notice'
import Publication from './Component/publication/publication'
import Contact from './Component/contact/contact'
import Footer from './Component/footer/footer'
import Test from './Component/test_file/test'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Constitution" element={<Constitution />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Publication" element={<Publication />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App


