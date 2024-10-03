import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import TeamData from './components/TeamData'

function App() {

  return (
    <div className='w-full h-screen bg-zinc-900 text-[#FAF7F0]'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Featured/>
      <TeamData/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
