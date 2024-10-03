import './App.css'
import About from './components/About'
import Featured from './components/Featured'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-full h-screen bg-zinc-900 text-[#FAF7F0]'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Featured/>
    </div>
  )
}

export default App
