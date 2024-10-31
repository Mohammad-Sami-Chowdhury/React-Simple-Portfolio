import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Skill from './components/Skill/Skill'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skill></Skill>
      <About></About>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
